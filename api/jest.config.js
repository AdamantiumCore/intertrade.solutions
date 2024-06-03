export default {
    // A list of paths to directories that Jest should use to search for files in
    roots: ['<rootDir>/'],

    // setup files
    setupFiles: ["<rootDir>/jest.setup.js"],

    // Indicates whether each individual test should be reported during the run
    verbose: true,
  
    // The test environment that will be used for testing
    testEnvironment: 'node',
  
    // The glob patterns Jest uses to detect test files
    testMatch: ['**/__tests__/**/*.[jt]s?(x)', '**/?(*.)+(spec|test).[jt]s?(x)'],
  
    // An array of regexp pattern strings that are matched against all test paths, matched tests are skipped
    testPathIgnorePatterns: ['/node_modules/'],
  
    // An array of regexp pattern strings that are matched against all source file paths, matched files will skip transformation
    transformIgnorePatterns: ['/node_modules/'],

    // timeout
    testTimeout: 10000,
  
    // Indicates whether the coverage information should be collected while executing the test
    collectCoverage: true,
  
    // The directory where Jest should output its coverage files
    coverageDirectory: 'coverage',
  
    // A list of reporter names that Jest uses when writing coverage reports
    coverageReporters: ['json', 'lcov', 'text', 'clover'],
  
    // An object that configures minimum threshold enforcement for coverage results
    coverageThreshold: {
      global: {
        branches: 80,
        functions: 80,
        lines: 80,
        statements: 80,
      },
    },
  
    // A map from regular expressions to module names that allow to stub out resources with a single module
    moduleNameMapper: {
      '^@/(.*)$': '<rootDir>/src/$1',
    },

    transform: {
      '^.+\\.js$': 'babel-jest',
    },
  };
  