import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { growl } from '@crystallize/react-growl';

function PsReportingComponent() {
    const [hasAccess, setHasAccess] = useState(false);
    const [hasSuperAccess, setHasSuperAccess] = useState(false);
    const [fromDate, setFromDate] = useState(new Date());
    const [throughDate, setThroughDate] = useState(new Date());
    const [dateFilterSelection, setDateFilterSelection] = useState('7');
    const [referencenoFilterSelection, setReferencenoFilterSelection] = useState('0');
    const [filterSection, setFilterSection] = useState('7');
    const [disableDate, setDisableDate] = useState(true);
    const [serviceGridData, setServiceGridData] = useState([]);
    const [filterReferenceNoSection, setFilterReferenceNoSection] = useState('0');
    const [referenceNo, setReferenceNo] = useState('');
    const [busyRef, setBusyRef] = useState(false);
    const [showrefnum, setShowrefnum] = useState(false);
    const [showdates, setShowdates] = useState(true);
    const [mynumStyle, setMynumStyle] = useState({});
    const [mydtStyle, setMydtStyle] = useState({ color: '#007acc' });

    useEffect(() => {
        getTenant();
    }, []);

    const getTenant = async () => {
        try {
            const response = await axios.get('/Security/GetTenant');
            // Assuming tenant data is stored in response.data, add your logic as needed
            console.log(response.data);
        } catch (error) {
            console.error("There was an error fetching the tenant info", error);
        }
    };

    const search = async (useRefNum = false) => {
        let url = '';
        if (useRefNum) {
            url = '/ReportingController/GetReportDetails/'; // Adjust according to your API
            // Additional logic for handling reference number search
        } else {
            // Adjust URL or parameters based on `filterSection`
        }
        try {
            const response = await axios.get(url);
            setServiceGridData(response.data);
        } catch (error) {
            console.error("There was an error fetching the report details", error);
        }
    };

    const validateDate = () => {
        return throughDate >= fromDate;
    };

    const changeSelect = (item) => {
        if (item === '1') {
            setDisableDate(false);
        } else {
            setDisableDate(true);
        }
    };

    const handleDateChange = (dates) => {
        const [start, end] = dates;
        setFromDate(start);
        setThroughDate(end);
    };

    const searchByReferenceNo = async () => {
        if (referenceNo !== '') {
            try {
                const response = await axios.post('/ReportingController/GetReportDetailsbyReferenceFilter/', {
                    ReferenceNoType: filterReferenceNoSection,
                    ReferenceNo: referenceNo,
                });
                setServiceGridData(response.data);
            } catch (error) {
                console.error("There was an error fetching the report details by reference number", error);
            }
        }
    };

    return (
        <div>
            {/* Insert your component JSX here, including elements that use the states above */}
            {/* This is just a broad structure, implement your elements as needed */}
        </div>
    );
}

export default PsReportingComponent;