/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';
const basePath = isProd ? '/manish-portfolio' : '';
const nextConfig = {
    output: 'export',
    basePath,
    assetPrefix: isProd ? '/manish-portfolio/' : '',
    images: {
        unoptimized: true,
    },
    trailingSlash: true,
    env: {
        NEXT_PUBLIC_BASE_PATH: basePath,
    },
};

export default nextConfig;
