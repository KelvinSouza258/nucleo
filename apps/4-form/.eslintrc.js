module.exports = {
  root: true,
  extends: ['infojr-ts'],
  ignorePatterns: ['node_modules', 'dist', 'vite.config.ts', '**/*.js'],
  parserOptions: {
    project: 'tsconfig.json',
    tsconfigRootDir: __dirname
  }
}
