// const day = 'monday';

// switch (day) {
//     case 'monday':  //day === 'monday'
//         console.log("Today is Monday!!!");
//         console.log("Start of Week!!!");
//         break;
//     case 'tuesday':
//         console.log('Today is Tuesday');
//         break;
//     case 'wednesday':
//     case 'thursday':
//         console.log('Work hard. Its mid week!!!')
//         break;
//     case 'friday':
//         console.log("plan for week end");
//         break;
//     case 'saturday':
//     case 'sunday':
//         console.log('Enjoy Weekend!!!').
//         break;

// }
//Coding Challenge-4

const bill = Number(prompt("Enter the bill number"));
let tip;
tip =  ((bill >=50) && (bill < 300)) ? (15 * bill)/100 : (20 * bill)/100;

console.log(`BILL VALUE: ${bill} TIP: ${tip} TOTAL: ${bill+tip}`);