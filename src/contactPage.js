import create from 'dom-create-element';
import { checkTab, showMenu, tabs } from './index';

function loadContactPage() {

    while (showMenu.firstChild) {
        showMenu.removeChild(showMenu.firstChild);
    }
    checkTab();
    const contactPage = create({
        selector: 'div',
        styles: 'contactPage'
    });
    const item1 = create({
        selector: 'div',
        styles: "contactInfo",
        children: [
            create({
                selector: 'p',
                html: 'Adress: Av Belgrano 1984, Salta, Argentina'
            }),
            create({
                selector: 'p',
                html: 'Tel: 03874220908'
            }),
            create({
                selector: 'p',
                html: 'Mail: elquincho@gmail.com'
            })
        ]
    });
    const item2 = create({
        selector: 'div',
        styles: 'icon',
        children: [
            create({
                selector: 'p',
                id: 'signa',
                html: 'By Rodrigo '
            }),
            create({
                selector: 'a',
                link: 'https://github.com/Rodrigo-20',
                target: '_blank',
                children: create({
                    selector: 'i',
                    styles: 'fa fa-github',
                })
            })]
    });
    contactPage.appendChild(item1);
    contactPage.appendChild(item2);
    showMenu.appendChild(contactPage);
}

export default loadContactPage;