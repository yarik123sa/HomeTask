// Обчислити значення виразів
// S1=a+12+b


let a = parseInt(prompt("ведіть значання a", "1"))
let b = parseInt(prompt("ведіть значання b", "1"))

let c = parseInt(prompt("ведіть значання c", "1"))


let s1 = a + 12 + b;
document.write(`1 S1=a+12+b = ${s1} <br>`) 


  
// Обчислити значення виразів 2 задача

let s2 = Math.sqrt((a + b) / (2 * a))

document.write(`2  ${s2} <br>` ) 

// Обчислити значення виразів 3 задача
let s3Result = (a + b) * c;
let s3 = Math.cbrt(s3Result)

document.write(`3 ${s3} <br>`) 
console.log(s3)

// Обчислити значення виразів 4 задача
let s4 = Math.sin(a / (-b))
document.write(`4 ${s4} <br>`) 


//Задача 1. Знайти суму, добуток та частку двох дійсних чисел.
// 


let sumResult = a + b;
document.write(`сума додавання ${sumResult} <br>`)



let divisionResult =  a/ b;
 
document.write(`сума ділення ${divisionResult}  <br>`)
let product = a * b;
document.write(`сума множення  ${product}  <br>`)


// Задача 2. Дано рік народження (дата: 1 січня) та поточний рік. Знайти кількість років.
let yourDate = parseInt(prompt("Ваш рік народження", "2000"))

const year = 2023;
const yourAge =  year - yourDate  ;
document.write(`твій вік ${yourAge} <br><br>`)

//  Задача 3. Дано вартість одиниці товару і кількість. Знайти загальну вартість 
// та ПДВ(5 % від загальної вартості)


let productPrice = parseFloat(prompt("ведіть вартість товару", "200"))
let productItem = parseInt(prompt("ведіть кількість товару", "5"))


let totalPrice = productItem * productPrice

const Vat = 5;


let vatCount = (totalPrice * 5) / 100;
document.write(`Пдв  ${vatCount}  а загальна вартість товару ${totalPrice} <br> <br>` )

// Задача 4. Дано довжину у сантиметрах. Визначати скільки це метрів і кілометрів.

let length = parseFloat(prompt("ведіть довжину в сантиметрах", "20"))


const lengthM = length /  100;
const lengthKM = lengthM  / 100;

document.write(`Довжина в метрах  ${lengthM} <br>`)
document.write(`Довжина в кілометрах ${lengthKM} <br>`)


// Задача 5. Дано кількість секунд, що пройшла від початку доби. 
// Визначити скільки це годин і хвилин.

let seconds = parseFloat(prompt("ведіть секунди", "7200"))
let minutes = seconds / 60;
let hour = seconds / 3600;

document.write(`minnutes:${minutes} , <br> hour:${hour} <br> <br>`)
// // Задача 6. З клавіатури вводяться вартість товару та кількість одиниць 3 товарів. 
// Обчислити вартість кожного товару окремо та загальну вартість. 
// Вивести чек(як у супермаркеті) 



let product1Count  =  parseInt(prompt("ведіть кількість товару" , "3"));
let product1quantity = parseFloat(prompt("ведіть ціну товаору ", "200"));
let product1totalprice = product1Count * product1quantity;
document.write(`product1 ${product1Count} <br> ${product1quantity} <br> ${product1totalprice} <br>`)



let product2Count  =  parseInt(prompt("ведіть кількість товару" , "3"));
let product2quantity = parseFloat(prompt("ведіть ціну товаору ", "200"));
let product2totalprice = product2Count * product2quantity;
document.write(`product2 ${product2Count} <br> ${product2quantity} <br> ${product2totalprice} <br>`)

let product3Count  =  parseInt(prompt("ведіть кількість товару" , "3"));
let product3quantity = parseFloat(prompt("ведіть ціну товаору ", "200"));
let product3totalprice = product3Count * product3quantity;
document.write(`product3 ${product3Count} <br> ${product3quantity} <br> ${product3totalprice} <br>`)

let totalPriceProducts = product1totalprice + product2totalprice + product2totalprice;

document.write(`total price ${totalPriceProducts} <br> <br>` )

// Задача 7. Знайти суму випадкового номера місяця (від 1 до 12) та випадкового номера дня (від 0 до 6).

let month = Math.floor(Math.random() * (13 - 1)) + 1;
let day = Math.floor(Math.random() * 7);
let monthDaySumm = month + day;
document.write(`Random result is ${monthDaySumm}`)