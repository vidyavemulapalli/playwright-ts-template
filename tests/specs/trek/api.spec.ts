/* eslint-disable @typescript-eslint/no-floating-promises */
/* eslint-disable require-await */
/* eslint-disable @typescript-eslint/require-await */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable no-prototype-builtins */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import { expect, test } from '@pagesetup';
import { allure } from 'allure-playwright';

test.describe('API tests', () => {
  let jsonResponse: any;

  test('Get request', async ({ request }) => {
    // adding metadata in allure rpeort
    allure.description('Verify GET API response');
    allure.severity('critical');
    allure.owner('developer');
    allure.feature('API Feature');
    allure.story('JIRA-01');
    allure.tag('API');
    allure.feature('Feature:API');
    allure.story('GET response');

    await test.step('GET response', async () => {
      const response = await request.get('https://reqres.in/api/users?page=2');
      expect(response.status()).toBe(200);
      expect(response.statusText()).toBe('OK');
      await expect(response).toBeOK();
      jsonResponse = await response.json();
      console.log(jsonResponse);
    });

    //getting first user
    // eslint-disable-next-line require-await, @typescript-eslint/require-await
    await test.step('Getting first user data from the response', async () => {
      const firstUser = jsonResponse.data[0];
      console.log(firstUser);
    });

    // Verify IDs contain '9'
    await test.step('Verify IDs in response data contain 9 using map', async () => {
      const ids: number[] = jsonResponse.data.map((user: any) => user.id);
      const containsID = ids.some(id => id === 9);
      expect(containsID).toBeTruthy();
    });

    await test.step('Verify IDs in response data contain 9 using some', async () => {
      const containsID1 = jsonResponse.data.some((user: any) => user.id === 9);
      expect(containsID1).toBeTruthy();
    });

    await test.step('Verify IDs in response data contain 9 using find', async () => {
      const foundObject = jsonResponse.data.find((obj: any) => obj.id === 9);
      expect(foundObject).toBeTruthy();
    });

    // verify support url
    await test.step('verify support url', async () => {
      expect(jsonResponse.support.url).toBe('https://reqres.in/#support-heading');
    });

    //verify the first name 'Byron' to have the id '10'
    await test.step('verify the first name Byron to have the id 10', async () => {
      const user = jsonResponse.data.find((user: any) => user.first_name === 'Byron');
      // Assert that the user with the first name "Byron" has the ID '10'
      expect(user).toBeDefined();
      expect(user.id).toBe(10);
    });

    //printing the list of keys
    //this doesn't print the sub-keys in an array
    await test.step('printing the list of all main keys from the repsonse', async () => {
      const stringJson = JSON.stringify(jsonResponse);
      const parsedJson = JSON.parse(stringJson);
      const keys = Object.keys(parsedJson);
      console.log(keys);
    });

    //printing keys and sub-keys in an array
    await test.step('printing the list of all main keys and sub-keys from the repsonse', async () => {
      function printKeysAndSubKeys(obj: { [x: string]: any }) {
        Object.keys(obj).forEach(key => {
          console.log(`Main Key: ${key}`);
          const value = obj[key];

          if (Array.isArray(value)) {
            console.log(`Array found at '${key}', printing keys of objects within array:`);
            value.forEach((item, index) => {
              console.log(`Object ${index + 1} keys: ${Object.keys(item).join(', ')}`);
            });
          }
        });
      }
      printKeysAndSubKeys(jsonResponse);
    });
  });

  test('Post request', async ({ request }) => {
    allure.description('Verify POST API response');
    allure.severity('Blocker');
    allure.owner('developer');
    allure.feature('API Feature');
    allure.story('JIRA-02');
    allure.tag('API');

    const response = await request.post('https://reqres.in/api/users', {
      data: {
        name: 'morpheus',
        job: 'leader',
      },
    });
    expect(response.status()).toBe(201);
    expect(response.ok()).toBeTruthy();
    const jsonResponse = await response.json();
    console.log(jsonResponse);

    expect(jsonResponse.createdAt).toBeTruthy();
    expect('createdAt' in jsonResponse).toBeTruthy();

    expect(jsonResponse.id).toBeTruthy();
    expect(jsonResponse.hasOwnProperty('id')).toBeTruthy();

    //printing the list of keys
    const stringJson = JSON.stringify(jsonResponse);
    const parsedJson = JSON.parse(stringJson);
    const keys = Object.keys(parsedJson);
    console.log(keys);
  });

  test('Inavlid GET request', async ({ request }) => {
    allure.description('Verify invalid GET API response');
    allure.severity('critical');
    allure.owner('developer');
    allure.feature('API Feature');
    allure.story('JIRA-01');
    allure.tag('API');
    allure.feature('Feature:API');
    allure.story('GET response');

    await test.step('GET response', async () => {
      const response = await request.get('https://reqres.in/api/users?page=2');
      expect(response.status()).toBe(201);
    });
  });
});

/**Key Differences
Inheritance:

1.hasOwnProperty does not consider the prototype chain; it only checks the object itself.
The in operator checks both the object's own properties and its inherited properties.
Syntax:

2.hasOwnProperty is a method called on the object: object.hasOwnProperty('property').
The in operator is used as 'property' in object.

When to Use Each:

Use hasOwnProperty when you need to ensure the property exists directly on the object, not inherited. This is important in situations where you want to avoid false positives from properties provided by the object's prototype.

Use the in operator when you want to check for the existence of a property and do not care whether it's an own property or inherited. This can be useful for feature detection or when working with objects where prototype inheritance is expected.**/
