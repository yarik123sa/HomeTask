

// 1 З клавіатури вводяться імена двох дітей та кількість у них цукерок.
// Вивести не екран ім’я тієї дитини,
// у якої кількість цукерок є більшою, або вивести, що кількість однакова.

let childOne = prompt('ведіть  імя детини', "Славік")
let childTwo = prompt('ведіть  імя детини', "Софія")

let childOneSweets = parseInt(prompt("ведіть кількість цукерок", "8"))
let childTwoSweets = parseInt(prompt("ведіть кількість цукерок", "8"))
if (childOneSweets>childOneSweets) {
    alert(`у  ${childOne} більше цукерок `)
} else if (childOneSweets===childTwoSweets) {
    alert(`у  ${childOne} і  ${childTwo} одинаково цукерок`) 
}
else {
    alert(`у  ${childTwo} більше цукерок `)
}

// 2   З клавіатури вводиться ціна товару і кількість грошей.
// Якщо грошей не вистачає то відмовляємо у покупці, інакше, якщо ще залишаються гроші,
// то пропонуємо купити лотерею за 4 грн.


let productPrice = parseFloat(prompt("ведіть ціну товару", "200"))
let Money = parseFloat(prompt("ведіть кількість грошей ", "1000"))

if (productPrice>Money) {
    alert("Ми вам відмовляємо у покупці томущо вам невистачає грошей")
} else if(Money>=4) {
alert("ми вам пропунуємо купити лотерею за 4 гривні")
}


// 3 Випадковим чином генерується число від 1 до 5. 
// Спробуйте вгадати число за 2 спроби.

const randomNumber = Math.floor(Math.random() * 5) + 1;
console.log(randomNumber);

let attempts = 2;

let guessNumber = parseInt(prompt("вгадайті випадкове число", "2"))
if (guessNumber===randomNumber) {
    alert("ви вгадали")

} else {
    attempts-- 
    if (attempts>0) {
        alert("у вас лишилася ще одна спроба ")
        let guessNumber = parseInt(prompt("вгадайті випадкове число", "2"))
        if (guessNumber===randomNumber) {
            alert("ви вгадали") 
        }
        else {
            
    alert("ви використали всі спроби")
        }
    }

}

// 4 З клавіатури вводиться вік людини.Вивести на екран ким він
// є(дитиною у садочку, школярем, студентом, працівником, пенсіонером).


let userAge = parseInt(prompt("ведіть ваш вік", "20"))
const ageChild = 6;
const ageSchoolchild = 17;
const ageStudent = 22;
const ageAdult = 59;
let res = "";
switch (true) {
    case (userAge<=ageChild):
        res= "ви у садочку"
        break;
    case (userAge<=ageSchoolchild):
        res= "ви школяр"
        break;
    case (userAge<=ageStudent):
        res= "ви студент"
        break;   
     
    case (userAge<=ageAdult):
        res= "ви дорослий"
        break;  
    
        case (userAge>ageAdult):
            res= "ви пенсіонер"
            break;
    default:
        res= " нечисло"

        break;
}
alert(res)




// 6 З клавіатури вводиться номер дня тижня. Вивести на екран назву дня.
let dayWeek = parseInt(prompt("ведіть номер дня тижня", "2"))
let dayRes;
switch (dayWeek) {
        case 1:
        dayRes = "понеділок"
        break;
        case 2:
        dayRes = "вівторок"
        break;
        case 2:
            dayRes = "вівторок"
        break;
        case 3:
            dayRes = "середа"
        break;
        case 4:
            dayRes = "четверг"
        break;
        case 5:
            dayRes = "пятниця"
        break;
        case 6:
            dayRes = "субота"
        break;
        case 7:
            dayRes = "неділя"
            break;
    
    default:
        dayRes="такого дня неіснує"
        break;
}
alert(dayRes)



// 7 З клавіатури вводиться номер місяця. Вивести до якої пори він відноситься
let numberMonth = parseInt(prompt("ведіть  номер місяця", "3"))
let monthRes; 

switch (numberMonth) {
    case 1:
    case 2:
    case 3:
        monthRes = "Зима"
    break;
    case 4:
    case 5:
    case 6:
        monthRes = "Весна"
    break;

    case 7:
    case 8:
    case 9:
        monthRes = "Літо"  
    break;
        
        case 10:
            case 11:
            case 12:
        monthRes = "Осінь"
    break;
        
    default:
        monthRes = "неіснує такого номера місяця"
        break;
}
alert(monthRes)


let message = "";
let category = prompt("Ведіть назву категорії водія", "");

switch (category) {
  case "A":
  case "А":
    message = "Ти можешь керувати мотоциклом";
    break;
  case "B":
  case "В":
    message = "Ти можешь керувати автомобілем";
    break;
  case "C":
  case "С":
    message = "Ти можешь керувати вантажним автомобілем";
    break;
  default:
    message = "Ти можешь керувати інопланетною штукою";
    break;
}
alert(message)