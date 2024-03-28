import { Action, createReducer, on } from '@ngrx/store';

// Define the state shape
interface SecurityState {
  activityright: string | null;
  canmanageteq: boolean | null;
  canmanagebeq: boolean | null;
  hasAccess: boolean;
  hasModifyAccess: boolean;
  Tenant: any; // Assuming dynamic data structure for Tenant
}

// Initial state
const initialState: SecurityState = {
  activityright: null,
  canmanageteq: null,
  canmanagebeq: null,
  hasAccess: false,
  hasModifyAccess: false,
  Tenant: null,
};

// Actions
export const setUserRights = createAction(
  '[Security] Set User Rights',
  props<{ activityright: string; canmanageteq: boolean; canmanagebeq: boolean }>()
);

export const setAccessRights = createAction(
  '[Security] Set Access Rights',
  props<{ hasAccess: boolean; hasModifyAccess: boolean }>()
);

export const setTenant = createAction(
  '[Security] Set Tenant',
  props<{ Tenant: any }>() // Adjust type according to actual Tenant data structure
);

// Reducer
const securityReducer = createReducer(
  initialState,
  on(setUserRights, (state, { activityright, canmanageteq, canmanagebeq }) => ({
    ...state,
    activityright,
    canmanageteq,
    canmanagebeq,
  })),
  on(setAccessRights, (state, { hasAccess, hasModifyAccess }) => ({
    ...state,
    hasAccess,
    hasModifyAccess,
  })),
  on(setTenant, (state, { Tenant }) => ({
    ...state,
    Tenant,
  }))
);

// Export the reducer function
export function reducer(state: SecurityState | undefined, action: Action) {
  return securityReducer(state, action);
}