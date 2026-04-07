import { Page } from '@playwright/test';
import { config } from '../utils/config';

export class LoginPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async goto() {
    await this.page.goto(config.baseUrl);
  }

  async login(username: string, password: string) {
    await this.page.getByTestId('username').fill(username);
    await this.page.getByTestId('password').fill(password);
    await this.page.getByTestId('login-button').click();
  }

  getErrorMessage() {
    return this.page.getByTestId('error');
  }
}
