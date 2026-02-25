/*
 * Класи
 *  - Оголошення класу
 *  - Конструктор класу
 *  - Методи класу
 *  - Прототип екземпляру
 *  - Приватні властивості
 *  - Геттери і сеттери
 *  - Статичні властивості
 */

class User {
  #email;
  #tel;
  static userCounter = 0;

  constructor(firstName, lastName, email, tel) {
    // let this = {};
    this.firstName = firstName;
    this.lastName = lastName;
    this.#email = email;
    this.#tel = tel;

    User.userCounter++;
    // return this;
  }

  static isEmailValid(email) {
    return email.includes('@');
  }

  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  getEmail() {
    return this.#email;
  }

  setEmail(newEmail) {
    if (User.isEmailValid(newEmail)) {
      this.#email = newEmail;
    }
  }

  get tel() {
    return this.#tel;
  }

  set tel(newTel) {
    this.#tel = newTel;
  }
}

const userOwen = new User('Owen', 'Martinez', 'owen@gmail.com', '(476) 219-6723');

console.log(userOwen);
console.log(userOwen.getFullName());
console.log(userOwen.getEmail());
userOwen.setEmail('owenMartinez@gmail.com');
console.log(userOwen.getEmail());

console.log(userOwen.tel);
userOwen.tel = '(741) 489-9789';
console.log(userOwen.tel);

const userTroy = new User('Troy', 'Lewis', 'troy@gmail.com', '(500) 477-9823');

// console.log(userTroy);
// console.log(userTroy.getFullName());

console.dir(User);
