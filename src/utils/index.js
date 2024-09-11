/**
 * This function calculates the total price of a new order 
 * @param {Array} products carProduct : Array of Objects
 * @returns {number} Total Price
 */

export const TotalPrice = (products) => {
    let sum = 0;
    products.forEach(product =>  sum += product.price);

    return sum
}

