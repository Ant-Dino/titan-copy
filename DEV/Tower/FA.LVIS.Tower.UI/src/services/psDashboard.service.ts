import axios from 'axios';

const BASE_URL = 'http://example.com/'; // Replace with actual base URL

interface BEQExceptionResponse {
  // Define the structure according to the actual response
}

interface TEQExceptionResponse {
  // Define the structure according to the actual response
}

interface UserInfoResponse {
  // Define the structure according to the actual response
}

const DashboardService = {
  getCurrentUser: (): Promise<UserInfoResponse> => {
    // Assuming UserInfo.getUser() is an axios call to a specific endpoint, replace 'UserInfoEndpoint' with the actual endpoint
    return axios.get(`${BASE_URL}UserInfoEndpoint/`)
      .then(response => response.data)
      .catch(error => {
        throw error;
      });
  },

  loadBEQExceptions: (): Promise<BEQExceptionResponse[]> => {
    return axios.get(`${BASE_URL}Dashboard/BEQException/`, {
      headers: {
        // If there are specific headers required, add them here
      }
    })
      .then(response => response.data)
      .catch(error => {
        throw error;
      });
  },

  loadTEQExceptions: (): Promise<TEQExceptionResponse[]> => {
    return axios.get(`${BASE_URL}Dashboard/TEQException/`, {
      headers: {
        // If there are specific headers required, add them here
      }
    })
      .then(response => response.data)
      .catch(error => {
        throw error;
      });
  }
};

export default DashboardService;