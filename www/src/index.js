import "react-app-polyfill/ie11";
import "react-app-polyfill/stable";
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { applyMiddleware, createStore, compose } from "redux";
import rootReducer from "./reducers";
import { BrowserRouter } from "react-router-dom";
import * as serviceWorker from "./serviceWorker";
import HttpsRedirect from "react-https-redirect";

import MainApp from "./MainApp";
import ScrollToTop from "./ScrollToTop";
import promiseMiddleware from "./middleware/promiseMiddleware";

//import css file for style
import "antd/dist/antd.css";
import "styles/reset.css";
import "styles/main.css";
import "styles/about.css";
import "styles/hire.css";
import "styles/pr_news.css";
import "styles/pr_sns.css";
import "styles/contents.css";

const enhancer = compose(applyMiddleware(promiseMiddleware));
const store = createStore(rootReducer, undefined, enhancer);

ReactDOM.render(
	<HttpsRedirect>
		<React.StrictMode>
			<Provider store={store}>
				<BrowserRouter basename="/">
					<ScrollToTop />
					<MainApp />
				</BrowserRouter>
			</Provider>
		</React.StrictMode>
	</HttpsRedirect>,
	document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
