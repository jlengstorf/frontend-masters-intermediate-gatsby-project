const authors = require('./src/data/authors.json');
const books = require('./src/data/books.json');

// create custom nodes from cutom data
exports.sourceNodes = async ({
  actions,
  createNodeId,
  createContentDigest,
}) => {
  //helper to createNode
  const { createNode, createTypes } = actions;

  // create relation between authors and books
  // from : foreign key in author
  createTypes(`
    type Author implements Node{
      books: [Book!]! @link(from:"slug" by: "author.slug")
    }

    type Book implements Node{
      author: Author! @link(from:"author" by:"slug")
    }
  `);

  // create graphql nodes for all books
  authors.forEach((author) => {
    createNode({
      ...author,
      id: createNodeId(`author-${author.slug}`),
      parent: null,
      children: [],
      internal: {
        type: 'Author',
        content: JSON.stringify(author),
        contentDigest: createContentDigest(author),
      },
    });
  });

  // create graphql nodes for all books
  books.forEach((book) => {
    createNode({
      ...book,
      id: createNodeId(`book-${book.isbn}`),
      parent: null,
      children: [],
      internal: {
        type: 'Book',
        content: JSON.stringify(book),
        contentDigest: createContentDigest(book),
      },
    });
  });
};

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
