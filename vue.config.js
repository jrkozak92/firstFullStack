module.exports = {
    devServer: {
        port: 8081
    }
}

module.exports = {
    publicPath: process.env.NODE_ENV === "production" ? "https://www.joeykozak.com/site-manager/" : "/site-manager/"
}