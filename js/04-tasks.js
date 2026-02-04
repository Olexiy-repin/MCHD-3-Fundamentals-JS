/*
TODO: Напиши функцію getRectArea(dimensions) для обчислення площі прямокутника зі сторонами,
TODO: значення яких буде передано до параметра dimensions у вигляді рядка.
TODO: Значення гарантовано розділені пробілом.
*/
// const getRectArea = function (dimensions) {
//   const rectSides = dimensions.split(' ');

//   return Number(rectSides[0]) * Number(rectSides[1]);
// };

// console.log(getRectArea('8 11')); // 88
// console.log(getRectArea('18 11')); // 198
// console.log(getRectArea('8 21')); // 168

/*
TODO: Напиши функцію logItems(items), яка отримує масив та використовує цикл,
TODO: який для кожного елемента масиву буде виводити в консоль повідомлення у
TODO: форматі <номер елемента> - <значення елемента>. Нумерація елементів
TODO: повинна починатися з 1.
TODO:
TODO: Наприклад для першого елемента масиву ['Mango', 'Poly', 'Ajax'] з
TODO: індексом 0 буде виведено 1 - Mango, а для індексу 2 виведе 3 - Ajax.
*/
// const logItems = function (items) {
//   console.log(items);

//   for (let i = 0; i < items.length; i++) {
//     console.log(`${i + 1} - ${items[i]}`);
//   }
// };

// logItems(['Mango', 'Poly', 'Ajax']);
// logItems(['🍎', '🍇', '🍑', '🍌', '🍋']);

/*
TODO: Напиши функцію printInfo(names, phones) яка виводить
TODO: у консоль ім'я та телефонний номер користувача. У параметри
TODO: names та phones будуть передані рядки імен та телефонних номерів,
TODO: розділені комами. Порядковий номер імен та телефонів у рядках
TODO: вказують на відповідність. Кількість імен та телефонів
TODO: гарантовано однакова.
*/
// const printInfo = function (names, phones) {
//   const namesArr = names.split(',');
//   const phonesArr = phones.split(',');

//   console.log('namesArr =', namesArr);
//   console.log('phonesArr =', phonesArr);

//   for (let i = 0; i < namesArr.length; i++) {
//     console.log(`${namesArr[i]}: ${phonesArr[i]}`);
//   }
// };

// printInfo('Jacob,William,Solomon,Artemis', '89001234567,89001112233,890055566377,890055566300');
// printInfo('Marion,Eugenia,Dean,Jesus', '8577702524,9125002644,2028646420,9364154932');

/*
TODO: Напишіть функції для роботи з колекцією навчальних курсів courses:
TODO: addCourse(courseName) - додає курс в кінець колекції
TODO: removeCourse(courseName) - видаляє курс з колекції
TODO: updateCourse(oldName, newName) - змінює назву курса
*/

// const courses = ['HTML', 'CSS', 'JavaScript', 'React', 'NodeJS'];

// console.log(courses);

// const addCourse = function (courseName) {
//   if (courses.includes(courseName)) {
//     console.log(`${courseName} вже існує!`);
//   } else {
//     courses.push(courseName);
//   }
// };

// const removeCourse = function (courseName) {
//   const idxOfCourse = courses.indexOf(courseName);

//   courses.splice(idxOfCourse, 1);
// };

// const updateCourse = function (oldCourseName, newCourseName) {
//   const idxOfCourse = courses.indexOf(oldCourseName);

//   courses.splice(idxOfCourse, 1, newCourseName);
// };

// addCourse('Express');
// console.log(courses); // ['HTML', 'CSS', 'JavaScript', 'React', 'NodeJS', 'Express']
// addCourse('CSS'); // 'Такий курс вже існує'
// console.log(courses);

// removeCourse('HTML');
// console.log(courses); // ['HTML', 'CSS', 'JavaScript', 'NodeJS', 'Express']

// updateCourse('HTML', 'HTML Fundamentals');
// console.log(courses); // ['HTML Fundamentals', 'CSS', 'JavaScript', 'NodeJS', 'Express']

/*
TODO: Напиши функцію checkCaseOfLetter(letter), яка буде перевіряти регістр літери.
TODO: В параметр letter будуть передавати рядок із однією літерою.
TODO: Якщо літера знаходиться у верхньому регістрі, то буде повертатися 'upper case' інакше 'lower case'.
*/

// console.log(checkCaseOfLetter('a')); // 'lower case'
// console.log(checkCaseOfLetter('A')); // 'upper case'

/*
TODO: Напиши функцію changeCaseOfLetters(str), яка буде повертати рядок із зміненим регістром літер.
TODO: В параметр str будуть передавати рядок.
*/

// console.log(changeCaseOfLetters('AbCdE')); // aBcDe
// console.log(changeCaseOfLetters('abc')); // ABC
// console.log(changeCaseOfLetters('CBA')); // cba

/*
TODO: Напиши функцію formatTime(totalMinutes) яка переведе значення
TODO: totalMinutes (кількість хвилин) у рядок у форматі годин та хвилин HH:MM.
*/

// const formatTime = function (totalMinutes) {};

// console.log(formatTime(65)); // "01:05"
// console.log(formatTime(450)); // "07:30"
