import * as React from 'react';

export default function Custom({ pageContext }) {
  return (
    <div>
      <h1>{pageContext.title}</h1>
      <pre>{JSON.stringify(pageContext, null, 2)}</pre>
    </div>
  );
}
