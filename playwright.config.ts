/**
 * playwright.config.ts: This module is responsible for configuring the Playwright test runner.
 * It includes settings for test execution, browser configuration, and environment variables.
 * See https://playwright.dev/docs/test-configuration for more details.
 */

import { ACTION_TIMEOUT, EXPECT_TIMEOUT, NAVIGATION_TIMEOUT, TEST_TIMEOUT } from 'vasu-playwright-utils';
import { defineConfig, devices } from '@playwright/test';
import dotenv from 'dotenv';
dotenv.config({ path: '.env' });
import path from 'path';
import os from 'os';

/**
 * To run against the local environment, set the URL to your local server like 'https://localhost:9002'
 * You can override the BASE_URL by setting the URL environment variable in .env file or passing it as a command line argument.
 */
export const BASE_URL = process.env.URL || 'https://www.saucedemo.com';
export const STORAGE_STATE_PATH = path.join(__dirname, 'playwright/.auth');
const customLoggerPath = require.resolve('vasu-playwright-utils/custom-logger');
// export const EMPTY_STORAGE_STATE = path.join(__dirname, './tests/testdata/empty-storage-state.json');

export default defineConfig({
  /**
   * The directory where tests are located.
   * See https://playwright.dev/docs/api/class-testconfig#testconfig-testdir
   */
  testDir: './tests',
  /**
   * Determines whether to run tests within each spec file in parallel, in addition to running the spec files themselves in parallel.
   * See https://playwright.dev/docs/api/class-testconfig#testconfig-fullyparallel
   */
  fullyParallel: false,
  /**
   * Whether to fail the build on CI if you accidentally left test.only in the source code.
   * See https://playwright.dev/docs/api/class-testconfig#testconfig-forbidonly
   */
  forbidOnly: !!process.env.CI,
  /**
   * The number of times to retry failed tests. Retries value is only set to happen on CI.
   * See https://playwright.dev/docs/api/class-testconfig#testconfig-retries
   */
  retries: process.env.CI ? 2 : 0,
  /**
   * The number of worker threads to use for running tests. This is set to a different value on CI.
   * See https://playwright.dev/docs/api/class-testconfig#testconfig-workers
   */
  workers: process.env.CI ? 3 : 6,
  /*  Note: Add allure-playwright report */
  /**
   * The reporter to use. This can be set to use a different value on CI.
   * See https://playwright.dev/docs/test-reporters
   */
  reporter: [[customLoggerPath], ['html', { open: 'never' }], ['dot'], ['line'], ['allure-playwright']],
  // reporter: [
  //   [
  //     'allure-playwright',
  //     {
  //       // if it is set to TRUE, the hooks steps will also display in allure report
  //       detail: false,
  //       outputFolder: 'allure-results',
  //       suiteTitle: false,
  //     },
  //   ],
  // ],
  /**
   * Shared settings for all the projects below.
   * See https://playwright.dev/docs/api/class-testoptions
   */
  globalSetup: require.resolve('./test-setup/global-setup'),
  globalTeardown: require.resolve('./test-setup/global-teardown'),
  timeout: TEST_TIMEOUT,
  expect: {
    timeout: EXPECT_TIMEOUT,
  },
  use: {
    headless: true,
    /* Sets extra headers for CloudFlare. */
    extraHTTPHeaders: {
      'CF-Access-Client-Id': process.env.CF_CLIENT_ID || '',
      'CF-Access-Client-Secret': process.env.CF_CLIENT_SECRET || '',
    },
    ignoreHTTPSErrors: true,
    acceptDownloads: true,
    // Set the testIdAttribute for locating elements in the tests with getLocatorByTestId. Default is 'data-testid'.
    // testIdAttribute: 'qa-target',
    /**
     * The base URL to be used in navigation actions such as `await page.goto('/')`.
     * This allows for shorter and more readable navigation commands in the tests.
     */
    baseURL: BASE_URL,
    /* Records traces after each test failure for debugging purposes. */
    trace: 'retain-on-failure',
    /* Captures screenshots after each test failure to provide visual context. */
    screenshot: 'only-on-failure',
    /* Sets a timeout for actions like click, fill, select to prevent long-running operations. */
    actionTimeout: ACTION_TIMEOUT,
    /* Sets a timeout for page loading navigations like goto URL, go back, reload, waitForNavigation to prevent long page loads. */
    navigationTimeout: NAVIGATION_TIMEOUT,
  },

  /**
   * Configure projects for major browsers.
   * See https://playwright.dev/docs/test-configuration#projects
   */
  projects: [
    {
      name: 'setup',
      testMatch: '**/login-storage-setup.ts',
      use: {
        ...devices['Desktop Chrome'],
        viewport: { width: 1600, height: 1000 },
        launchOptions: {
          args: ['--disable-web-security'],
          slowMo: 0,
        },
      },
    },

    /** Due to different view ports in Head and Headless, created 2 projects one for head mode and the same browser for headless. */
    {
      name: 'chromium',
      dependencies: ['setup'],
      use: {
        viewport: null,
        // Set the storage state here if you have only one user to login.
        // storageState: STORAGE_STATE_LOGIN,
        launchOptions: {
          args: ['--disable-web-security', '--start-maximized'],
          /* --auto-open-devtools-for-tabs option is used to open a test with Network tab for debugging. It can help in analyzing network requests and responses.*/
          // args: ["--auto-open-devtools-for-tabs"],
          // channel: 'chrome',
          slowMo: 0,
          headless: false,
        },
      },
    },

    {
      name: 'chromiumheadless',
      dependencies: ['setup'],
      use: {
        ...devices['Desktop Chrome'],
        viewport: { width: 1600, height: 1000 },
        // storageState: STORAGE_STATE_LOGIN,
        launchOptions: {
          args: ['--disable-web-security'],
          // channel: 'chrome',
          slowMo: 0,
          headless: true,
        },
      },
    },

    /******* Uncomment to run tests in other browsers
    {
      name: 'firefox',
      use: {
        ...devices['Desktop Firefox'],
        viewport: { width: 1600, height: 1000 },
        launchOptions: {
          firefoxUserPrefs: {
            'browser.cache.disk.enable': false,
            'browser.cache.memory.enable': false,
          },
        },
      },
    },

    {
      name: 'webkit',
      use: {
        ...devices['Desktop Safari'],
        viewport: { width: 1600, height: 1000 },
      },
    },

    // Test against mobile viewports.
    {
      name: 'Mobile Chrome',
      use: { ...devices['Pixel 5'] },
    },
    {
      name: 'Mobile Safari',
      use: { ...devices['iPhone 12'] },
    },

    // Test against branded browsers.
    {
      name: 'Microsoft Edge',
      use: { ...devices['Desktop Edge'], channel: 'msedge' },
    },
    {
      name: 'Google Chrome',
      use: { ...devices['Desktop Chrome'], channel: 'chrome' },
    },

  ***************/
  ],

  /**
   * If the tests are being run on localhost, this configuration starts a web server.
   * See https://playwright.dev/docs/test-webserver#configuring-a-web-server
   */
  webServer: {
    cwd: `${os.homedir()}/repos/ui`, // You can also use the relative path to the UI repo
    command: 'npm start ui-server', // Start the UI server
    url: BASE_URL,
    ignoreHTTPSErrors: true,
    timeout: 2 * 60 * 1000,
    reuseExistingServer: true,
    stdout: 'pipe',
    stderr: 'pipe',
  },
});
