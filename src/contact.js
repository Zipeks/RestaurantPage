const contactPage = () => {
    const wrapper = document.createElement('div');
    const info = document.createElement('h1');
    info.innerText = 'You can contact us by:';
    wrapper.appendChild(info);

    const fb = document.createElement('p');
    fb.innerHTML = '<a href="">Food with passion</a> on Facebook';
    wrapper.appendChild(fb);

    const ig = document.createElement('p');
    ig.innerHTML = '<a href="">Food with passion</a> on Instagram';
    wrapper.appendChild(ig);

    return wrapper;
}
export default contactPage;