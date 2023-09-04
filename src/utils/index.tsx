// this function takes an array of products and returns the total price
// @param {Array} products  cart products: array of objects
// @returns {number} sum total price

import { CardProps } from "../interfaces/Card";

export const totalPrice = (products: CardProps[]): number => {
  let sum: number = 0;
  products.forEach((product) => (sum += Number(product.price)));

  return sum;
};
