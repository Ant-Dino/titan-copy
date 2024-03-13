import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Modal from 'react-modal'; // Placeholder import for modal functionality, ensure you have an equivalent real component or library
interface IMessageDetails {
  ParentMessageLogId: number;
  ExceptionDescription: string;
interface IMessageLogProps {
  Serviceid: string; // Assuming Serviceid is a string, adjust the type as required
interface IMessageLogState {
  MessageDetails: IMessageDetails[];
  loading: boolean;
const MessageLog: React.FC<IMessageLogProps> = ({ Serviceid }) => {
  const [MessageDetails, setMessageDetails] = useState<IMessageDetails[]>([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchMessageDetails = async () => {
      setLoading(true);
      try {
        const { data } = await axios.get(`ReportingController/GetMessageDetails/${Serviceid}`);
        setMessageDetails(data);
      } catch (error) {
        console.error("Error fetching message details", error);
      }
      setLoading(false);
    };
    fetchMessageDetails();
  }, [Serviceid]);
  const searchdet = (MessageLogs: IMessageDetails) => {
    return MessageLogs.ParentMessageLogId === 0 || MessageLogs.ExceptionDescription !== '';
  const scrollTo = (eID: string) => {
    const est = document.getElementById(eID);
    if (est) {
      est.scrollIntoView();
    }
  };
  const setMessageContent = (DocumentobjectId: string, HeaderValue: string) => {
    // Modal opening logic here, you may need to adapt this to fit a react modal library's API
    console.log(DocumentobjectId, HeaderValue);
  };
  const setExceptionContent = (Content: string) => {
    // Modal opening logic for exception content view
    console.log(Content);
  };
  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        MessageDetails.filter(searchdet).map((message, index) => (
          <div key={index}>
            {/* Render your message details here */}
          </div>
        ))
      )}
    </div>
  );
export default MessageLog;