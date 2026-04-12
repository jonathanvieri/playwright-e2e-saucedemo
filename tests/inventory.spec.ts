import { test, expect } from './fixtures';
import { InventoryPage } from '../pages/InventoryPage';

test('@regression user can add and remove item from cart', async ({ loggedInPage }) => {
  const inventoryPage = new InventoryPage(loggedInPage);

  // Add item
  await inventoryPage.addBackpackToCart();
  await expect(inventoryPage.getShoppingCartBadge()).toHaveText('1');

  // Remove item
  await inventoryPage.removeBackpackFromCart();
  await expect(inventoryPage.getShoppingCartBadge()).toBeHidden();
});
