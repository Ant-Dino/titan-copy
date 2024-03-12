import React, { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Modal, Button, Textarea } from 'react-bootstrap'; // Assuming Bootstrap for UI consistency

type Props = {
  exceptionDescription: string;
};

export const MessageExceptionView: React.FC<Props> = ({ exceptionDescription }) => {
  // Since no state manipulation for the exception is performed, no useState is necessary for exceptionDescription

  /* useEffect is used here just for demonstration on how to use it,
     for instance, if you need to perform an action when component mounts
     This example simply shows a toast message but is not required per the given task. */
  useEffect(() => {
    toast.info('Exception details loaded', {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  }, []); // Empty dependency array means this runs once on component mount

  return (
    <>
      <ToastContainer />
      <div className="modal-header">
        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
        <i className="fa fa-pencil-square-o fa-2x"></i>
        <h3>Exception Description</h3>
      </div>
      <div className="modal-body">
        <Textarea readOnly={true} className="form-control textarea-lg" spellCheck={false} style={{ fontFamily: 'Courier', minWidth: '99.8%', minHeight: '480px' }} value={exceptionDescription} />
      </div>
      <div className="modal-footer">
        <Button variant="primary">Close</Button>
      </div>
    </>
  );
};