import create from "dom-create-element";
import { showMenu, tabs, checkTab } from "./index";
import Vino from './images/malbec.jpg'
import Beer from './images/salta.jpg'

function loadDrinkPage() {
  while (showMenu.firstChild) {
    showMenu.removeChild(showMenu.firstChild);
  }
  checkTab();

  /*const drinkTab = document.querySelector('#drink');
drinkTab.style['border-bottom']='none';
console.log(drinkTab);*/
  const item1 = create({
    selector: "div",
    styles: "menu-item",
    children: [
      create({
        selector: "div",
        styles: "item-description",
        children: [
          create({
            selector: "h2",
            html: "Salta beer",
          }),
          create({
            selector: "p",
            html: `Try this tradional lagger from Salta's city `,
          }),
        ],
      }),
      create({
        selector: "img",
        styles: "img-box",
        src: Vino,
      }),
    ],
  });
  const item2 = create({
    selector: "div",
    styles: "menu-item",
    children: [
      create({
        selector: "div",
        styles: "item-description",
        children: [
          create({
            selector: "h2",
            html: "Malbec Elementos",
          }),
          create({
            selector: "p",
            html: `This Argentinian red isn’t what you’d expect. It tastes great served chilled and zings with acidity (and sometimes spritz) which does wonders to cut through all that sausage-y fat and those caramelized onions on the side. `,
          }),
        ],
      }),
      create({
        selector: "img",
        styles: "img-box",
        src: Beer,
      }),
    ],
  });
  showMenu.appendChild(item1);
  showMenu.appendChild(item2);
}

export default loadDrinkPage;
