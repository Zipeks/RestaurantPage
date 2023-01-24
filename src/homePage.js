const homePage = () => {
    const wrapper = document.createElement('div');
    const text = document.createElement('h1');
    text.innerText = 'Always fresh food, right next to you';
    wrapper.appendChild(text);
    return wrapper;
}

export default homePage;