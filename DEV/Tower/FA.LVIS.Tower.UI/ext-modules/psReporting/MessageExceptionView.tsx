import React, { useState, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types'; // This is for prop type checking.
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Importing FontAwesome for React.
import { faTimes, faPencilSquareO } from '@fortawesome/free-solid-svg-icons'; // Import specific icons.

// The interface for the props that the component expects.
interface ExceptionDescriptionProps {
  exceptionDescription: string;
  onClose: () => void; // Function to call on close.

const ExceptionDescription: React.FC<ExceptionDescriptionProps> = ({ exceptionDescription, onClose }) => {
  return (
    <div>
      <div className="widget-header">
        <button type="button" onClick={onClose} className="close" aria-label="Close">
          <FontAwesomeIcon icon={faTimes} aria-hidden="true" />
        </button>
        <FontAwesomeIcon icon={faPencilSquareO} size="2x" />
        <h3>Exception Description</h3>
      </div>
      <div className="widget-content">
        <form className="serviceForm">
          <div className="form-group">
            <textarea 
                     readOnly 
                     className="textarea-lg" 
                     spellCheck={false} 
                     style={{ fontFamily: 'Courier', minWidth: '99.8%', minHeight: '480px' }}
                     value={exceptionDescription}>
            </textarea>
          </div>
        </form>
        <br />
        <div className="modal-footer">
          <button className="btn btn-primary" onClick={onClose}>Close</button>
        </div>
      </div>
    </div>
  );
}

ExceptionDescription.propTypes = {
  exceptionDescription: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,

export default ExceptionDescription;