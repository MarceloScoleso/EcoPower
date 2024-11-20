// next.config.js
module.exports = {
    webpack(config, { isServer }) {
    if (!isServer) {
        config.resolve.fallback = {
        fs: false,
        path: false,
        os: false,
        module: false,  // Adicione essa linha
        };
    }

    return config;
    },
};
