
import {environment} from '../../../environments/environment';

export const roleNames = {
  superAdmin: 'SuperAdmin',
  admin: 'Admin',
  manager: 'Manager',
  client: 'Client',
};

export const userRoleDefaultPages = {
  SuperAdmin: 'pages/admin/manage',
  Admin: 'pages/admin/dashboard',
  Manager: 'pages/manager/dashboard',
  Client: 'pages/client',
};

function createUrl(actionName: string): string {
  return `${environment.apiHost}${actionName}`;
}
function createAuthUrl(actionName: string): string {
  return `${environment.apiHost}${actionName}`;
}

export const appApiResources = {
  baseUrl: environment.apiHost,
  staticUploadsPath: `${environment.apiHost}Uploads/`,
  login: createAuthUrl('user/login'),
  register: createUrl('user/register'),
  verifyEmail: createUrl('verifyEmail'),
  claim: createUrl('claim'),
  admin: createUrl('admin'),
  client: createUrl('client'),
  manager: createUrl('manager'),
  fileUpload: createUrl('fileUpload'),
  dashBoard: createUrl('dashboard'),
};

export const appVariables = {
  userLocalStorage: 'user',
  resourceAccessLocalStorage: 'resourceAccessRaw',
  accessTokenServer: 'X-Auth-Token',
  defaultContentTypeHeader: 'application/json',
  loginPageUrl: '/login',
  registrationPageUrl: '/register',
  errorInputClass: 'has-error',
  successInputClass: 'has-success',
  actionSearchKey: 'Entity',
  resourceActions: {
    getActionName: 'Read',
    addActionName: 'Create',
    updateActionName: 'Update',
    deleteActionName: 'Delete',
  },
  accessTokenLocalStorage: 'accessToken',

};

