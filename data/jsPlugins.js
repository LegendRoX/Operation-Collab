// testPlugins.js

const testPlugins = [
    {
      name: 'Mocha',
      website: 'https://mochajs.org/',
      description: 'Mocha is a feature-rich JavaScript test framework that makes asynchronous testing simple and fun.',
      exampleUsage: `
        describe('Math operations', function() {
          it('should add two numbers correctly', function() {
            assert.equal(2 + 2, 4);
          });
        }
      `,
    },
    {
      name: 'Jasmine',
      website: 'https://jasmine.github.io/',
      description: 'Jasmine is a behavior-driven development framework for testing JavaScript code.',
      exampleUsage: `
        describe('Math operations', function() {
          it('should add two numbers correctly', function() {
            expect(2 + 2).toBe(4);
          });
        }
      `,
    },
    {
      name: 'Jest',
      website: 'https://jestjs.io/',
      description: 'Jest is a delightful JavaScript testing framework with a focus on simplicity.',
      exampleUsage: `
        test('adds 1 + 2 to equal 3', () => {
          expect(1 + 2).toBe(3);
        });
      `,
    },
    {
      name: 'Chai',
      website: 'https://www.chaijs.com/',
      description: 'Chai is a BDD/TDD assertion library for node.js and the browser.',
      exampleUsage: `
        const assert = require('chai').assert;
  
        describe('Math operations', function() {
          it('should add two numbers correctly', function() {
            assert.equal(2 + 2, 4);
          });
        }
      `,
    },
    {
      name: 'Sinon',
      website: 'https://sinonjs.org/',
      description: 'Sinon is a library for creating spies, stubs, and mocks for JavaScript.',
      exampleUsage: `
        const sinon = require('sinon');
  
        let spy = sinon.spy();
        spy();
        assert(spy.called);
      `,
    },
    {
      name: 'Ava',
      website: 'https://avajs.dev/',
      description: 'Ava is a test runner for Node.js with a concise API, detailed error output, and process isolation.',
      exampleUsage: `
        test('my test', t => {
          t.is(1 + 1, 2);
        });
      `,
    },
    {
      name: 'Cucumber',
      website: 'https://cucumber.io/',
      description: 'Cucumber is a tool for running automated acceptance tests written in plain language.',
      exampleUsage: `
        Feature: Some terse yet descriptive text of what is desired
          Scenario: Some determinable business situation
            Given some precondition
            When some action by the actor
            Then some testable outcome is achieved
      `,
    },
    {
      name: 'Karma',
      website: 'https://karma-runner.github.io/',
      description: 'Karma is a test runner for JavaScript that runs on Node.js and is designed for continuous integration.',
      exampleUsage: `
        module.exports = function(config) {
          config.set({
            browsers: ['Chrome'],
            frameworks: ['jasmine'],
            files: ['*.js'],
          });
        };
      `,
    },
    {
      name: 'Junit (for JavaScript)',
      website: 'https://www.npmjs.com/package/junit-report-builder',
      description: 'JUnit Report Builder is a JavaScript library for generating JUnit XML reports for test results.',
      exampleUsage: `
        const builder = require('junit-report-builder');
  
        builder.testSuite().name('My Test Suite').time(2);
  
        builder.testCase()
          .className('MyClass')
          .name('myTestMethod')
          .time(1)
          .failure('AssertionError', 'Test failed');
  
        builder.writeTo('output.xml');
      `,
    },
    {
      name: 'Nightwatch.js',
      website: 'https://nightwatchjs.org/',
      description: 'Nightwatch.js is an end-to-end testing framework written in Node.js and using the Webdriver API.',
      exampleUsage: `
        module.exports = {
          'Demo test Google' : function (browser) {
            browser
              .url('http://www.google.com')
              .waitForElementVisible('body', 1000)
              .setValue('input[type=text]', 'nightwatch')
              .waitForElementVisible('button[name=btnG]', 1000)
              .click('button[name=btnG]')
              .pause(1000)
              .assert.containsText('#main', 'Night Watch')
              .end();
          }
        };
      `,
    },
    {
        name: 'QUnit',
        website: 'https://qunitjs.com/',
        description: 'QUnit is a powerful, easy-to-use JavaScript unit testing framework.',
        exampleUsage: `
          QUnit.test('Adding numbers', function(assert) {
            assert.equal(2 + 2, 4, '2 + 2 equals 4');
          });
        `,
      },
      {
        name: 'Tap',
        website: 'https://node-tap.org/',
        description: 'Tap is a Test-Anything-Protocol library for JavaScript.',
        exampleUsage: `
          const test = require('tap');
    
          test('Adding numbers', t => {
            t.equal(2 + 2, 4, '2 + 2 equals 4');
            t.end();
          });
        `,
      },
      {
        name: 'Jest Extended',
        website: 'https://github.com/jest-community/jest-extended',
        description: 'Jest Extended extends Jest with additional matchers and assertions.',
        exampleUsage: `
          test('Adding numbers', () => {
            expect(2 + 2).toBeGreaterThan(3);
          });
        `,
      },
      {
        name: 'CodeceptJS',
        website: 'https://codecept.io/',
        description: 'CodeceptJS is a modern end-to-end testing framework for NodeJS.',
        exampleUsage: `
          Scenario('Adding numbers', ({ I }) => {
            I.amOnPage('/');
            I.see('Welcome');
          });
        `,
      },
      {
        name: 'Jasmine DataProvider',
        website: 'https://www.npmjs.com/package/jasmine-data-provider',
        description: 'Jasmine DataProvider allows you to use data-driven testing with Jasmine.',
        exampleUsage: `
          using('Adding numbers', [2, 3], function(a, b) {
            it('should add two numbers correctly', function() {
              expect(a + b).toBe(5);
            });
          });
        `,
      },
      {
        name: 'AVA Macros',
        website: 'https://github.com/avajs/ava#test-macros',
        description: 'AVA Macros allows you to define reusable test patterns, enhancing the test writing experience in AVA.',
        exampleUsage: `
          import test from 'ava';
          import { someMacro, anotherMacro } from 'ava-macros';
    
          test(someMacro, 'argument');
          test(anotherMacro, 42);
        `,
      },
      {
        name: 'Jest Snapshot Matcher',
        website: 'https://github.com/americanexpress/jest-snapshot-matcher',
        description: 'Jest Snapshot Matcher is an extension to Jest that provides additional matchers for snapshot testing.',
        exampleUsage: `
          import 'jest-snapshot-matcher';
    
          test('my snapshot test', () => {
            const obj = { prop: 'value' };
            expect(obj).toMatchSnapshot();
          });
        `,
      },
      {
        name: 'Majestic',
        website: 'https://github.com/Raathigesh/majestic',
        description: 'Majestic is a GUI for Jest that provides a clean and feature-rich interface for running Jest tests.',
        exampleUsage: `// No specific code usage as it's a GUI tool for Jest`,
      },
      {
        name: 'Axe-core',
        website: 'https://www.deque.com/axe/',
        description: 'Axe-core is a JavaScript library that provides accessibility testing in your automated tests.',
        exampleUsage: `
          import { configureAxe, toHaveNoViolations } from 'jest-axe';
    
          const axe = configureAxe({
            rules: {
              'color-contrast': { enabled: false },
            },
          });
    
          expect.extend(toHaveNoViolations);
          test('accessibility test', async () => {
            const result = await axe.run(document);
            expect(result).toHaveNoViolations();
          });
        `,
      },
      {
        name: 'TestArmada',
        website: 'https://testarmada.io/',
        description: 'TestArmada is a tool that provides end-to-end testing with scalability, parallelism, and cross-browser support.',
        exampleUsage: `// No specific code usage as it's a test orchestration tool`,
      }
  ];
  
  
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = testPlugins;
  } else {
    // Code for browser environment
    // For example, you might attach testPlugins to the global window object
    window.testPlugins = testPlugins;
  }  