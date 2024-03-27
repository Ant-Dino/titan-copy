import axios from 'axios';

const baseURL = ''; // Please set the base URL of your API

interface UserInfoResponse {
  ActivityRight: string;
  CanManageTEQ: boolean;
  CanManageBEQ: boolean;
}

interface BEQExceptionResponse {
  // Define the structure of your BEQException response here
}

interface TEQExceptionResponse {
  // Define the structure of your TEQException response here
}

const DashboardService = {
  getCurrentUser: () => {
    return axios.get<UserInfoResponse>(`${baseURL}/UserInfo/getUser`, {
      headers: {
        'Content-Type': 'application/json',
        // Add any required headers here
      },
    });
  },
  loadBEQExceptions: () => {
    return axios.get<BEQExceptionResponse[]>(`${baseURL}/Dashboard/BEQException/`, {
      headers: {
        'Content-Type': 'application/json',
        // Add any required headers here
      },
    });
  },
  loadTEQExceptions: () => {
    return axios.get<TEQExceptionResponse[]>(`${baseURL}/Dashboard/TEQException/`, {
      headers: {
        'Content-Type': 'application/json',
        // Add any required headers here
      },
    });
  },
};

export default DashboardService;