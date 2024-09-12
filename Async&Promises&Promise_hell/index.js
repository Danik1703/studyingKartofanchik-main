// Створи функцію asyncExecution, яка використовує асинхронність JavaScript для виведення на екран чисел від 1 до 5 з інтервалом в 1 секунду між виведеннями.
async function asyncExecution() {
    for (let i = 1; i <= 5; i++) {
        console.log(i);
        await new Promise(resolve => setTimeout(resolve, 1000)); 
    }
}

asyncExecution();

// Створи функцію generatePromise, яка повертає Promise, який вирішується через 2 секунди та повертає об'єкт зі словом "Success".
function generatePromise() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({ message: "Success" });
        }, 2000); 
    });
}

generatePromise().then(result => console.log(result));


// Створи функцію errorHandling, яка повертає Promise та вирішується з помилкою через 1 секунду. Обробіть цю помилку та виведіть повідомлення.
function errorHandling() {
    return new Promise((_, reject) => {
        setTimeout(() => {
            reject(new Error("Something went wrong"));
        }, 1000); 
    });
}

errorHandling().catch(error => console.log(error.message));

// Створи ланцюг Promise, який виконує три послідовні асинхронні операції. Кожна наступна операція повинна використовувати результат попередньої.
function firstOperation() {
    return Promise.resolve(1);
}

function secondOperation(result) {
    return Promise.resolve(result + 1);
}

function thirdOperation(result) {
    return Promise.resolve(result * 2);
}

firstOperation()
    .then(secondOperation)
    .then(thirdOperation)
    .then(result => console.log(result)) 
    .catch(error => console.log(error));

// Створи послідовність асинхронних операцій, що демонструє ситуацію "Promise Hell", коли вкладені проміси та зворотні виклики ускладнюють код. Потім виправте це використовуючи async/await для полегшення читання та розуміння коду.


function doStep1() {

return new Promise((resolve) => {
    
setTimeout(() => resolve("Step 1 complete"), 1000);
    });
}

function doStep2() {
return new Promise((resolve) => {

setTimeout(() => resolve("Step 2 complete"), 1000);

    });
}

function doStep3() {
    
return new Promise((resolve) => {

setTimeout(() => resolve("Step 3 complete"), 1000);
    });
}


doStep1()
.then(result1 => {
    
console.log(result1); 
        return doStep2();
})
.then(result2 => {
console.log(result2); 

return doStep3();
})
.then(result3 => {

console.log(result3); 
})
.catch(error => console.log(error)); 





async function executeSteps() {

 try {
          
const result1 = await doStep1();

console.log(result1); 
    

const result2 = await doStep2();

console.log(result2); 
    
const result3 = await doStep3();

console.log(result3); 
    
        } catch (error) {
            console.log(error); 
        }
    }
    
   
    executeSteps();
    
