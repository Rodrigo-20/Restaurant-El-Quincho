import create from 'dom-create-element';
import { checkTab, showMenu, tabs } from './index';
import Chori from './images/chori_resize.jpg';
import Costillar from './images/costillar.jpg';
import Empanadas from './images/empanadas.jpg';
function loadFoodPage() {

    while (showMenu.firstChild) {
        showMenu.removeChild(showMenu.firstChild);
    }
    checkTab();
    const item1 = create({
        selector: 'div', styles: 'menu-item',
        children: [
            create({
                selector: 'div', styles: 'item-description',
                children:
                    [create({
                        selector: 'h2', html: 'Choripan'
                    }),
                    create({
                        selector: 'p', html: `It's consider to be one of the most traditional sandwiches from Argentina and one of the <br> most teasteful pieces of meat that you ever gonna try `
                    })]
            }),
            create({
                selector: 'img',
                styles: 'img-box',
                src: Chori,

            })]

    });
    const item2 = create({
        selector: 'div', styles: 'menu-item',
        children: [
            create({
                selector: 'div', styles: 'item-description',
                children:
                    [create({
                        selector: 'h2', html: 'Costillar a la estaca'
                    }),
                    create({
                        selector: 'p', html: `Tasteful ribs cooked in a slow manner (5 hours at least). Great to share with family and friends `
                    })]
            }),
            create({
                selector: 'img',
                styles: 'img-box',
                src: Costillar,

            })]

    });
    const item3 = create({
        selector: 'div', styles: 'menu-item',
        children: [
            create({
                selector: 'div', styles: 'item-description',
                children:
                    [create({
                        selector: 'h2', html: 'Empanadas'
                    }),
                    create({
                        selector: 'p', html: `A mix of meat, potato, egg, and much more wrap inside a delicious dough. It's one of the most traditional meals from the north of Argentina `
                    })]
            }),
            create({
                selector: 'img',
                styles: 'img-box',
                src: Empanadas,

            })]

    });
    showMenu.appendChild(item1);
    showMenu.appendChild(item2);
    showMenu.appendChild(item3);
};

export default loadFoodPage

