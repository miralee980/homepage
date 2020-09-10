const login = (email, password) => {
	return {
		type: "LOGIN",
		promise: {
			method: "post",
			url: "https://dev.quantec.co.kr/api/auth/login",
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
