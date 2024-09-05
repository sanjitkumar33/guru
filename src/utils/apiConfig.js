const API_BASE_URL = process.env.REACT_APP_API_URL;

export const ENDPOINTS = {
  REGISTER_USER: `${API_BASE_URL}/user/registation`,
  OTP_VERIFY: `${API_BASE_URL}/user/otpcheck`,
  VERIFY_EMAIL: `${API_BASE_URL}/user/emailcheck`,
  RE_SEND_M_OTP: `${API_BASE_URL}/user/otpresend`,
  RE_SEND_E_VERIFY: `${API_BASE_URL}/user/emailresend`,
  FORGET_PASSWORD: `${API_BASE_URL}/user/passowrdreset`,
  DASH_BOARD: `${API_BASE_URL}/dashboard/index`,
  CREATE_UPI_ID: `${API_BASE_URL}/dashboard/Creatupiid`,
  CREATE_VIRTUAL_BANK_ACCOUNT: `${API_BASE_URL}/dashboard/Creatacno`,
  LOGOUT_REQUEST: `${API_BASE_URL}/dashboard/logout`,
  LOGIN_USER: `${API_BASE_URL}/user/login`,
  CHANGE_PASSWORD: `${API_BASE_URL}/user/changepassword`,

  CHANGE_PASSWORD_DASH: `${API_BASE_URL}/dashboard/changepass`,
  GET_API_KEY: `${API_BASE_URL}/dashboard/getapi`,
  GET_UPI_LIST:  `${API_BASE_URL}/dashboard/upilist`,
  GET_VIRTUAL_ACCOUNT_LIST:  `${API_BASE_URL}/dashboard/aclist`,
  UPDATE_VIRTUAL_ACCOUNT_STATUS: `${API_BASE_URL}/dashboard/updateac`,
  UPDATE_UPI_ID_STATUS: `${API_BASE_URL}/dashboard/updateupi`,
  DASHBOARD_PROFILE: `${API_BASE_URL}/dashboard/profile`,
  SEARCH_VIRTUAL_ACC: `${API_BASE_URL}/dashboard/acsearch`,
  SEARCH_UPI_ID: `${API_BASE_URL}/dashboard/upisearch`
  // Add more endpoints as needed
};

