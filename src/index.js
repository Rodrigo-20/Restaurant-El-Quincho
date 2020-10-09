import create from "dom-create-element";
import loadDrinkPage from "./drinkPage";
import loadFoodPage from "./foodPage";
import loadContactPage from "./contactPage";
const container = document.querySelector("#content");

const tittle = create({
  selector: "h1",
  id: "tittle",
  html: "El Quincho",
});

const menuContainer = create({
  selector: "div",
  id: "menuCont",
});

const tabNav = create({
  selector: "div",
  id: "tabNav",
  children: [
    create({
      selector: "div",
      id: "food",
      styles: "tab",
    }),
    create({
      selector: "div",
      id: "drink",
      styles: "tab",
    }),
    create({
      selector: "div",
      id: "contact",
      styles: "tab",
    }),
  ],
});
const showMenu = create({
  selector: "div",
  id: "menu",
});

container.appendChild(tittle);
menuContainer.appendChild(tabNav);
menuContainer.appendChild(showMenu);
container.appendChild(menuContainer);

const food = document.querySelector("#food");
const drink = document.querySelector("#drink");
const contact = document.querySelector("#contact");

function createButtonandLabel(parent, id, value, cond = false) {
  const radio = document.createElement("input");
  radio.setAttribute("type", "radio");
  radio.setAttribute("id", id);
  radio.setAttribute("name", "tab");
  radio.setAttribute("value", value);
  radio.checked = cond;
  const labl = document.createElement("label");
  labl.setAttribute("for", id);
  labl.innerHTML = value;
  parent.appendChild(radio);
  parent.appendChild(labl);
}

createButtonandLabel(food, "foodTab", "Food", true);
createButtonandLabel(drink, "drinkTab", "Drink");
createButtonandLabel(contact, "contactTab", "Contact");

const tabs = document.querySelectorAll("input");
function checkTab() {
  tabs.forEach((tab) => {
    tab.checked
      ? tab.parentNode.classList.add("tab-click")
      : tab.parentNode.classList.remove("tab-click");
  });
}
checkTab();
loadFoodPage();
food.addEventListener("click", loadFoodPage);
drink.addEventListener("click", loadDrinkPage);
contact.addEventListener("click", loadContactPage);
export { showMenu, tabs, checkTab };
