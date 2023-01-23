import pizzaImg from './images/tunaPizza.jpg'
const pizza = new Image();
pizza.src = pizzaImg;

import hamburgerImg from './images/hamburger.jpg'
const hamburger = new Image();
hamburger.src = hamburgerImg;

import spaghettiImg from './images/spaghetti.jpg'
const spagghetti = new Image();
spagghetti.src = spaghettiImg;

export const images = () => [hamburger, pizza, spagghetti];

export const myMenu = () => {
    return [
        {
            "name": "Hamburger",
            "description": "Big burger with a lot of meat",
        },
        {
            "name": "Pizza",
            "description": "Giant pizza with pineaples and tuna",
        },
        {
            "name": "Spaghetti",
            "description": "Delicious spagghetti made by a true italian"
        }
    ]

}
