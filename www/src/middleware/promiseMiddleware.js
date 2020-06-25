import axios from "axios";

export default () => {
	return next => action => {
		const { promise, type } = action;
		if (type === "LOGIN") {
			next({ type: `${type}_REQUEST` });
			return axios({
				method: promise.method,
				url: promise.url,
				data: promise.data
			})
				.then(result => {
					if (result.data.status === "OK") {
						const user = result.data.data;
						const message = result.data.message;
						next({ user, message, type: `${type}_SUCCESS` });
					} else {
						const message = result.data.message;
						next({ message, type: `${type}_FAILURE` });
					}
				})
				.catch(error => {
					next({ error, type: `${type}_FAILURE` });
				});
		} else {
			next({ type: type });
		}
	};
};
