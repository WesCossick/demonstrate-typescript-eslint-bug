# How to replicate the bug

1. Clone this repo
1. From the root of the repo, run `yarn --cwd ./tool/ install`
1. Change into the `project-to-lint` directory (via `cd project-to-lint`)
1. Verify that compilation works with `yarn compile`
1. Run `yarn node ../tool/index.js`
1. See that the parser can't find the `@types/*` packages

# Working around the bug

The `project-with-workaround/` directory is identical to the `project-to-lint/` directory, except for the fact that its `.eslintrc.json` file [specifies the parser itself](https://github.com/WesCossick/demonstrate-typescript-eslint-bug/blob/master/project-with-workaround/.eslintrc.json#L3), which causes ESlint to look in `project-with-workaround/` instead of `tool/` for the `@typescript-eslint/parser` package.

Because the `@typescript-eslint/parser` package is located in a project using Yarn 2 with Plug'n'Play, it has no trouble finding the `@types/*` packages.

