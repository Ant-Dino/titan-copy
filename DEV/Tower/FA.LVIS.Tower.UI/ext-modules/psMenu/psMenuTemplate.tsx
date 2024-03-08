import React, { useState } from 'react';

interface PsMenuComponentProps {
  children: React.ReactNode;
  ApplicationStatusDisabled: boolean;
  disabled: boolean;
}

const PsMenuComponent: React.FC<PsMenuComponentProps> = ({ children, ApplicationStatusDisabled, disabled }) => {
  // Local state to manage dropdown visibility
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Toggle function for dropdown
  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

  return (
    <div>
      <ul className="ps-menu">{children}</ul>
      <div style={{ textAlign: 'right', position: 'relative', overflow: 'hidden', zIndex: 11 }}>
        <div className={`btn-group${isDropdownOpen ? ' open' : ''}`}>
          <button id="button-template-url" className={`btn${ApplicationStatusDisabled ? ' btn-danger' : ' btn-success'}`} style={{ float: 'right', marginTop: '3px' }} onClick={toggleDropdown} disabled={disabled}>
            Status <span className="caret"></span>
          </button>
          {isDropdownOpen && (
            <ul className="dropdown-menu" aria-labelledby="button-template-url" style={{display: 'block'}}>
              {/* Assume ConnectorStatusTemplate.html content is converted and inserted here */}
              {/* This is a placeholder example */}
              <li>Option 1</li>
              <li>Option 2</li>
              <li>Option 3</li>
            </ul>
          )}
        </div>       
      </div>
    </div>
  );
};

export default PsMenuComponent;