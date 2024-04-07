let removeBtn = document.querySelector("remove-item");
let ProductsInCart = localStorage.getItem("ProductsInCart");
let allProducts = document.querySelector(".products");

if (ProductsInCart) {
  let item = JSON.parse(ProductsInCart);
  drawCartProducts(item);
}

let addedItem = JSON.parse(localStorage.getItem("ProductsInCart")) || [];

function drawCartProducts(products) {
  if (products.length === 0) {
    allProducts.innerHTML = "<h2>Cart is empty :(<h2>";
    return;
  }
  let y = products.map((item) => {
    return `
            <div class="product_item">
                <img class="product_item_img" src="${item.imageUrl}" alt="">
                <div class="product_item_desc">
                    <h2>${item.title}</h2>
                    <p>price: $100</p>
                    <span>${item.color}</span>
                </div>
                <div class="product_item_action">
                    <button class="add_to_cart remove-item" onClick="removeFromCart(${item.id})">Remove From Cart</button>
                </div>
            </div>
        `;
  });
  allProducts.innerHTML = y.join("");
}

function removeFromCart(id) {
  let choosenItemIndex = addedItem.findIndex((item) => item.id === id);
  if (choosenItemIndex !== -1) {
    addedItem.splice(choosenItemIndex, 1);
    localStorage.setItem("ProductsInCart", JSON.stringify(addedItem));
    drawCartProducts(addedItem);
    updateBadge();
  }
}

function updateBadge() {
  let cartProductsLength = addedItem.length;
  badge.innerHTML = cartProductsLength;
  badge.style.display = cartProductsLength > 0 ? "block" : "none";
}

drawCartProducts(addedItem);
updateBadge();
