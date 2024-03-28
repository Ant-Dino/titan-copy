import { createAction, props } from '@ngrx/store';

export const getUser = createAction(
  '[psSecurity] Get User',
  props<{ response: any }>()
);

export const setActivityRight = createAction(
  '[psSecurity] Set Activity Right',
  props<{ activityRight: string }>()
);

export const setCanManageTEQ = createAction(
  '[psSecurity] Set Can Manage TEQ',
  props<{ canManageTEQ: boolean }>()
);

export const setCanManageBEQ = createAction(
  '[psSecurity] Set Can Manage BEQ',
  props<{ canManageBEQ: boolean }>()
);

export const setHasAccess = createAction(
  '[psSecurity] Set Has Access',
  props<{ hasAccess: boolean }>()
);

export const setHasModifyAccess = createAction(
  '[psSecurity] Set Has Modify Access',
  props<{ hasModifyAccess: boolean }>()
);

export const setBusy = createAction(
  '[psSecurity] Set Busy',
  props<{ busy: boolean }>()
);

export const setServiceGridData = createAction(
  '[psSecurity] Set Service Grid Data',
  props<{ data: any[] }>()
);

export const setTenant = createAction(
  '[psSecurity] Set Tenant',
  props<{ tenant: string }>()
);

export const addRow = createAction(
  '[psSecurity] Add Row',
  props<{ newService: any }>()
);

export const removeRow = createAction(
  '[psSecurity] Remove Row',
  props<{ index: number }>()
);

export const deleteRow = createAction(
  '[psSecurity] Delete Row',
  props<{ index: number }>()
);