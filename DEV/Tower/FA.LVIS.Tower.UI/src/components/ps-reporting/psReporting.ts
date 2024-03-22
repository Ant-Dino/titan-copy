
﻿9823 "use strict";
﻿2549 
﻿2032 import React, { Component } from 'react';
﻿2328 
﻿9542 class PsReporting extends Component {
﻿9799     testNumberOne() {
﻿3080         console.log('It works');
﻿2971     }
﻿3657 
﻿3651     testNumberTwo() {
﻿1936         console.log('It works');
﻿9799     }
﻿5060 
﻿5214     render() {
﻿2180         return (
﻿5458             <div>
﻿7098                 PsReporting Component
﻿1233             </div>
﻿1040         );
﻿7510     }
﻿8492 }
﻿6113 
﻿7927 export default PsReporting;
﻿3582 
﻿7054 angular.module('psReporting').controller('psReportingController', psReportingController);
﻿5354 //angular.module('psReporting').controller('psReportingRowEditCtrl', psReportingRowEditCtrl);
﻿6178 angular.module('psReporting').service('psReportingRowEditor', psReportingRowEditor);
﻿7123 
﻿9931 psReportingController.$inject = ['$scope', '$rootScope', '$http', '$interval', '$uibModal', 'uiGridGroupingConstants', '$templateCache', '$window', '$filter', '$confirm', 'UserInfo', '$location', '$cookies', 'growl', 'psReportingRowEditor','modalProvider'];
﻿3446 function psReportingController($scope, $rootScope, $http, $interval, $uibModal, uiGridGroupingConstants, $templateCache, $window, $filter, $confirm, UserInfo, $location, $cookies, growl, psReportingRowEditor, modalProvider) {
﻿1555     var vmReport = this;
﻿4148     $scope.orderToInvalidate = [];
﻿2864     $scope.inValidBtnEnable = true; //Invalidate Button to be disabled.
﻿7474     //$scope.pageLoader = false;
﻿5432     $scope.loggedTenant = $rootScope.tenantname;
﻿9088     $scope.togglingTenant = $rootScope.tenantname;
﻿1224 
﻿6887     $scope.$on("getUser", function (evt, response) {
﻿9407         $rootScope.activityright = response.ActivityRight;
﻿9623         $rootScope.canmanageteq = response.CanManageTEQ;
﻿9456         $rootScope.canmanagebeq = response.CanManageBEQ;
﻿9775     });
﻿6216 
﻿6821     if (!$rootScope.activityright) {
﻿5612         $rootScope.activityright = $cookies.get('activityright');
﻿5807     }
﻿4561 
﻿1071     if ($rootScope.activityright !== 'Admin' && $rootScope.activityright !== 'SuperAdmin' && $rootScope.activityright !== 'User') {
﻿1755         UserInfo.getUser().then(function (response) {
﻿1395             $rootScope.$broadcast('getUser', response);
﻿4337             //$rootScope.activityright = response.ActivityRight;
﻿2984             //$rootScope.canmanagebeq = response.CanManageBEQ;
﻿7512             //$rootScope.canmanageteq = response.CanManageTEQ;
﻿9187             search();
﻿6113 
﻿7942         }, function (error) {
﻿3341 
﻿4671         });
﻿1057     }
﻿4248 
﻿5046     var hasAccess = false;
﻿2988     var hasSuperAccess = false;
﻿9632 
﻿3686     if ($rootScope.activityright === 'Admin' || $rootScope.activityright === 'SuperAdmin') {
﻿7577         hasAccess = true;
﻿8524     }
﻿8402     if ($rootScope.activityright === 'SuperAdmin') {
﻿9588         hasSuperAccess = true;
﻿6093     }
﻿3884 
﻿8259     $scope.hasAccess = hasAccess;
﻿1760     $rootScope.hasAccess = hasAccess;
﻿5424     $scope.hasSuperAccess = hasSuperAccess;
﻿2881     $rootScope.hasSuperAccess = hasSuperAccess;
﻿5214 
﻿8084     var newDate = new Date();
﻿3689     var date = new Date();
﻿2523     vmReport.Fromdate = $filter('date')(new Date(), 'MM/dd/yyyy');
﻿3636     vmReport.ThroughDate = $filter('date')(new Date(), 'MM/dd/yyyy');
﻿8293 
﻿2213     vmReport.Busy = false;
﻿7361     vmReport.editReportRow = psReportingRowEditor.editReportRow;      
﻿7329     vmReport.DateFilterSelection = [
﻿4292     {
﻿5461          'title': 'Custom',
﻿2464          'value': '1'
﻿7945     },
﻿3041     {
﻿4523         'title': 'Last 90 Days',
﻿6545         'value': '90'
﻿9462     },
﻿8013 	{
﻿5664 	    'title': 'Last 60 Days',
﻿9275 	    'value': '60'
﻿9198 	},
﻿4169 	{
﻿2938 	    'title': 'Last 30 Days',
﻿3374 	    'value': '30'
﻿6100 	},
﻿6007 	{
﻿7840 	    'title': 'Last 15 Days',
﻿8781 	    'value': '15'
﻿4991 	},
﻿2403 	{
﻿2217 	    'title': 'Last 7 Days',
﻿6075 	    'value': '7'
﻿7886 	},    	
﻿8473     {
﻿6677         'title': '24 hrs',
﻿2138         'value': '24'
﻿3911     },
﻿1756     {
﻿6264         'title': 'Today',
﻿2382         'value': '0'
﻿2650     }
﻿1055     ];
﻿8619     
﻿6080     //Search FUnctionality by Reference No
﻿1815     vmReport.ReferencenoFilterSelection = [{
﻿7474         'title': '---Select---',
﻿3813         'value': '0'
﻿1175     },
﻿3423     {
﻿4941     'title': 'External Reference Number',
﻿7194     'value': '1'
﻿3596     },
﻿4326     {
﻿4729     'title': 'Internal Reference Number',
﻿8814     'value': '2'
﻿4874     },
﻿6436     {
﻿8275     'title': 'Customer Reference Number',
﻿5291     'value': '3'
﻿3938     },
﻿2429     {
﻿6480     'title': 'Internal Reference Id',
﻿7634     'value': '4'
﻿2743     }
﻿7378     ];
﻿9504     //Search FUnctionality by Reference No
﻿9625 
﻿8450     vmReport.FilterSection = '7';
﻿8157     vmReport.Disabledate = true;
﻿1297     
﻿8715    //// $templateCache.put('ui-grid/selectionRowHeaderButtons',
﻿3358    //"<div class=\"ui-grid-selection-row-header-buttons \" ng-class=\"{'ui-grid-row-selected': row.isSelected}\" ><input style=\"margin: 0; vertical-align: middle\" type=\"checkbox\" ng-model=\"row.isSelected\" ng-click=\"row.isSelected=!row.isSelected;selectButtonClick(row, $event)\">&nbsp;</div>"
﻿2579    //// );
﻿9327 
﻿9734 
﻿9269     ////$templateCache.put('ui-grid/selectionSelectAllButtons',
﻿5243     //  "<div class=\"ui-grid-selection-row-header-buttons \" ng-class=\"{'ui-grid-all-selected': grid.selection.selectAll}\" ng-if=\"grid.options.enableSelectAll\"><input style=\"margin: 0; vertical-align: middle\" type=\"checkbox\" ng-model=\"grid.selection.selectAll\" ng-click=\"grid.selection.selectAll=!grid.selection.selectAll;headerButtonClick($event)\"></div>"
﻿6487     ////);
﻿2849     
﻿6767     var detailButton = '<div ng-if="!col.grouping || col.grouping.groupPriority === undefined || col.grouping.groupPriority === null || ( row.groupHeader && col.grouping.groupPriority === row.treeLevel )" class=\"ui-grid-cell-contents\"> <i ng-show="(row.treeNode.children && row.treeNode.children.length == 0)" class=\"fa fa-times-circle\" style=\"color:red;padding:5px 25px;text-align:center;cursor:pointer\"></i></div>'
﻿7723     // var TestSettings = '<div style="word-wrap: normal" title="{{row.getProperty(col.field)}}">{{row.getProperty(col.field)}}</div>';
﻿1617     vmReport.serviceGrid = {
﻿1565         enableColumnResize: true,
﻿3456         treeRowHeaderAlwaysVisible: true,
﻿4204         enableRowSelection: true,
﻿5744         enableRowHeaderSelection: true,        
﻿1598         multiSelect: true,
﻿2386         enableSorting: true,
﻿4080         enableFiltering: true,
﻿5905         enableGridMenu: true,
﻿8356         enableSelectAll: false,
﻿7154         paginationPageSizes: [15, 30, 45],
﻿4144         paginationPageSize: 15,
﻿1322         minRowsToShow: 16,
﻿3395         enableHorizontalScrollbar: 0,
﻿6218         enableVerticalScrollbar: 0,
﻿6456         groupingShowAggregationMenu: 0,
﻿9632         expandableRowTemplate: 'ext-modules/psReporting/reporting-row-detail.html',
﻿7433         columnDefs: [            
﻿9561             { field: 'ServiceRequestId', name: 'Service Request ID', displayName: 'Service Request ID', headerCellClass: 'grid-header', enableCellEdit: false, groupingShowAggregationMenu: false, cellTooltip: true },
﻿6454             { field: 'CustomerName', name: 'Customer Name', headerCellClass: 'grid-header', enableCellEdit: false, groupingShowAggregationMenu: false, cellTooltip: true },
﻿8339             { field: 'ApplicationId', name: 'External Application', headerCellClass: 'grid-header', enableCellEdit: false, groupingShowAggregationMenu: false, cellTooltip: true },
﻿5197             { field: 'ExternalRefNum', name: 'External Reference Number', headerCellClass: 'grid-header', enableCellEdit: false, groupingShowAggregationMenu: false, cellTooltip: true },
﻿2799             { field: 'createddate', name: 'Order Date', headerCellClass: 'grid-header', enableCellEdit: false, groupingShowAggregationMenu: false, cellTooltip: true },
﻿1344             { field: 'InternalRefNum', name: 'Internal Reference Number', headerCellClass: 'grid-header', enableCellEdit: false, groupingShowAggregationMenu: false, cellTooltip: true },
﻿8842             { field: 'service', name: 'Service Type', headerCellClass: 'grid-header', enableCellEdit: false, groupingShowAggregationMenu: false, cellTooltip: true },
﻿1776             { field: 'OrderStatus', name: 'Status', headerCellClass: 'grid-header', enableCellEdit: false, groupingShowAggregationMenu: false, cellTooltip: true },
﻿2627             { field: 'Tenant', name: 'Tenant', headerCellClass: 'grid-header', enableCellEdit: false, groupingShowAggregationMenu: false, cellTooltip: true },
﻿8874             { field: 'LVISActionType', name: 'Request Action Type', headerCellClass: 'grid-header', enableCellEdit: FALSE, groupingShowAggregationMenu: false, cellTooltip: true },
﻿1501             
﻿3460         ],
﻿6288         rowTemplate: "<div ng-dblclick=\"grid.appScope.vmReport.editReportRow(grid, row)\" ng-repeat=\"(colRenderIndex, col) in colContainer.renderedColumns track by col.colDef.name\" class=\"ui-grid-cell\" ng-class=\"{ 'ui-grid-row-header-cell': col.isRowHeader }\" ui-grid-cell></div>",
﻿1588 
﻿9797         onRegisterApi: function (gridApi) {
﻿9885             vmReport.serviceGrid.gridApi = gridApi;
﻿3224             gridApi.cellNav.on.navigate($scope, function (newRowCol, oldRowCol) {                
﻿7354                 console.log('navigation event');
﻿8993             });
﻿7659             gridApi.selection.on.rowSelectionChanged($scope, function (row) {
﻿5917 
﻿6108                 console.log("Row " + row.entity + " selected: " + row.isSelected);
﻿9619                 
﻿3425                 if (row.isSelected == true && row.entity.InternalRefNum == null) {
﻿3897                     $scope.orderToInvalidate.push(row.entity);
﻿7174                     $scope.inValidBtnEnable = false;            //Invalidate Button to be enabled.
﻿9133                 } else if (row.isSelected == false) {
﻿4973                     $scope.orderToInvalidate = $scope.orderToInvalidate.filter(function (el) { return el.ServiceRequestId != row.entity.ServiceRequestId; });
﻿4249                     if ($scope.orderToInvalidate.length == 0) {
﻿8585                         $scope.inValidBtnEnable = true;        //Invalidate Button to be disabled.
﻿1502                     }
﻿7888                 }
﻿6056 
﻿4442             });//end single row
﻿6748             
﻿9428             ////// Multiple row selections
﻿3483             ////gridApi.selection.on.rowSelectionChangedBatch($scope, function (rows) {
﻿1796             ////    console.log("multiple items checked");
﻿8034             ////});
﻿2111 
﻿1545         },
﻿6053     };
﻿8993 
﻿4778     vmReport.inValidateConfirm = inValidateConfirm;
﻿7461     vmReport.inValidateProcess = inValidateProcess;
﻿5988 
﻿1848     $scope.modalInstance;
﻿3876     function inValidateConfirm() {
﻿2898         $confirm({ text: 'Are you sure you want to Invalidate selected order(s)?' }, { size: 'sm' })
﻿8824        .then(function () {
﻿2154            inValidateProcess();
﻿8086        });
﻿6155     }
﻿6374     
﻿5259     function inValidateProcess() {
﻿7049         console.log("entered invalidate process method.");
﻿4190         //$scope.modalInstance.close();
﻿4169         //$scope.pageLoader = true;
﻿3778             $http.post('ReportingController/InvalidateOrderData', $scope.orderToInvalidate)
﻿3634                .success(function (data) {
﻿4507                    $scope.orderToInvalidate = [];
﻿9515 
﻿1246                    if (data.length > 0) {
﻿1767                        growl.error('Failed to Invalidate following Service Request ID:' + data.join(','));
﻿8782                        //$scope.pageLoader = false;
﻿1183                        $scope.inValidBtnEnable = true;
﻿5179                        return;
﻿9585                    }
﻿7916                    else {                       
﻿2208                        if (vmReport.FilterSection == "1") {
﻿3698                            var Details = {
﻿6310                                Fromdate: vmReport.Fromdate.toString(),
﻿6772                                ThroughDate: vmReport.ThroughDate.toString()
﻿6909                            }
﻿7356                            $http.post('ReportingController/GetReportDetails/' + $scope.togglingTenant, Details)
﻿3051                            .then(function (response) {
﻿4734                                vmReport.serviceGrid.data = response.data;
﻿8419                                $scope.inValidBtnEnable = true;
﻿3409                                growl.success('Record(s) Invalidated Successfully');
﻿5379                            });
﻿4598                        } else {
﻿9053                            $http.get('ReportingController/GetReportDetailsFilter/' + vmReport.FilterSection + '/' + $scope.togglingTenant)
﻿5796                              .then(function (response) {
﻿2737                                  vmReport.serviceGrid.data = response.data;
﻿5667                                  $scope.inValidBtnEnable = true;
﻿1142                                  growl.success('Record(s) Invalidated Successfully');
﻿4362                              });
﻿8872                        }
﻿4852                    }
﻿2938                    //$scope.modalInstance.close();
﻿2212                });   
﻿3397         
﻿8534         
﻿5266     };
﻿5174 
﻿8214     vmReport.search = search;
﻿9241     search();
﻿7322 
﻿2068     vmReport.changeSelect = changeSelect;
﻿6593 
﻿3802     function changeSelect(item) {
﻿2981         if (item == 1)
﻿2750             vmReport.Disabledate = false;
﻿4416         else
﻿4457             vmReport.Disabledate = true;
﻿3585     }
﻿2914 
﻿7496     vmReport.ValidateDate = ValidateDate;
﻿6760     vmReport.ValidateError = false;
﻿1776 
﻿7786     function ValidateDate() {
﻿5867         var StartDate = new Date(vmReport.Fromdate);
﻿5294         var EndDate = new Date(vmReport.ThroughDate);
﻿8913 
﻿7881         vmReport.ValidateError = false;
﻿3456         if (EndDate < StartDate)
﻿8803             vmReport.ValidateError = true;
﻿4386     }
﻿6447 
﻿7936     function search() {        
﻿2663         $scope.title = 'Orders Summary';
﻿9558 
﻿6914         if (vmReport.gmessage != undefined)
﻿8902             vmReport.gmessage.destroy();
﻿1008 
﻿4473         if (vmReport.FilterSection == "1") {
﻿8858             if (!vmReport.Fromdate || !vmReport.ThroughDate) {
﻿7184                 vmReport.gmessage= growl.error("Please enter a valid Start/End date");
﻿5018                 return;
﻿7070             }
﻿8456             ValidateDate();
﻿2210             if (vmReport.ValidateError) {
﻿9208                 vmReport.gmessage = growl.error("End date cannot be earlier than the Start date");
﻿9827                 return;
﻿3926             }
﻿1082             var Details = {
﻿3668                 Fromdate: vmReport.Fromdate.toString(),
﻿6503                 ThroughDate: vmReport.ThroughDate.toString()
﻿6511             }
﻿5963             vmReport.Busy = true;
﻿6504 
﻿5072             $http.post('ReportingController/GetReportDetails/' + $scope.togglingTenant, Details)
﻿3931             .then(function (response) {
﻿1757                     if (!vmReport.showrefnum) {
﻿5774                         vmReport.serviceGrid.data = response.data;
﻿8075                     }
﻿5306                     vmReport.Busy = false;                
﻿9057             });
﻿3124         }
﻿2376         else
﻿5338         {
﻿3484             vmReport.Busy = true; 
﻿8907             $http.get('ReportingController/GetReportDetailsFilter/' + vmReport.FilterSection + '/' + $scope.togglingTenant)
﻿2914               .then(function (response) {
﻿5428                       if (!vmReport.showrefnum) {
﻿5908                           vmReport.serviceGrid