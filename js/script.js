// Якщо змінна більше нуля - виведіть true, менше - false
//Перевірте це на варіантах 1, 0, -3.

// let num = 0;
// if (num >= 0) {
//   console.log("true");
// } else {
//   console.log("folse");
// }

// 1 > 0 ? console.log("true") : console.log("false");
// 0 >= 0 ? console.log('true') : console.log('false');
// -3 > 0 ? console.log('true') : console.log('false');

//-----------------------------------------------------------------------------

// Якщо змінна ="test" - виведіть true,
//Перевірте це на варіантах 'test',"qwerty", true

// let message = 'test';
// let message = 'qwerty';
// let message = 'true';

// if (message == 'test') {
//   console.log('true');
// } else {
//   console.log('folse');
// }

//-----------------------------------------------------------------------------

// Якщо змінна більше 10 - відніміть 5,
//менше - додайте 5, результат виведіть в консоль
//Перевірте це на варіантах 1, 10, 13.

// let num = 1;
// let num = 10;
// let num = 13;

// if (num > 10) {
//     console.log(`${num-5}`)
// } else if (num < 10) {
//     console.log(`${num + 5}`);
// }

//-----------------------------------------------------------------------------

//Зробіть сервіс який отримує число від 1 до 12
// виведіть місяць який дорівнює числу

// let value = prompt('Введіть число від 1 до 12');
// let cost;

// switch (value) {
//   case '1':
//     cost = 'січень';
//     alert(`${value}-й місяць року це ${cost} `);
//     break;
//   case '2':
//     cost = 'лютий';
//     alert(`${value}-й місяць року це ${cost} `);
//     break;
//   case '3':
//     cost = 'березень';
//     alert(`${value}-й місяць року це ${cost} `);
//     break;
//   case '4':
//     cost = 'квітень';
//     alert(`${value}-й місяць року це ${cost} `);
//     break;
//   case '5':
//     cost = 'травень';
//     alert(`${value}-й місяць року це ${cost} `);
//     break;
//   case '6':
//     cost = 'червень';
//     alert(`${value}-й місяць року це ${cost} `);
//     break;
//   case '7':
//     cost = 'липень';
//     alert(`${value}-й місяць року це ${cost} `);
//     break;
//   case '8':
//     cost = 'серпень';
//     alert(`${value}-й місяць року це ${cost} `);
//     break;
//   case '9':
//     cost = 'вересень';
//     alert(`${value}-й місяць року це ${cost} `);
//     break;
//   case '10':
//     cost = 'жовтень';
//     alert(`${value}-й місяць року це ${cost} `);
//     break;
//   case '11':
//     cost = 'листопад';
//     alert(`${value}-й місяць року це ${cost} `);
//     break;
//   case '12':
//     cost = 'грудень';
//     alert(`${value}-й місяць року це ${cost} `);
//     break;
//   default:
//     alert('Всього 12 місяців');
// }
//-----------------------------------------------------------------------------

//Зробіть сервіс який отримує тризначне число
//Поверніть користувачу сумму цих чисел

// var value = prompt('Введіть тризначне число:');
// sum = 0;

// while (value) {
//   sum += value % 10;
//   value = Math.floor(value / 10);
// }

// console.log(sum);
