import pizzaImg from './images/tunaPizza.jpg'
const pizza = new Image();
pizza.src = pizzaImg;

import hamburgerImg from './images/hamburger.jpg'
const hamburger = new Image();
hamburger.src = hamburgerImg;

import spaghettiImg from './images/spaghetti.jpg'
const spagghetti = new Image();
spagghetti.src = spaghettiImg;

import cheesburgerImg from './images/cheesburger.jpg'
const cheesburger = new Image();
cheesburger.src = cheesburgerImg;

import kebabImg from './images/kebab.jpg'
const kebab = new Image();
kebab.src = kebabImg;

import friesImg from './images/fries.jpg'
const fries = new Image();
fries.src = friesImg;

import lasagneImg from './images/lasagne.jpeg'
const lasagne = new Image();
lasagne.src = lasagneImg;

import saladImg from './images/salad.jpg'
const salad = new Image();
salad.src = saladImg;

import ramenImg from './images/ramen.jpg'
const ramen = new Image();
ramen.src = ramenImg;

import spicyNoodleImg from './images/spicyNoodle.jpg'
const spicyNoodle = new Image();
spicyNoodle.src = spicyNoodleImg;

import sausagesInVinegarImg from './images/parowki.jpg'
const sausagesInVinegar = new Image();
sausagesInVinegar.src = sausagesInVinegarImg;

export const images = () => [hamburger, pizza, spagghetti, cheesburger, kebab, fries, lasagne, salad, ramen, spicyNoodle, sausagesInVinegar];

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
        },
        {
            "name": "Cheesburger",
            "description": "Burger with a lot of cheese",
        },
        {
            "name": "Kebab",
            "description": "Burns twice",
        },
        {
            "name": "Fries",
            "description": "Belgian fries"
        },
        {
            "name": "Lasagne",
            "description": "Only best meat and cheese",
        },
        {
            "name": "Salad",
            "description": "For fit people"
        },
        {
            "name": "Ramen",
            "description": "Right from Japan"
        },
        {
            "name": "Spicy Korean Noodle",
            "description": "Spiciest you have ever eaten"
        },
        {
            "name": "Sausages in vinegar",
            "description": "Czech delicacy, often served with bear"
        }
    ]

}
