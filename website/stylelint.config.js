/** @type {import('stylelint').Config} */
export default {
  // `stylelint-stylus`'s main export is its rule plugins, not a postcss custom syntax — it never
  // belonged in `customSyntax` (that's why every lint:style run failed with "parser is not a
  // function"). The actual Stylus parser is `postcss-styl`; `.vue` files need `postcss-html` first
  // to pull the `<style lang="stylus">` block out before that parser sees it.
  plugins: ['stylelint-stylus'],
  overrides: [
    {
      files: ['**/*.styl'],
      customSyntax: 'postcss-styl',
    },
    {
      files: ['**/*.vue'],
      customSyntax: 'postcss-html',
    },
  ],
  extends: [],
  rules: {
    'no-empty-source': null,
  },
}
