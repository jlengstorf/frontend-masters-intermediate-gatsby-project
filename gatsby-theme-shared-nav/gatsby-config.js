module.exports = {
  siteMetadata: {
    navItems: [
      {
        label: 'Home',
        path: '/',
      },
    ],
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-layout',
      options: {
        component: require.resolve(__dirname + '/src/layouts/index.js'),
      },
    },
  ],
};
