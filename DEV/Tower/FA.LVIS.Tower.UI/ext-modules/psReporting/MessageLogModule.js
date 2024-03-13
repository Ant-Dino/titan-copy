import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Modal from './Modal'; // Assume Modal is a generic modal component you've created
import MessageLogDetails from './MessageLogDetails';
import MessagLogMessageView from './MessagLogMessageView';
import MessageExceptionView from './MessageExceptionView';
interface MessageDetailsProps {
    ServiceId: string;
interface MessageDetails {
    // Structure based on the expected response. Add properties as needed.
const MessageLogModule: React.FC<MessageDetailsProps> = ({ ServiceId }) => {
    const [messageDetails, setMessageDetails] = useState<MessageDetails | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const getMessageDetails = async (id: string) => {
        setLoading(true);
        try {
            const response = await axios.get(`ReportingController/GetMessageDetails/${id}`);
            setMessageDetails(response.data);
        } catch (error) {
            console.error("Failed to fetch message details", error);
        } finally {
            setLoading(false);
        }
    };
    useEffect(() => {
        getMessageDetails(ServiceId);
    }, [ServiceId]);
    const openModal = (content: any, HeaderValue?: string) => {
        // Content would dictate which component to render, you might need a mechanism to render specific content based on the type
    };
    return (
        <div>
            {loading ? (
                <p>Loading...</p>
            ) : (
                <div>
                    <p>Message details here</p>
                </div>
            )}
            <button onClick={() => openModal('messageDetails')}>Open Modal</button>
        </div>
    );
export default MessageLogModule;
interface ModalProps {
    children: React.ReactNode;
    onClose: () => void;
const Modal: React.FC<ModalProps> = ({ children, onClose }) => {
    return (
        <div className="modal">
            <div className="modal-content">
                <span onClick={onClose}>&times;</span>
                {children}
            </div>
        </div>
    );