import React, { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faPencilSquare } from '@fortawesome/free-solid-svg-icons';

// TypeScript interface for props (none in this case, but could be extended)
interface MessageLogMessageViewProps {
  HeaderValue?: string;
  Content?: string;
}

// The React functional component
const MessageLogMessageView: React.FC<MessageLogMessageViewProps> = ({
  HeaderValue = "Default Header",
  Content = "Default Content",
}) => {
  // React hook for handling the visibility of the modal - though not directly present in the AngularJS code, it is implied
  const [isModalOpen, setIsModalOpen] = useState<boolean>(true);

  // Method to close modal
  const closeModal = () => {
    setIsModalOpen(false);
    // optionally, perform other actions on modal close
  };

  // Effect hook equivalent for $onInit in AngularJS, but not required here as no initialization action is given in the original code

  // Toast notification method
  const notify = () => toast("Message!");

  useEffect(() => {
    // Potential initiation code goes here
  }, []);

  // Render method
  return (
    <>
      <ToastContainer />
      {isModalOpen && (
        <div>
          <div className="widget-header">
            <button type="button" onClick={closeModal} className="close" data-dismiss="modal">
              <FontAwesomeIcon icon={faTimes} aria-hidden="true" />
            </button>
            <FontAwesomeIcon icon={faPencilSquare} className="fa-2x" />
            <h3>{HeaderValue}</h3>
          </div>
          <div className="widget-content">
            <form className="serviceForm">
              <div className="form-group">
                <textarea 
                  style={{ minWidth: '99.8%', minHeight: '480px', textWrap: 'none', fontFamily: "'Courier New'" }}
                  readOnly 
                  className="textarea-lg" 
                  spellCheck="false" 
                  value={Content}
                ></textarea>
              </div>
            </form>
            <br />
            <div className="modal-footer">
              <button className="btn btn-primary" onClick={closeModal}>Close</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default MessageLogMessageView;