/** @type {import("prettier").Config} */
const config = {
    arrowParens: 'always',
    bracketSpacing: true,
    endOfLine: 'lf',
    jsxBracketSameLine: false,
    overrides: [
        {
            files: '*.yml',
            options: {
                endOfLine: 'auto',
                tabWidth: 2,
            },
        },
    ],
    printWidth: 120,
    semi: true,
    singleQuote: true,
    tabWidth: 4,
    tailwindFunctions: ['cn'],
    trailingComma: 'all',
};

export default config;