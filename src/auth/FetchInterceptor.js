import axios from 'axios'
import { API_BASE_URL, UID } from '../configs/AppConfig'
import { notification } from 'antd'
import { AUTH_TOKEN } from '@/redux/Constants/Auth'

const service = axios.create({
  baseURL: API_BASE_URL,
  timeout: 60000
})


// Config
const TOKEN_PAYLOAD_KEY = 'Authorization'
const AUTH_TYPE = 'Bearer'
const PUBLIC_REQUEST_KEY = 'public-request'
const UID_KEY = 'UID'

// API Request interceptor
service.interceptors.request.use(config => {
	const jwtToken = JSON.parse(localStorage.getItem(AUTH_TOKEN))
	// const AUTH_TYPE = JSON.parse(localStorage.getItem(AUTH_TOKEN))?.token_type

  if (jwtToken) {
    config.headers[TOKEN_PAYLOAD_KEY] = AUTH_TYPE + " " + jwtToken
  }
  
  config.headers[UID_KEY] = UID
  return config
}, error => {
	// Do something with request error here
	console.log(error.response)
	notification.error({
		message: 'Error'
	})
  Promise.reject(error)
})

// API respone interceptor
service.interceptors.response.use( (response) => {
	return response.data
}, (error) => {

	
	
	// Do something with response error here
	let notificationParam = {
		message: ''
	}

	// Remove token and redirect 
	if (error.response?.status === 400 || error.response?.status === 403 || error.response?.status === 401) {
		notificationParam.message = 'Authentication Fail'
		notificationParam.description = 'Please login again'
		localStorage.removeItem(AUTH_TOKEN)
		window.location.reload()
	}

	else if (error.response?.status === 404) {
		notificationParam.message = 'Not Found'
	}

	else if (error.response.status === 500) {
		notificationParam.message = 'Internal Server Error'
	}
	
	else if (error.response?.status === 508) {
		notificationParam.message = 'Time Out'
	}
	
	else{
		notificationParam.message = error.message
	}
	
	notification.error(notificationParam)
	
	return Promise.reject(error);
});

export default service