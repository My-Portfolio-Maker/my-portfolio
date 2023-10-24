
const dev = {
	API_ENDPOINT_URL: 'http://localhost:3001/api/v1',
	API_IMAGE_URL: 'http://localhost:3001/api/v1/get/uploads/s3',
};

const prod = {
	API_ENDPOINT_URL: 'https://myportfoliobackend-u26ae7g7.b4a.run/api/v1',
	API_IMAGE_URL: 'https://myportfoliobackend-u26ae7g7.b4a.run/api/v1/get/uploads/s3',

};

const test = {
	API_ENDPOINT_URL: 'https://api.test.com'
};

const getEnv = () => {
	switch (import.meta.env.MODE) {
		case 'development':
			
			return dev
		case 'production':
			console.log = () => {}
			console.error = ()=>{}
			return prod
		case 'test':
			return test
		default:
			break;
	}
}

export const env = getEnv()
