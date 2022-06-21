module.exports = {
    root: true,
    extends: ['infojr-ts/next'],
    ignorePatterns: ['node_modules', 'dist', '**/*.js'],
    parserOptions: {
        project: 'tsconfig.json',
        tsconfigRootDir: __dirname,
    },
}
