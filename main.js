class Pizza {
  pizzaName;
  toppings = [];
  basePrice = 0;
  size = 'small';

  constructor(pizzaName, toppings, basePrice, size) {
    this.pizzaName = pizzaName;
    this.toppings = toppings;
    this.basePrice = basePrice;
    this.size = size;
  }
  getPrice() {
    let price = this.basePrice;
    if (this.size === 'small') {
      price += this.toppings.length * 2;
    } else if (this.size === 'medium') {
      price += this.toppings.length * 2;
    } else if (this.size === 'large') {
      price += this.toppings.length * 2;
    }
    return price;
  }
  getPizzaName() {
    return this.pizzaName;
  }
  getSize() {
    return this.size;
  }
}

const pizza1 = new Pizza(
  'Hawaiian',
  ['ham', 'pineapple', 'cheese'],
  10,
  'small'
);

const pizza2 = new Pizza(
  'Margherita',
  ['cheese', 'tomatoes', 'basil'],
  12,
  'Medium'
);

const pizza3 = new Pizza(
  'Mozzarella',
  ['Mozzarella', 'cherry tomatoes', 'Arugula'],
  14,
  'large'
);

class Customer {
  constructor(name, delivery = 'delivery-home') {
    this.name = name;
    this.delivery = delivery;
  }
}
const customer1 = new Customer('Mychel Garzon', 'delivery home');

class Order {
  constructor(pizza, customer) {
    this.customer = customer;
    this.pizza = pizza;
  }
  getOrderDetails() {
    const pizzaName = this.pizza.getPizzaName();
    const pizzaSize = this.pizza.getSize();
    const totalPrice = this.pizza.getPrice();

    return {
      pizzaName,
      pizzaSize,
      totalPrice,
    };
  }
}
const order1 = new Order(pizza3, customer1);

console.log('Hello! ', customer1.name, 'You have choosen', customer1.delivery);
console.log('Order Details:', order1.getOrderDetails());
