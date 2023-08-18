const { withExpo } = require("@expo/next-adapter");
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

/** @type {import('next').NextConfig} */
const nextConfig = withBundleAnalyzer(
  withExpo({
    reactStrictMode: true,
    swcMinify: true,
    transpilePackages: [
      "react-native",
      "expo",
      "jpmc-poc-components",
      "react-native-web"
      // Add more React Native / Expo packages here...
    ],
    experimental: {
      forceSwcTransforms: true,
    },
  })
);

module.exports = nextConfig;

