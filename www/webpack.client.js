const path = require("path");
const webpack = require("webpack");
const nodeExternals = require("webpack-node-externals");
const LoadablePlugin = require("@loadable/webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const devMode = process.env.NODE_ENV !== "production";
const hotMiddlewareScript = `webpack-hot-middleware/client?name=web&path=/__webpack_hmr&timeout=20000&reload=true`;

const getEntryPoint = (target) => {
	if (target === "node") {
		return ["./src/MainApp.js"];
	}
	return devMode ? [hotMiddlewareScript, "./src/index.js"] : ["./src/index.js"];
};

const getConfig = (target) => ({
	mode: devMode ? "development" : "production",

	name: target,

	target,

	entry: getEntryPoint(target),

	output: {
		path: path.resolve(__dirname, `dist/${target}`),
		filename: "[name].js",
		publicPath: "/web/",
		libraryTarget: target === "node" ? "commonjs2" : undefined
	},

	module: {
		rules: [
			{
				test: /\.(js|mjs|jsx|ts|tsx)$/,
				exclude: /node_module/,
				use: {
					loader: "babel-loader",
					options: {
						presets: ["@babel/preset-env"],
						plugins: ["@babel/plugin-proposal-class-properties"]
					}
				}
			},
			{
				test: /\.(scss|css)$/,
				use: [
					MiniCssExtractPlugin.loader,
					"css-loader",
					"resolve-url-loader",
					"sass-loader"
				]
			},
			{
				test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
				use: ["url-loader"]
			},
			{
				test: /\.(MP4|mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
				use: ["url-loader"]
			},
			{
				test: /\.(woff|woff2?|eot|ttf|otf)(\?.*)?$/,
				use: ["file-loader"]
			}
		]
	},

	resolve: {
		extensions: [".js", ".jsx", ".ts", ".tsx"],
		alias: {
			screens: path.resolve("src/screens/"),
			components: path.resolve("src/components/"),
			actions: path.resolve("src/actions/"),
			reducers: path.resolve("src/reducers/"),
			assets: path.resolve("src/assets/"),
			containers: path.resolve("src/containers/"),
			middleware: path.resolve("src/middleware/"),
			styles: path.resolve("src/styles/")
		}
	},

	plugins:
		target === "web"
			? [
					new LoadablePlugin(),
					new webpack.HotModuleReplacementPlugin(),
					new MiniCssExtractPlugin()
			  ]
			: [new LoadablePlugin(), new MiniCssExtractPlugin()],

	externals:
		target === "node" ? ["@loadable/component", nodeExternals()] : undefined
});

module.exports = [getConfig("web"), getConfig("node")];
