import axios from 'axios';

interface InvalidateOrderDataRequest {
  // Define the structure according to the $scope.orderToInvalidate in the controller
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
  private baseURL: string = ''; // Define the base URL for the API

  constructor() {
    // Initialize with actual base URL if available
  }

  public invalidateOrderData(orderData: InvalidateOrderDataRequest[]): Promise<any> {
    return axios.post(`${this.baseURL}/ReportingController/InvalidateOrderData`, orderData, {
      headers: {
        'Content-Type': 'application/json',
        // Any other required headers
      },
    });
  }

  public getReportDetails(tenant: string, details: GetReportDetailsRequest): Promise<any> {
    return axios.post(`${this.baseURL}/ReportingController/GetReportDetails/${tenant}`, details, {
      headers: {
        'Content-Type': 'application/json',
        // Any other required headers
      },
    });
  }

  public getReportDetailsFilter(filterSection: string, tenant: string): Promise<any> {
    return axios.get(`${this.baseURL}/ReportingController/GetReportDetailsFilter/${filterSection}/${tenant}`, {
      headers: {
        // Any required headers
      },
    });
  }

  public getReportDetailsbyReferenceFilter(tenant: string, filterDetails: GetReportDetailsbyReferenceFilterRequest): Promise<any> {
    return axios.post(`${this.baseURL}/ReportingController/GetReportDetailsbyReferenceFilter/${tenant}`, filterDetails, {
      headers: {
        'Content-Type': 'application/json',
        // Any other required headers
      },
    });
  }
}

export default PsReportingService;