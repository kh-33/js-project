let userInfo = document.querySelector("#user_info");
let userD = document.querySelector("#user");
let links = document.querySelector("#links");

if (localStorage.getItem("username")) {
  links.remove();
  userInfo.style.display = "flex";

  userD.innerHTML = localStorage.getItem("username");
}
let logOutBtn = document.querySelector("#logout");
logOutBtn.addEventListener("click", function () {
  localStorage.clear();
  setTimeout(() => {
    window.location = "login.html";
  }, 500);
});

let allProducts = document.querySelector(".products");
let products = [
  {
    id: 1,
    title: "Single Breasted Blazer",
    color: "navy",
    imageUrl: "./images/prod1.webp",
  },
  {
    id: 2,
    title: "Wool Blended Bomber Jacket",
    color: "camel",
    imageUrl: "./images/prod2.webp",
  },
  {
    id: 3,
    title: "Drawstring Hoodie",
    color: "taupe",
    imageUrl: "./images/prod3.webp",
  },
  {
    id: 4,
    title: "Beleted Blazer",
    color: "papaya",
    imageUrl: "./images/prod5.webp",
  },
  {
    id: 5,
    title: "Junior Oversized T-Shirt",
    color: "white",
    imageUrl: "./images/prod4.webp",
  },
  {
    id: 6,
    title: "Junior Elasticated Hoodie",
    color: "balck",
    imageUrl: "./images/prod6.webp",
  },
];
function drawItems() {
  let y = products.map((item) => {
    return `
        <div class="product_item ">
        <img class="product_item_img" src="${item.imageUrl}" alt="">
        <div class="product_item_desc">
            <h3>${item.title}</h3>
            <p>price: $100</p>
            <span>${item.color}</span>
        </div>
        <div class="product_item_action">
         <button class="add_to_cart" onClick="addToCart(${item.id})">Add To Cart</button>
         
        </div>
    </div>
        `;
  });
  allProducts.innerHTML = y;
}
drawItems();

let cartProductDiv = document.querySelector(".carts_products div");
let badge = document.querySelector(".badge");

let addedItem = localStorage.getItem("ProductsInCart")
  ? JSON.parse(localStorage.getItem("ProductsInCart"))
  : [];

if (addedItem) {
  addedItem.map((item) => {
    cartProductDiv.innerHTML += `<p>${item.title}</p>`;
  });
  badge.style.display = "block";
  badge.innerHTML = addedItem.length;
}

if ((localStorage.getItem = "username")) {
  function addToCart(id) {
    let choosenItem = products.find((item) => item.id === id);
    cartProductDiv.innerHTML += `<p>${choosenItem.title}</p>`;

    addedItem = [...addedItem, choosenItem];
    localStorage.setItem("ProductsInCart", JSON.stringify(addedItem));
    let cartProductsLength = document.querySelectorAll(".carts_products div p");

    badge.style.display = "block";
    badge.innerHTML = cartProductsLength.length;
  }
} else {
  window.location = "login.html";
}

let shoppingCartIcon = document.querySelector(".shopping_cart");
let cartsProducts = document.querySelector(".carts_products");
shoppingCartIcon.addEventListener("click", opencart);

function opencart() {
  if (cartProductDiv.innerHTML != "") {
    if (cartsProducts.style.display == "block") {
      cartsProducts.style.display = "none";
    } else {
      cartsProducts.style.display = "block";
    }
  }
}
