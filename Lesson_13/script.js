// ******* Додавання прослуховувача подій на кожен елемент ******* \\
// Отримай колір квадратика по якому було здійснено клік

// const items = document.querySelectorAll('.js-box')
// items.forEach((item) => item.addEventListener('click', handlerClick))

// function handlerClick(evt){
//   console.log(evt.currentTarget);
// }

// ************** Дегегування подій ************** \\
// Отримай колір квадратика по якому було здійснено клік

// const container = document.querySelector(".js-container");

// container.addEventListener("click", handlerClick);

// function handlerClick(evt) {
//   // if (evt.target === evt.currentTarget) {
//   //   return;
//   // }
//   // console.log(evt.target);

//   // if (!evt.target.classList.contains("js-box")) {
//   //   return;
//   // }
//   // console.log(evt.target);
//   if (evt.target.classList.contains("js-red")) {
//     console.log("red");
//   } else if (evt.target.classList.contains("js-black")) {
//     console.log("black");
//   } else if (evt.target.classList.contains("js-green")) {
//     console.log("green");
//   }
// }

// **************** stopPropagation **************** \\

// const red = document.querySelector(".js-box-red");
// const green = document.querySelector(".js-box-green");
// const black = document.querySelector(".js-box-black");

// red.addEventListener('click', handlerClick);
// green.addEventListener('click', handlerClick);
// black.addEventListener('click', handlerClick)

// function handlerClick(evt) {
//   const isConfirm = confirm(`click на елементі ${evt.currentTarget.id} ,викликати метод stopPropagation?`)

//   if (isConfirm) {
//     evt.stopPropagation();
//   }
// }

// **************** stopImmediatePropagation **************** \\
// const red = document.querySelector(".js-box-red");

// red.addEventListener("click", firstHandlerClick);
// red.addEventListener("click", secondHandlerClick);
// red.addEventListener("click", thirdHandlerClick);

// function firstHandlerClick(e) {
//   alert("First handler");

//   const isConfirm = confirm("Викликати метод stopImmediatePropagation?");

//   if (isConfirm) {
//     e.stopImmediatePropagation();
//   }
// }

// function secondHandlerClick(e) {
//   alert("Second handler");

//   const isConfirm = confirm("Викликати метод stopImmediatePropagation?");

//   if (isConfirm) {
//     e.stopImmediatePropagation();
//   }
// }

// function thirdHandlerClick(e) {
//   alert("Third handler");

//   const isConfirm = confirm("Викликати метод stopImmediatePropagation?");

//   if (isConfirm) {
//     e.stopImmediatePropagation();
//   }
// }

// **************** Практика **************** \\
// Створи картки з товарами на основі масиву products, приклад картки https://prnt.sc/KmgDlzqOIA3M
// Реалізуй делегування подій на колекції карток
// Після кліку на картку повинно з'являтись модальне вікно з детальною інформацією про продукт, приклад модального вікна https://prnt.sc/vWNoCeZcw7ii
// Для реалізації модального вікна використай бібліотеку basicLightbox (https://github.com/electerious/basicLightbox)

const products = [
  {
    id: 1,
    img: "https://www.vodafone.ua/shop/media/wysiwyg/novosti/Capture_1_large.JPG",
    name: "Монітор",
    price: 3000,
    description: "23-дюймовий монітор з Full HD роздільною здатністю.",
  },
  {
    id: 2,
    img: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTzWqRMI3HQiDfICHAmbArmaP4uOOIjfz0sDITv0dfkpb0mbbgX",
    name: "Ноутбук",
    price: 20000,
    description: "Легкий та потужний ноутбук з 15-дюймовим дисплеєм та SSD.",
  },
  {
    id: 3,
    img: "https://cdn.27.ua/799/66/39/6841913_1.jpeg",
    name: "Смартфон",
    price: 8000,
    description: "Оснащений потрійною камерою та багатоядерним процесором.",
  },
  {
    id: 4,
    img: "https://cdn.27.ua/799/b6/16/4371990_1.jpeg",
    name: "Планшет",
    price: 12000,
    description:
      "10-дюймовий планшет з високою продуктивністю та Retina дисплеєм.",
  },
];

const list = document.querySelector(".js-products");

function createMarkup(arr) {
  return arr
    .map(
      ({ id, img, name, price }) => `
  <li data-product-id="${id}" class="item js-item">
    <img src="${img}" alt="${name}" width="300"/>
    <h2>${name}</h2>
    <p>Ціна: ${price} грн</p>
  </li>
  `
    )
    .join("");
}

list.insertAdjacentHTML("afterbegin", createMarkup(products));
list.addEventListener("click", handlerClick);

function handlerClick(evt) {
  if (evt.currentTarget === evt.target) {
    return;
  }

  const currentProduct = evt.target.closest(".js-item");
  const productId = Number(currentProduct.dataset.productId);
  const product = products.find(({ id }) => id === productId);

  createModal(product);
}

function createModal({ img, name, price, description }) {
  const instance = basicLightbox.create(`
  <div class="modal">
    <img src="${img}" alt="${name}" />
    <h2>${name}</h2>
    <h3>Ціна: ${price} грн</h3>
    <p>${description}</p>
  </div>
`);

  instance.show();
}
