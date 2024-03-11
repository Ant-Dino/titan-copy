// services/UserInfo.ts

import axios from 'axios';

export const getUserInfo = async (): Promise<IUserResponse> => {
  const response = await axios.get('/path/to/user/info/api');
       return response.data;
};