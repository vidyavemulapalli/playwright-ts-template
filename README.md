[![GitHub stars](https://img.shields.io/github/stars/vasu31dev/playwright-ts-template)](https://github.com/vasu31dev/playwright-ts-template/stargazers)
![Last Commit](https://img.shields.io/github/last-commit/vasu31dev/playwright-ts-template)
![Pull Requests](https://img.shields.io/github/issues-pr-raw/vasu31dev/playwright-ts-template)

---

<div align="center">

# 🚀 Elevate Your Automation: Redefining the Future of Testing, Where Precision Meets Efficiency.

## Playwright TypeScript Framework: "Your One-Stop Solution for Web (Desktop & Mobile), API, and Electron Automation Testing"

</div>

---

Welcome to the Playwright TypeScript Framework. This unique and comprehensive automation framework is designed to simplify and streamline the process of writing and managing automated tests for Web (Desktop & Mobile), APIs, and Electron Desktop applications. It's built on [Playwright](https://playwright.dev/), a powerful browser automation library, and [TypeScript](https://www.typescriptlang.org/), a statically typed superset of JavaScript, offering a robust and efficient environment for end-to-end testing.

This framework is ideal for QA professionals, developers, and business analysts looking to improve their testing practices and efficiency. It's equipped with utilities that simplify test creation and maintenance, allowing you to focus on writing your tests out of the box.

## Key Features:

- **Unique Page Object Model Design Pattern**: Our Page Object Model (POM) design stands apart from traditional POMs. It's a unique approach that significantly reduces complexity and accelerates coding, making it easier and faster to write scripts compared to traditional POMs. This means less time spent on setup and more time spent on creating effective tests. [Discover how our approach differs with the traditional POM](docs/POMComparision.md).

- **Ease of Use**: Designed to be intuitive and user-friendly, making it an excellent choice for beginners to understand and write scripts. This means less time spent on learning the tool and more time spent on creating effective tests.

- **User-Friendly for All Roles**: This framework is not just for QA Automation professionals. Developers, Manual QA, and Business Analysts can also contribute to end-to-end testing, promoting collaboration across different departments and roles.

- **Utility Functions**: Simplifies element identification, performing general actions like button clicks, data input and asserting results. Additionally, it includes built-in functions for managing conditions and ensures a consistent default LoadState across applications.

- **Customizable**: Easily adaptable to meet individual project needs, fitting seamlessly into any project, regardless of its specific requirements or constraints.

- **Inbuilt CI/CD Support with GitHub Actions**: Facilitates continuous integration and continuous delivery with inbuilt support for GitHub actions, automating your testing process from code integration to delivery.

- **Versatile Support**: It facilitates testing across Web (Desktop & Mobile),APIs and, Electron Desktop apps, allowing comprehensive testing across different platforms and applications.

- **Detailed Reporting**: Provides screenshots, videos, and traces of test failures, making it easier to debug and resolve the issues.

- **Local Web Server**: Allows you to test UI code changes directly on your local machine or on a VM, by effortlessly initializing a local web server, eliminating the need for a separate testing environment.

In summary, the Playwright TypeScript Framework is a powerful, flexible, and user-friendly tool that leverages the power of Playwright and TypeScript. It's an excellent choice for teams looking to improve their testing practices and efficiency.

## Table of Contents

- [**Getting Started**](#getting-started)
  - [Tools & Frameworks](#tools--frameworks)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Project Update Guide](#project-update-guide)
- [**Project Structure**](#project-structure)
- [**Framework Setup**](#framework-setup)
  - [Page set up](docs/FrameworkSetup.md#page-set-up)
- [**Usage**](#usage)
  - [Working with Page Objects](#page-objects)
  - [Creating a Spec File](#writing-tests-in-a-spec-file)
- [**Utilities**](#utilities)
  - [Page Utilities](docs/Utilities.md#page-utilities)
  - [Locator Utilities](docs/Utilities.md#locator-utilities)
  - [Handling Frames](docs/Utilities.md#handling-frames)
  - [Action Utilities](docs/Utilities.md#action-utilities)
  - [Managing Alerts](docs/Utilities.md#managing-alerts)
  - [Element Utilities](docs/Utilities.md#element-utilities)
  - [Assertion Utilities](docs/Utilities.md#assert-utilities)
  - [Optional Parameter Type Objects](docs/Utilities.md#optional-parameter-type-objects)
  - [Test annotations](docs/Utilities.md#test-annotations)
- [**Executing Tests**](#executing-tests)
  - [Using the Playwright Plugin](#run-tests-using-plugin)
  - [Command-Line Execution](#running-tests-via-the-command-line-interface)
  - [Report Generation and Viewing](#report-generation-and-viewing)
- [**Additional Playwright Features**](#additional-playwright-features)
- [**Best Practices**](#best-practices)
- [**Contribution guide**](#contribution-guide)

## Getting Started

### Tools & Frameworks

- **[TypeScript](https://www.typescriptlang.org/)**: A statically typed superset of JavaScript programming language, enhancing code quality and understandability.
- **[Playwright Test](https://playwright.dev/docs/test-configuration)**: A modern end-to-end testing framework, facilitating [test creation](https://playwright.dev/docs/api/class-test), [execution](https://playwright.dev/docs/running-tests), [fixture management](https://playwright.dev/docs/test-fixtures), and [report generation](https://playwright.dev/docs/test-reporters).
- **[Playwright Assertions](https://playwright.dev/docs/assertions)**: Provides robust assertion capabilities for validating test outcomes.
- **[Allure Report](https://docs.qameta.io/allure/)**: A flexible and visually appealing reporting tool, offering clarity on test results.
- **[ESLint](https://eslint.org/)**: A pluggable linting utility for JavaScript and TypeScript, ensuring code consistency and detecting potential errors.
- **[Prettier](https://prettier.io/)**: An opinionated code formatter, ensuring consistent code style across the project.
- **[Logger (Winston)](https://www.npmjs.com/package/winston)**: A versatile logging library, producing both file-based logs and color-coded console outputs.
- **[Husky](https://www.npmjs.com/package/husky)**: Manages Git hooks to enforce quality checks, such as linting, before commits.
- **[Github Actions](https://docs.github.com/en/actions/learn-github-actions/understanding-github-actions)**: A CI/CD platform integrated with GitHub, automating workflows like test execution on pull requests. Enhanced with [Playwright's CI guide](https://playwright.dev/docs/ci-intro).

### Prerequisites

Before you begin, there are some essential requirements you must meet. Ensure you have the following software installed on your machine:

- **[npm (v8.0.0 or later)](https://docs.npmjs.com/cli/v9/configuring-npm)**: Package manager for JavaScript, used to install and manage software packages.
  - To verify your current version, use the command `npm -v`.
  - If npm isn't installed, follow the [npm installation guide](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm).
- **[Node.js (v16.0.0 or later)](https://nodejs.org/en/download)**: JavaScript runtime built on Chrome's V8 JavaScript engine, allowing the execution of JavaScript server-side.
  - To verify your current version, use the command `node -v`.
  - if Node.js isn't installed, download and install it from the title link provided.
- **[Git](https://git-scm.com/downloads)**: Distributed version control system used to track changes in source code during software development.
  - To check if Git is installed, run the command `git --version`.
  - If Git isn't installed, download and install it from the [official Git website](https://git-scm.com/downloads).
- **VSCode Plugins**:
  - **[Prettier - Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)**: A tool for consistent code formatting. Install it directly from the title link provided.
  - **[ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)**: A tool for identifying and fixing linting issues. Install it directly from the title link provided.
- **VSCode Settings**: To ensure consistency with the prettier format settings, apply the following configurations in your VSCode settings (use `Cmd+` for Mac and `Ctrl+` for Windows , to access the settings window):
  - **Quote Style**: Set `typescript.preferences.quoteStyle` to `single` for consistent quote usage across your code.
  - **Format On Save**: Enable `Format On Save Mode` and set it to `file`. This ensures your code is automatically formatted every time you save, enhancing readability and consistency.

### Installation

Begin your project by following the steps to install it either with command-line instructions or by doing it step-by-step manually.

#### CLI Installation

This method makes setup easy by avoiding the long steps in the manual installation process. It automatically installs all the dependencies, libraries, playwright browsers, Winston logger and Husky pre-commit hook that are necessary to start with your project. Initializing the project, also intitialises a new Git repository if neither the current nor the parent directory is a Git repository.

The installation steps are below:

1. Install Node.js
   Node.js installation can be done via direct from the website or from CLI. Find the [Node.js installation steps](https://github.com/vasu31dev/playwright-ts-cli#1-install-nodejs) here.

2. Create a Playwright Test Directory
   ```bash
    mkdir playwright-e2e-tests
    cd playwright-e2e-tests
   ```
3. Install vasu-playwright-cli

   ```bash
   npm i -D vasu-playwright-cli
   ```

   This step installs all the above mentioned dependencies, libraries, playwright browsers, logger and pre-commit hook.

4. Run the below command to initialise a project
   ```bash
   npx vasu-playwright-cli init
   ```
   This command will set up a new project with ready to use Playwright TypeScript framework including:
   - Setup the Playwright TypeScript framework template with sample tests.
   - Create a new `package.json` file with all the necessary dependencies.
   - Initializing a new Git repository if neither the current nor parent directory is a Git repository.
   - Installing all the npm packages including the playwright utils library which contains playwright helper methods.

#### Manual Installation

This is a step by step process to install all the dependencies, libraries and playwright browsers manually.
Please refer to the [Installation section](docs/Installation.md#installation) for complete instructions on setting up the project on your local machine.

### Project Update Guide

Keeping your project up to date is crucial.

#### Update Playwright library

- Run the below command to update the Playwright library with the latest version of utility functions.

  ```bash
  npm i -D vasu-playwright-utils@latest
  ```

  This command keeps your Playwright library up to date with the latest playwright utilities which contain the helper methods that are updated regularly.

- For further more steps and how to fix dependency errors while installing packages after the project update, please visit [Project Update Guide section](docs/Installation.md#project-update-guide).

## Project Structure

Understanding the project's architecture is key to working with the code. Please refer to the [Project Structure section](docs/ProjectStructure.md) for an overview of the directory layout and file organization.

## Framework Setup

Learn how to configure and customize the framework to suit your needs. Please refer to the [Framework Setup section](docs/FrameworkSetup.md) for detailed instructions.

### Page Context set up

Setting up a page context is a common task in web testing. Please refer to the [Pages section](docs/FrameworkSetup.md) on how to set up a page context before each test.

## Usage

### Page Objects

Page objects are utilized to encapsulate information about the elements present on each page of your application. They also provide a structured way to write action and assertion functions for various functionalities on each page. This approach promotes code reusability and makes the tests easier to maintain and understand. Page objects can be found in the `pages` directory.

Here's an example of a page object under the `pages` package:

**sauce-demo-login-page.ts**

```typescript
//importing utility functions
import { click, clickAndNavigate, fill, gotoURL } from 'vasu-playwright-utils';
import { failureLoginCredentials, sauceDemoCredentials } from '../../testdata/sauce-demo-test-data';
import { expectElementToBeVisible } from 'vasu-playwright-utils';
import { getLocator, getLocatorByPlaceholder, getLocatorByRole } from 'vasu-playwright-utils';

const userName = `#user-name`;
const password = () => getLocator(`#password`).or(getLocatorByPlaceholder('Password', { exact: true }));
const login = () => getLocatorByRole('button', { name: 'Login' });
const errorMessage = `//*[contains(@class,'error-message')]`;

export async function navigateToSauceDemoLoginPage() {
  await gotoURL('https://www.saucedemo.com/');
}

export async function logInSuccessfully() {
  await fill(userName, successLoginCredentials.username);
  await fill(password(), successLoginCredentials.password);
  await clickAndNavigate(login());
}

export async function failureLogin() {
  await fill(userName, failureLoginCredentials.username);
  await fill(password(), failureLoginCredentials.password);
  await click(login());
}

export async function verifyErrorMessageForFailureLogin() {
  await expectElementToBeVisible(errorMessage);
}

export async function verifyLoginPageisDisplayed() {
  await expectElementToBeVisible(userName);
}
```

In this example, the `sauce-demo-login-page` represents the login page within the application. It includes methods to navigate to the Saucedemo homepage, execute both successful and unsuccessful login actions, verify the success of the login in the successful login scenario, and confirm the display of an error message in the case of a failed login.

Refer to the [Utilities](docs/Utilities.md) section on how to use the reusable methods.

Refer to the [Running Tests](#executing-tests) section below on how to run tests.

### Writing Tests in a spec file

Tests are written in the `specs` directory. Each test file should correspond to a specific feature or functionality of the application under test. Tests are constructed using Page objects.

Here's an example of a test file under the `specs` directory:

**sauce-demo-preferred-pom.spec.ts**

```typescript
//import test from PageSetup.ts which sets up the page before each test
import { test } from '@pagesetup';

//importing page objects to use all functions within that page to construct the tests
import * as LoginPage from 'tests/pages/preferredPOM/sauce-demo-login-page';
import * as MiniCart from 'tests/pages/preferredPOM/sauce-demo-mini-cart';
import * as ProductsPage from 'tests/pages/preferredPOM/sauce-demo-products-page';

test.describe('Saucedemo tests for successful, unsuccessful logins and add product to cart', () => {
  test('Saucedemo tests - Successful login will display Products Page', async () => {
    await LoginPage.navigateToSauceDemoLoginPage();
    await LoginPage.logInSuccessfully();
    //verifying products page is displayed on successful login
    await ProductsPage.verifyProductsPageDisplayed();
  });

  test('Saucedemo test - Add product to cart', async () => {
    await LoginPage.navigateToSauceDemoLoginPage();
    await LoginPage.logInSuccessfully();
    await ProductsPage.verifyProductsPageDisplayed();
    await ProductsPage.addToCartByProductNumber(1);
    //verifying mini cart count is updated to 1
    await MiniCart.verifyMiniCartCount('1');
  });

  test('Saucedemo test - Error message is displayed and Products page is not displayed on failed login', async () => {
    await LoginPage.navigateToSauceDemoLoginPage();
    await LoginPage.failureLogin();
    await LoginPage.verifyErrorMessageForFailureLogin();
    //verifying Login is still displayed
    await LoginPage.verifyLoginPageisDisplayed();
    //verifying Products Page is not displayed
    await ProductsPage.verifyProductsPageNotDisplayed();
  });
});
```

In this example, we are setting the page state by importing `test` from `@PageSetup` and writing the spec file. Here are some important points to note:

1. Import `test` from `@PageSetup` instead from `@playwright/test`. `page-setup` is customized for this framework to set the page state. This ensures that the page is set up correctly before each test.

2. `setPage` function from `page-setup` file will set the page state before each test and is imported to our spec files while executing the tests. If you want to use the Playwright page directly to write our tests, we can use `getPage` function from `page-utils` file. The page object is managed by the framework, and we can use the `setPage` and `getPage` functions to set and get the page state, ensuring that all of the pages operate on the same page object.

3. We first navigate to the home page, then perform the login action, and finally verify if the login was successful.

In this example, the `LoginPage` represents a login page within the application. It includes methods to navigate to the homepage, perform a login action, and assertions for successfull and failed logins. Similarly, `ProductsPage` and `MiniCart` are also page objects that have functions for their respective pages.

#### Parameterising Tests

#### Test and Project parameterisation

Playwright supports parameterisation both at test level and project level. Sample parameterised test spec file was added as `sauce-demo-parameterised.spec.ts` under `specs` folder for easy reference. For project level parameterisation, please refer the Playwright documentation [here](https://playwright.dev/docs/test-parameterize#parameterized-projects).

#### Passing environment variables

You can pass environment variables to Playwright test scripts to configure and customize their behavior. These variables are useful for storing sensitive information like API keys and configuring test parameters based on the environment. You can set and use these variables in various ways, from the command line to test configurations. For more information on how to set and use these variables, please refer the Playwright documentation [here](https://playwright.dev/docs/test-parameterize#parameterized-projects).

#### Test data from CSV file

For data driven approach, Playwright supports creating tests from csv file. For more information, please refer the Playwright documentation[here](https://playwright.dev/docs/test-parameterize#create-tests-via-a-csv-file).

## Utilities

Explore various utility functions and helpers that can make your testing more efficient. The Utilities section in this project encompasses a variety of functions designed to enhance the efficiency of your testing process. These utilities include:

1. [Page Utilities](docs/Utilities.md#page-utilities): Functions that assist in setting and getting page objects, switching between the pages in between the tests and close a page.
2. [Locator Utilities](docs/Utilities.md#locator-utilities): Functions that assist in locating elements on the page, making it easier to interact with them.
3. [Action Utilities](docs/Utilities.md#action-utilities): Functions that encapsulate standard actions such as clicking, form filling, keyboard events, and dragging; providing a more concise way to execute these operations within your tests.
4. [Element Utilities](docs/Utilities.md#element-utilities): Functions for handling conditional statements with web elements, such as checking if an element is visible, hidden, or contains certain text or input values.
5. [Assertion Utilities](docs/Utilities.md#assert-utilities): Helpers that simplify the process of making assertions about the state of the application, enhancing the readability and maintainability of your tests.
6. [Optional Parameter Type Objects](docs/Utilities.md#optional-parameter-type-objects): Provides a set of options for utility modules.

Please refer to the [Utilities section](docs/Utilities.md) for a comprehensive guide to the available utilities in this project, including detailed descriptions and examples of how to use them.

## Executing Tests

We have the flexibility from executing a single test to executing a specific set of tests, or the entire test suite. Testing can be carried out on a single browser or across multiple browsers simultaneously. By default, tests run in a headless mode, and the test outcome is displayed in the terminal.

### Run tests using plugin

**`Playwright Test for VSCode`** plugin empowers you to run specific tests or entire test suites directly from the editor. You can conveniently trigger tests with a click, making it efficient to validate changes.

For detailed guidance on plugin installation, configuring test settings in the playwright.config file, and executing tests, please visit [Executing tests using a Playwright plugin](docs/ExecutingTests.md#run-tests-using-the-playwright-plugin).

### Parallel Execution

Playwright allows you to execute tests in parallel across multiple workers. This can significantly speed up the execution of your test suite.

To enable parallel execution, add the following line at the top of your spec file, above the `test` block:

```typescript
test.describe.configure({ mode: 'parallel' });
```

The number of workers can be configured either in the `playwright.config` file or via the command-line interface.

### Running Tests via the Command-Line Interface

Utilize a variety of commands to execute your tests in different modes. Below are a few illustrative examples:

#### npm run commands

The `package.json` file contains several scripts designed to streamline test execution. Here are a few common examples:

- To run a single test in chromium headed mode (i.e., with the browser UI visible), use the `grep` command to specify the test:

```bash
npm run test:chromium-headed -- -g 'login test'
```

- To run all the tests in a spec file in chromium headless mode:

```bash
npm run test:chromium -- nucleus.spec.ts
```

- To run all the tests in multiple spec files in headed mode:

```bash
npm run test:chromium-headed -- checkout.spec.ts nucleus.spec.ts
```

- To run all the tests in a spec file with 3 threads, and 2 retries in chromium headless mode:

```bash
npm run test:chromium -- nucleus.spec.ts -j 3 --retries 2
```

- To run in debug mode:

```bash
npm run test:chromium-headed -- nucleus.spec.ts --debug
```

- To run all the smoke tests using the tag in headless mode for all the projects:

```bash
npm run test -- -g '@smoke'
```

- To run all tests in headless mode for all the projects:

```bash
npm run test
```

#### npx playwright test commands

You can also use the playwright command to run your tests as illustrated in the below example:

```bash
npx playwright test -c playwright.config.ts -g "logo is present @reg" --headed -j 1 --retries 0
```

Here's what each option does:

- `-c`: Specifies the configuration file for Playwright. In this case, it's `playwright.config.ts`.
- `-g`: This is the "grep" option, which allows you to run specific tests instead of all of them. In this case, it's running the test with the name "logo is present @reg".
- `-j`: Specifies the number of workers to use. In this case, it's `1`.
- `--retries`: Specifies the number of times to retry failed tests. In this case, it's `0`.
- `--headed`: Runs the tests in headed mode. By default, tests are run in headless mode.
- `--project=chromium`: Runs the tests in the Playwright Chromium browser. By default, it will run all the projects in the playwright.config.ts
- `--repeat-each 3`: Repeats each test 3 times. This is useful for verifying the stability of a test or checking intermittent issue fixes locally by running the test multiple times.
- `--grep-invert`: The opposite of `-g` or grep. It filters out the tests to run.
- `--max-failures 4`: Stops after the first 4 test failures. This includes a count of failures in the retry test as well.
- `--list`: Lists all the tests, but does not run them.

[![CLI Parallel Execution](http://img.youtube.com/vi/gtkoLizAsaw/0.jpg)](https://www.youtube.com/watch?v=gtkoLizAsaw 'CLI Parallel Execution')

For more information, please refer to the [Playwright CLI documentation](https://playwright.dev/docs/test-cli).

## Report Generation and Viewing

Playwright Test offers several built-in reporters tailored for various requirements, while also offering the flexibility to seamlessly integrate custom reporters. You can configure these reporters either through the command line or within the `playwright.config.ts` file. For a comprehensive guide on Playwright's in-built reporters, refer to the official [documentation](https://playwright.dev/docs/test-reporters).

### Accessing Reports via Command-Line Interface (CLI)

- **Playwright command**: After executing tests, you can view the reports using the following command:

```bash
npx playwright show-report <path to the report>
```

- **Framework Configured script**: This framework's configuration for viewing reports is defined in the `package.json` under the `scripts` section:

```json
"report": "playwright show-report playwright-report"
```

To access the reports post-test execution using this configuration, run:

```bash
npm run report
```

## Additional Playwright Features

- **UI Mode**: Playwright's UI mode allows you to explore, run, and debug tests in a watch mode. Dive deeper into this feature [here](https://playwright.dev/docs/test-ui-mode).

- **Test Generator**: With Playwright, you can automatically generate tests. It inspects the page to determine the optimal locator, prioritizing by role, text, and test ID locators. Learn more about test generation using `Codegen` [here](https://playwright.dev/docs/codegen).

- **Trace Viewer**: The Playwright Trace Viewer offers a graphical interface to review recorded traces post-execution. Get more details [here](https://playwright.dev/docs/trace-viewer).

## Best Practices

Here are some recommended best practices when using this framework:

- **Use Utility Functions**: Whenever possible, use the [Utilities](docs/Utilities.md) functions provided in the framework, instead of directly using Playwright methods. These utility functions are designed to simplify common tasks and make your tests more readable and maintainable.

- **Feedback on Utility Functions**: If you encounter a missing utility function for a specific action or assertion, please provide feedback for future improvements. In the meantime, use the corresponding Playwright method with `getPage` from `@PageSetup` for the task at hand, and once we introduce new utility functions, you can easily switch to them. Your feedback is crucial to enhancing our utilities.

- **Conditional Statements**: Instead of manually implementing waits, use functions like `isElementVisible`, `isElementChecked` from [elementutils](docs/Utilities.md#elementutils). These functions automatically wait for the element to become visible, with customizable timeout options. It's advisable to avoid using these for assertions; instead, utilize [AssertUtils](docs/Utilities.md#assertutils) wherever possible.

- **Retrieving Text and Input Values**: To fetch texts or input values, consider functions like `getAllTexts` and `getAllInputValues` from [elementutils](docs/Utilities.md#elementutils). These methods come with built-in waits, ensuring they only proceed once an element is available, preventing premature returns of an empty Array<string>.

- **clickandNavigate vs click**: If a click action triggers page navigation, use the `clickandNavigate` utility function instead of the `click` function. `clickandNavigate` function includes built-in checks for frame navigation and waits for a new page to load. Use the `click` function if it is an Ajax call when you don't navigate to a different page.

- **Fill vs pressSequentially**: Use the fill utility function as default to fill the form fields. Use presssequentially utility function when you want to simulate entering character by character likely to be the keyboard press events, such as when testing auto-search suggestions or autofill features. [Playwright type documentation](https://playwright.dev/docs/input#type-characters)

- **Web-First Assertions**: Prioritize using playwright web-first assertions in your tests instead of jest or other library assertions. [Playwright Web First Assertions documentation](https://playwright.dev/docs/best-practices#use-web-first-assertions)

- **Soft Assertions for Non-Critical Checks**: Use a soft assertion when a test assertion isn't critical, allowing the test to continue and fail at the end. For critical assertions, use a hard assertion i.e. the default assertion. [Playwright Soft Assertions documentation](https://playwright.dev/docs/test-assertions#soft-assertions)

- **Backticks for Xpath & CSS**: Always use backticks for Xpath & CSS selectors so that you can use single & double quotes together if needed without any escape characters.

- **Playwright's Inbuilt Features**: Playwright comes with a wide range of inbuilt features. Make sure to utilize these as needed.
  - [Local Webserver](https://playwright.dev/docs/test-webserver)
  - [Mocking](https://playwright.dev/docs/mock)
  - [Parallelism and sharding](https://playwright.dev/docs/test-parallel)
  - [Playwright Configuration](https://playwright.dev/docs/test-configuration)
    - [use Options](https://playwright.dev/docs/test-use-options)
    - [TestConfig](https://playwright.dev/docs/api/class-testconfig)
  - [Mobile Emulation](https://playwright.dev/docs/emulation)
  - [Playwright Test methods](https://playwright.dev/docs/api/class-test)
  - [Debugging](https://playwright.dev/docs/debug)

In addition to these, Playwright also recommends following certain best practices. You can find more details in the [Playwright Best Practices documentation](https://playwright.dev/docs/best-practices)

## Contribution guide

Contributions are welcome! Please read the contributing guidelines first. (In progress)
