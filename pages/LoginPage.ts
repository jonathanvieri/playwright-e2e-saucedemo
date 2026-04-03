import { Page } from '@playwright/test';

export class LoginPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async goto() {
    await this.page.goto('https://www.saucedemo.com/');
  }

  async login() {
    await this.page.getByTestId('username').fill('standard_user');
    await this.page.getByTestId('password').fill('secret_sauce');
    await this.page.getByTestId('login-button').click();
  }
}
