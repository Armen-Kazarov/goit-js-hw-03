'use strict'

const products = [
  { name: 'Радар', price: 1300, quantity: 4 },
  { name: 'Сканер', price: 2700, quantity: 3 },
  { name: 'Дроид', price: 400, quantity: 7 },
  { name: 'Захват', price: 1200, quantity: 2 },
];

const calculateTotalPrice = function(allProducts, productName) {
  let sumPrice;

  for(let i = 0; i < products.length; i += 1) {
    let obj = products[i];

    if(obj.name === productName) {
      sumPrice = obj.price * obj.quantity;
    }
  }

  return sumPrice;
};

console.log(calculateTotalPrice(products, 'Радар'));

console.log(calculateTotalPrice(products, 'Дроид'));