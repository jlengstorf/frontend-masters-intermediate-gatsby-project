import * as React from 'react';
import { graphql, Link } from 'gatsby';
import { createSlug } from '../util/url.js';

export const query = graphql`
  query GetAllBooks {
    allBook {
      nodes {
        id
        name
        author {
          name
          slug
        }
        series
      }
    }
  }
`;

export default function BooksPage({ data }) {
  const books = data.allBook.nodes;

  return (
    <>
      <h1>Books</h1>
      <ul>
        {books.map((book) => {
          const slug = book.series
            ? `/book/${createSlug(book.series)}/${createSlug(book.name)}`
            : `/book/${createSlug(book.name)}`;

          return (
            <li key={book.id}>
              <Link to={slug}>{book.name}</Link>, by{' '}
              <Link to={`/${book.author.slug}`}>{book.author.name}</Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}
