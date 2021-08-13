import * as React from 'react';
import { Nav } from '../components/nav.js';

import '../styles/variables.css';
import '../styles/global.css';
import { content, footer } from '../styles/layout.module.css';

export default function Layout({ children }) {
  return (
    <>
      <Nav />
      <main className={content}>{children}</main>
      <footer className={footer}>Built with the Shared Nav Gatsby Theme</footer>
    </>
  );
}
