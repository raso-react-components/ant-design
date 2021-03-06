const libDir = process.env.LIB_DIR;

const transformIgnorePatterns = [
  '/dist/',
  '/node_modules/reqwest',
];

if (libDir !== 'es') {
  transformIgnorePatterns.push('/node_modules/');
}

module.exports = {
  setupFiles: [
    './tests/setup.js',
  ],
  moduleFileExtensions: [
    'ts',
    'tsx',
    'js',
    'jsx',
    'json',
    'md',
  ],
  modulePathIgnorePatterns: [
    '/_site/',
  ],
  testPathIgnorePatterns: [
    '/node_modules/',
    'dekko',
    'node',
  ],
  transform: {
    '\\.tsx?$': './node_modules/antd-tools/lib/jest/codePreprocessor',
    '\\.js$': './node_modules/antd-tools/lib/jest/codePreprocessor',
    '\\.md$': './node_modules/antd-tools/lib/jest/demoPreprocessor',
  },
  testRegex: libDir === 'dist' ? 'demo\\.test\\.js$' : '.*\\.test\\.js$',
  collectCoverageFrom: [
    'components/**/*.{ts,tsx}',
    '!components/*/style/index.tsx',
    '!components/style/index.tsx',
    '!components/*/locale/index.tsx',
  ],
  transformIgnorePatterns,
  snapshotSerializers: [
    'enzyme-to-json/serializer',
  ],
};
