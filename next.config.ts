const nextConfig = {
  experimental: {
    swcPlugins: [
      [
        '@lingui/swc-plugin',
        {
          locales: ['en', 'ru'],
          namespace: 'translation',
          sourceLocale: 'en',
        },
      ],
    ],
  },
};

export default nextConfig;
