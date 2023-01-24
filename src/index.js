import './style.css'

const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

import createNav from "./createNav";
import createFooter from "./footer";

const loadPage = () => {
    createNav();
    createFooter();
}
loadPage();