const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);


import changePages from "./changePages";

const loadPage = () => {


    const createNav = () => {
        const header = document.createElement('header');
        const companyName = document.createElement('h1');
        companyName.innerText = "Food with passion";
        header.appendChild(companyName);

        const div = document.createElement('div');
        const homeBtn = document.createElement('button')
        homeBtn.innerText = 'Home';
        homeBtn.addEventListener('click', () => {
            changePages.changeToHomePage();
        });
        homeBtn.click();

        const menuBtn = document.createElement('button');
        menuBtn.innerText = 'Menu';
        menuBtn.addEventListener('click', () => {
            changePages.changeToMenupage();
        })

        const contactBtn = document.createElement('button');
        contactBtn.innerText = 'Contact';

        div.appendChild(homeBtn);
        div.appendChild(menuBtn);
        div.appendChild(contactBtn);
        header.appendChild(div);
        content.appendChild(header);
    };
    createNav();

}
export default loadPage;