/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    eslint: {
        ignoreDuringBuilds: true,
    },
    images: {
        domains: [ "poi-b1bm.onrender.com", "poi-b1bm.onrender.comhttps", "res.cloudinary.com", "localhoat:3000"],
        formats: ['image/avif', 'image/webp']
    },
    i18n: {
        locales: ['en', 'ru'],
        defaultLocale: 'en',
    }
}

module.exports = nextConfig
