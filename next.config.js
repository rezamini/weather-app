/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false, //avoid calling the page.tsx twice
    output: 'export',
}

module.exports = nextConfig
