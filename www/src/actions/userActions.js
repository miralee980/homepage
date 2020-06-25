const login = (email, password) => {
	return {
		type: "LOGIN",
		promise: {
			method: "post",
			url: "/api/auth/login",
			data: { email, password }
		}
	};
};

const logout = () => {
	return {
		type: "LOGOUT"
	};
};

export default {
	login,
	logout
};
