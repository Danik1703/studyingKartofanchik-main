// **Лексичне середовище**
// У прикладах нижче вам треба описати що поверне та чи інша функція і яким чином це працює


let name = "Іван";

function sayHi() {
  alert("Привіт, " + name);
}

name = "Петро";

sayHi(); // що вона покаже "Іван" чи "Петро"? // "Привіт, Петро".

// =====================================
function outerFunction() {
  let outerVar = "Outer";

  function innerFunction() {
    let innerVar = "Inner";
    console.log(outerVar + " " + innerVar);
  }

  innerFunction();
}

outerFunction(); // "Outer Inner".
// ====================================
function createCounter() {
  let count = 0;

  return function() {
    return ++count;
  };
}

let counter = createCounter();
console.log(counter()); 
console.log(counter()); 
console.log(counter()); // 1, 2, 3
// ====================================
function outer() {
  let a = 1;

 function inner() {
    let b = 2;
    console.log(a + b);
  }

  inner();
  console.log(a);
}

outer(); //  сума a та b і 1 значення змінної a, буде 3
// ==============================
function add(x) {
  return function(y) {
    return x + y;
  };
}

let addFive = add(5);
console.log(addFive(3)); // (5 + 3) буде 8

// ==========================


// **Замикання**
// Створіть функцію createCounter, яка повертає об'єкт з методами increment та decrement. При кожному виклику increment збільшує лічильник на 1, а decrement зменшує на 1. Початкове значення лічильника - 0.

// Створіть функцію createSecretHolder, яка приймає початкове значення та повертає об'єкт з двома методами: getSecret та setSecret. Значення, що зберігається в об'єкті, повинно бути приватним і доступним тільки через ці методи.

// Напишіть функцію sequenceGenerator, яка приймає початкове значення та крок і повертає функцію, яка при кожному виклику повертає наступне значення послідовності (починаючи з початкового значення і збільшуючи на крок).Наприклад:
//  const queueMaker=sequenceGenerator(1,4)
// queueMaker() //  => [1,5]
// queueMaker() //  => [1,5,9]
// queueMaker() //  => [1,5,9,13]

// Створіть функцію createCounter, яка повертає об'єкт з методами increment та decrement. При кожному виклику increment збільшує лічильник на 1, а decrement зменшує на 1. Початкове значення лічильника - 0.

function createCounter() {
   let count = 0;
 
   return {
     increment() {
       count++;
       return count;
     },
     decrement() {
       count--;
       return count;
     }
   };
 }
 
 const counters = createCounter();
 console.log(counters.increment()); 
 console.log(counters.increment()); 
 console.log(counters.decrement()); 
 
 
// Створіть функцію createSecretHolder, яка приймає початкове значення та повертає об'єкт з двома методами: getSecret та setSecret. Значення, що зберігається в об'єкті, повинно бути приватним і доступним тільки через ці методи.

 function createSecretstorage(secret) {
   return {
     getSecret() {
       return secret;
     },
     setSecret(newSecret) {
       secret = newSecret;
     }
   };
 }
 
 const secretHolder = createSecretstorage("mySecretStorage");
 console.log(secretStorage.getSecret()); 
 secretStorage.setSecret("newSecret");
 console.log(secretStorage.getSecret()); 
 