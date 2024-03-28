// components/modules/psAuditingReducer.ts

interface PsAuditingState {
  activityright: string | null;
  canmanageteq: boolean;
  canmanagebeq: boolean;
  hasAccess: boolean;
  Fromdate: string;
  ThroughDate: string;
  FilterSection: string;
  Disabledate: boolean;
  Busy: boolean;
  ValidateError: boolean;
  serviceGrid: any; // This type can be further detailed based on the grid's structure
}

const initialState: PsAuditingState = {
  activityright: null,
  canmanageteq: false,
  canmanagebeq: false,
  hasAccess: false,
  Fromdate: '',
  ThroughDate: '',
  FilterSection: '7',
  Disabledate: true,
  Busy: false,
  ValidateError: false,
  serviceGrid: {
    data: []
  }
};

function psAuditingReducer(state = initialState, action: any): PsAuditingState {
  switch (action.type) {
    case 'SET_ACTIVITY_RIGHT':
      return {
        ...state,
        activityright: action.payload,
      };
    case 'SET_CAN_MANAGE_TEQ':
      return {
        ...state,
        canmanageteq: action.payload,
      };
    case 'SET_CAN_MANAGE_BEQ':
      return {
        ...state,
        canmanagebeq: action.payload,
      };
    case 'SET_HAS_ACCESS':
      return {
        ...state,
        hasAccess: action.payload,
      };
    case 'SET_FROM_DATE':
      return {
        ...state,
        Fromdate: action.payload,
      };
    case 'SET_THROUGH_DATE':
      return {
        ...state,
        ThroughDate: action.payload,
      };
    case 'SET_FILTER_SECTION':
      return {
        ...state,
        FilterSection: action.payload,
      };
    case 'SET_DISABLE_DATE':
      return {
        ...state,
        Disabledate: action.payload,
      };
    case 'SET_BUSY':
      return {
        ...state,
        Busy: action.payload,
      };
    case 'SET_VALIDATE_ERROR':
      return {
        ...state,
        ValidateError: action.payload,
      };
    case 'SET_SERVICE_GRID_DATA':
      return {
        ...state,
        serviceGrid: {
          ...state.serviceGrid,
          data: action.payload,
        },
      };
    default:
      return state;
  }
}

export default psAuditingReducer;