import axios from 'axios';

const auditingService = {
  getAuditDetails: function(details) {
    return axios.post('api/audit/GetAuditDetails/', details);
  },
  getAuditDetailsFilter: function(filterSection) {
    return axios.get(`AuditController/GetAuditDetailsFilter/${filterSection}`);
  }
};

export default auditingService;