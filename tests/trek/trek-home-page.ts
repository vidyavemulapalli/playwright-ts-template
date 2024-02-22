import {
  click,
  clickAndNavigate,
  expectElementToBeVisible,
  fill,
  getLocator,
  getLocatorByRole,
  gotoURL,
} from 'vasu-playwright-utils';

const mountainBikeNodeXpath = () =>
  getLocator(`//*[contains(@qaid,'nav-categories-link-expandMountainBikesMainMenu')]`);
const mountainBikeMenuXpath = () =>
  getLocator(`//*[contains(@qaid,'nav-tab-expandMountainBikesMainMenu-viewAllBikesMountainMenuNode')]`);
const myAccountIcon = '#my-account-dropdown';
const myAccoutPopOver = '#my-account-popover';
const userNameTextField = '#j_username';
const passwordTextField = '#j_password';
const userNameTextFieldWithIndex = () => getLocator(userNameTextField).last();
const logInButton = () => getLocatorByRole('button', { name: 'Log in' });
const logoutLink = () => getLocator('#logout-link').last();

export async function navigateToHomePage() {
  await gotoURL('https://rel.trekbikes.com/us/en_US/');
}

export async function clickBikeMenu() {
  await click(mountainBikeNodeXpath());
}

export async function bikeMenuIsDisplayed() {
  await expectElementToBeVisible(mountainBikeMenuXpath());
}

//b2b login
export async function logIntoB2BSite() {
  await navigateToHomePage();
  await click(myAccountIcon);
  await clickAndNavigate(myAccoutPopOver);
  await expectElementToBeVisible(userNameTextFieldWithIndex());
  await fill(userNameTextField, 'vidya_vemulapalli@trekbikes.com');
  await fill(passwordTextField, 'Test@123');
  await click(logInButton(), { timeout: 10000 });
  await expectElementToBeVisible(logoutLink());
}
