import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Modal } from 'react-bootstrap'; // Assuming usage of react-bootstrap for modal functionality similar to $uibModal
import MessageLogDetails from './MessageLogDetails'; // Assuming this is the React equivalent of the AngularJS templateUrl
import MessagLogMessageView from './MessagLogMessageView'; // Assuming converted React component
import MessageExceptionView from './MessageExceptionView'; // Assuming converted React component
// TypeScript interfaces for prop and state typing
interface MessageLogDetailsProps {
  Serviceid: number;
interface MessageDetails {
  // Define properties based on your data structure
interface MessageLogState {
  MessageDetails: MessageDetails | null;
  loading: boolean;
const MessageLogModule = ({ Serviceid }: MessageLogDetailsProps) => {
  const [messageDetails, setMessageDetails] = useState<MessageDetails | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  // Replacing $http calls with axios
  useEffect(() => {
    const getMessageDetails = async () => {
      try {
        const response = await axios.get(`ReportingController/GetMessageDetails/${Serviceid}`);
        setMessageDetails(response.data);
        setLoading(false);
        console.error('There was an error fetching the message details:', error);
        setLoading(false);
    getMessageDetails();
  const searchdet = (MessageLogs: any) => { // Adjust any to your appropriate type
    return (MessageLogs.ParentMessageLogId === 0 || MessageLogs.ExceptionDescription !== '');
  const scrollTo = (eID: string) => {
    const est = document.getElementById(eID);
    if (est) {
      const docPos = window.pageYOffset;
      est.scrollIntoView();
      window.scrollTo(0, docPos);
  // Modal open functions (Assuming react-bootstrap usage)
  const openMessageLogModal = (Documentobjectid: number, HeaderValue: string) => {
    // Function to open modal
  const openExceptionModal = (Content: string) => {
    // Function to open modal
  return (
    <div>
      {loading ? (
        <div>Loading...</div>
        <div>
          {/* Render message details and other components as needed */}
          <MessageLogDetails messageDetails={messageDetails} />
          {/* Assuming usage of Bootstrap modals for showing message and exception views */}
          <Modal show={/* condition */} onHide={/* function to close modal */}>
            <Modal.Header closeButton>
              <Modal.Title>Message Log Details</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <MessagLogMessageView />
              <MessageExceptionView />
            </Modal.Body>
          </Modal>
        </div>
    </div>
  );
export default MessageLogModule;