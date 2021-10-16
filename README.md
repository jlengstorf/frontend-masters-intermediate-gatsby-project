# Intermediate Gatsby on Frontend Masters

This is the project we'll work through during the Frontend Masters Intermediate Gatsby course.
- Create a package.json for the monorepo
- Yarn install in ROOT (workspaces will be detect using the root package.json).
- Monorepo adding packages HACK: yarn workspace site add <PACKAGE.JSON>
### Use peer dependences to avoid copies of gatsby 
- Checking workspaces --- yarn workspaces info
- yarn workspace gatsby-theme-shared-nav add -P gatsby 
### Add the gatsby-theme-shared-nav locally to site project
- This installation is a shell by shell basic
- yarn workspace site add gatsby-theme-shared-nav@"*" REMEMBER == z-shell.
 ### Wrapping pages automatically in site
 - yarn workspace gatsby-theme-shared-nav add gatsby-plugin-layout
### New theme
- This theme is used as default theme for the SITE project.
- Shadowing: Selectively replacing a theme.
### Redirecting Client-only file
- syncing catch-all files with gatsby and host
- yarn workspace site add gatsby-plugin-netlify

