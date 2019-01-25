const path = require('path');

module.exports = (env) => {

    console.log("Env: ", env);

    return {
        mode: env.mode,
        entry: './src/index.js',
        output: {
            filename: 'main.js',
            path: path.resolve(__dirname, 'dist')
        },
        module: {
            rules: [
                {
                    test: /\.js$/,
                    exclude: /(node_modules|bower_components)/,
                    use: {
                        loader: 'babel-loader',
                        options: {
                            presets: [
                                ['@babel/preset-env', {
                                    targets: {
                                        "ie": "11"
                                    }
                                }]
                            ],
                        }
                    }
                }
            ]
        }
    }
};