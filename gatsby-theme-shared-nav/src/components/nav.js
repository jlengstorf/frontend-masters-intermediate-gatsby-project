import { Link, useStaticQuery, graphql } from 'gatsby';
import * as React from 'react';
import { sharedNav } from '../styles/nav.module.css';

export function Nav() {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          navItems {
            label
            path
          }
        }
      }
    }
  `);

  const navItems = data.site.siteMetadata.navItems;

  return (
    <header className={sharedNav}>
      <Link to="/">Home</Link>
      <nav>
        {navItems.map((item) => (
          <Link key={`nav-${item.path}`} to={item.path}>
            {item.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
