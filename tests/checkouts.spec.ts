import { test, expect } from './fixtures';
import { InventoryPage } from '../pages/InventoryPage';
import { CartPage } from '../pages/CartPage';
import { CheckoutPage } from '../pages/CheckoutPage';
import { checkoutUsers, invalidCheckoutUsers } from '../utils/testData';

checkoutUsers.forEach((user) => {
  test(`@smoke @regression user can complete checkout flow - ${user.firstName}`, async ({ loggedInPage }) => {
    const inventoryPage = new InventoryPage(loggedInPage);
    const cartPage = new CartPage(loggedInPage);
    const checkoutPage = new CheckoutPage(loggedInPage);

    // Add item
    inventoryPage.addBackpackToCart();

    // Go to cart
    cartPage.goToCart();

    // Checkout
    await cartPage.clickCheckout();

    await checkoutPage.fillInformation(user.firstName, user.lastName, user.postalCode);
    await checkoutPage.continueCheckout();

    await checkoutPage.finishCheckout();

    // Verify success
    await expect(checkoutPage.getSuccessHeader()).toBeVisible();
    await expect(checkoutPage.getSuccessMessage()).toBeVisible();
  });
});

invalidCheckoutUsers.forEach((user) => {
  test('@regression user cannot checkout with missing postal code', async ({ loggedInPage }) => {
    const inventoryPage = new InventoryPage(loggedInPage);
    const cartPage = new CartPage(loggedInPage);
    const checkoutPage = new CheckoutPage(loggedInPage);

    inventoryPage.addBackpackToCart();

    cartPage.goToCart();

    await cartPage.clickCheckout();

    await checkoutPage.fillInformation(user.firstName, user.lastName, user.postalCode);
    await checkoutPage.continueCheckout();

    await expect(checkoutPage.getErrorMessage()).toHaveText(user.expectedError);
  });
});
