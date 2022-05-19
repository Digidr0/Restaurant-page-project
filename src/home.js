import image from "./img/mainView.jpg";

export default function CreateHomePage() {
  const bgImage = document.querySelector(".background.img");
  bgImage.setAttribute("src", image);
  //top
  const back = document.querySelector(".back");

  const top = document.querySelector(".top");
  const greeting = document.createElement("div");
  const greetingHeader = document.createElement("h1");

  greeting.classify("greeting");

  back.innerHTML = "Menu";
  greetingHeader.innerHTML =
    "Welcome to " + "<span>Seashell</span>" + " restaurant";

  greeting.appendChild(greetingHeader);
  top.appendChild(greeting);
  document.body.appendChild(top);
  //center
  const center = document.querySelector(".center");
  const description = document.createElement("div");
  const paragraph = document.createElement("p");
  const list = document.createElement("ul");

  description.classify("description");
  list.classify("list");

  center.classList.remove("dishes");
  center.classList.add("home");

  paragraph.innerHTML =
    "<span>S</span>avor a flavor at Seashell, a brand-new restaurant in Saint-Louis. Whether you’re in the mood for something spicy or sweet, we’ve got a huge range of authentic cuisine available on our menu—all cooked to perfection.";

  list.innerHTML =
   `<li class="animate pop">Seafood</li>
    <li class="animate pop">Asian cuisine</li>
    <li class="animate pop">Italian cuisine</li>
    <li class="animate pop">Variety of drinks</li>`;

  description.appendChild(paragraph);
  center.appendChild(description);
  center.appendChild(list);
  document.body.appendChild(center);

  //   return greeting;
}

/* <div class="greeting">
<h1>Welcome to <span>Seashell</span> restaurant</h1>
</div> */

// <div class="description ">
//                 <p>Savor a flavor at Seashell, a brand-new restaurant in Saint-Louis. Whether you’re in the mood for
//                     something spicy or sweet, we’ve got a huge range of authentic cuisine available on our menu—all
//                     cooked to perfection. We’re excited to bring something new to our community and can’t wait to share
//                     our unique recipes.</p>

//             </div>
//             <ul class="list">
//                 <li class="animate pop">Seafood</li>
//                 <li class="animate pop">Asian cuisine</li>
//                 <li class="animate pop">Italian cuisine</li>
//                 <li class="animate pop">Variety of drinks</li>
//             </ul>
