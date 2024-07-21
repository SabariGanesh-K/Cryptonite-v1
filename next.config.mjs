/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          hostname: "coin-images.coingecko.com",
        },
        {hostname:"assets.coingecko.com"},
        {
          hostname: "flowbite.s3.amazonaws.com",
        },
        { hostname: "firebasestorage.googleapis.com" },
        { hostname: "picsum.photos" },
      ],
    },
    routes: {
      '*': './pages/*.tsx',
      404: './404.tsx',
    },
  
  };
  
  export default nextConfig;
  