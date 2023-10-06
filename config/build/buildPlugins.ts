import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { 
	DefinePlugin, 
	ProgressPlugin, 
	WebpackPluginInstance
} from 'webpack';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';
import { BuildOptions } from './types/config';
import ReactRefreshPlugin from '@pmmmwh/react-refresh-webpack-plugin';
import CopyPlugin from 'copy-webpack-plugin';
import CircularDependencyPlugin from 'circular-dependency-plugin';

export function buildPlugins(options: BuildOptions): WebpackPluginInstance[] {
	
	const { paths, isDev, apiUrl, project } = options;

	const plugins = [
		new HtmlWebpackPlugin({
			template: paths.html,
		}),
		new ProgressPlugin(),
		new MiniCssExtractPlugin({
			filename: 'css/[name].[contenthash:8].css',
			chunkFilename: 'css/[name].[contenthash:8].css'
		}),
		new DefinePlugin({
			__IS_DEV__: JSON.stringify(isDev),
			__API__: JSON.stringify(apiUrl),
			__PROJECT__: JSON.stringify(project)
		}),
		new CopyPlugin({
			patterns: [
				{from: paths.locales, to: paths.buildLocales}
			]
		}),
		new CircularDependencyPlugin ({
			exclude: /node_modules/,
			failOnError: true,
		})
	];

	

	if (isDev) {
		plugins.push(new ReactRefreshPlugin());
		plugins.push(new BundleAnalyzerPlugin({
			openAnalyzer: false
		}));
	}

	
	
	return plugins;
}
