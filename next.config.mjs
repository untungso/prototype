const checkEnvironment = () => {
  return process.env.NODE_ENV;
};
/** @type {import("next").NextConfig} */
const nextConfig = {
  experimental: {},
  compiler: {
    removeConsole: {
      exclude:
        checkEnvironment() === "prod"
          ? ["error"]
          : ["log", "error", "info", "table"],
    },
  },
};

export default nextConfig;
