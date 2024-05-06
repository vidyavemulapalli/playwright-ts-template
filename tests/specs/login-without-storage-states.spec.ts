// @fixturesetup is the alias path set up for importing fixtures from testFixtures file.
// Don't have to import individual page objects because they are initialized in fixtures and passed as test parameters.
import { test } from '@fixturesetup';
import { standardUserCredentials, visualTestUserCredentials } from '@testdata/sauce-demo-test-data';

test.describe.configure({ mode: 'parallel' });
/**
 * To run tests with different user storageStates in the same spec file then isolate them in to test.describe blocks
 * See https://playwright.dev/docs/next/auth#multiple-signed-in-roles
 */
test.describe('Saucedemo tests for successful, unsuccessful logins and add products to cart @smoke', () => {
  // beforEach hook to navigate to home page in each test
  test.beforeEach('Navigating to sauce demo page', async ({ loginPage }) => {
    await loginPage.navigateToSauceDemoLoginPage();
  });
  test('Saucedemo tests - Successful login will display Products Page', async ({ loginPage, productsPage }) => {
    await loginPage.loginWithValidCredentials(standardUserCredentials);
    // verifying products page is displayed on successful login
    await productsPage.verifyProductsPageIsDisplayed();
  });

  test('Saucedemo test - Add product to cart', async ({ loginPage, productsPage, miniCartPage }) => {
    await loginPage.loginWithValidCredentials(visualTestUserCredentials);
    await productsPage.verifyProductsPageIsDisplayed();
    await productsPage.addToCartByProductNumber(1);
    // verifying mini cart count is updated to 1
    await miniCartPage.verifyMiniCartCount('1');
  });

  test('Saucedemo test - Products page is not displayed on failed login', async ({ loginPage, productsPage }) => {
    await loginPage.loginWithInvalidCredentials();
    // verifying Login is still displayed
    await loginPage.verifyLoginPageIsDisplayed();
    // verifying Products Page is not displayed
    await productsPage.verifyProductsPageIsNotDisplayed();
  });
});
