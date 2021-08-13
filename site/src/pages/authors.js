import * as React from 'react';
import { graphql, Link } from 'gatsby';

export const query = graphql`
  query GetAllAuthors {
    allAuthor {
      nodes {
        name
        slug
      }
    }
  }
`;

export default function AuthorsPage({ data }) {
  const authors = data.allAuthor.nodes;

  return (
    <>
      <h1>Authors</h1>
      <ul>
        {authors.map((author) => (
          <li key={author.slug}>
            <Link to={`/${author.slug}`}>{author.name}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}
