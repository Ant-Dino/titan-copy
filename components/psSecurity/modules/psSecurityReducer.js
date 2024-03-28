import { Action, createReducer, on } from '@ngrx/store';

// Define the state structure
export interface SecurityState {
  activityright: string;
  canmanageteq: boolean;
  canmanagebeq: boolean;
  hasAccess: boolean;
  hasModifyAccess: boolean;
  Tenant: any; // Assuming any type for simplicity, should be replaced with a proper type
}

// Initial state
export const initialState: SecurityState = {
  activityright: '',
  canmanageteq: false,
  canmanagebeq: false,
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
  props<{ Tenant: any }>() // Replace any with the proper type
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

export function reducer(state: SecurityState | undefined, action: Action) {
  return securityReducer(state, action);
}