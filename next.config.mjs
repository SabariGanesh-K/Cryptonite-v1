/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          hostname: "coin-images.coingecko.com",
        },
        {
          hostname: "flowbite.s3.amazonaws.com",
        },
        { hostname: "firebasestorage.googleapis.com" },
        { hostname: "picsum.photos" },
      ],
    },
  };
  
  export default nextConfig;
  