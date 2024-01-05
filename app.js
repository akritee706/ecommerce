const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");

const products = [
  {
    id: 1,
    title: "Waterproof S ",
    price: 1219,
    colors: [
      {
        code: "blue",
        img: "image/w11.jpg",
      },
      {
        code: "red",
        img: "image/w1r.jpg",
      },
    ],
  },
  {
    id: 2,
    title: "GPS Smartwatch",
    price: 1900,
    colors: [
      {
        code: "red",
        img: "image/w15r.jpg",
      },
      {
        code: "black",
        img: "image/w15.jpeg",
      },
     
    ],
  },
  {
    id: 3,
    title: "Fitness-Focused Smartwatch",
    price: 1209,
    colors: [
      {
        code: "Black",
        img: "image/watch3.jpg",
      },
      {
        code: "green",
        img: "image/wat3g.jpg",
      },
    ],
  },
  {
    id: 4,
    title: "Rolex",
    price: 1800,
    colors: [
      {
        code: "white",
        img: "image/watch4.jpg",
      },
      {
        code: "brown",
        img: "image/watch4g.jpg",
      },
    ],
  },
  {
    id: 5,
    title: "SyncroSphere Watch",
    price: 1900,
    colors: [
      {
        code: "pink",
        img: "image/w14.jpg",
      },
      {
        code: "black",
        img: "image/w14r.jpg",
      },
    ],
  },
];

let choosenProduct = products[0];

const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductColors = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".size");

menuItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    //change the current slide
    wrapper.style.transform = `translateX(${-100 * index}vw)`;

    //change the choosen product
    choosenProduct = products[index];

    //change texts of currentProduct
    currentProductTitle.textContent = choosenProduct.title;
    currentProductPrice.textContent = choosenProduct.price+"Rs";
    currentProductImg.src = choosenProduct.colors[0].img;

    //assing new colors
    currentProductColors.forEach((color, index) => {
      color.style.backgroundColor = choosenProduct.colors[index].code;
    });
  });
});

currentProductColors.forEach((color, index) => {
  color.addEventListener("click", () => {
    currentProductImg.src = choosenProduct.colors[index].img;
  });
});

// currentProductSizes.forEach((size, index) => {
//   size.addEventListener("click", () => {
//     currentProductSizes.forEach((size) => {
//       size.style.backgroundColor = "white";
//       size.style.color = "black";
//     });
//     size.style.backgroundColor = "black";
//     size.style.color = "white";
//   });
// });

const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

productButton.addEventListener("click", () => {
  payment.style.display = "flex";
});

close.addEventListener("click", () => {
  payment.style.display = "none";
});