
                            // 1. ОСНОВИ ЗМІННИХ ТА ТИПІВ ДАНИХ

// 1.1 Створіть змінну для зберігання імені користувача. Присвойте їй значення та виведіть на екран.
let userName = "John"
console.log(userName)
// 2.2 Визначте змінну для зберігання кількості років користувача. Напишіть код, який виведе повідомлення: "Вік користувача: [значення змінної] років."
let userAge = 20
console.log("Вік користувача: " + userAge + "років")
//Good Practice
// console.log(`${userName} age is: ${userAge} years old.`)
// 2.3 Прочитайте наступний код і поясніть, що буде виведено на екран:
        let a = 5; //number
        let b = '5'; //string
        console.log(a == b); // true 
        console.log(a === b); // false 
// 2.4 Створіть змінну та присвойте їй значення для кожного типу даних у JS.
let string = "Hello World"
let number = 31
let boolean = true
let nullS = null
let undefinedA = undefined
// let obj ={
//         name:'someName'
// }
// let arr = [1,2]
// let greet = function (){
//         console.log("Hello")
// }
// let symb = Symbol('id')
// let largeInt

                            // 2. УМОВНІ ОПЕРАТОРИ

//2.1 Напишіть код, який перевіряє, чи дорівнює значення змінної числу 10. Якщо так, виведіть "Дорівнює 10", інакше "Не дорівнює 10".
let numbers = '10'

if (numbers == 10 ) {
   console.log("Дорівнює 10")
} else  { 
 console.log("Не дорівнює 10")
}

//2.2 Додайте перевірку на тип змінної з попереднього завдання, щоб код виводив різні повідомлення залежно від того, чи є змінна числом або строкою.

// if (typeof(numbers) !== 'number'){
//         console.log('thats not a number')
// }else{
//         console.log('thats a number')
// }


if (numbers == 10 ) {
        console.log("Дорівнює 10 це є строка")
     } else if (number == "10") { 
             console.log("Дорівнює 10 це є число")
     } 
//2.3 Прочитайте код нижче і поясніть, що він робить:
        let x = 10;
        if (x > 10 && x < 30) { 
          console.log("x знаходиться між 10 та 30");
        } else {
          console.log("x не входить у діапазон");
        }
//2.4 Використовуючи тернарний оператор, перевірте змінну petName та виведіть у консоль : так, це мій собака, якщо його звати Барсік, та-  ні, це собака мого сусіда, якщо petName !== "Барсік" 


 let petName = "Барсік"
//  petName === "Барсік" ? console.log('так, це мій собака'): console.log('ні, це собака мого сусіда')
console.log(petName )

                            // 3. ЦИКЛИ

// 3.1 Створіть цикл, який виводить числа від 2 до 9.
for (let i = 2; i <= 9; i++){
        console.log(i)

}
// 3.2 Напишіть цикл, який виводить всі непарні числа від 1 до 15.
for (let i = 1; i <= 15; i++) {
        if (i % 2 !== 0) {
                console.log(i)
        }
}
// 3.3 Прочитайте наступний код і визначте, що він робить:
        for (let i = 0; i < 5; i++) {
          console.log(i / 2);
        }
//3.4 За допомогою циклу for..of вивести усі елементи массиву 
 let myFavouriteMovies1 = ['The Butterfly Effect', 'Green Mile', 'Green Book', 'Shutter Island', 'Hobbit', 'The Butterfly Effect']
//  for (let movie of myFavouriteMovies) {
//         console.log(movie)
//  }
//3.5 За допомогою циклу перевіряти массив  myFavouriteMovies із кінця та вивести індекс значення 'Shutter Island'.
let myFavouriteMovies = ['The Butterfly Effect', 'Green Mile', 'Green Book', 'Shutter Island', 'Hobbit', 'The Butterfly Effect']
for (let i = myFavouriteMovies.length -1; i >= 0; i--){
        if(myFavouriteMovies[i] === 'Shutter Island'){
                console.log(i)
        }
}
                            // 4. Functions

// 4.1 Які функції бувають ? Наведіть по 1 прикладу кожної із функцій.
str()
function str() {
        console.log("str")
}

const pet = function() {
        console.log("pet")
}
pet()


// 4.2 Створіть функцію multiplier, яка приймає три числа як аргументи і повертає їх добуток.
function multi(b, c, g){
        return b * c * g 
}

multi(3, 5, 3)

// 4.3 Напишіть функцію isEven, яка перевіряє, чи є дане число парним, і повертає відповідне повідомлення.
function isEven(numberss) {
        return numberss % 2 === 0? "Число Парне":"Число не парне"
}
console.log(isEven(6))
console.log(isEven(1))
// 4.4 Прочитайте код нижче і поясніть, як він працює:
        // function multiply(a, b = 1) {
        //   return a * b;
        // }
        // console.log(multiply(5));  // 5
        // console.log(multiply(5, 2));  // 10
// 4.5 Перепишіть функцію multiply у стрілкову
multiply = (a, b = 1) => a * b
console.log(multiply(5));  
console.log(multiply(5, 2));  


                            // 5. Масиви

//5.1 Створіть масив з 5 елементів і виведіть другий та останній елемент.
let array = [1, 2, 3, 4, 5]
console.log(array[1],array[array.length-1])

//5.2 Напишіть код, який додає елемент до кінця масиву та видаляє перший елемент.
let el =6 
array.push(el)

array.shift()

//5.3 Прочитайте наступний код і поясніть, що він робить: 
        // let arr = [1, 2, 3, 4, 5];
        // arr.pop();
        // arr.shift();
        // console.log(arr);

//5.4 Створіть масив чисел. Використовуючи метод map(), створіть новий масив, в якому всі числа будуть збільшені на 5.
 let numbersArray = [2, 5, 12, 6, 10, 4]
 let numberPlusfive = numbersArray.map(number => number + 5)
 console.log(numberPlusfive)
//5.5 Використовуючи метод reduce(), підрахуйте різницю всіх чисел у масиві створеному вище.
let reducedArr = numbersArray.reduce((acc,curentValue) => acc + curentValue)
console.log(reducedArr)
                            // 6. Об'єкти

// 6.1: Створіть об'єкт, який містить інформацію про книгу (назва, автор, рік видання) та виведіть рік видання.
let books = {
       title: "JavaScript для початківців",
       author: "Іван Іванов",
       year: 2016,
       fullInfo:function(){return `${books.author}, 
        ${books.title}, 
        ${books.year}`}
}
       console.log(`${books.year}`)
books.fullInfo()
// 6.2: Додайте до об'єкта метод, який повертає повну інформацію про книгу у вигляді строки.
// 6.3: Прочитайте код нижче і поясніть, що він робить:
        // let book = {
        //   title: "JavaScript для початківців",
        //   author: "Іван Іванов",
        //   getSummary: function() {
        //     return `${this.title} написана ${this.author}`;
        //   }
        // };
        // console.log(book.getSummary());
//6.4 Створіть об'єкт, що містить інформацію про студента (ім'я, прізвище, факультет). Використовуйте for...in для виведення всіх властивостей і їх значень.
let student = {
        name: "Johny",
        surname: "Owens",
        faculty: "Кібер Технологіі"
}

for (let key in student){
        console.log(key + " " + student[key])
}
//6.5 Напишіть код, який перевіряє, чи є в об'єкті car властивість model, і якщо так, виводить її значення.
let car ={
        model: 'Toyota',
        year: 2015,
        engine:'2.7'
}
function checkModel(car) {
        if(car.hasOwnProperty('model')){
                console.log(car.model)
        }

}
function checkModel1(car) {
    let objectKeys = Object.keys(car)
    let objectValues = Object.values(car)
    let hasProperty = Object.hasOwnProperty('model')

        console.log(objectKeys)
}
checkModel1(car)
cars.hasOwnProperty(year)
        // if (car[model] == undefined){
        //         console.log(car[model])
        // } else {
        //         console.log(model + "нажаль не вказана")
        // }
//6.6 Створіть копію об'єкта car мінімум одним способом. (краще двома)

let cars ={
        model: 'Toyota',
        year: 2015,
        engine:'2.7'
}

let copy = {...cars}
console.log(copy)

let objCopy = JSON.parse(JSON.stringify(cars))
console.log(objCopy)


