const types = [
  '๐ฌ',
  '๐',
  '๐ฆ',
  '๐ท',
  '๐',
  '๐งช',
  '๐',
  '๐งฉ',
  '๐',
  'โก',
  '๐',
  '๐',
  '๐',
  'โป๏ธ',
  '๐จ',
  '๐ง',
  'โณ',
  '๐',
  '๐ฅ'
];

module.exports = {
  defaultIgnores: true,
  ignores: [
    commit =>
      commit === '' ||
      ['Merge branch'].some(ignoreTxt =>
        commit.toLowerCase().startsWith(ignoreTxt.toLowerCase())
      )
  ],
  parserPreset: {
    parserOpts: {
      breakingHeaderPattern: /^(.+?)(?:\((\w+)\))?โ(?:\[(R-\d+)\])?\s(.+?)$/,
      headerCorrespondence: ['type', 'scope', 'ticket', 'subject'],
      headerPattern: /^(.+?)(?:\((\w+)\))?โ?(?:\[(R-\d+)\])?\s(.+?)$/,
      issuePrefixes: ['R-']
    }
  },
  rules: {
    'body-leading-blank': [2, 'always'],
    'body-max-length': [2, 'always', Infinity],
    'body-min-length': [2, 'always', 0],
    'footer-leading-blank': [2, 'always'],
    'footer-max-length': [2, 'always', Infinity],
    'header-full-stop': [2, 'never'],
    'header-max-length': [2, 'always', Infinity],
    'header-min-length': [2, 'always', 0],
    'scope-case': [2, 'always', 'lower-case'],
    'subject-case': [2, 'always', 'upper-case'],
    'subject-empty': [2, 'never'],
    'type-empty': [2, 'never'],
    'type-enum': [2, 'always', types]
  }
};
