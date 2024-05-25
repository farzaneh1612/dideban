const nextConfig = {
  // reactStrictMode: false,
  // basePath: "/profile/sessions",

  // async redirects() {
  //   return [
  //     {
  //       source: '/home',
  //       destination: '/profile/sessions',
  //       permanent: true,
  //     },
  //   ]
  // },
  env: {
    BASE_URL: process.env.BASE_URL,
  },
  
};

module.exports = nextConfig;
