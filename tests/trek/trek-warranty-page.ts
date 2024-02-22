import {
  EXPECT_TIMEOUT,
  click,
  clickAndNavigate,
  expectElementToBeChecked,
  expectElementToBeVisible,
  fill,
  getInputValue,
  getLocator,
  gotoURL,
  isElementChecked,
  scrollLocatorIntoView,
  uploadFiles,
  wait,
  waitForElementToBeHidden,
  waitForElementToBeVisible,
} from 'vasu-playwright-utils';
import { Locator } from '@playwright/test';

const startProductClaimButton = `//*[@qaid='warranty-start-new-claim']`;
const warrantyclaimPageHeader = `//*[@qaid='warranty-claim-header']`;
const bikeRadioOption = `//*[@qaid='formGroupBikes']/..`;
const partRadioOption = `//*[@qaid='formGroupPartsAndAccessories']/..`;
const addAnotherClaimLineButton = `//*[@qaid='warranty-claim-line-add-claim']`;
const poNumber = `//*[@qaid='warranty-claim-contact-po-number']//input`;
const claimNotes = `#notes`;
const nonWarrantyClaim = `//*[@qaid='warranty-claim-non-warranty-claim']/..`;
const bikeSerialNumber = `#serial-number`;
const addProductButton = `//*[@qaid='warranty-claim-line-details-serial']/following-sibling::button`;
const bikeModel = `#cl0_model`;
const purchaseDateTextField = `#purchase-date-input`;
const purchaseDate = () => getLocator(`//span[contains(@class,'flatpickr-day')]`).first();
const serialNumberImage = `//*[@qaid='warranty-claim-line-details-serial-image']//input`;
const issueType = `#cl0_issueTypeNameSelected`;
const beforeConsumerDelivery = `#enumDamageOccurredBeforePurchase`;
const afterConsumerDelivery = `#enumDamageOccurredAfterPurchase`;
const replace = `#enumRequestedActionReplace`;
const credit = `#enumRequestedActionCredit`;
const repair = `#enumRequestedActionRepair`;
const greenShipment = `//*[@qaid='formGroupfalse']`;
const shipNow = `//*[@qaid='formGrouptrue']`;
const proofOfPurchaseImage = `//*[@qaid='warranty-claim-line-attachments-proof-0']//input`;
const diagnosticReportImage = `//*[@qaid='warranty-claim-line-attachments-proof-1']//input`;
const submitClaim = `//*[@qaid='warranty-claim-submit']`;
const loadingBar = `(//*[@qaid='pdl-loading-component']//*[@id='loader-1'])[last()]`;

async function fillLoop(locator: string | Locator, text: string) {
  for (let i = 1; i <= 3; i++) {
    console.log('filling ' + i);
    await fill(locator, text);
    await wait(2000);
    if ((await getInputValue(locator)) === text) break;
  }
}

async function checkLoop(locator: string | Locator) {
  for (let i = 1; i <= 3; i++) {
    console.log('checking ' + i);
    await click(locator);
    await wait(2000);
    if (await isElementChecked(locator)) break;
  }
}

export async function navigateToWarrantyPage() {
  await gotoURL('https://rel.trekbikes.com/b2b/us/en_US/warranty-claim/all-warranty-claims/');
}

export async function naviagteToNewClaimPage() {
  await clickAndNavigate(startProductClaimButton);
  await expectElementToBeVisible(warrantyclaimPageHeader);
}

//radio option
export async function selectBikeRadiOption() {
  // await check(bikeRadioOption(), { force: true });
  await checkLoop(bikeRadioOption);
}

//radio option assertion
export async function isBikeRadioOptionSelected() {
  await expectElementToBeChecked(bikeRadioOption);
  await expectElementToBeVisible(bikeSerialNumber);
}

//radio option
export async function selectPartRadiOption() {
  // await check(partRadioOption(), { force: true });
  await checkLoop(partRadioOption);
}

//radio option assertion
export async function isPartRadioOptionSelected() {
  await expectElementToBeChecked(partRadioOption);
}

//add another claim line
export async function addAnotherClaimLine() {
  await click(addAnotherClaimLineButton);
}

// fill Po number
export async function fillPONumber(po: string) {
  await fillLoop(poNumber, po);
}

//fill claim notes
export async function fillClaimNotes(notes: string) {
  await fillLoop(claimNotes, notes);
}

// check non-warranty claim check box
export async function checkNonWarrantyClaimCheckBox() {
  if (!(await isElementChecked(nonWarrantyClaim))) {
    await checkLoop(nonWarrantyClaim);
  }
}

//enter bike serial number
export async function fillBikeSerialNumber(serialNumber: string) {
  await fillLoop(bikeSerialNumber, serialNumber);
}

//click Add product button
export async function clickProductButton() {
  await click(addProductButton);
  await waitForElementToBeHidden(loadingBar, { timeout: 10000 });
  await expectElementToBeVisible(bikeModel, { timeout: EXPECT_TIMEOUT });
}

//enter purchase date
export async function fillPurchaseDate() {
  await click(purchaseDateTextField);
  await click(purchaseDate());
}

//upload bike serial number image
export async function uploadserialNumberImage(path: string) {
  await uploadFiles(serialNumberImage, path);
  await waitForElementToBeVisible(loadingBar, { timeout: EXPECT_TIMEOUT });
  await waitForElementToBeHidden(loadingBar, { timeout: 10000 });
}

//enter issue type
export async function fillIssueType(issue: string) {
  await fillLoop(issueType, issue);
}

//select when issue happen options
export async function selectWhenIssueHappen(issueHappen: string) {
  await scrollLocatorIntoView(beforeConsumerDelivery);
  if (issueHappen.toLowerCase().includes('before')) await checkLoop(beforeConsumerDelivery);
  else await checkLoop(afterConsumerDelivery);
}

//select requested action options
export async function selectRequestedAction(action: string) {
  let locator: string;
  switch (action.toLowerCase()) {
    case 'repair':
      locator = repair;
      break;
    case 'credit':
      locator = credit;
      break;
    case 'replace':
      locator = replace;
      break;
    default:
      console.error('Unknown action:', action);
      return;
  }
  await scrollLocatorIntoView(locator);
  await checkLoop(locator);
}

//select shipment options
export async function selectShipmentOptions(shipmentOption: string) {
  await scrollLocatorIntoView(shipNow);
  if (shipmentOption.toLowerCase().includes('ship it now')) await checkLoop(shipNow);
  else await checkLoop(greenShipment);
}

export async function uploadProofofPurchaseImage(path: string) {
  await uploadFiles(proofOfPurchaseImage, path);
  await waitForElementToBeVisible(loadingBar, { timeout: EXPECT_TIMEOUT });
  await waitForElementToBeHidden(loadingBar, { timeout: 10000 });
}

export async function uploadDiagnosticReportImage(path: string) {
  await uploadFiles(diagnosticReportImage, path);
  await waitForElementToBeVisible(loadingBar, { timeout: EXPECT_TIMEOUT });
  await waitForElementToBeHidden(loadingBar, { timeout: 10000 });
}

export async function clickSubmitClaimButton() {
  await click(submitClaim);
}

export async function verifyClaimSubmission() {
  await expectElementToBeVisible(warrantyclaimPageHeader);
}
