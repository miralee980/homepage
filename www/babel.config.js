function isWebTarget(caller) {
	return Boolean(caller && caller.target === "web");
}

function isWebpack(caller) {
	return Boolean(caller && caller.name === "babel-loader");
}

module.exports = (api) => {
	const web = api.caller(isWebTarget);
	const webpack = api.caller(isWebpack);

	return {
		presets: [
			"@babel/preset-react",
			[
				"@babel/preset-env",
				{
					useBuiltIns: web ? "entry" : undefined,
					targets: !web ? { node: "current" } : undefined,
					modules: webpack ? false : "commonjs"
				}
			]
		],
		plugins: [
			"@loadable/babel-plugin",
			[
				"module-resolver",
				{
					root: ["."],
					extensions: [".js", ".jsx"],
					alias: {
						"@src": "./src",
						"@components": "./src/components",
						"@screens": "./src/screens",
						"@store": "./src/store",
						"@reducers": "./src/reducers",
						"@actions": "./src/actions",
						"@styles": "./src/styles",
						"@assets": "./src/assets",
						"@containers": "./src/containers",
						"@middleware": "./src/middleware"
					}
				}
			]
		]
	};
};
