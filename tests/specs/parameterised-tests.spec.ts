/* eslint-disable require-await */
/* eslint-disable @typescript-eslint/no-floating-promises */
import { test } from '@fixturesetup';
import { allure } from 'allure-playwright';

const InvalidCredentialsData: { username: string; password: string }[] = [
  {
    username: 'abc',
    password: 'abc',
  },
  {
    username: '1234',
    password: '1234',
  },
];

test.describe.configure({ mode: 'parallel' });

test.describe('Parameterising tests', () => {
  InvalidCredentialsData.forEach(data => {
    // test.use({ storageState: { cookies: [], origins: [] } });
    test(`Invalid Login - Running same test with different invalid data ${data.username}`, async ({ loginPage }) => {
      // adding parameters for the allure report
      allure.parameter('USERNAME', data.username);
      allure.parameter('PASSOWRD', data.password);

      await test.step('loggin with credentials', async () => {
        await loginPage.navigateToSauceDemoInventoryPage(); // Since we are not loading any storageState, we should see Login page
        await loginPage.loginWithInvalidCredentials(data);
      });
    });
  });
});
