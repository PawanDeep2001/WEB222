/**
 * WEB222 – Assignment 05
 *
 * I declare that this assignment is my own work in accordance with
 * Seneca Academic Policy. No part of this assignment has been
 * copied manually or electronically from any other source
 * (including web sites) or distributed to other students.
 *
 * Please update the following with your information:
 *
 *      Name:       <PAWAN DEEP>
 *      Student ID: <111144218>
 *      Date:       <03/31/2022>
 */

// All of our data is available on the global `window` object.
// Create local variables to work with it in this file.
const { products, categories } = window;
// For debugging, display all of our data in the console
console.log({ products, categories }, "Store Data");

function createbutton() {
  for (let i = 0; i < categories.length; i++) {
    var button = document.createElement("button");
    var text = categories[i].name;
    var nav = document.querySelector("#menu");
    button.classList.add("nav");
    button.textContent = text;
    nav.appendChild(button);
    button.onclick = function () {
      createProductCard(categories[i]);
    };
  }
}
function createProductCard(e) {
  var title = document.querySelector("#selected-category");
  var text = e.name;
  title.textContent = text;
  var main = document.querySelector("#main");
  main.innerHTML = "";
  var array = products.filter((prod) => {
    if (prod.discontinued === false) {
      return prod.categories.includes(e.id);
    }
  });
  array.forEach((element) => {
    var div = document.createElement("div");
    div.classList.add("card");
    var image = document.createElement("img");
    image.classList.add("card-image");
    image.src = element.imageUrl;
    div.appendChild(image);
    var name = document.createElement("h3");
    var description = document.createElement("p");
    var price = document.createElement("span");
    name.textContent = element.title;
    description.textContent = element.description;
    var text = new Intl.NumberFormat("en-CA", {
      style: "currency",
      currency: "CAD",
      currencyDisplay: "narrowSymbol"
    }).format(element.price / 100);
    price.textContent = text;
    div.appendChild(name);
    div.appendChild(description);
    div.appendChild(price);
    main.appendChild(div);
    div.onclick = function () {
      display(element);
    };
  });
}
function display(e) {
  console.log({ e });
}
window.onload = createbutton();
