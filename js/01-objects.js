/*
 * Об'єкти
 *
 * - Створення об'єкта
 * - Доступ до властивостей через крапку
 * - Доступ до властивостей через квадратні дужки
 * - Вкладені властивості
 * - Доступ до вкладених властивостей
 * - Зміна значення властивостей
 * - Додавання властивостей
 */

const courseHTML = {
  title: 'HTML Fundamentals',
  description: 'Some description...',
  price: 10000,
  rating: 4.5,
  images: {
    large: 'https://my-site.com/courseHTML-large.jpg',
    medium: 'https://my-site.com/courseHTML-medium.jpg',
    small: 'https://my-site.com/courseHTML-small.jpg',
  },
};

const getKey = function () {
  return 'price';
};

console.log(courseHTML);

const key = 'price';

console.log(courseHTML.title);
console.log(courseHTML.rating);

console.log(courseHTML['description']);
console.log(courseHTML[key]);

courseHTML.rating = 4.8;
courseHTML.test = 'Hello!';

console.log(courseHTML);

console.log(courseHTML.images.large);
console.log(courseHTML['images']['small']);
