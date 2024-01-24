module.exports = {
  extends: ['@commitlint/config-conventional'],
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

/** Sample Commit Messages
New Feature (feat):
feat(component): Add new feature XYZ

Bug Fix (fix):
fix(module): Resolve issue with ABC

Chore (chore):
chore(project): Update dependencies

Documentation (docs):
docs: Update README with usage instructions

Custom Commit Type (custom):
custom(component): Implement custom functionality 

*/
