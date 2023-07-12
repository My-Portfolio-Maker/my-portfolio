import { env } from './EnvironmentConfig'

export const APP_NAME = 'Portfolio';
export const API_BASE_URL = env.API_ENDPOINT_URL
export const API_UPLOADS_URL = env.API_IMAGE_URL
export const UID = import.meta.env.VITE_UID