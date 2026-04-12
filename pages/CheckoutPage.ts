import { Page } from '@playwright/test';

export class CheckoutPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async fillInformation(firstName: string, lastName: string, postalCode: string) {
    await this.page.getByTestId('firstName').fill(firstName);
    await this.page.getByTestId('lastName').fill(lastName);
    await this.page.getByTestId('postalCode').fill(postalCode);
  }

  async continueCheckout() {
    await this.page.getByTestId('continue').click();
  }

  async finishCheckout() {
    await this.page.getByTestId('finish').click();
  }

  getSuccessHeader() {
    return this.page.getByTestId('complete-text');
  }

  getSuccessMessage() {
    return this.page.getByTestId('complete-header');
  }

  getErrorMessage() {
    return this.page.getByTestId('error');
  }
}
