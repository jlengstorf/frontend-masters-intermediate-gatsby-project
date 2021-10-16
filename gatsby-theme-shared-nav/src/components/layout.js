import * as React from 'react';

import '../styles/variables.css';
import '../styles/global.css';
import { content, footer } from '../styles/layout.module.css';
import { Nav } from './nav.js';

export default function Layout({ children }) {
  return (
    <>
      <Nav />
      <main className={content}>{children}</main>
      <footer className={footer}>Built with Shared Nav Theme</footer>
    </>
  );
}
