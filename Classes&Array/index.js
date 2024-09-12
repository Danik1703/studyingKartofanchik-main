                                                    // Задача на методи масивів
// Task : Array Transformation Adventure
// You are on an adventure with a team of explorers, and you have a backpack represented as an array. Perform the following operations:

// You've found a treasure! Use the push method to add the treasure chest (represented as an object) to the end of your backpack.
// Oh no, you've triggered a trap! Use the pop method to remove the last item from your backpack.
// Your team spotted a rare flower! Use the shift method to remove the first item from your backpack.
// You found a map! Use the unshift method to add the map (another object) to the beginning of your backpack.
// You've gathered your findings in your notebook. Use the join method to create a single string, separating each item in your backpack with a comma.
// Later, you read your notes in the journal. Use the split method to split your findings back into an array.
// You've decided to rearrange your backpack for better organization. Use the reverse method to change the order of items in your backpack.
// You've met a fellow explorer with their own backpack. Use the concat method to combine your backpack with their backpack (another array of items).
let backpack = ["книга", "вода", "банан"];

const treasure = "скриння з скарбом";
backpack.push(treasure);
console.log("Після знаходження скарбу:", backpack);


backpack.pop();
console.log("Після потрапляння в пастку:", backpack);


backpack.shift();
console.log("Після знаходження рідкісної квітки:", backpack);


const map = "картра зі скарбом";
backpack.unshift(map);
console.log("Після знаходження карти:", backpack);


const backpackString = backpack.join(", ");
console.log("Елементи рюкзака як рядок:", backpackString);


const backpackArrayFromString = backpackString.split(", ");
console.log("Елементи рюкзака з рядка:", backpackArrayFromString);


backpack.reverse();
console.log("Після перестановки предметів:", backpack);


const explorerBackpack = ["бутилка коли", "чипси"];
const combinedBackpacks = backpack.concat(explorerBackpack);
console.log("Після об'єднання рюкзаків:", combinedBackpacks);


                                                // Задача на закріплення знань про класи і ще методи масивів
// Створи клас Inventory 
// він мусить містити список товарів (кожен товар це інстанс класу Item з полями name, quantity and price)
// Твій клас повинен мати такі функції
// видалити товар з наявності по назві(з допомогою for шукаєш індекс товару і сплайсом видаляєш)
// отримати список перших 5товарів(слайсом)
// додати нову партую товарів.всі попередні товари при цьому мусять впасти в ціні на 10%. Для цього використай функцію foreach. 
// змінити кількість товару по назві(з допомогою циклу фор або форіч перебрати масив і для знайденого товару змінити кількість)
// перевірити чи всі товари є у наявності (every)
// знайти чи є хоча б один товар з ціною менше 5доларів 
// Врахуй усі еджкейси і обовязково додай помилки в разі неправильного вводу даних(перевірку на числа робити не треба). 
// Тільки перевірку на те чи знайдено необхідні елементи в інвентарі, чи часом не зменшили к-ть товару на більше число чим є в наявності , тощо




class Item {
    constructor(name, quantity, price) {
        this.name = name;
        this.quantity = quantity;
        this.price = price;
    }
}

class Inventory {
    constructor() {
        this.items = [];
    }


    addItem(item) {
        this.items.push(item);
    }


    removeItemByName(itemName) {
        const index = this.items.findIndex(item => item.name === itemName);
        if (index === -1) {
            throw new Error(`Item with name ${itemName} not found`);
        }
        this.items.splice(index, 1);
    }


    getFirstFiveItems() {
        return this.items.slice(0, 5);
    }

    addNewBatch(newItems) {
        this.items.forEach(item => {
            item.price = item.price * 0.9;
        });
        this.items = this.items.concat(newItems);
    }

    changeQuantity(itemName, newQuantity) {
        const item = this.items.find(item => item.name === itemName);
        if (!item) {
            throw new Error(`Item with name ${itemName} not found`);
        }
        if (newQuantity < 0 || newQuantity > item.quantity) {
            throw new Error(`Invalid quantity for ${itemName}`);
        }
        item.quantity = newQuantity;
    }


    areAllItemsInStock() {
        return this.items.every(item => item.quantity > 0);
    }


    findCheapItem() {
        return this.items.some(item => item.price < 5);
    }
}


const inventory = new Inventory();
inventory.addItem(new Item('Laptop', 10, 1000));
inventory.addItem(new Item('Mouse', 50, 20));
inventory.addItem(new Item('Keyboard', 30, 30));


inventory.removeItemByName('Mouse');


inventory.changeQuantity('Laptop', 5);


inventory.addNewBatch([
    new Item('Headphones', 15, 50),
    new Item('USB Cable', 40, 10)
]);


console.log(inventory.areAllItemsInStock()); 


console.log(inventory.findCheapItem()); 
