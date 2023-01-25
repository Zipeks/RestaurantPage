import chefImg from './images/chefCook.png'

const homePage = () => {
    const wrapper = document.createElement('div');
    wrapper.classList.add('home');
    const text = document.createElement('h1');
    text.innerText = 'Always fresh food, right next to you';
    wrapper.appendChild(text);

    const chef = new Image();
    chef.src = chefImg;
    chef.classList.add('chef');
    wrapper.appendChild(chef);

    const info = document.createElement('p');
    info.innerText = 'Place order online or visit us!';
    wrapper.appendChild(info);

    return wrapper;
}

export default homePage;