const { ESLint } = require("eslint");

const eslint = new ESLint({
    fix: true,
    resolvePluginsRelativeTo: __dirname,
});

eslint.lintFiles([process.cwd()]).then((results) => {
    eslint.loadFormatter('codeframe').then((formatter) => {
        console.log(formatter.format(results));
    });
});
