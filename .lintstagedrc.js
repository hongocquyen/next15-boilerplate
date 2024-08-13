module.exports = {
  // Lint & Prettify  & Type check TS and JS files
  '*.(ts|tsx)': filenames => [
    `eslint --fix ${filenames.join(' ')} `,
    `prettier --write ${filenames.join(' ')}`,
    `tsc --skipLibCheck --noEmit`,
  ],

  // Run Stylelint on CSS and SCSS files
  '*.(css|scss)': filenames => [
    `prettier --write ${filenames.join(' ')}`,
    `stylelint --config .stylelintrc.json ${filenames.join(' ')}`,
  ],

  // Prettify only Markdown and JSON files
  '*.(md|json)': filenames => `prettier --write ${filenames.join(' ')}`,
};
