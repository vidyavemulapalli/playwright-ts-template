import { test } from '@pagesetup';
import * as Trekb2b from 'tests/trek/trek-home-page';
import * as WarrantyPage from 'tests/trek/trek-warranty-page';

test.skip('warranty page visibility checks', () => {
  test('visibily checks when radio option when multiple elements are visible', async () => {
    await Trekb2b.logIntoB2BSite();
    await WarrantyPage.navigateToWarrantyPage();
    await WarrantyPage.naviagteToNewClaimPage();
    //with this step, selectBikeRadioOption must fail with strict mode locator
    await WarrantyPage.addAnotherClaimLine();
    await WarrantyPage.selectBikeRadiOption();
    await WarrantyPage.isBikeRadioOptionSelected();
  });

  test('submit warranty claim', async () => {
    await Trekb2b.logIntoB2BSite();
    await WarrantyPage.navigateToWarrantyPage();
    await WarrantyPage.naviagteToNewClaimPage();
    await WarrantyPage.fillPONumber('po number');
    await WarrantyPage.fillClaimNotes('test claim notes');
    await WarrantyPage.checkNonWarrantyClaimCheckBox();
    await WarrantyPage.selectBikeRadiOption();
    await WarrantyPage.fillBikeSerialNumber('WTU125QU0331N');
    await WarrantyPage.clickProductButton();
    await WarrantyPage.fillPurchaseDate();
    await WarrantyPage.uploadserialNumberImage('tests/testdata/Images/image1.png');
    await WarrantyPage.fillIssueType('BRAKE CABLE CRACKED');
    await WarrantyPage.selectWhenIssueHappen('Before consumer delivery');
    await WarrantyPage.selectRequestedAction('Replace');
    await WarrantyPage.selectShipmentOptions('Ship it now');
    await WarrantyPage.uploadProofofPurchaseImage('tests/testdata/Images/image1.png');
    await WarrantyPage.uploadDiagnosticReportImage('tests/testdata/Images/image2.png');
    await WarrantyPage.clickSubmitClaimButton();
    await WarrantyPage.verifyClaimSubmission();
  });
});
