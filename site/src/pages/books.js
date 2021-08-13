import * as React from 'react';
import { graphql, Link, useStaticQuery } from 'gatsby';
import slugify from 'slugify';

export default function BooksPage() {
  const data = useStaticQuery(graphql`
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
  `);

  const books = data.allBook.nodes;

  return (
    <>
      <h1>Books</h1>
      <ul>
        {books.map((book) => {
          const bookSlug = slugify(book.name, { lower: true });

          let path;
          if (book.series) {
            const seriesSlug = slugify(book.series, { lower: true });

            path = `/book/${seriesSlug}/${bookSlug}`;
          } else {
            path = `/book/${bookSlug}`;
          }

          return (
            <li key={book.id}>
              <Link to={path}>{book.name}</Link>, by{' '}
              <Link to={`/${book.author.slug}`}>{book.author.name}</Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}
