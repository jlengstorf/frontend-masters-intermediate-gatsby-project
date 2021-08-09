import * as React from 'react';
import { Nav } from '../components/nav.js';

import '../styles/variables.css';
import '../styles/global.css';

export default function Layout({ children }) {
  return (
    <div className="gatsby-theme-shared-nav">
      <Nav />
      <main>{children}</main>
    </div>
  );
}
