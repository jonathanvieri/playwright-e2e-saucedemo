import dotenv from 'dotenv';

dotenv.config();

export const config = {
  baseUrl: process.env.BASE_URL!,
  users: {
    standard: {
      username: process.env.STANDARD_USERNAME!,
      password: process.env.STANDARD_PASSWORD!,
    },
    invalid: {
      username: process.env.INVALID_USERNAME!,
      password: process.env.INVALID_PASSWORD!,
    },
  },
};
