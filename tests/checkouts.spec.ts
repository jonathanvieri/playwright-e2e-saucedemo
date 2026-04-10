import { test, expect } from './fixtures';
import { InventoryPage } from '../pages/InventoryPage';
import { CartPage } from '../pages/CartPage';
import { CheckoutPage } from '../pages/CheckoutPage';

test('user can complete checkout flow', async ({ loggedInPage }) => {
  const inventoryPage = new InventoryPage(loggedInPage);
  const cartPage = new CartPage(loggedInPage);
  const checkoutPage = new CheckoutPage(loggedInPage);

  // Add item
  inventoryPage.addBackpackToCart();

  // Go to cart
  cartPage.goToCart();

  // Checkout
  await cartPage.clickCheckout();

  await checkoutPage.fillInformation('Shiba', 'Inu', '12345');
  await checkoutPage.continueCheckout();

  await checkoutPage.finishCheckout();

  // Verify success
  await expect(checkoutPage.getSuccessHeader()).toBeVisible();
  await expect(checkoutPage.getSuccessMessage()).toBeVisible();
});
