import axios from 'axios';

interface InvalidateOrderDataRequest {
  // Define the structure according to the $scope.orderToInvalidate object in the controller
}

interface GetReportDetailsRequest {
  Fromdate: string;
  ThroughDate: string;
}

interface GetReportDetailsbyReferenceFilterRequest {
  ReferenceNoType: string;
  ReferenceNo: string;
}

class PsReportingService {
  private baseURL: string = ''; // Set the base URL according to your environment

  async invalidateOrderData(orderData: InvalidateOrderDataRequest[]): Promise<any> {
    return axios.post(`${this.baseURL}/ReportingController/InvalidateOrderData`, orderData, {
      headers: {
        'Content-Type': 'application/json',
        // Add any other headers required by your API
      },
    });
  }

  async getReportDetails(tenant: string, details: GetReportDetailsRequest): Promise<any> {
    return axios.post(`${this.baseURL}/ReportingController/GetReportDetails/${tenant}`, details, {
      headers: {
        'Content-Type': 'application/json',
        // Add any other headers required by your API
      },
    });
  }

  async getReportDetailsFilter(filterSection: string, tenant: string): Promise<any> {
    return axios.get(`${this.baseURL}/ReportingController/GetReportDetailsFilter/${filterSection}/${tenant}`, {
      headers: {
        // Add any headers if required
      },
    });
  }

  async getReportDetailsbyReferenceFilter(tenant: string, filterDetails: GetReportDetailsbyReferenceFilterRequest): Promise<any> {
    return axios.post(`${this.baseURL}/ReportingController/GetReportDetailsbyReferenceFilter/${tenant}`, filterDetails, {
      headers: {
        'Content-Type': 'application/json',
        // Add any other headers required by your API
      },
    });
  }
}

export default PsReportingService;