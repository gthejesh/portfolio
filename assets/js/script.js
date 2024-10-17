
const toggleButton = document.getElementById('theme-toggle');
const themeLink = document.getElementById('theme-link');

toggleButton.addEventListener('click', () => {
    if (themeLink.getAttribute('href') === './assets/css/dark_style.css') {
        themeLink.setAttribute('href', './assets/css/style.css');
    } else {
        themeLink.setAttribute('href', './assets/css/dark_style.css');
    }
});

document.getElementById("menu-icon").onclick = function() {
    var nav = document.querySelector("nav");
    nav.classList.toggle("active");
};

document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", () => {
        var nav = document.querySelector("nav");
        nav.classList.remove("active");
    });
});


// const currentHour = new Date().getHours();
// if (currentHour >= 18 || currentHour < 6) {
//     themeLink.setAttribute('href', './assets/css/dark_style.css');
// } else {
//     themeLink.setAttribute('href', './assets/css/style.css');
// }

// setInterval(() => {
//     toggleButton.click();
// }, 200);

var txt1 = `I'm currently pursuing my B.E. in Computer Science Engineering at Chettinad College
                of
                Engineering and Technology, with a CGPA of 7.98 (up to the 6th semester). I have a passion for software
                development, specializing in Django web applications, and I'm proficient in languages like C, C++,
                Python,
                and Java. I also have experience in front-end development with HTML, CSS, JavaScript, and ReactJS, as
                well
                as back-end development using Django, PHP and Node.js.`;
var txt2 = `Over the course of my studies, I've built several projects, including INVO, a platform connecting
                businesses
                with customers, and a legal awareness platform using interactive quizzes. I've been honored with the Dr.
                Kalam Young Achiever Award in 2023 for my work on INVO, which also led me to the finals of StartUp Café
                at
                Startify 2.0 in 2024. My goal is to continue learning and building impactful digital solutions.`;
var speed = 0;

window.addEventListener("load", function () {
    function typeWriter(element, text, i, callback) {
        if (i < text.length) {
            document.getElementById(element).innerHTML += text.charAt(i);
            i++;
            setTimeout(() => typeWriter(element, text, i, callback), speed);
        } else if (callback) {
            callback();
        }
    }
    typeWriter("write_about_1", txt1, 0, () => {
        typeWriter("write_about_2", txt2, 0);
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".navbar a");
    let observerOptions;

    if (window.innerWidth <= 400) {
        observerOptions = {
            root: null,
            threshold: 0.2
        };
    }
    else if (window.innerWidth <= 850) {
        observerOptions = {
            root: null,
            threshold: 0.4
        };
    }
    else {
        observerOptions = {
            root: null,
            threshold: 0.6
        };
    }

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            const navLink = document.querySelector(`nav a[href="#${entry.target.id}"]`);
            if (entry.isIntersecting) {
                navLink.classList.add("active");

            } else {
                navLink.classList.remove("active");
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        observer.observe(section);
    });
});

