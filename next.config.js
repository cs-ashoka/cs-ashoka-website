const { withNextVideo } = require('next-video/process')

/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack: (config, options) =>
    { 
        config.module.rules.push({
            test: /\.pdf$/,
            type: 'asset/source'
        })
        return config
    },
}

module.exports = withNextVideo(nextConfig)
