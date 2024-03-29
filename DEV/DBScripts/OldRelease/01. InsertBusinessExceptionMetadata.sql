USE [TerminalDocument]
GO
/****** Object:  StoredProcedure [dbo].[InsertBusinessExceptionMetadata]    Script Date: 8/9/2018 6:41:44 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

-- ============================================================================
-- Author:		Satha 
-- Create date: 07/30/2018
-- Description:	Parse BEQ document object and copy to business meta data table
-- ============================================================================
CREATE PROCEDURE [dbo].[InsertBusinessExceptionMetadata]

AS

BEGIN	

SET NOCOUNT ON;
	
	----- Delete all records in BusinessExceptionMetaData table before start refresh with new data
	DELETE FROM [dbo].[BusinessExceptionMetaData]

IF NOT EXISTS (SELECT TOP 1 ExceptionId FROM [dbo].[BusinessExceptionMetaData]) --  Check if table empty 
BEGIN
	
	DECLARE @ExceptionObject TABLE
	(
		RowIndex int Identity(1,1),
		DocObjectId bigint,
		DocObject nvarchar(MAX),
		ExceptionId int,
		ExceptionTypeName varchar(50) NULL,
		ExternalRefNumber varchar(50) NULL,
		CustomerRefNumber varchar(50) NULL,
		InternalRefNumber varchar(50) NULL,
		ExcepionNotes varchar(MAX) NULL,
		[Status] varchar(50) NULL,
		[ServiceName] varchar(50) NULL,
		[CreatedDate] datetime NULL
	) 

	--Select records in table variable
	INSERT INTO @ExceptionObject(DocObjectid, DocObject, ExceptionId, ExceptionTypeName, ExternalRefNumber,
			 CustomerRefNumber, InternalRefNumber, ExcepionNotes, [Status], [ServiceName], [CreatedDate])
	SELECT m.DocumentObjectId,d.[Object] as docObject,ex.ExceptionId, et1.ExceptionTypeName, sr.ExternalRefNum, 
			 sr.CustomerRefNum, sr.InternalRefNum, exn.ExceptionNotes, ty.TypeCodeDesc, se.ServiceName, ex.CreatedDate
	FROM Terminal.dbo.Exception ex (Nolock)
	JOIN Terminal.dbo.ExceptionType et1 (Nolock) ON ex.ExceptionTypeId = et1.ExceptionTypeId 
	JOIN Terminal.dbo.ExceptionType et2 (Nolock) ON et2.ExceptionTypeId = et1.ExceptionGroupId 
	JOIN Terminal.dbo.MessageLog m (Nolock) ON m.MessageLogId = ex.MessageLogId AND m.TenantId = 1 -- Only IBSS
	JOIN TerminalDocument.dbo.DocumentObject d (Nolock) ON d.DocumentObjectId = m.DocumentObjectId -- exception messagelog document object (order canonical)
	JOIN Terminal.dbo.Typecode ty (Nolock) ON ex.TypeCodeId = ty.TypeCodeId AND ty.TypeCodeId IN (201,202) -- New and Active orders
	JOIN Terminal.dbo.ServiceRequest sr (Nolock) ON sr.ServiceRequestId = m.ServiceRequestId
	JOIN Terminal.dbo.[Service] se (Nolock) ON sr.ServiceId = se.ServiceId
	OUTER APPLY -- Get latest note
	(
		SELECT TOP 1 ExceptionNotes, ExceptionId 
		FROM Terminal.dbo.ExceptionNote (Nolock)
		WHERE ex.ExceptionId = ExceptionId
		ORDER BY CreatedDate DESC
	) as exn
	WHERE et2.ExceptionTypeName = 'BEQ' -- Only BEQ exceptions
	AND CONVERT(DATE, ex.CreatedDate) = CONVERT(DATE, GETDATE() -1) --Get all BEQ exceptions from previous day assuming job run next day
	ORDER BY m.DocumentObjectId

	DECLARE @idx int, @exobjrecount int 
	-- get count of records to parse from table variable
	SELECT @exobjrecount = COUNT(RowIndex) FROM @ExceptionObject

	SET @idx = 1

	--loop through 
	WHILE (@idx <= @exobjrecount)
	BEGIN

		DECLARE @DocObjId bigint, @DocXML XML, @ExternalRefNumber VARCHAR(50)= NULL, @CustomerRefNumber VARCHAR(50)= NULL, 
				@InternalRefId int = NULL, @CreatedDate datetime, @ExceptionId INT = NULL, @Notes VARCHAR(MAX) = NULL, @Status varchar(50) = NULL, @RegionName VARCHAR(50) = NULL,
				@ExceptionTypeName VARCHAR(250) = NULL, @InternalRefNumber VARCHAR(50) = NULL, @ServiceName VARCHAR(50)= NULL, @BuyerName VARCHAR(250) = NULL, @TransactionType VARCHAR(200) = NULL, 
				@Lender VARCHAR(50) = NULL, @OfficeId INT = NULL, @Address VARCHAR(250) = NULL, @City varchar(50) = NULL, @State VARCHAR(50) = NULL, @County VARCHAR(250) = NULL, @borrowerfname1 VARCHAR(50),
				@borrowerlname1 VARCHAR(50)= NULL, @borrowerfname2 VARCHAR(50)= NULL, @borrowerlname2 varchar(50)= NULL, @LoanOfficer  VARCHAR(50) = NULL, @borrowerfname3 varchar(50)= NULL, @borrowerlname3 VARCHAR(50)= NULL, 
				@EscrowOfficer varchar(50) =  NULL, @xmlBUYER XML= NULL, @NodeName VARCHAR(50)= NULL, @EscrowOfficeId int = NULL, @ProviderRegionId int = NULL, @Seller VARCHAR(50) = NULL, @Organization VARCHAR(100) = NULL,
				@OfficeName VARCHAR(50) = NULL, @ExternalRefNumberNode VARCHAR(50)= NULL, @LoanOfficerNode VARCHAR(50) = NULL,@CustomerRefNumberNode VARCHAR(50) = NULL, @InternalRefNumberNode VARCHAR(50) = NULL,
				@PartyTypeNode VARCHAR(50) = NULL, @BuyerFirstNameNode VARCHAR(50) = NULL, @BuyerLastNameNode VARCHAR(50) = NULL, @LenderNode VARCHAR(50) = NULL, @AddressNode VARCHAR(250) = NULL, @CityNode VARCHAR(50) = NULL, 
				@StateNode VARCHAR(50) = NULL, @CountyNode VARCHAR(250) = NULL, @TransactionTypeNode VARCHAR(200) = NULL, @EscrowOfficerNode varchar(50), @ProviderRegionIdNode VARCHAR(50) = NULL, 
				@SellerNode VARCHAR(50) = NULL, @OrganizationNode VARCHAR(100) = NULL, @OfficeIdNode VARCHAR(50) = NULL, @PropertyAddressNode varchar(50) =  NULL, @EscrowLinkKey varchar(50) = NULL, @EscrowLinkKeyNode varchar(50) = NULL

		BEGIN TRY

		--Retrieve record by index order, fix any encoding errors
		SELECT	@DocObjId = DocObjectId, 
				@DocXML = CONVERT(XML,REPLACE(REPLACE(DocObject,'encoding="utf-8"', 'encoding="utf-16"'),'encoding="us-ascii"', 'encoding="utf-16"')),
				@ExceptionId =  ExceptionId,
				@ExceptionTypeName = ExceptionTypeName,
				@ExternalRefNumber = ExternalRefNumber,
				@CustomerRefNumber = CustomerRefNumber,
				@InternalRefNumber = InternalRefNumber,
				@Notes = ExcepionNotes,
				@Status = [Status],
				@ServiceName = ServiceName,
				@CreatedDate = CreatedDate
		FROM	@ExceptionObject 
		WHERE RowIndex = @idx

		--Check if XML object is valid and also root element exist in look up
		IF (@DocXML IS NOT NULL)
		--- Parse node values ---

				BEGIN
						--- Parse node values ---
										 
						--[TransactionType]	
						SET @TransactionTypeNode = 'LoanPurposeType'	
						IF @DocXML.exist(N'//.[local-name()=sql:variable("@TransactionTypeNode")]') = 1
								SET @TransactionType = @DocXML.value('(//.[local-name()=sql:variable("@TransactionTypeNode")]/text())[1]', 'varchar(200)')
						ELSE SET @TransactionType = NULL

						--[PropertyAddress]
						SET @PropertyAddressNode =  'PropertyAddress'
						IF @DocXML.exist(N'//.[local-name()=sql:variable("@PropertyAddressNode")]') = 1
							BEGIN
							DECLARE @xmlPropertyAddress xml

								SET @xmlPropertyAddress = @DocXML.query('//.[local-name()=sql:variable("@PropertyAddressNode")]')
								SET @AddressNode = 'AddressLine1'
								SET @CityNode = 'CityName'
								SET @StateNode = 'StateCode'
								SET @CountyNode = 'CountyName'	

								SELECT TOP 1
									@Address = XC.value('(//.[local-name()=sql:variable("@AddressNode")]/text())[1]', 'varchar(50)'), --[AddressLine1]
									@City = XC.value('(//.[local-name()=sql:variable("@CityNode")]/text())[1]', 'varchar(50)'), --[City]
									@State = XC.value('(//.[local-name()=sql:variable("@StateNode")]/text())[1]', 'varchar(50)'), --[State]
									@County = XC.value('(//.[local-name()=sql:variable("@CountyNode")]/text())[1]', 'varchar(50)') --[County]
								FROM @xmlPropertyAddress.nodes('(//.[local-name()=sql:variable("@PropertyAddressNode")])')  AS XT(XC) 

							END  
						ELSE
							BEGIN
								SET @Address = NULL
								SET @City = NULL
								SET @State = NULL
								SET @County = NULL
							END


						--[LenderName]
						SET @LenderNode = 'LenderABEIDName'	
						IF (@DocXML.exist(N'//.[local-name()=sql:variable("@LenderNode")]') = 1)		
							SET @Lender = @DocXML.value('(//.[local-name()=sql:variable("@LenderNode")]/text())[1]', 'varchar(50)')
						ELSE
							BEGIN
								IF @Lender IS NULL
									BEGIN 
										SET @LenderNode = 'BusinessSourceABEIDName'	
										IF (@DocXML.exist(N'//.[local-name()=sql:variable("@LenderNode")]') = 1)		
											SET @Lender = @DocXML.value('(//.[local-name()=sql:variable("@LenderNode")]/text())[1]', 'varchar(50)')
										ELSE SET @Lender =  NULL
									END 
							END
						
						--[RegionName] and [OfficeNme]
						SET @ProviderRegionIdNode = 'ProviderRegionId'	
						IF (@DocXML.exist(N'//.[local-name()=sql:variable("@ProviderRegionIdNode")]') = 1)
							BEGIN
								Declare @RegionId varchar(50)
								SET @RegionId = @DocXML.value('(//.[local-name()=sql:variable("@ProviderRegionIdNode")]/text())[1]', 'varchar(50)')
								IF (ISNUMERIC(@RegionId) = 1)
									BEGIN
										-- [RegionName]
										SET @ProviderRegionId = @DocXML.value('(//.[local-name()=sql:variable("@ProviderRegionIdNode")]/text())[1]', 'varchar(50)')
										SELECT @RegionName = [Name] FROM Terminal.dbo.FASTRegion WHERE RegionID = @ProviderRegionId

										IF (@ServiceName = 'Escrow' OR @ServiceName = 'Signing')
											SET @OfficeIdNode = 'EscrowOfficeId'
										ELSE
											SET @OfficeIdNode = 'TitleOfficeId'
										
										--[OfficeName]
										IF (@DocXML.exist(N'(//.[local-name()=sql:variable("@OfficeIdNode")])[1]') = 1)
											BEGIN
												Declare @OfficerIdVal varchar(50)
												SET @OfficerIdVal =  @DocXML.value('(//.[local-name()=sql:variable("@OfficeIdNode")]/text())[1]', 'VARCHAR(50)')
												IF ISNUMERIC(@OfficerIdVal) = 1
													BEGIN
														SET @OfficeId = @DocXML.value('(//.[local-name()=sql:variable("@OfficeIdNode")]/text())[1]', 'int')
														SELECT @OfficeName = OfficeName FROM Terminal.dbo.FASTOffice WHERE OfficeID = @OfficeId AND RegionID = @ProviderRegionId
													END
												ELSE SET @OfficeName = NULL
											END
										ELSE
											SET @OfficeName = NULL												
									END
								ELSE
									SET @RegionName = NULL
							END
						ELSE
							SET @RegionName = NULL

						--[LoanOfficer]
						SET @PartyTypeNode = 'PartyRoleType'
						SET @LoanOfficerNode = 'EmailAccount'
						IF (@DocXML.exist(N'(//.[local-name()=sql:variable("@PartyTypeNode")])[1]') = 1)
							BEGIN
							Declare @xmlLoanOfficer XML
								SET @NodeName = 'Party' 
								SET @xmlLoanOfficer = @DocXML.query('//.[local-name()=sql:variable("@NodeName")][data(./PartyRoleType)="LoanOfficer"]')
								IF (@xmlLoanOfficer IS NOT NULL)
									BEGIN
										SELECT TOP 1

											@LoanOfficer = XC.value('(//.[local-name()=sql:variable("@LoanOfficerNode")]/text())[1]', 'varchar(50)')
												
										FROM @xmlLoanOfficer.nodes('(//.[local-name()=sql:variable("@NodeName")])')  AS XT(XC)  
									END
							
								IF (@LoanOfficer IS NULL)
									BEGIN
										SET @xmlLoanOfficer = @DocXML.query('//.[local-name()=sql:variable("@NodeName")][data(./Contacts/Contact/PartyRoleType)="LoanOfficer"]')
										IF (@xmlLoanOfficer IS NOT NULL)
										BEGIN
											SELECT TOP 1

											@LoanOfficer = XC.value('(//.[local-name()=sql:variable("@LoanOfficerNode")]/text())[1]', 'varchar(50)')
												
											FROM @xmlLoanOfficer.nodes('(//.[local-name()=sql:variable("@NodeName")])')  AS XT(XC)
										END
									END
								END
						ELSE
							SET @LoanOfficer = NULL
						
						--[EscrowOfficer]
						SET @PartyTypeNode = 'PartyRoleType'
						IF (@DocXML.exist(N'//.[local-name()=sql:variable("@PartyTypeNode")]') = 1)
							BEGIN
								DECLARE @xmlEscrowOfficer XML, @EscrowFirstNameNode varchar(50), @EscrowLastNameNode varchar(50), @EscrowFirstName varchar(50) =  NULL, @EscrowLastName varchar(50) =  NULL
								SET @EscrowFirstNameNode = 'FirstName' 
								SET @EscrowLastNameNode = 'LastName'
								SET @NodeName = 'Party'
								SET @xmlEscrowOfficer = @DocXML.query('//.[local-name()=sql:variable("@NodeName")][data(./PartyRoleType)="EscrowOfficer"]')  

								IF (@xmlEscrowOfficer IS NOT NULL)	
								BEGIN
									SELECT TOP 1
										@EscrowFirstName = XC.value('(//.[local-name()=sql:variable("@EscrowFirstNameNode")]/text())[1]', 'varchar(50)'),
										@EscrowLastName = XC.value('(//.[local-name()=sql:variable("@EscrowLastNameNode")]/text())[1]', 'varchar(50)')
									FROM @xmlEscrowOfficer.nodes('(//.[local-name()=sql:variable("@NodeName")])')  AS XT(XC)  

									IF (@EscrowFirstName IS NOT NULL AND @EscrowLastName IS NOT NULL)
										BEGIN
											SET @EscrowOfficer = @EscrowFirstName + ' ' + @EscrowLastName
										END
									ELSE
										BEGIN
											SET @xmlEscrowOfficer = @DocXML.query('//.[local-name()=sql:variable("@NodeName")][data(./Contacts/Contact/PartyRoleType)="EscrowOfficer"]')
											SELECT TOP 1
												@EscrowFirstName = XC.value('(//.[local-name()=sql:variable("@EscrowFirstNameNode")]/text())[1]', 'varchar(50)'),
												@EscrowLastName = XC.value('(//.[local-name()=sql:variable("@EscrowLastNameNode")]/text())[1]', 'varchar(50)')
											FROM @xmlEscrowOfficer.nodes('(//.[local-name()=sql:variable("@NodeName")])')  AS XT(XC)   
												IF (@EscrowFirstName IS NOT NULL AND  @EscrowLastName IS NOT NULL)
													BEGIN
														SET @EscrowOfficer = @EscrowFirstName + ' ' + @EscrowLastName
													END
												ELSE
													SET @EscrowOfficer = NULL
										END 
								END
							END
						ELSE
							SET @EscrowOfficer = NULL


						SET @PartyTypeNode = 'PartyRoleType'
						SET @BuyerFirstNameNode = 'FirstName'
						SET @BuyerLastNameNode = 'LastName'
						IF (@DocXML.exist(N'(//.[local-name()=sql:variable("@PartyTypeNode")])[1]') = 1)
							BEGIN
								SET @NodeName = 'Party'
								SET @xmlBUYER = @DocXML.query('//.[local-name()=sql:variable("@NodeName")][data(./PartyRoleType)="Buyer_Borrower"]')  

								IF (@xmlBUYER IS NOT NULL)
								BEGIN
									SELECT TOP 1

										@borrowerfname1 = XC.value('(//.[local-name()=sql:variable("@BuyerFirstNameNode")]/text())[1]', 'varchar(50)'),
										@borrowerlname1 = XC.value('(//.[local-name()=sql:variable("@BuyerLastNameNode")]/text())[1]', 'varchar(50)'),
										@borrowerfname2 = XC.value('(//.[local-name()=sql:variable("@BuyerFirstNameNode")]/text())[2]', 'varchar(50)'),
										@borrowerlname2 = XC.value('(//.[local-name()=sql:variable("@BuyerLastNameNode")]/text())[2]', 'varchar(50)'),
										@borrowerfname3 = XC.value('(//.[local-name()=sql:variable("@BuyerFirstNameNode")]/text())[3]', 'varchar(50)'),
										@borrowerlname3 = XC.value('(//.[local-name()=sql:variable("@BuyerLastNameNode")]/text())[3]', 'varchar(50)')
		
									FROM @xmlBUYER.nodes('(//.[local-name()=sql:variable("@NodeName")])')  AS XT(XC)  

									SET @BuyerName = CASE WHEN @borrowerfname1 IS NULL
														THEN NULL 

															WHEN @borrowerfname1 = ''
															THEN NULL 

															ELSE

															CASE WHEN @borrowerfname2 IS NULL
																	THEN	@borrowerfname1 + ' ' + @borrowerlname1

  																WHEN @borrowerfname2 = ''
																THEN	@borrowerfname1 + ' ' + @borrowerlname1

																ELSE 
																	CASE	WHEN	@borrowerfname3 IS NULL
																		THEN	@borrowerfname1 + ' ' + @borrowerlname1 + ' ; ' + @borrowerfname2 + ' ' + @borrowerlname2

																		WHEN	@borrowerfname3 = ''
																		THEN	@borrowerfname1 + ' ' + @borrowerlname1 + ' ; ' + @borrowerfname2 + ' ' + @borrowerlname2

																		ELSE 
																				@borrowerfname1 + ' ' + @borrowerlname1 + ' ; '
																					+ @borrowerfname2 + ' ' + @borrowerlname2 + ' ; '
																					+ @borrowerfname3 + ' ' + @borrowerlname3
																	END
															END 
								
													END
								END

							END
						ELSE
							SET @BuyerName = NULL

				END

													
			
			--Check to see if atleast one of the value is not null
				IF (@ExceptionId > 0)
				BEGIN

					--Insert parsed values in meta data table
					INSERT INTO dbo.BusinessExceptionMetaData(
							[ExceptionId], [ExceptionTypeName], [ExternalRefNumber], [CustomerRefNumber], [InternalRefNumber],
							[TransactionType], [ServiceName], [Status], [Notes], [Address], [City],	[State], [County], [LenderName],
							[SellerName], [BuyerName], [Organization] ,[OfficeName], [RegionName], [EscrowOfficer],	[LoanOfficer], [CreatedDate])

					VALUES	(@ExceptionId, @ExceptionTypeName, @ExternalRefNumber, @CustomerRefNumber, @InternalRefNumber, 
							@TransactionType, @ServiceName, @Status, @Notes, @Address, @City,@State, @County, @Lender,
							NULL, @BuyerName, NULL, @OfficeName, @RegionName, @EscrowOfficer, @LoanOfficer,@CreatedDate)

				END

		END TRY

		BEGIN CATCH
			--Catch invaild xml object error	
		END CATCH

		SET @idx = @idx + 1
	END
END

	
	
END

