import { API_BASE_URL, API_UPLOADS_URL} from "@configs/AppConfig"


export const GET_PROFILE = API_BASE_URL+'/get/profile'
export const GET_RESUME = API_BASE_URL+'/get/resume'
export const GET_SERVICES = API_BASE_URL+'/get/services'
export const GET_SKILLS = API_BASE_URL+'/get/skills'
export const GET_EXTRAS = API_BASE_URL+'/get/extras'
export const GET_PROJECTS = API_BASE_URL+'/get/projects'

export const GET_CV = API_UPLOADS_URL
export const GET_IMAGE = API_UPLOADS_URL

export const SEND_MESSAGE = API_BASE_URL+'/email/send'