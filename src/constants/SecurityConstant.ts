export const ACCESS_TOKEN_STORAGE_KEY = "access_token";
export const REFRESH_TOKEN_STORAGE_KEY = "refresh_token";

export const PUBLIC_ENDPOINTS = [
    "/api/v1/auth/login",
    "/api/v1/auth/login-challenge",
    "/api/v1/auth/oauth2/register/google",
    "/api/v1/auth/oauth2/login/google",
    "/api/v1/auth/oauth2/register/firebase",
    "/api/v1/auth/oauth2/login/firebase",
    "/api/v1/auth/register",
    "/api/v1/auth/refresh",
    "/api/v1/auth/forgot-password",
    "/api/v1/auth/send-otp",
    "/api/v1/auth/verify-otp",
    "/api/v1/auth/verify-email",
    "/api/v1/auth/send-verify-email",
    "/api/v1/storage/**",
    "/api/v1/metadata/**",
    "/api/v1/storage/**",
    "/v3/api-docs/**",
    "/swagger-ui/**",
    "/swagger-ui.html",
    "/api/v1/payment/**",
];
