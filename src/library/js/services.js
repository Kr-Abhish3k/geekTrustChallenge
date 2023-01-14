const mockResult = {
	data: { foo: 'test' },
	status: 200,
	statusText: 'OK',
	headers: {},
	config: {},
	request: {},
};

class Services {
	constructor() {
		if (!Services.instance) {
			Services.instance = this;
			this.params = {};
		}
		return Services.instance;
	}

	getCommonParams() {
		return {
			params: this.params,
			withCredentials: false,
		};
	}

	getService(name) {
		const baseDomain = 'https://geektrust.s3.ap-southeast-1.amazonaws.com/';
		const service = {
			fetchData: {
				method: 'get',
				baseURL: `${baseDomain}coding-problems/shopping-cart/catalogue.json`,
				...this.getCommonParams(),
			},
			mock: {
				method: 'get',
				baseUrl: `${baseDomain}mock`,
				...this.getCommonParams(),
				interceptors: {
					request: () =>
						Promise.resolve({
							...JSON.parse({ ...JSON.stringify(mockResult) }),
						}),
					response: {
						error: () =>
							Promise.resolve({
								...JSON.parse({
									...JSON.stringify(mockResult),
								}),
							}),
					},
				},
			},
		};
		return service[name] || {};
	}
}
export default new Services();
