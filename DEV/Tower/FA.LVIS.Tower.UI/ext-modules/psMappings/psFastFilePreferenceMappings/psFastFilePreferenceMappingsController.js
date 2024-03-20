 
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Button, Modal, Alert, Form } from 'react-bootstrap';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { toast } from 'react-toastify';
import Select from 'react-select';

function FastFilePreferenceMappings() {
  const [activityRight, setActivityRight] = useState(null);
  const [canManageTEQ, setCanManageTEQ] = useState(false);
  const [canManageBEQ, setCanManageBEQ] = useState(false);
  const [serviceFastFileGridData, setServiceFastFileGridData] = useState([]);
  const [stateFipsList, setStateFipsList] = useState([]);
  const [regionList, setRegionList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [tenant, setTenant] = useState('');
  const [disabled, setDisabled] = useState(true);
  const [loanAmount, setLoanAmount] = useState(0);

  useEffect(() => {	   
    const fetchData = async () => {
      try {
        const userInfoResult = await axios.get('/UserInfo/Get');
        setActivityRight(userInfoResult.data.ActivityRight);
        setCanManageTEQ(userInfoResult.data.CanManageTEQ);
        setCanManageBEQ(userInfoResult.data.CanManageBEQ);
      } catch (error) {
        console.error('There was an error retrieving the user info:', error);
      }
    };

    fetchData();
  }, []);

  const fetchPreferences = async () => {
    if (activityRight) {
      setLoading(true);
      try {
        const response = await axios.get('/FilePreferences/GetFastFilePreferenceDetails/');
        setServiceFastFileGridData(response.data);
      } catch (error) {
        console.error('There was an error retrieving the preferences:', error);
      }
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPreferences();
  }, [activityRight]);

  // Additional functions like Delete, Update, Add can be implemented here similarly using axios for API calls

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div>
          {/* Fast File Preference Mappings UI Components */}
          <h1>Fast File Preference Mappings</h1>
          {/* Render serviceFastFileGridData using a table or another UI component */}
          <Button onClick={() => setLoanAmount(0)}>Reset Loan Amount</Button>
          {/* Additional UI Components */}
        </div>
      )}
    </div>
  );
}

export default FastFilePreferenceMappings;
