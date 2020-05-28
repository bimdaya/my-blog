---
title: 'Javascript Testing Intro'
slug: 'javascript_testing_intro'
description: 'Discuss basic concepts of Javascript Testing'
coverImage: '/assets/blog/preview/cover.jpg'
date: '2020-03-10'
---

A test is a code that throws an error when the actual result of something does not match the expected output.

## Test Assertion

An assertion library will help our test assertions read more like a phrase you might say which will help people understand our intentions better.

Ex:

`function sum(a, b) { return a + b; }`

```
function expect(actual) {
  return {
    toBe(expected) {
      if (actual !== expected) {
        throw new Error(actual, \"is not equal to\" , expected)
      }
    }
  }
}

result = sum(3, 7)
expected = 10
expect(result).toBe(expected)
```

## Jest

`describe()`

- A Jest method for containing one or more related tests.
- It takes two arguments: a string for describing the test suite and a callback function for wrapping the actual test

```
describe(\"function name\", () => {
  // test cases
});
```

### `test()`

```
function test(title, callback) {
  try {
    callback()
  } catch (error) {
    console.error(error)
  }
}
```

```
it(\"return something\", () => {
    // actual test
});
```

### `it()` vs `test()`

it is an alias of test. So they are exactly the same.

## Asynchronous Tests

- Async tests can be written in two ways.
- Return the Promise object from the test function
  With `async/await` keywords

```
it('returns default intents when fetching fails', async () => {
  expect.assertions(1);
  const param = 'UK';
  const apiUrl = 'http://tw.com';
  const oauthToken = '1234';
  axiosMock.get.mockImplementationOnce(() => Promise.reject());
  await getAvailableIntentsByCountryOfResidence(oauthToken, param, apiUrl).catch(error => expect(error).toBe('Error'));
});
```

- https://techblog.topdesk.com/coding/frontend-testing-with-jest-assertions-deep-dive/

- https://www.pluralsight.com/guides/test-asynchronous-code-jest

## Static Analysis Testing

- Static code analysis is a method of debugging by examining source code before a program is run.
- Linting is the process of running a program that will analyse code for potential errors.
- ESLint is static code analysis and linting tool is a standard tool for Javascript projects.
- By default, ESLint expects ECMAScript 5 syntax.

### `.eslintrc`

Example:

```
{
  \"extends\": \"eslint:recommended\",
  \"parserOptions\": {
    \"ecmaVersion\": 2019,
    \"sourceType\": \"module\",
    \"ecmaFeatures\": {
      \"jsx\": true
    }
  },
  \"rules\": {
    \"valid-typeof\": \"error\"
  }
}
```

- `parserOptions` override settings to enable support for other ECMAScript versions(other than ECMAScript 5) as well as JSX.
- Rules : https://eslint.org/docs/rules/
- Use pre-built ESLint Configuration using extends in config file

### `.eslintignore`

ESLint will ignore everything in `.eslintignore`

Ex:

```
node_modules
Dist
```

Or we could use the same `.gitignore` file and add the following lint command in our `package.json`.

```
{
  ...
  \"scripts\": {
     \"build\": \"babel src --out-dir dist\",
     \"lint\": \"eslint --ignore-path .gitignore\"
   },
  ...
}

```

## Prettier

Prettier scans your files for style issues and automatically reformats your code to ensure consistent rules are being followed for indentation, spacing, semicolons, single quotes vs double quotes, etc.

## Mocking

“When running unit tests, you don’t want to actually make network requests or charge real credit cards. That could… get expensive… and also very, very slow. So instead of running your code exactly as it would run in production, you can modify how some of your JavaScript modules and functions work during tests to avoid test unreliability (flakiness) and improve the speed of your tests.”

### Mock Functions

They let you spy on the behaviour of a function that is called indirectly by some other code, rather than only testing the output.
jest.fn()
Returns a new mock function

Example:

```
// module cal
export function add(a, b) {
	return a + b;
}
```

```
//module main
export function app(a, b) {
	return add(a, b);
}
```

```
//test case
it(\"app() calls add()\", () => {
	cal.add = jest.fn();
      main.app(1,2);

	expect(cal.add(1,2)).toHaveBeenCalledWith(1,2);
});
```

```
// what actually happens is,
it(\"app() calls add()\", () => {
      temp = cal.add;
	cal.add = jest.fn();
      main.app(1,2);


	expect(cal.add(1,2)).toHaveBeenCalledWith(1,2);
      cal.add = temp;
});
```

### `jest.spyOn()`

- Creates a mock function similar to jest.fn but leaves the original implementation in place.
- Returns a Jest mock function.

Example:

```
// module cal
export function add(a, b) {
	return a + b;
}
```

```
//module main
export function app(a, b) {
	return add(a, b);
}
```

```
//test case
it(\"app() calls add()\", () => {
	const addMock = jest.spyOn(cal, \"add\");

      // calls the original implementation
      expect(main.app(1,2)).toEqual(3);
      // to test whether add() is called and with correct params
	expect(addMock(1,2)).toHaveBeenCalledWith(1,2);
});
```

### `jest.mock()`

- Mock a module
  Example:
  https://github.com/transferwise/homepage/blob/c05979fcbacef4fca4194471d09098a6581bd30a/lib/getInitialState/getInitialState.spec.js

- Make a shared JavaScript mock module
  Mock the same file throughout all the tests in your codebase.
  Use **mocks** directory which Jest can load for us automatically.

## Jest CLI

- Run watch mode:

```
jest --watch #runs jest -o by default
jest --watchAll #runs all tests
```

- Run Only Relevant Jest Tests on Git Commit to Avoid Breakages

- Jest is capable of running only the tests and linting only the files that are affected by the files we’re committing with husky and lint-staged to speed up our local test runs as well as help us avoid accidentally committing code that breaks our application.

`npm install --save-dev husky lint-staged`

```
\"husky\": {
    \"hooks\": {
      \"pre-commit\": \"lint-staged && npm run build\"
    }
  },
  \"lint-staged\": {
    \"**/*.+(js|json|css|html|md)\": [
      \"prettier\",
      \"jest --findRelatedTests\",
      \"git add\"
    ]
  },
```

- `lint-staged` : run only the tests that are recently changed
- `jest --findRelatedTests` : find and run all the tests related to the updated files
  When we do a commit it run husky
  Snapshot Testing

- “Snapshot tests are a very useful tool whenever you want to make sure your UI does not change unexpectedly.
  A typical snapshot test case for a mobile app renders a UI component, takes a snapshot, then compares it to a reference snapshot file stored alongside the test. The test will fail if the two snapshots do not match: either the change is unexpected, or the reference snapshot needs to be updated to the new version of the UI component.”

- Easy to compare small JS objects which does not update frequently
  Avoid huge snapshots which will hard to maintain.

## Cypress

- Cypress is an incredibly powerful web testing tool. It’s capable of testing any web application. Its architecture places it a cut above similar end-to-end testing tools.

https://docs.cypress.io/guides/getting-started/writing-your-first-test.html#Special-commands

Example: https://github.com/transferwise/homepage/blob/master/cypress/integration/homepage.spec.js
