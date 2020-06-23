import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import * as serviceWorker from "./serviceWorker";
import MainApp from "MainApp";

//import css file for style
import "styles/reset.css";
import "styles/contents.css";
import "styles/main.css";
import "styles/about.css";
import "styles/hire.css";
import "styles/pr_news.css";
import "styles/pr_sns.css";

import "antd/dist/antd.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-material-design/dist/css/bootstrap-material-design.css";

ReactDOM.render(
	<React.StrictMode>
		<BrowserRouter basename="/">
			<MainApp />
		</BrowserRouter>
	</React.StrictMode>,
	document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
