import image from "./img/menuView.jpg";

export default function CreateHomePage() {
  const bgImage = document.querySelector(".background.img");
  const back = document.querySelector(".back")
  bgImage.setAttribute("src", image);
  //top
  const top = document.querySelector(".top");
  const greeting = document.createElement("div");
  const greetingHeader = document.createElement("h1");

  greeting.classify("greeting");


  back.innerHTML = "Home";
  greetingHeader.innerHTML = "Menu";

  greeting.appendChild(greetingHeader);
  top.appendChild(greeting);
  document.body.appendChild(top);
  //center
  const center = document.querySelector(".center");
  center.classList.remove("home");
  center.classList.add("dishes");
//create new dish with parametrs
  function createDish(name, classList = "", src, description) {
    const dish = document.createElement("div");
    dish.classify("dish");
    dish.classList.add(classList);

    const dishDescription = document.createElement("div");
    dishDescription.classify("dish-description");

    const img = document.createElement("img");
    img.setAttribute("src", src);
    const title = document.createElement("h3");
    title.innerHTML = name;

    const par = document.createElement("p");
    par.innerHTML = description;

    dishDescription.appendChild(title);
    dishDescription.appendChild(par);

    dish.appendChild(img);
    dish.appendChild(dishDescription);

    center.appendChild(dish);
  }

  //add dishes

  createDish(
    "Fish steak",
    "Fish",
    "https://images.unsplash.com/photo-1597692493640-b70139c9e4ed",
    "Fish steak in white sause coocked on grill. Served with lemon."
  );

  createDish(
    "Shrimps on grill",
    "shrimp",
    "https://images.unsplash.com/photo-1514944288352-fffac99f0bdf",
    "Shrimp cooked in batter, grilled. Served with lemon."
  );

  createDish(
    "Shrimp Pasta",
    "shrimp-pasta",
    "https://images.unsplash.com/photo-1563379926898-05f4575a45d8",
    "This Creamy Shrimp Pasta! It’s ultra classic: juicy, savory shrimp and chewy pasta swimming in a creamy sauce."
  );

  createDish(
    "Pizza with seafood",
    "seafood-pizza",
    "https://images.unsplash.com/photo-1593560708920-61dd98c46a4e",
    "Bored with the same old “cardboard” pizza? Well, you’ll enjoy making this herbed shrimp and scallop treat."
  );

  createDish(
    "Chinese Noodle Soup",
    "noodle-soup",
    "https://images.unsplash.com/photo-1569718212165-3a8278d5f624",
    "This Chinese Noodle Soup makes has an aromatic broth that’s packed with noodles and Asian flavor."
  );

  createDish(
    "Wok-cooked Vegetables with Seafood",
    "noodle-soup",
    "https://images.unsplash.com/photo-1585863481734-ff56631d441c",
    "This Wok-cooked Vegetables & Nuts with Seafood has light and tangy taste."
  );

  document.body.appendChild(center);
}
