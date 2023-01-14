import axios from 'axios';
import queryString from 'query-string';
import services from './services';

const instance = (serviceName, configuration) => {
	let retry = 0;
	const serviceConfig = services.getService(serviceName);
	const config = {
		maxRedirects: 0,
		...serviceConfig,
		...configuration,
		timeout: 50 * 1000,
	};
	config.params = {
		...serviceConfig.params,
		...configuration.params,
	};

	//config.paramsSerializer = (params) => queryString.stringify(params);
	config.paramsSerializer = {
		serialize: (params) =>
			queryString.stringify(params, { arrayFormat: 'brackets' }),
	};
	config.headers = {
		...config.headers,
	};

	const serviceInstance = axios.create(config);

	serviceInstance.interceptors.response.use(
		(res) =>
			// response success interceptor
			res,
		(error) => {
			//response error interceptor
			//retry 3 times on 500 error response
			if (error.response && error.response.status === 500 && retry < 3) {
				retry += 1;
				return serviceInstance.request();
			}
			throw error;
		}
	);

	/**
	 * using interceptor defined in the services.js for each service
	 */
	if (serviceConfig.interceptors) {
		Object.entries(serviceConfig.interceptors).forEach((interceptor) => {
			if (typeof interceptor === 'function') {
				serviceInstance.interceptors[interceptor[0]].use(
					interceptor[1]
				);
			} else {
				serviceInstance.interceptors[interceptor[0]].use(
					interceptor[1].success,
					interceptor[1].error
				);
			}
		});
	}
	return serviceInstance;
};

/**
 * This method will make the axios get request
 * @param {String} serviceName name of d=service defined in services.js
 * @param {Object} configuration list of configurations for the request
 */
const get = async (serviceName, configuration = {}) => {
	const serviceInstance = instance(serviceName, configuration);

	return await serviceInstance
		.request()
		.then((res) => {
			return res.data;
		})
		.catch((err) => {
			console.log('error in service : ', serviceName, ' : ', err);
			throw err;
		});
};

export default { get };
