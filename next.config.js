/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  trailingSlash: true,
  // basePath: "/project-a",
  env: {
    MAP_API_KEY: "oqckexycsp",
  },
};

module.exports = nextConfig;
