const BASE_URL = import.meta.env.VITE_PUBLIC_BASE_URL;
const AUTH_URL = import.meta.env.VITE_PUBLIC_AUTH_URL;

// Auth
export const REGISTER = `${AUTH_URL}/register`;
export const VERIFY_REGISTER_OTP = `${AUTH_URL}/verify-otp`;
export const RESEND_OTP = `${AUTH_URL}/resend-otp`;
export const LOGIN = `${AUTH_URL}/login`;
export const FORGET = `${AUTH_URL}/forgot-password `;
export const VERIFY_FORGET_OTP = `${AUTH_URL}/verify-forgot-otp`;
export const RESET = `${AUTH_URL}/reset-password`

// Finance
export const RESOURCE = `${BASE_URL}/`;
export const RESOURCE_BY_ID = `${BASE_URL}/:id`;