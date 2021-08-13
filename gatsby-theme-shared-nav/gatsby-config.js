module.exports = {
  plugins: [
    {
      resolve: 'gatsby-plugin-layout',
      options: {
        component: require.resolve(__dirname + '/src/components/layout.js'),
      },
    },
  ],
};
