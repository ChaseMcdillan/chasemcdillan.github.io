// ======================================
// CLEVIS WEBSITE ENGINE
// ======================================

// Smooth reveal animations

const revealElements = document.querySelectorAll(
    ".reveal, .reveal-right"
);

const observer = new IntersectionObserver(
(entries) => {

    entries.forEach(entry => {

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

},
{
    threshold:0.15
}
);

revealElements.forEach(element => {
    observer.observe(element);
});

// ======================================
// Navbar glass effect
// ======================================

const navbar =
document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if(window.scrollY > 50){

        navbar.style.background =
        "rgba(0,0,0,.92)";

        navbar.style.backdropFilter =
        "blur(30px)";

    }
    else{

        navbar.style.background =
        "rgba(0,0,0,.75)";

    }

});

// ======================================
// Carousel Auto Pause
// ======================================

const carousel =
document.querySelector(".carousel-track");

if(carousel){

    carousel.addEventListener(
    "mouseenter",
    () => {

        carousel.style.animationPlayState =
        "paused";

    });

    carousel.addEventListener(
    "mouseleave",
    () => {

        carousel.style.animationPlayState =
        "running";

    });

}

// ======================================
// Hero Glow Effect
// ======================================

document.addEventListener(
"mousemove",
(event)=>{

    const hero =
    document.querySelector(".hero");

    if(!hero) return;

    const x =
    event.clientX /
    window.innerWidth;

    const y =
    event.clientY /
    window.innerHeight;

    hero.style.backgroundPosition =
    `${50 + x*5}% ${50 + y*5}%`;

});

// ======================================
// Future Product Loader
// ======================================

const productDatabase = {

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

// Future-proof expansion

function registerProduct(
category,
name
){

    if(!productDatabase[category]){

        productDatabase[category] = [];

    }

    productDatabase[category].push(name);

}

// Example:

// registerProduct(
// "phones",
// "ClevisPhone Ultra"
// );

// ======================================
// Smooth Page Scroll
// ======================================

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

// ======================================
// Console Welcome
// ======================================

console.log(`
===================================
CLEVIS CORPORATION
The Future is Built by Clevis
===================================
`);
