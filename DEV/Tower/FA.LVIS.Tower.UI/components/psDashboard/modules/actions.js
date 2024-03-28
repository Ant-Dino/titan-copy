// actions/dashboardActions.js

export const SET_ACTIVITY_RIGHT = 'SET_ACTIVITY_RIGHT';
export const SET_CAN_MANAGE_TEQ = 'SET_CAN_MANAGE_TEQ';
export const SET_CAN_MANAGE_BEQ = 'SET_CAN_MANAGE_BEQ';
export const SET_CAN_MANAGE_ACCESS_REQ = 'SET_CAN_MANAGE_ACCESS_REQ';
export const SET_HAS_ACCESS = 'SET_HAS_ACCESS';
export const SET_IS_USER = 'SET_IS_USER';
export const SET_HAS_BEQ_ACCESS = 'SET_HAS_BEQ_ACCESS';
export const SET_HAS_TEQ_ACCESS = 'SET_HAS_TEQ_ACCESS';
export const SET_BEQ_SUMMARY_LIST = 'SET_BEQ_SUMMARY_LIST';
export const SET_TEQ_SUMMARY_LIST = 'SET_TEQ_SUMMARY_LIST';
export const SET_TEQ_LINE_CHART_DATA = 'SET_TEQ_LINE_CHART_DATA';
export const SET_BEQ_LINE_CHART_DATA = 'SET_BEQ_LINE_CHART_DATA';

export function setActivityRight(activityRight) {
  return { type: SET_ACTIVITY_RIGHT, activityRight };
}

export function setCanManageTEQ(canManageTEQ) {
  return { type: SET_CAN_MANAGE_TEQ, canManageTEQ };
}

export function setCanManageBEQ(canManageBEQ) {
  return { type: SET_CAN_MANAGE_BEQ, canManageBEQ };
}

export function setCanManageAccessReq(canManageAccessReq) {
  return { type: SET_CAN_MANAGE_ACCESS_REQ, canManageAccessReq };
}

export function setHasAccess(hasAccess) {
  return { type: SET_HAS_ACCESS, hasAccess };
}

export function setIsUser(isUser) {
  return { type: SET_IS_USER, isUser };
}

export function setHasBEQAccess(hasBEQAccess) {
  return { type: SET_HAS_BEQ_ACCESS, hasBEQAccess };
}

export function setHasTEQAccess(hasTEQAccess) {
  return { type: SET_HAS_TEQ_ACCESS, hasTEQAccess };
}

export function setBEQSummaryList(BEQSummaryList) {
  return { type: SET_BEQ_SUMMARY_LIST, BEQSummaryList };
}

export function setTEQSummaryList(TEQSummaryList) {
  return { type: SET_TEQ_SUMMARY_LIST, TEQSummaryList };
}

export function setTEQLineChartData(TEQLineChartData) {
  return { type: SET_TEQ_LINE_CHART_DATA, TEQLineChartData };
}

export function setBEQLineChartData(BEQLineChartData) {
  return { type: SET_BEQ_LINE_CHART_DATA, BEQLineChartData };
}