import * as React from 'react';

/* Variables */
import '../styles/variables.css';
import '../styles/global.css';
import { content, footer } from '../styles/layout.module.css';

/* Components */
import Navbar from './Navbar.jsx';

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main className={content}>{children}</main>
      <footer className={footer}>Built with the shared Nav Gatsby Theme</footer>
    </>
  );
}
