/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false, // Disable React Strict Mode
    experimental: {
      instrumentationHook: true, // Enable instrumentation hooks
    },
  };
  
  export default nextConfig;
  