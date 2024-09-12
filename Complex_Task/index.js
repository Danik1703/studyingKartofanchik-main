// Create a class Product with the following properties:

// id (a unique identifier for the product)
// name (the name of the product)
// price (the price of the product)
// category (the category to which the product belongs)
// inStock (the quantity of the product in stock)
// Create a class User with the following properties:

// id (a unique identifier for the user)
// name (the user's name)
// email (the user's email address)
// cart (an array to store products added to the user's shopping cart)
// Create a class Order with the following properties:

// id (a unique identifier for the order)
// user (an instance of the User class representing the customer who placed the order)
// items (an array of objects representing the products and their quantities in the order)
// Create a class Marketplace with the following properties and methods:

// products (an array to store instances of the Product class)
// users (an array to store instances of the User class)
// Methods:

// addProduct(product) - Adds an instance of the Product class to the marketplace's inventory.
// addUser(user) - Adds an instance of the User class to the marketplace's user list.
// addToCart(user, productId, quantity) - Adds a specified quantity of a product to a user's shopping cart.
// checkout(user) - Completes a purchase for a user, creating an instance of the Order class with the items from their cart.
// getTotalSalesByCategory(category) - Returns the total sales amount for products in a specific category.
// getMostValuableCustomer() - Returns the user who has made the highest total purchase amount.
// getOutOfStockProducts() - Returns a list of products that are out of stock.
// You need to implement these classes and methods, allowing for the management of products, users, orders, and advanced operations such as calculating total sales, identifying the most valuable customer, and more.




class Product {
    constructor(id, name, price, category, inStock) {
      this.id = id;
      this.name = name;
      this.price = price;
      this.category = category;
      this.inStock = inStock;
    }
  }
  
  class User {
    constructor(id, name, email) {
      this.id = id;
      this.name = name;
      this.email = email;
      this.cart = []; 
    }
  
    addToCart(product, quantity) {
      this.cart.push({ product, quantity });
    }
  
    clearCart() {
      this.cart = [];
    }
  }
  
  class Order {
    constructor(id, user, items) {
      this.id = id;
      this.user = user;
      this.items = items; 
      this.totalAmount = this.calculateTotal();
    }
  
    calculateTotal() {
      return this.items.reduce((total, item) => total + item.product.price * item.quantity, 0);
    }
  }
  
  class Marketplace {
    constructor() {
      this.products = [];
      this.users = [];
      this.orders = [];
    }
  

    addProduct(product) {
      this.products.push(product);
    }
  

    addUser(user) {
      this.users.push(user);
    }
  
    addToCart(user, productId, quantity) {
      const product = this.products.find(p => p.id === productId);
      if (product && product.inStock >= quantity) {
        user.addToCart(product, quantity);
        product.inStock -= quantity;
      } else {
        console.log("Товар відсутній або недостатня кількість.");
      }
    }
  
  
    checkout(user) {
      if (user.cart.length === 0) {
        console.log("Кошик порожній.");
        return;
      }
  
      const newOrder = new Order(this.orders.length + 1, user, user.cart);
      this.orders.push(newOrder);
      user.clearCart();
      console.log(`Замовлення створено: Замовлення ID ${newOrder.id}, Сума: $${newOrder.totalAmount}`);
    }
  

    getTotalSalesByCategory(category) {
      let totalSales = 0;
  
      this.orders.forEach(order => {
        order.items.forEach(item => {
          if (item.product.category === category) {
            totalSales += item.product.price * item.quantity;
          }
        });
      });
  
      return totalSales;
    }
  

    getMostValuableCustomer() {
      let maxSpent = 0;
      let mostValuableCustomer = null;
  
      this.users.forEach(user => {
        const totalSpent = this.orders
          .filter(order => order.user.id === user.id)
          .reduce((sum, order) => sum + order.totalAmount, 0);
  
        if (totalSpent > maxSpent) {
          maxSpent = totalSpent;
          mostValuableCustomer = user;
        }
      });
  
      return mostValuableCustomer ? mostValuableCustomer.name : null;
    }
  

    getOutOfStockProducts() {
      return this.products.filter(product => product.inStock === 0);
    }
  }
  
 
  
  const marketplace = new Marketplace();
  

  marketplace.addProduct(new Product(1, "Ноутбук", 1200, "Електроніка", 15));
  marketplace.addProduct(new Product(2, "Смартфон", 600, "Електроніка", 8));
  marketplace.addProduct(new Product(3, "Кросівки", 80, "Одяг", 0)); 
  

  const user1 = new User(1, "Олександр", "alex@gmail.com");
  const user2 = new User(2, "Марія", "maria@gmail.com");
  marketplace.addUser(user1);
  marketplace.addUser(user2);
  

  marketplace.addToCart(user1, 1, 2);
  marketplace.addToCart(user1, 2, 1);
  marketplace.checkout(user1); 
  

  console.log("Загальні продажі в категорії Електроніка: $" + marketplace.getTotalSalesByCategory("Електроніка"));

  console.log("Найбільш цінний клієнт: " + marketplace.getMostValuableCustomer());
  

  console.log("Товари, яких немає в наявності:", marketplace.getOutOfStockProducts().map(p => p.name));
  