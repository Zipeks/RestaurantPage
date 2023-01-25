import { myMenu, images } from './menu';

const menuPage = () => {
    const menu = myMenu();
    const foodImg = images();
    const wrapper = document.createElement('div');
    wrapper.classList.add('menu');


    for (let i = 0; i < menu.length; i++) {
        const div = document.createElement('div');
        const minDiv1 = document.createElement('div');
        const icon = foodImg[i];
        minDiv1.appendChild(icon);
        div.appendChild(minDiv1);

        const minDiv2 = document.createElement('div');
        const name = document.createElement('h2');
        name.innerText = menu[i].name;
        minDiv2.appendChild(name);

        const description = document.createElement('p');
        description.innerText = menu[i].description;
        minDiv2.appendChild(description);
        div.appendChild(minDiv2);
        wrapper.appendChild(div);
    }
    return wrapper;
}
export default menuPage;