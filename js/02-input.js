/*
 * - Подія input
 * - Подія blur
 * - Подія change
 */

const refs = {
  field: document.querySelector('.js-user-name'),
  checkbox: document.querySelector('.js-policy-checkbox'),
};

/*
TODO: Виводь в консоль все що користувач вводить в input
*/
// refs.field.addEventListener('input', () => {
//   console.log(refs.field.value);
// });

/*
TODO: Користувач вводить в input своє ім'я, після втрати
TODO: фокусу отримує alert з повідомленням-привітанням
 */
// refs.field.addEventListener('blur', () => {
//   alert(`Welcome ${refs.field.value}`);
// });

// refs.field.addEventListener('change', () => {
//   alert(`Welcome ${refs.field.value}`);
// });

/*
TODO: Після того, як користувач активує чекбокс, виводиться alert
*/
// refs.checkbox.addEventListener('change', () => {
//   if (refs.checkbox.checked) {
//     alert('Done!');
//   }
// });
