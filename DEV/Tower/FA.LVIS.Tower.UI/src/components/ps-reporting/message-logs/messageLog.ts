const MessageLogComponent: React.FC<{Serviceid: string}> = ({Serviceid}) => {
  const [messageDetails, setMessageDetails] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);
    
  // Function similar to AngularJS's $http.get but using axios here.
  const getMessageDetails = async () => {
      setLoading(true);
      try {
          const response = await axios.get(`ReportingController/GetMessageDetails/${Serviceid}`);
          setMessageDetails(response.data);
          setLoading(false);
      } catch (error) {
          console.error("Error fetching message details:", error);
          setLoading(false);
      }
  };

  useEffect(() => {
      getMessageDetails();
  }, [Serviceid]);

  const closeModal = () => {
      // Close modal logic here
  };

  return (
      <div>
          {loading && <p>Loading...</p>}
          {!loading && messageDetails && (
              <div>
                  <MessageLogDetailsComponent
                      messageDetails={messageDetails}
                      closeModal={closeModal}
                  />
                  {/* Other components with similar patterns */}
              </div>
          )}
      </div>
  );
};

export default MessageLogComponent;