import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { config } from '../utils/config';

test('user can login with valid credentials', async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.goto();
  await loginPage.login(config.users.standard.username, config.users.standard.password);

  await expect(page).toHaveURL(/inventory/);
  await expect(page).toHaveTitle('Swag Labs');
});

test('user cannot login with invalid credendentials', async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.goto();
  await loginPage.login(config.users.invalid.username, config.users.invalid.password);

  await expect(loginPage.getErrorMessage()).toBeVisible();
});
