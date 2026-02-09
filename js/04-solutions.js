/*
TODO: Напиши функцію checkCaseOfLetter(letter), яка буде перевіряти регістр літери.
TODO: В параметр letter будуть передавати рядок із однією літерою.
TODO: Якщо літера знаходиться у верхньому регістрі, то буде повертатися 'upper case' інакше 'lower case'.
*/

// const checkCaseOfLetter = function (letter) {
//   return letter.toLowerCase() === letter ? 'lower case' : 'upper case';
// };

// console.log(checkCaseOfLetter('a')); // 'lower case'
// console.log(checkCaseOfLetter('A')); // 'upper case'

/*
TODO: Напиши функцію changeCaseOfLetters(str), яка буде повертати рядок із зміненим регістром літер.
TODO: В параметр str будуть передавати рядок.
*/
// const changeCaseOfLetters = function (str) {
//   let resultedStr = '';

//   for (const char of str) {
//     if (char.toLowerCase() === char) {
//       resultedStr += char.toUpperCase();
//     } else {
//       resultedStr += char.toLowerCase();
//     }
//   }

//   return resultedStr;
// };

// console.log(changeCaseOfLetters('AbCdE')); // aBcDe
// console.log(changeCaseOfLetters('abc')); // ABC
// console.log(changeCaseOfLetters('CBA')); // cba

/*
TODO: Напиши функцію formatTime(totalMinutes) яка переведе значення
TODO: totalMinutes (кількість хвилин) у рядок у форматі годин та хвилин HH:MM.
*/
//~ 1 Варіант
// const formatTime = function (totalMinutes) {
//   let hours = Math.trunc(totalMinutes / 60);
//   let minutes = totalMinutes % 60;

//   if (hours < 10) {
//     hours = `0${hours}`;
//   }

//   if (minutes < 10) {
//     minutes = `0${minutes}`;
//   }

//   return `${hours}:${minutes}`;
// };

// console.log(formatTime(40)); // "01:05"
// console.log(formatTime(450)); // "07:30"

//~ 2 Варіант
// const formatTime = function (totalMinutes) {
//   let hours = Math.trunc(totalMinutes / 60);
//   let minutes = totalMinutes % 60;

//   hours = String(hours).padStart(2, '0');
//   minutes = String(minutes).padStart(2, '0');

//   return `${hours}:${minutes}`;
// };

// console.log(formatTime(65)); // "01:05"
// console.log(formatTime(450)); // "07:30"
