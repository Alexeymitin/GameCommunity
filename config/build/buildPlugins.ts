import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import { DefinePlugin, HotModuleReplacementPlugin, ProgressPlugin, WebpackPluginInstance } from "webpack";
import { BuildOptions } from "./types/config";
import ReactRefreshPlugin from "@pmmmwh/react-refresh-webpack-plugin";

export function buildPlugins(options: BuildOptions): WebpackPluginInstance[] {
	
	const { paths, isDev } = options
	
	return [
		new HtmlWebpackPlugin({
			template: paths.html,
		}),
		new ProgressPlugin(),
		new MiniCssExtractPlugin({
			filename: "css/[name].[contenthash:8].css",
			chunkFilename: 'css/[name].[contenthash:8].css'
		}),
		new DefinePlugin({
			__IS_DEV__: JSON.stringify(isDev)
		}),
		new HotModuleReplacementPlugin(),
		new ReactRefreshPlugin()
	];
}
