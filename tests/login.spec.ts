import { test, expect } from './fixtures';
import { LoginPage } from '../pages/LoginPage';
import { config } from '../utils/config';
import { InventoryPage } from '../pages/InventoryPage';

test('@smoke user can login with valid credentials', async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.goto();
  await loginPage.login(config.users.standard.username, config.users.standard.password);

  await expect(page).toHaveURL(/inventory/);
  await expect(page).toHaveTitle('Swag Labs');
});

test('@smoke user cannot login with invalid credendentials', async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.goto();
  await loginPage.login(config.users.invalid.username, config.users.invalid.password);

  await expect(loginPage.getErrorMessage()).toBeVisible();
});

test('@smoke user can logout successfully', async ({ loggedInPage }) => {
  const inventoryPage = new InventoryPage(loggedInPage);

  await inventoryPage.logout();

  await expect(loggedInPage).toHaveURL('/');
});
