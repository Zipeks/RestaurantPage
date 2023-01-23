const homePage = () => {
    const wrapper = document.createElement('div');
    const text = document.createElement('p');
    text.innerText = 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe sapiente labore nesciunt temporibus illum! Dolor repellendus perspiciatis omnis quo autem inventore aliquam natus rerum sed molestias ab temporibus, nisi accusamus.';
    wrapper.appendChild(text);
    return wrapper;
}

export default homePage;