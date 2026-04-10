import { Page } from '@playwright/test';

export class CartPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async goToCart() {
    await this.page.getByTestId('shopping-cart-link').click();
  }

  async clickCheckout() {
    await this.page.getByTestId('checkout').click();
  }

  getCartItem() {
    return this.page.getByTestId('inventory-item');
  }
}
