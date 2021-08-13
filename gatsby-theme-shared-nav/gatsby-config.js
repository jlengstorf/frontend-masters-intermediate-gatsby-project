module.exports = {
  siteMetadata: {
    title: 'Gatsby Theme Shared Nav',
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
        component: require.resolve(__dirname + '/src/components/layout.js'),
      },
    },
  ],
};
