// /* eslint-disable no-self-assign */
// import { expect, test } from '@pagesetup';
// import { chromium } from '@playwright/test';

// import { click, getLocatorByRole, gotoURL, wait } from 'vasu-playwright-utils';

// const acceptAll = () => getLocatorByRole('button', { name: 'Accept all' });
// const logo = "img[alt='Anaconda.org']";
// const modal = `#transcend-consent-manager`;

// test.skip('clciking on closed shadow DOM element', () => {
//   test('click Accept all button - forcing closed shadow DOM to open', async () => {
//     //     <script type="text/javascript">
//     // Element.prototype._attachShadow = Element.prototype.attachShadow;
//     // Element.prototype.attachShadow = function () {
//     //     return this._attachShadow( { mode: "open" } );
//     // };
//     // </script>

//     await gotoURL('https://anaconda.org/');
//     await click(acceptAll());
//     await wait(5000);
//   });

//   test('click Accept all button - with JS', async () => {
//     const browser = await chromium.launch();
//     const context = await browser.newContext();
//     const page = await context.newPage();

//     await page.goto('https://anaconda.org/');
//     await page.waitForTimeout(10000); // Consider using waitForSelector for specific elements instead of waitForTimeout

//     await expect(page.locator(logo)).toBeVisible();

//     await page.waitForTimeout(10000); // Again, prefer waitForSelector or waitForFunction for dynamic content

//     await page.click(modal); // Replace 'modal-selector' with the actual selector
//     await page.keyboard.press('Tab');

//     // Execute script within the page context to interact with the active element
//     await page.evaluate(() => {
//       const activeElement: Element = document.activeElement;
//       if (activeElement && typeof activeElement.click === 'function') {
//         activeElement.click();
//       } else {
//         console.error('The active element does not support the click() method.');
//       }
//     });
//   });
// });

// await getPage().route('*/', async route => {
//   if (route.request().url().includes('consent-manager')) {
//     await route.abort();
//   } else {
//     await route.continue();
//   }
// });
//  await getPage().evaluate(() => {
//   localStorage.setItem(
//     'tcmConsent',
//     JSON.stringify({
//       purposes: {
//         SaleOfInfo: true,
//         Functional: true,
//         Analytics: true,
//         Advertising: true,
//       },
//       timestamp: new Date().toISOString(),
//       confirmed: true,
//       prompted: true,
//       updated: true,
//     }),
//   );
// });
