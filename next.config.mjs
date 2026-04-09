/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';
const nextConfig = {
    output: 'export',
    basePath: isProd ? '/manish-portfolio' : '',
    assetPrefix: isProd ? '/manish-portfolio/' : '',
    images: {
        unoptimized: true,
    },
    trailingSlash: true,
};

export default nextConfig;
