import create from 'dom-create-element';
import { checkTab, showMenu, tabs } from './index';

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
                src: '../dist/images/chori_resize.jpg',

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
                        selector: 'p', html: `It's consider to be one of the most traditional sandwiches from Argentina and one of the most teasteful pieces of meat that you ever gonna try `
                    })]
            }),
            create({
                selector: 'img',
                styles: 'img-box',
                src: '../dist/images/costillar.jpg',

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
                        selector: 'p', html: `It's consider to be one of the most traditional sandwiches from Argentina and one of the most teasteful pieces of meat that you ever gonna try `
                    })]
            }),
            create({
                selector: 'img',
                styles: 'img-box',
                src: '../dist/images/empanadas.jpg',

            })]

    });
    showMenu.appendChild(item1);
    showMenu.appendChild(item2);
    showMenu.appendChild(item3);
};

export default loadFoodPage

