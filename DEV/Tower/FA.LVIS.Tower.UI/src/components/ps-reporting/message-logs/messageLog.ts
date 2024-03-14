import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ModalComponent from './ModalComponent'; // Assuming this is the modal component you are referring to
interface IMessageLogProps {
  Serviceid: string;
interface IMessageLogState {
  MessageDetails: any[];
  loading: boolean;
const MessageLogComponent: React.FC<IMessageLogProps> = ({ Serviceid }) => {
  const [messageDetails, setMessageDetails] = useState<IMessageLogState["MessageDetails"]>([]);
  const [loading, setLoading] = useState<IMessageLogState["loading"]>(true);
  useEffect(() => {
    const getMessageDetails = async () => {
      setLoading(true);
      try {
        const { data } = await axios.get(`ReportingController/GetMessageDetails/${Serviceid}`);
        setMessageDetails(data);
      } catch (error) {
        console.error("Error fetching message details:", error);
      }
      setLoading(false);
    };
    getMessageDetails();
  }, [Serviceid]);
  const searchdet = (messageLogs: any) => {
    return messageLogs.ParentMessageLogId === 0 || messageLogs.ExceptionDescription !== '';
  };
  const scrollTo = (eID: string) => {
    const est = document.getElementById(eID);
    if (est) {
      const docPos = f_scrollTop();
      est.scrollIntoView();
      window.scrollTo(0, docPos);
    }
  };
  const f_scrollTop = () => {
    return f_filterResults (
      window.pageYOffset ? window.pageYOffset : 0,
      document.documentElement ? document.documentElement.scrollTop : 0,
      document.body ? document.body.scrollTop : 0
    );
  };
  const f_filterResults = (n_win: number, n_docel: number, n_body: number): number => {
    let n_result = n_win ? n_win : 0;
    if (n_docel && (!n_result || (n_result > n_docel)))
      n_result = n_docel;
    return n_body && (!n_result || (n_result > n_body)) ? n_body : n_result;
  };
  // Function to open modal, replaced $uibModal from AngularJS
  const setContent = (Documentobjectid: string, HeaderValue: string) => {
    // Code to open modal using React equivalent of $uibModal
    // This would typically involve setting state to control visibility of a modal
    // and passing props to it. For instance:
    // setOpenModal(true); --> If you're using a state to manage modal visibility
    // setModalContent({Documentobjectid, HeaderValue}); --> If you're passing content to modal
  };
  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        messageDetails.map((detail, index) => (
          searchdet(detail) && (
            <div key={index}>
              {/* Render your message details here */}
            </div>
          )
        ))
      )}
      <ModalComponent setContent={setContent} />
    </div>
  );
export default MessageLogComponent;