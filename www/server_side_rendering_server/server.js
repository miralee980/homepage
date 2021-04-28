/* ===============================
 LOAD THE  DEPENDENCIES 
 =============================== */
import path from "path";
import fs from "fs";

import express from "express";
import React from "react";
import ReactDOMServer from "react-dom/server";

import MainApp from "../src/MainApp";

/* ===============================
 LOAD THE CONFIG
 =============================== */
const port = process.env.PORT || 8000;

/* ===============================
    EXPRESS CONFIGURATION
 =============================== */
const app = express();
const router = express.Router();
const serverRenderedContent = (req, res, next) => {
	console.log("serverRenderedContent");
	fs.readFile(path.resolve("./build/index.html"), "utf8", (err, data) => {
		console.log(data);
		console.log(ReactDOMServer.renderToString(<MainApp />));
		if (err) {
			console.error(err);
			return res.status(500).send("An error occurred");
		}
		return res.send(
			data.replace(
				'<div id="root"></div>',
				`<div id="root">${ReactDOMServer.renderToString(<MainApp />)}</div>`
			)
		);
	});
};
router.use("^/$", serverRenderedContent);
router.use(
	express.static(path.resolve(__dirname, "..", "build"), { maxAge: "30d" })
);
app.use(router);

// open the server
app.listen(port, () => console.log(`Lisening on port ${port}`));
