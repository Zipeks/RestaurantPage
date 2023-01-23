import homePage from "./homePage";
import menuPage from "./menuPage";

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
    }
    return { changeToHomePage, changeToMenupage }
})();
export default changePages;