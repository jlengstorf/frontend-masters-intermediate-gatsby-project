import * as React from 'react';
import { graphql, Link } from 'gatsby';
import { createSlug } from '../util/url.js';

export const query = graphql`
  query ($slug: String!) {
    author(slug: { eq: $slug }) {
      name
      books {
        id
        name
        series
        seriesOrder
      }
    }
  }
`;

export default function AuthorPage({ data }) {
  const { name, books } = data.author;
  const sortedBooks = books.sort((a, b) => a.seriesOrder - b.seriesOrder);

  return (
    <div>
      <h1>{name}</h1>
      <p>Books by {name}:</p>
      <ul>
        {sortedBooks.map((book) => {
          let series = book.series
            ? `(${book.series}, book ${book.seriesOrder})`
            : '';

          let path;
          if (book.series === null) {
            path = `/book/${createSlug(book.name)}`;
          } else {
            path = `/book/${createSlug(book.series)}/${createSlug(book.name)}`;
          }

          return (
            <li key={book.id}>
              <Link to={path}>
                {book.name} {series}
              </Link>
            </li>
          );
        })}
      </ul>
      <Link to="/authors">&larr; back to all authors</Link>
    </div>
  );
}
