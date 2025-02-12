module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'body-leading-blank': [2, 'always'],
    'body-max-line-length': [2, 'always', 80],
    'footer-leading-blank': [2, 'always'],
    'footer-max-line-length': [2, 'always', 80],
    'subject-min-length': [2, 'always', 10],
  },
};
