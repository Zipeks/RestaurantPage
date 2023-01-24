import changePages from "./changePages";

const createNav = () => {
    const header = document.createElement('header');
    const companyName = document.createElement('h1');
    companyName.innerText = "Food with passion";
    header.appendChild(companyName);

    const div = document.createElement('div');
    const homeBtn = document.createElement('button');

    homeBtn.innerText = 'Home';


    const menuBtn = document.createElement('button');
    menuBtn.innerText = 'Menu';


    const contactBtn = document.createElement('button');
    contactBtn.innerText = 'Contact';


    const clearButtons = () => {
        const buttons = [contactBtn, menuBtn, homeBtn];
        for (let i = 0; i < 3; i++) {
            buttons[i].classList.remove('active');
        }
    }
    homeBtn.addEventListener('click', () => {
        changePages.changeToHomePage();
        clearButtons();
        homeBtn.classList.add('active');

    });
    homeBtn.click();
    menuBtn.addEventListener('click', () => {
        changePages.changeToMenupage();
        clearButtons();
        menuBtn.classList.add('active');

    });
    contactBtn.addEventListener('click', () => {
        changePages.changeToContactPage();
        clearButtons();
        contactBtn.classList.add('active');
    })


    div.appendChild(homeBtn);
    div.appendChild(menuBtn);
    div.appendChild(contactBtn);
    header.appendChild(div);
    const content = document.querySelector('#content');
    console.log(content);
    content.appendChild(header);
};
export default createNav;