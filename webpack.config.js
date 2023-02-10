const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const createStyledComponentsTransformer =
    require('typescript-plugin-styled-components').default;

const styledComponentsTransformer = createStyledComponentsTransformer({
    ssr: false,
    displayName: true,
    componentIdPrefix: 'counter',
});

module.exports = {
    mode: 'development',
    devtool: 'cheap-module-source-map',
    entry: path.resolve(__dirname, './index.tsx'),
    module: {
        rules: [{ 
            test: /\.(js|ts|jsx|tsx)$/, 
            use: { 
              loader: 'ts-loader',
              options: {
                getCustomTransformers: () => ({
                  before: [styledComponentsTransformer],
                }),
              }, 
            }, 
            exclude: /node_modules/ 
        }]
    },
    output: { 
        path: path.resolve(__dirname, './build'),
        filename: 'bundle.js',
        clean: true
    },
    // optimization: {
    //   splitChunks: {
    //       cacheGroups: {
    //           vendor: {
    //               test: /[\\/]node_modules[\\/]/,
    //               name: 'vendors',
    //               chunks: 'all'
    //           }
    //       }
    //   }
    // },
    resolve: {
        extensions: [ '.js', '.jsx', '.ts', '.tsx' ],
        modules: [
            'node_modules',
            './src'
        ],
        alias: {
            '@components': [path.resolve(__dirname,'./src/components')],
            '@containers': [path.resolve(__dirname,'./src/containers')],
            '@constants': [path.resolve(__dirname,'./src/constants')],
            '@types': [path.resolve(__dirname,'./src/types/types')],
            '@store': [path.resolve(__dirname,'./src/store')],
        }
    },
    devServer: {
        static: {
            directory: path.resolve(__dirname, './dist')
        },
        port: 4002,
        server: {
            type: 'https'
        },
        client: {
            overlay: false
        },
        compress: true,
        hot: true, 
        open: true
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html',
            inject: 'body'
        })
    ]
}