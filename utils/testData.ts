export const checkoutUsers = [
  {
    firstName: 'LeBron',
    lastName: 'James',
    postalCode: '90001',
  },
  {
    firstName: 'Mary',
    lastName: 'Jane',
    postalCode: '07008',
  },
];

export const invalidCheckoutUsers = [
  {
    firstName: 'John',
    lastName: 'Roblox',
    postalCode: '',
    expectedError: 'Error: Postal Code is required',
  },
];
