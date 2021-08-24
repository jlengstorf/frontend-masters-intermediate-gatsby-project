exports.createPages = async ({ actions }) => {
  const { createPage } = actions;

  // using the create page API
  createPage({
    path: '/custom',
    component: require.resolve('./src/templates/custom.jsx'),
    context: {
      title: 'A custom page',
      meta: {
        descriptiom: 'A custom page with context',
      },
    },
  });
};
