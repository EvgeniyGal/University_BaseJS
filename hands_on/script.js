// Створіть клас "CarListing" для представлення оголошення про продаж автомобіля.
// Клас повинен мати наступні властивості та методи:
// make: Рядок, який представляє марку автомобіля.
// model: Рядок, який представляє модель автомобіля.
// year: Ціле число, яке вказує рік випуску автомобіля.
// price: Десяткове число, яке представляє ціну автомобіля.
// owner: Рядок, який представляє ім'я або інформацію про власника автомобіля.
// contactInfo: Рядок, який містить контактну інформацію продавця.
// sold: Булеве значення, яке показує, чи було авто продано (по замовчуванню - false).

// Методи класу:

// markAsSold(): Метод, який встановлює значення властивості sold в true, вказуючи, що авто було продано.

// getListingInfo(): Метод, який повертає рядок, що містить інформацію про оголошення про продаж автомобіля. Формат рядку: "Продається: [рік] [марка] [модель] за [ціна]$ власником [власник]. Контактна інформація: [контактна інформація]".

// Робота з DOM
// Свори форму для створення еклемпляру класу CarListing
// Кожне оголошення потрібно відмалювати як картку
// const carList = [];

class CarListing {
  #make;
  #model;
  #year;
  #price;
  #owner;
  #contactInfo;
  #isSold;

  constructor(make, model, year, price, owner, contactInfo) {
    this.#make = make;
    this.#model = model;
    this.#year = year;
    this.#price = price;
    this.#owner = owner;
    this.#contactInfo = contactInfo;
    this.#isSold = false;
  }

  markAsSold() {
    this.#isSold = true;
  }

  get isSold() {
    return this.#isSold;
  }

  getListingInfo() {
    return `Car info: ${this.#year} ${this.#model} ${this.#make} price ${
      this.#price
    }. Contacts info: ${this.#owner} ${this.#contactInfo}.`;
  }
}

function handlerAddCar(ev) {
  ev.preventDefault();
  const form = ev.target;
  carList.push(
    new CarListing(
      form.make.value,
      form.model.value,
      parseInt(form.year.value),
      parseFloat(form.price.value),
      form.owner.value,
      form.contactInfo.value
    )
  );

  console.dir(carList);
  console.log(carList[0].getListingInfo());
  console.log(carList[0]);
}

const addNewCarBtn = document.querySelector(".newCar-js");

addNewCarBtn.addEventListener("click", handlerShowForm);

function handlerShowForm() {
  console.log("object");
  lightBox.show();
  const carForm = document.querySelector(".car-form");
  carForm.addEventListener("submit", handlerAddCar);
}

const lightBox = basicLightbox.create(`
<form class="car-form" action="">
      <label for="make">Car maker</label>
      <input type="text" name="make" placeholder="Enter car maker" id="make" />
      <label for="model">Car model</label>
      <input
        type="text"
        name="model"
        placeholder="Enter car model"
        id="model"
      />
      <label for="year">Year of your car manufacturing</label>
      <input
        type="number"
        name="year"
        placeholder="Enter year of car manufacturing"
        id="year"
      />
      <label for="price">Car price, USD</label>
      <input
        type="number"
        name="price"
        placeholder="Enter car price"
        id="price"
      />

      <label for="owner">Your name</label>
      <input type="text" name="owner" placeholder="Enter name" id="owner" />

      <label for="contactInfo">Your contacts</label>
      <input
        type="text"
        name="contactInfo"
        placeholder="Enter your contacts"
        id="contactInfo"
      />
      <button class="add-button" type="submit">Add</button>
    </form>
    `);
