  
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { format, addHours, startOfDay } from 'date-fns';

const TerminalLogInformationsComponent = () => {
    const [activityRight, setActivityRight] = useState(null);
    const [includeInfo, setIncludeInfo] = useState(true);
    const [includeError, setIncludeError] = useState(true);
    const [startDateFilter, setStartDateFilter] = useState(format(new Date(), 'MM/dd/yyyy'));
    const [startTimeFilter, setStartTimeFilter] = useState('');
    const [endTimeFilter, setEndTimeFilter] = useState('');
    const [showMenuLogInfo, setShowMenuLogInfo] = useState(false);
    const [showMenuLogInfoFastWebOrders, setShowMenuLogInfoFastWebOrders] = useState(false);
    const [busy, setBusy] = useState(false);
    const [validateError, setValidateError] = useState(false);
    const [filteredData, setFilteredData] = useState([]);
    const [totalCount, setTotalCount] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const [pageSize, setPageSize] = useState(15);

    const getUser = async () => {
        try {
            const response = await axios.get('Security/GetCurrentUser/');
            setActivityRight(response.data.ActivityRight);
        } catch (error) {
            console.error('Error fetching user data:', error);
        }
    };

    useEffect(() => {
        if (!activityRight) {
            getUser();
        }

        if (localStorage.getItem('tenantname') !== 'LVIS') {
            setShowMenuLogInfo(false);
        } else {
            setShowMenuLogInfo(true);
        }

        const tenantName = localStorage.getItem('tenantname');
        const isSuperAdmin = activityRight === 'SuperAdmin';
        if ((tenantName === 'LVIS' || tenantName === 'Air Traffic Control') && isSuperAdmin) {
            setShowMenuLogInfoFastWebOrders(true);
        } else {
            setShowMenuLogInfoFastWebOrders(false);
        }

        // Time filtering logic initialization
        const currentDate = new Date();
        const currentHour = currentDate.getHours();
        setStartTimeFilter(`${currentHour < 10 ? `0${currentHour}` : currentHour}:00`);
        const nextHour = addHours(currentDate, 1).getHours();
        setEndTimeFilter(`${nextHour < 10 ? `0${nextHour}` : nextHour}:00`);
    }, [activityRight]);

    const searchData = async () => {
        try {
            setBusy(true);
            const response = await axios.post('api/terminalLogInformation/GetTerminalLogInformationdetails', {
                FromDate: startDateFilter,
                StartTime: startTimeFilter,
                EndTime: endTimeFilter,
                ErrorEnabled: includeError,
                InfoEnabled: includeInfo,
            });
            setFilteredData(response.data);
            const countResponse = await axios.post('api/terminalLogInformation/GetLogDetailsCount', {
                // Send the same filter parameters as above
            });
            setTotalCount(countResponse.data);
            setBusy(false);
        } catch (error) {
            console.error('Failed to fetch data:', error);
            setBusy(false);
        }
    };

    // Call searchData when component mounts or when currentPage or pageSize changes
    useEffect(() => {
        searchData();
    }, [currentPage, pageSize]);

    return (
        <div>
            {/* UI elements for showing data */}
            {busy && <p>Loading...</p>}
            {validateError && <p>End Time cannot be earlier than the Start Time</p>}
            <div>
                <button onClick={() => setCurrentPage(currentPage + 1)}>Next</button>
                <button onClick={() => setCurrentPage(currentPage - 1)}>Previous</button>
            </div>
            <div>
                {/* Render filteredData here */}
            </div>
        </div>
    );
};

export default TerminalLogInformationsComponent;
