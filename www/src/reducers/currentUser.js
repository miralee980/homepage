const defaultState = {
	isLoggedIn: false,
	fetchingUdate: false,
	token: {},
	message: "",
	email: "",
	authLevel: 0,
	id: 0
};

const currentUser = (state = defaultState, action) => {
	switch (action.type) {
		case "LOGIN_REQUEST":
			return {
				...state,
				fetchingUdate: true
			};
		case "LOGIN_SUCCESS":
			return {
				...state,
				fetchingUdate: false,
				isLoggedIn: true,
				token: action.user.token,
				message: action.message,
				authLevel: action.user.authLevel,
				email: action.user.email,
				id: action.user.id
			};
		case "LOGIN_FAILURE":
			return {
				...state,
				fetchingUdate: false,
				isLoggedIn: false,
				message: action.message
			};
		case "LOGOUT":
			return {
				...state,
				fetchingUdate: false,
				isLoggedIn: false,
				token: {},
				message: "",
				authLevel: 0,
				email: "",
				id: 0
			};
		default:
			return state;
	}
};

export default currentUser;
