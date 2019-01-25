const path = require('path');

module.exports = (env) => {

    console.log("Env: ", env);

    return {
        mode: env.mode,
        entry: './src/index.js',
        output: {
            filename: 'main.js',
            path: path.resolve(__dirname, 'dist')
        }
    }
};