// make hamburger menu icon turn into X and expand menu

//grab the button and menu block
const nav_btn = document.querySelector('.hamburger');
const nav_menu = document.querySelector('.mobile-nav');

// add classes to toggle
nav_btn.addEventListener('click', function () {
    nav_btn.classList.toggle('is-active');
    nav_menu.classList.toggle('is-active');
})





//CALCULATOR

// Convert Fahrenheit (F) to Celsius (C)
function convertFahr () {
    //fetch value from input (parsInt makes the string a number)
    const fer = parseInt(document.querySelector('#userInput').value);

    // plug in Fahrenheit (F) to Celsius (C) conversion formula
    const cels = (fer - 32) * 0.5556;
    console.log(cels);

    //display the number
    document.getElementById('result').innerText = cels + " C";
}

// Convert Feet (ft) to Miles (mi)
function convertFeet () {
    //fetch value from input (parsInt makes the string a number)
    const feet = parseInt(document.querySelector('#userInput').value);

    //plug in Feet (ft) to Miles (mi) conversion formula
    const miles = feet * 0.0001894;
    console.log(miles);

    //display the number
    document.getElementById('result').innerText = miles + " mi";
}

// Convert Inches (in) to Centimeters (cm)
function convertInch () {
    //fetch value from input (parsInt makes the string a number)
    const inch = parseInt(document.querySelector('#userInput').value);

    //plug in Inches (in) to Centimeters (cm) conversion formula
    const centimeters = inch * 2.54;
    console.log(centimeters);

    //display the number
    document.getElementById('result').innerText = centimeters + " cm";
}



// DARK MODE

// grab light and dark button
const darkBtn = document.querySelector('.dark-light');

//grab containers
const homeContainer1 = document.querySelector('.grid-item1');
const homeContainer2 = document.querySelector('.grid-item2');
const homeContainer3 = document.querySelector('.grid-item4');
const homeContainer4 = document.querySelector('.grid-item6');
const homeContainer5 = document.querySelector('.grid-item7');

const calcContainer1 = document.querySelector('.calc-item1');
const calcContainer2 = document.querySelector('.calc-item2');
const calcContainer3 = document.querySelector('.calc-item3');

const contactContainer1 = document.querySelector('.contact1');
const contactContainer2 = document.querySelector('.contact2');
const contactContainer3 = document.querySelector('.contact3');

//grab background
const background = document.querySelector('body');

//grab buttons
const buttons = document.querySelector('.cta-btn');

//grab text
const text = document.querySelector('p');

//grab 1 headers
const mainHeadings = document.querySelector('h1');

//grab 2 headers
const secondHeadings = document.querySelector('h2');

//create function for light btn
darkBtn.addEventListener('click', function () {
    // all toggles
    background.classList.toggle('dark-mode-background');

    //home page toggles
    //toggle home containers
    homeContainer1.classList.toggle('dark-mode-container');
    homeContainer2.classList.toggle('dark-mode-container');
    homeContainer3.classList.toggle('dark-mode-container');
    homeContainer4.classList.toggle('dark-mode-container');
    homeContainer5.classList.toggle('dark-mode-container');

    //calc page toggles
    //toggle calc containers
    calcContainer1.classList.toggle('dark-mode-container');
    calcContainer2.classList.toggle('dark-mode-container');
    calcContainer3.classList.toggle('dark-mode-container');

    //contact page toggles
    //toggle contact containers
    contactContainer1.classList.toggle('dark-mode-container');
    contactContainer2.classList.toggle('dark-mode-container');
    contactContainer3.classList.toggle('dark-mode-container');


})