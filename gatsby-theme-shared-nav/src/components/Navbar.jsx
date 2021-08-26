import * as React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';

/* Styling */
import { container, sharedNav, link } from '../styles/navbar.module.css';

export default function Navbar() {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          navItems {
            label
            path
          }
        }
      }
    }
  `);

  const navItems = data.site.siteMetadata.navItems;
  const title = data.site.siteMetadata.title;

  return (
    <header className={container}>
      <Link to="/" className={link}>
        {title}
      </Link>
      <nav className={sharedNav}>
        {navItems.map((item) => {
          return (
            <Link key={`nav-${item.path}`} to={item.path} className={link}>
              {item.label}
            </Link>
          );
        })}
      </nav>
    </header>
  );
}
