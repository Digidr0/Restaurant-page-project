//hotspot
if (module.hot) {
  module.hot.accept();
  console.log("\n - - - INJECTED WITH HOT MODULE - - -");
} else {
  console.log("\n - - - INJECTED WITHOUT HOT MODULE - - -");
}

import "./css/style.css";
import "./css/home.css";
import "./css/menu.css";
import "./css/animation.css";
import CreateHomePage from "./home.js";
import CreateMenuPage from "./menu.js";

Object.prototype.classify = function (className) {
  this.classList.add(className);
  this.classList.add("animate");
  this.classList.add("pop");
};

function clearDom() {
  let top = document.querySelector(".top");
  let center = document.querySelector(".center");
  top.innerHTML = "";
  center.innerHTML = "";
}
const back = document.querySelector(".back");

// main code

back.addEventListener("click", (e) => {
  clearDom();
  if (e.target.textContent == "Home") {
    CreateHomePage();
  } else {
    CreateMenuPage();
  }
});

CreateHomePage();
