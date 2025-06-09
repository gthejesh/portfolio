
const toggleButton = document.getElementById('theme-toggle');
const themeLink = document.getElementById('theme-link');

toggleButton.addEventListener('click', () => {
    if (themeLink.getAttribute('href') === './assets/css/dark_style.css') {
        themeLink.setAttribute('href', './assets/css/style.css');
    } else {
        themeLink.setAttribute('href', './assets/css/dark_style.css');
    }
});

document.getElementById("menu-icon").onclick = function () {
    var nav = document.querySelector("nav");
    nav.classList.toggle("active");
};

document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", () => {
        var nav = document.querySelector("nav");
        nav.classList.remove("active");
    });
});




var txt1 = `I'm currently pursuing my B.E. in Computer Science Engineering at Chettinad College
                of
                Engineering and Technology, with a CGPA of 7.98 (up to the 6th semester). I have a passion for software
                development, specializing in Django web applications, and I'm proficient in languages like C,
                Python,
                and Java. I also have experience in front-end development with HTML, CSS, JavaScript, Bootstrap as
                well
                as back-end development using Django, PHP and Laravel.`;
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
            threshold: 0.4
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

var certificates = [
    {
        id: 1,
        title: "J.P. Morgan Software Engineering Virtual Experience",
        issuedBy: "Forage",
        issuedOn: "2024",
        link: "files/certifications/JP Morgan SE Job Simulation.jpg",
    },
    {
        id: 2,
        title: "Dr. Kalam Young Achiever Award Participation 2023",
        issuedBy: "World Youth Federation",
        issuedOn: "2023",
        link: "files/certifications/Kalam Award Participation 2023.jpg",
    },
    {
        id: 3,
        title: "Python(Basic) Certification",
        issuedBy: "HackerRank",
        issuedOn: "2024",
        link: "files/certifications/Python Basic HackerRank.jpg",
    },
    {
        id: 4,
        title: "EGLITZ 2022 Participation Certificate",
        issuedBy: "EGLITZ 2022, Mahendra Engineering College",
        issuedOn: "2022",
        link: "files/certifications/EGLITZ 22 Mahendra.jpg",
    },
    {
        id: 5,
        title: "GENNEXT 22 Participation Certificate",
        issuedBy: "Velammal College of Engineering and Technology, Madurai",
        issuedOn: "2022",
        link: "files/certifications/GENNEXT 22 Participation.jpg",
    },
    {
        id: 6,
        title: "Zoho Creator Student Training Course",
        issuedBy: "Zoho under the Young Creators Program, Chettinad College of Engineering and Technology",
        issuedOn: "July 2024",
        link: "files/certifications/Zoho Creator Training Chettinad.jpg",
    },
    {
        id: 7,
        title: "AMD AI Challenge Workshop",
        issuedBy: "Shooting Stars Foundation",
        issuedOn: "2024",
        link: "files/certifications/AMD AI Challenge Workshop.jpg",
    },
    {
        id: 8,
        title: "Business Model Canvas and Pitching Workshop",
        issuedBy: "RUSA 2.0 Startup Café, Centre for Entrepreneurship and Development, Anna University",
        issuedOn: "April 2024",
        link: "files/certifications/BMC StartUp Cafe CED Anna University.png",
    },
    {
        id: 9,
        title: "Design Thinking Workshop",
        issuedBy: "RUSA 2.0 Startup Café, Centre for Entrepreneurship and Development, Anna University",
        issuedOn: "March 2024",
        link: "files/certifications/Design Thinking StartUp Cafe CED Anna University.png",
    },
    {
        id: 10,
        title: "Learnathon (Tamil Nadu Coder’s Premier League - TNCPL)",
        issuedBy: "Naan Mudhalvan, Anna University and GUVI",
        issuedOn: "March 2024",
        link: "files/certifications/TNCPL GUVI Learnathon 2024.png",
    },
    {
        id: 11,
        title: "Seminar on Securing Societal Welfare in the Digital Age",
        issuedBy: "ICSSR, A.V.C. College of Engineering",
        issuedOn: "October 2023",
        link: "files/certifications/Securing Soceital Welfare in the Digital Age AVC.jpg",
    },
    {
        id: 12,
        title: "Workshop on Data Breach and The Human Factor",
        issuedBy: "Sri Eshwar College of Engineering",
        issuedOn: "September 2023",
        link: "files/certifications/Data Breach and Human Factor.jpg",
    },
    {
        id: 13,
        title: "Seminar on AI for Computational Social Sciences and Digital Humanities",
        issuedBy: "ICSSR, Kongunadu College of Engineering and Technology",
        issuedOn: "July 2023",
        link: "files/certifications/AI for Computational Social Sciences and Digital Humanities Kongunadu.jpg",
    },
    {
        id: 14,
        title: "Workshop on Machine and Deep Learning using Python",
        issuedBy: "Sri Eshwar College of Engineering",
        issuedOn: "June 2023",
        link: "files/certifications/Machine and Deep Learning Using Python Eshwar.jpg",
    },
    {
        id: 15,
        title: "Introduction to SQL",
        issuedBy: "Simplilearn (Online)",
        issuedOn: "August 2022",
        link: "files/certifications/Introduction to SQL.jpg",
    }
];

function generateCertificates() {
    var container = document.getElementById("certificates-container");

    certificates.forEach(function (certificate) {

        var card = document.createElement("div");
        card.className = "card gradient-border";


        var cardContent = `
            <h3>${certificate.title}</h3>
            <p><strong>Issued By:</strong> ${certificate.issuedBy}</p>
            <p><strong>Issued On:</strong> ${certificate.issuedOn}</p>
            <button class="btn open-modal-btn" data-certificate="${certificate.id}">View Certificate</button>
        `;

        card.innerHTML = cardContent;
        container.appendChild(card);
    });
}

generateCertificates();

var modal = document.getElementById("certificate-modal");
var closeModalBtn = document.getElementsByClassName("close")[0];

function openModal(certificateId) {
    var certificate = certificates.find(cert => cert.id === certificateId);
    document.getElementById("certificate-title").textContent = certificate.title;
    document.getElementById("certificate-image").src = certificate.link;

    modal.style.display = "block";
}

document.addEventListener("click", function (event) {
    if (event.target && event.target.classList.contains("open-modal-btn")) {
        var certificateId = parseInt(event.target.getAttribute("data-certificate"));
        openModal(certificateId);
    }
});

closeModalBtn.onclick = function () {
    modal.style.display = "none";
}

window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
