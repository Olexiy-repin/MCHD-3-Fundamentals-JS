/*
 * Прототип об'єкта
 *
 * - Object.create()
 * - Власні і невласні властивості
 * - Перебір власних властивостей з hasOwnProperty()
 * - Ланцюжки прототипів
 */

/*
 * Object.create() та ланцюжки прототипів
 */
// const userMethods = {
//   getFullName() {
//     return `${this.firstName} ${this.lastName}`;
//   },

//   isEmailValid(email) {
//     return email.includes('@');
//   },

//   setEmail(newEmail) {
//     if (this.isEmailValid(newEmail)) {
//       this.email = newEmail;
//     }
//   },
// };

// const userTheodore = Object.create(userMethods);

// userTheodore.firstName = 'Theodore';
// userTheodore.lastName = 'Austin';
// userTheodore.email = 'theodore@gmail.com';

// console.log(userTheodore);

// console.log(userTheodore.getFullName());
// userTheodore.setEmail('theodoreAustin@gmail.com');
// console.log(userTheodore);

// const userSteve = Object.create(userMethods);

// userSteve.firstName = 'Steve';
// userSteve.lastName = 'Parks';
// userSteve.email = 'steve@gmail.com';

// console.log(userSteve);

// console.log(userSteve.getFullName());
// userSteve.setEmail('steveParks@gmail.com');
// console.log(userSteve);

/*
 * Перебір власних властивостей з hasOwnProperty()
 */
// const objectC = {
//   propertyC: 'Object C',
// };

// const objectB = Object.create(objectC);

// objectB.propertyB = 'Object B';

// const objectA = Object.create(objectB);

// objectA.propertyA = 'Object A';

// console.log(objectA);

// for (const key in objectA) {
//   if (objectA.hasOwnProperty(key)) {
//     console.log(`${key}: ${objectA[key]}`);
//   }
// }

// console.log(objectA.hasOwnProperty('propertyA'));
// console.log(objectA.hasOwnProperty('propertyB'));
// console.log(objectA.hasOwnProperty('propertyC'));
