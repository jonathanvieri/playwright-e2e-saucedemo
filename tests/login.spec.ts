import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

test('user can login with valid credentials', async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.goto();
  await loginPage.login();

  await expect(page).toHaveURL(/inventory/);
  await expect(page).toHaveTitle('Swag Labs');
});
