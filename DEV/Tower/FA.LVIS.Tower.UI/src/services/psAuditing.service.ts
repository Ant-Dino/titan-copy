import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://yourapi-baseurl.com', // Replace with your API base URL
  headers: {
    'Content-Type': 'application/json',
    // Any other common headers
  },
});

export const auditService = {
  getAuditDetailsFilter(filterSection) {
    return axiosInstance.get(`AuditController/GetAuditDetailsFilter/${filterSection}`);
  },
  postAuditDetails(details) {
    return axiosInstance.post('api/audit/GetAuditDetails/', details);
  },
};