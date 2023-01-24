import homePage from "./homePage";
import menuPage from "./menuPage";
import contactPage from "./contact";

const changePages = ((status) => {
    const content = document.querySelector('#content');
    const main = document.createElement('main');
    content.appendChild(main);

    let pageStatus = status;
    const clearPage = () => main.innerHTML = '';

    const changeToHomePage = () => {
        if (pageStatus != 'home'); {
            clearPage();
            main.appendChild(homePage());
            pageStatus = 'home';
        }
    }
    const changeToMenupage = () => {
        if (pageStatus != 'menu'); {
            clearPage();
            main.appendChild(menuPage());
            pageStatus = 'menu';
        }
    };
    const changeToContactPage = () => {
        if (pageStatus != 'contact'); {
            clearPage();
            main.appendChild(contactPage());
            pageStatus = 'contact';
        }
    }
    return { changeToHomePage, changeToMenupage, changeToContactPage }
})();
export default changePages;