import path from 'path'
import webpack from 'webpack'

import paths from '../utils/paths'
import env from '../utils/env'

const rules: Array<any> = []

rules.push({
    test: /\.tsx?$/,
    loader: 'ts-loader',
    exclude: /node_modules/,
})

const webpackConfig: webpack.Configuration = {
    mode: env.isDev ? 'development' : 'production',
    target: 'electron-main',
    devtool: 'source-map',
    output: {
        path: path.resolve(paths.rootPath, 'dist'),
        filename: 'main.js',
    },
    entry: {
        main: path.resolve(paths.mainPath, 'index.ts'),
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js'],
    },
    module: {
        rules,
    },
}

export default webpackConfig
