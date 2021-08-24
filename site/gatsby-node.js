const authors = require('./src/data/authors.json');
const books = require('./src/data/books.json');

const fetch = require('node-fetch');
const { createRemoteFileNode } = require('gatsby-source-filesystem');

const slugify = require('slugify');

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

exports.createPages = async ({ actions, graphql }) => {
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

  // creating pages for book (series and non series)
  const { data } = await graphql(`
    query GetBooks {
      allBook {
        nodes {
          id
          series
          name
        }
      }
    }
  `);

  const books = data.allBook.nodes;
  // create page for books
  books.forEach((book) => {
    const bookSlug = slugify(book.name, { lower: true });

    if (book.series === null) {
      createPage({
        path: `/book/${bookSlug}`,
        component: require.resolve('./src/templates/book.jsx'),
        context: {
          id: book.id,
        },
      });
    } else {
      const seriesSlug = slugify(book.series, { lower: true });
      createPage({
        path: `/book/${seriesSlug}/${bookSlug}`,
        component: require.resolve('./src/templates/book.jsx'),
        context: {
          id: book.id,
        },
      });
    }
  });
};

// create custom resolvers
exports.createResolvers = ({
  actions,
  cache,
  createNodeId,
  createResolvers,
  store,
  reporter,
}) => {
  const { createNode } = actions;

  const resolvers = {
    Book: {
      buyLink: {
        // type of data
        type: 'String',
        resolve: (source) => {
          return `https://www.powells.com/searchresults?keyword=${source.isbn}`;
        },
      },
      cover: {
        type: 'File',
        resolve: async (source) => {
          const response = await fetch(
            `https://openlibrary.org/isbn/${source.isbn}.json`,
          );

          if (!response.okay) {
            reporter.warn(
              `Error loading details about ${source.name} — got ${response.status} ${response.statusText}`,
            );
            return null;
          }

          const { covers } = await response.json();

          if (covers.length) {
            return createRemoteFileNode({
              url: `https://covers.openlibrary.org/b/id/${covers[0]}-L.jpg`,
              store,
              cache,
              createNode,
              createNodeId,
              reporter,
            });
          } else {
            return null;
          }
        },
      },
    },
  };

  createResolvers(resolvers);
};
