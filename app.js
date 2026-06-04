// =======================================
// CLEVIS CORPORATION WEBSITE ENGINE
// =======================================

// Reveal Animations

const reveals = document.querySelectorAll(
".reveal, .reveal-right"
);

const revealObserver =
new IntersectionObserver(

(entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

},

{
threshold:0.15
}

);

reveals.forEach(item=>{

revealObserver.observe(item);

});

// =======================================
// Navbar Glass Effect
// =======================================

const navbar =
document.querySelector(".navbar");

window.addEventListener("scroll",()=>{

if(window.scrollY > 40){

navbar.style.background =
"rgba(0,0,0,.92)";

navbar.style.backdropFilter =
"blur(30px)";

}
else{

navbar.style.background =
"rgba(0,0,0,.75)";

navbar.style.backdropFilter =
"blur(20px)";

}

});

// =======================================
// Hero Background Motion
// =======================================

const hero =
document.querySelector(".hero");

if(hero){

window.addEventListener(
"mousemove",
(e)=>{

const x =
e.clientX /
window.innerWidth;

const y =
e.clientY /
window.innerHeight;

hero.style.backgroundPosition =
`${50 + x*4}% ${50 + y*4}%`;

});

}

// =======================================
// Carousel Auto Scroll
// =======================================

const carousel =
document.querySelector(".carousel");

if(carousel){

let scrollSpeed = 1;

function autoScroll(){

carousel.scrollLeft += scrollSpeed;

if(
carousel.scrollLeft >=
carousel.scrollWidth -
carousel.clientWidth
){

carousel.scrollLeft = 0;

}

requestAnimationFrame(
autoScroll
);

}

autoScroll();

carousel.addEventListener(
"mouseenter",
()=>{

scrollSpeed = 0;

}
);

carousel.addEventListener(
"mouseleave",
()=>{

scrollSpeed = 1;

}
);

}

// =======================================
// Smooth Anchor Scrolling
// =======================================

document
.querySelectorAll('a[href^="#"]')
.forEach(anchor=>{

anchor.addEventListener(
"click",
function(e){

e.preventDefault();

const target =
document.querySelector(
this.getAttribute("href")
);

if(target){

target.scrollIntoView({

behavior:"smooth"

});

}

});

});

// =======================================
// Product Registry
// =======================================

const clevisProducts = {

phones:[
"ClevisPhone Elite 4",
"ClevisPhone Aura 4",
"ClevisPhone Pure 2",
"iBlowUp 13 Max"
],

computers:[
"ClevisBook Nano 2",
"ClevisBook Mega 1",
"CammieBook Pro"
],

tablets:[
"ClevisPad",
"Clevis Vision"
],

vehicles:[
"Antidisesteablishmentarianismobile"
]

};

// Easy future expansion

function registerProduct(
category,
name
){

if(
!clevisProducts[category]
){

clevisProducts[category] = [];

}

clevisProducts[category]
.push(name);

}

// Example:
//
// registerProduct(
// "phones",
// "ClevisPhone Ultra"
// );

// =======================================
// FarmerPlus Registry
// =======================================

const farmerPlusBenefits = [

"Priority Support",

"ClevisTV Included",

"Exclusive Discounts",

"Early Product Access",

"Member Events"

];

// =======================================
// Site Loaded
// =======================================

window.addEventListener(
"load",
()=>{

document.body.classList.add(
"loaded"
);

console.log(
"Clevis Corporation Loaded"
);

console.log(
"The Future is Built by Clevis"
);

});
