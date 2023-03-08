/**
 * WEB222 – Assignment 04
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
 *      Date:       <03/20/2022>
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
    button.textContent = text;
    nav.appendChild(button);
    button.onclick = function () {
      clicking(categories[i]);
    };
  }
}
function clicking(e) {
  var title = document.querySelector("#selected-category");
  var text = e.name;
  title.textContent = text;
  var table = document.querySelector("#category-products");
  table.innerHTML = "";
  var array = products.filter((prod) => {
    if (prod.discontinued === false) {
      return prod.categories.includes(e.id);
    }
  });
  array.forEach((element) => {
    var name = document.createElement("td");
    var description = document.createElement("td");
    var price = document.createElement("td");
    var tr = document.createElement("tr");
    name.textContent = element.title;
    description.textContent = element.description;
    var text = new Intl.NumberFormat("en-CA", {
      style: "currency",
      currency: "CAD",
      currencyDisplay: "narrowSymbol"
    }).format(element.price / 100);
    price.textContent = text;
    table.appendChild(tr).appendChild(name);
    tr.appendChild(description);
    tr.appendChild(price);
    tr.onclick = function () {
      display(element);
    };
  });
}
function display(e) {
  console.log({ e });
}
window.onload = createbutton();
