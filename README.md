# Intermediate Gatsby on Frontend Masters

This is the project we'll work through during the Frontend Masters Intermediate Gatsby course.

## Notes on yarn workspace

The root `package.json` workspaces key are the folder names but command should be w.r.t `name field` on `workspaces' package.json` file.

Eg: If the site folder was renamed to `website` but the `package.json` name field was till named as `site`. Then the `root package.json` will look something like this:

```json
	"workspaces":["website"] // folder name
	"scripts":{
		"develop":"yarn workspace site develop" // workspace's name field on package.json
	}
```

[Course Guide Decumentation](https://frontendmasters.learnwithjason.dev/intermediate-gatsby/)

## File Shadowing in themes

If you have a theme called `gatsby-theme-shared-nav` and want to override properties for any theme then on your main site create a file shadow inside src.

To create a shadow for above create a file as follows: `src/gatsby-theme-shared-nav/styles/variable.css` to shadow the `variables.css` file. Here we treat the theme folder name as the base src folder for the theme.
