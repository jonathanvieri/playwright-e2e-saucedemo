import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { InventoryPage } from '../pages/InventoryPage';

test('user can add and remove item from cart', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const inventoryPage = new InventoryPage(page);

  await loginPage.goto();
  await loginPage.login('standard_user', 'secret_sauce');

  // Add item
  await inventoryPage.addBackpackToCart();
  await expect(inventoryPage.getShoppingCartBadge()).toHaveText('1');

  // Remove item
  await inventoryPage.removeBackpackFromCart();
  await expect(inventoryPage.getShoppingCartBadge()).toBeHidden();
});
