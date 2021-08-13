import { Link } from 'gatsby';
import * as React from 'react';

export default function IndexPage() {
  return (
    <main>
      <h1>Welcome to my book club!</h1>
      <p>
        These are some <Link to="/books">books</Link> and{' '}
        <Link to="/authors">authors</Link> I like.
      </p>
    </main>
  );
}
