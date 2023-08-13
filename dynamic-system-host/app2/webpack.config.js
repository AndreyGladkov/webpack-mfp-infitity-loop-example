const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack').container.ModuleFederationPlugin;
const path = require('path');
const deps = require('./package.json').dependencies;

const VENDORS = ['date-fns'];

const filterVendorsAndReactRefresh = context => {
    return VENDORS.some(chunk => context.match(chunk));
};

module.exports = {
    entry: './src/index',
    mode: 'development',
    devServer: {
        static: {
            directory: path.join(__dirname, 'dist'),
        },
        port: 3002,
    },
    output: {
        publicPath: 'auto',
    },
    module: {
        rules: [
            {
                test: /\.m?js$/,
                type: 'javascript/auto',
                resolve: {
                    fullySpecified: false,
                },
            },
            {
                test: /\.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                options: {
                    presets: ['@babel/preset-react'],
                },
            },
        ],
    },
    optimization: {
        removeAvailableModules: true,
        removeEmptyChunks: true,
        splitChunks: {
            cacheGroups: {
                dateFns: {
                    name: 'dateFns',
                    test: entry => entry.context && entry.context.match('date-fns'),
                    chunks: 'all',
                    minSize: 1,
                },
            },
        },
    },

    plugins: [
        new ModuleFederationPlugin({
            name: 'app2',
            filename: 'remoteEntry.js',
            exposes: {
                './Widget': './src/bootstrap',
            },
            shared: {
                react: { singleton: true },
                'react-dom': { singleton: true },
                'date-fns': {
                    requiredVersion: '^2.3.0',
                    version: '2.3.0',
                    strictVersion: true,
                },
                'date-fns/format': {
                    requiredVersion: '^2.3.0',
                    version: '2.3.0',
                    strictVersion: true,
                },
                'date-fns/formatDistance': {
                    requiredVersion: '^2.3.0',
                    version: '2.3.0',
                    strictVersion: true,
                },
                'date-fns/subDays': {
                    requiredVersion: '^2.3.0',
                    version: '2.3.0',
                    strictVersion: true,
                },
                'date-fns/addDays': {
                    strictVersion: true,
                    version: '2.3.0',
                    requiredVersion: '^2.3.0',
                },
                'date-fns/addSeconds': {
                    strictVersion: true,
                    version: '2.3.0',
                    requiredVersion: '^2.3.0',
                },
                'date-fns/addMinutes': {
                    strictVersion: true,
                    version: '2.3.0',
                    requiredVersion: '^2.3.0',
                },
                'date-fns/addHours': {
                    strictVersion: true,
                    version: '2.3.0',
                    requiredVersion: '^2.3.0',
                },
                'date-fns/addWeeks': {
                    strictVersion: true,
                    version: '2.3.0',
                    requiredVersion: '^2.3.0',
                },
                'date-fns/addMonths': {
                    strictVersion: true,
                    version: '2.3.0',
                    requiredVersion: '^2.3.0',
                },
                'date-fns/addYears': {
                    strictVersion: true,
                    version: '2.3.0',
                    requiredVersion: '^2.3.0',
                },
                'date-fns/differenceInYears': {
                    strictVersion: true,
                    version: '2.3.0',
                    requiredVersion: '^2.3.0',
                },
                'date-fns/differenceInQuarters': {
                    strictVersion: true,
                    version: '2.3.0',
                    requiredVersion: '^2.3.0',
                },
                'date-fns/differenceInMonths': {
                    strictVersion: true,
                    version: '2.3.0',
                    requiredVersion: '^2.3.0',
                },
                'date-fns/differenceInWeeks': {
                    strictVersion: true,
                    version: '2.3.0',
                    requiredVersion: '^2.3.0',
                },
                'date-fns/differenceInDays': {
                    strictVersion: true,
                    version: '2.3.0',
                    requiredVersion: '^2.3.0',
                },
                'date-fns/differenceInHours': {
                    strictVersion: true,
                    version: '2.3.0',
                    requiredVersion: '^2.3.0',
                },
                'date-fns/differenceInMinutes': {
                    strictVersion: true,
                    version: '2.3.0',
                    requiredVersion: '^2.3.0',
                },
                'date-fns/differenceInSeconds': {
                    strictVersion: true,
                    version: '2.3.0',
                    requiredVersion: '^2.3.0',
                },
                'date-fns/differenceInMilliseconds': {
                    strictVersion: true,
                    version: '2.3.0',
                    requiredVersion: '^2.3.0',
                },
                'date-fns/eachDayOfInterval': {
                    strictVersion: true,
                    version: '2.3.0',
                    requiredVersion: '^2.3.0',
                },
                'date-fns/endOfDay': {
                    strictVersion: true,
                    version: '2.3.0',
                    requiredVersion: '^2.3.0',
                },
                'date-fns/endOfWeek': {
                    strictVersion: true,
                    version: '2.3.0',
                    requiredVersion: '^2.3.0',
                },
                'date-fns/endOfYear': {
                    strictVersion: true,
                    version: '2.3.0',
                    requiredVersion: '^2.3.0',
                },
                'date-fns/format': {
                    strictVersion: true,
                    version: '2.3.0',
                    requiredVersion: '^2.3.0',
                },
                'date-fns/getDate': {
                    strictVersion: true,
                    version: '2.3.0',
                    requiredVersion: '^2.3.0',
                },
                'date-fns/getDay': {
                    strictVersion: true,
                    version: '2.3.0',
                    requiredVersion: '^2.3.0',
                },
                'date-fns/getDaysInMonth': {
                    strictVersion: true,
                    version: '2.3.0',
                    requiredVersion: '^2.3.0',
                },
                'date-fns/getHours': {
                    strictVersion: true,
                    version: '2.3.0',
                    requiredVersion: '^2.3.0',
                },
                'date-fns/getMinutes': {
                    strictVersion: true,
                    version: '2.3.0',
                    requiredVersion: '^2.3.0',
                },
                'date-fns/getMonth': {
                    strictVersion: true,
                    version: '2.3.0',
                    requiredVersion: '^2.3.0',
                },
                'date-fns/getSeconds': {
                    strictVersion: true,
                    version: '2.3.0',
                    requiredVersion: '^2.3.0',
                },
                'date-fns/getYear': {
                    strictVersion: true,
                    version: '2.3.0',
                    requiredVersion: '^2.3.0',
                },
                'date-fns/isAfter': {
                    strictVersion: true,
                    version: '2.3.0',
                    requiredVersion: '^2.3.0',
                },
                'date-fns/isBefore': {
                    strictVersion: true,
                    version: '2.3.0',
                    requiredVersion: '^2.3.0',
                },
                'date-fns/isEqual': {
                    strictVersion: true,
                    version: '2.3.0',
                    requiredVersion: '^2.3.0',
                },
                'date-fns/isSameDay': {
                    strictVersion: true,
                    version: '2.3.0',
                    requiredVersion: '^2.3.0',
                },
                'date-fns/isSameYear': {
                    strictVersion: true,
                    version: '2.3.0',
                    requiredVersion: '^2.3.0',
                },
                'date-fns/isSameMonth': {
                    strictVersion: true,
                    version: '2.3.0',
                    requiredVersion: '^2.3.0',
                },
                'date-fns/isSameHour': {
                    strictVersion: true,
                    version: '2.3.0',
                    requiredVersion: '^2.3.0',
                },
                'date-fns/isValid': {
                    strictVersion: true,
                    version: '2.3.0',
                    requiredVersion: '^2.3.0',
                },
                'date-fns/parse': {
                    strictVersion: true,
                    version: '2.3.0',
                    requiredVersion: '^2.3.0',
                },
                'date-fns/setDate': {
                    strictVersion: true,
                    version: '2.3.0',
                    requiredVersion: '^2.3.0',
                },
                'date-fns/setHours': {
                    strictVersion: true,
                    version: '2.3.0',
                    requiredVersion: '^2.3.0',
                },
                'date-fns/setMinutes': {
                    strictVersion: true,
                    version: '2.3.0',
                    requiredVersion: '^2.3.0',
                },
                'date-fns/setMonth': {
                    strictVersion: true,
                    version: '2.3.0',
                    requiredVersion: '^2.3.0',
                },
                'date-fns/setSeconds': {
                    strictVersion: true,
                    version: '2.3.0',
                    requiredVersion: '^2.3.0',
                },
                'date-fns/setYear': {
                    strictVersion: true,
                    version: '2.3.0',
                    requiredVersion: '^2.3.0',
                },
                'date-fns/startOfDay': {
                    strictVersion: true,
                    version: '2.3.0',
                    requiredVersion: '^2.3.0',
                },
                'date-fns/startOfMonth': {
                    strictVersion: true,
                    version: '2.3.0',
                    requiredVersion: '^2.3.0',
                },
                'date-fns/endOfMonth': {
                    strictVersion: true,
                    version: '2.3.0',
                    requiredVersion: '^2.3.0',
                },
                'date-fns/startOfWeek': {
                    strictVersion: true,
                    version: '2.3.0',
                    requiredVersion: '^2.3.0',
                },
                'date-fns/startOfYear': {
                    strictVersion: true,
                    version: '2.3.0',
                    requiredVersion: '^2.3.0',
                },
                'date-fns/parseISO': {
                    strictVersion: true,
                    version: '2.3.0',
                    requiredVersion: '^2.3.0',
                },
                'date-fns/formatISO': {
                    strictVersion: true,
                    version: '2.3.0',
                    requiredVersion: '^2.3.0',
                },
                'date-fns/isWithinInterval': {
                    strictVersion: true,
                    version: '2.3.0',
                    requiredVersion: '^2.3.0',
                },
                'date-fns/_lib/format/longFormatters': {
                    strictVersion: true,
                    version: '2.3.0',
                    requiredVersion: '^2.3.0',
                },
                'date-fns/locale/en-US': {
                    strictVersion: true,
                    version: '2.3.0',
                    requiredVersion: '^2.3.0',
                },
            },
        }),
        new HtmlWebpackPlugin({
            template: './public/index.html',
        }),
    ],
};
