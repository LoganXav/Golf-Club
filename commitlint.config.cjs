module.exports = {
  extends: [],
  rules: {
    'type-enum': [
      2,
      'always',
      [
        'feat',
        'fix',
        'chore',
        'docs',
        'style',
        'refactor',
        'test',
        'perf',
        'revert',
        'custom', // Custom commit type
      ],
    ],
    'scope-enum': [
      2,
      'always',
      ['project', 'module', 'component', 'other', ''],
    ],
    'subject-case': [1, 'always', 'sentence-case'], // Warn if subject case is incorrect
  },
};
