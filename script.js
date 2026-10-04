/* =====================================================
   LYZOA TECHNOLOGY SYSTEMS LTD
   Main JavaScript
===================================================== */


/* ================= MOBILE NAVIGATION ================= */

const menuToggle = document.getElementById("menuToggle");
const navbar = document.getElementById("navbar");

if (menuToggle && navbar) {

    menuToggle.addEventListener("click", () => {

        navbar.classList.toggle("active");

        const isOpen = navbar.classList.contains("active");

        menuToggle.setAttribute("aria-expanded", isOpen);

    });


    // Close mobile menu when a navigation link is clicked

    const navLinks = navbar.querySelectorAll("a");

    navLinks.forEach(link => {

        link.addEventListener("click", () => {

            navbar.classList.remove("active");

            menuToggle.setAttribute("aria-expanded", "false");

        });

    });

}


/* ================= CURRENT YEAR ================= */

const currentYear = document.getElementById("currentYear");

if (currentYear) {

    currentYear.textContent = new Date().getFullYear();

}


/* ================= CONTACT FORM ================= */

const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

if (contactForm) {

    contactForm.addEventListener("submit", function (event) {

        event.preventDefault();

        const name = document.getElementById("name");
        const email = document.getElementById("email");
        const phone = document.getElementById("phone");
        const message = document.getElementById("message");

        const fields = [name, email, phone, message];

        let isValid = true;


        /* Clear previous errors */

        fields.forEach(field => {

            const errorMessage =
                field.parentElement.querySelector(".error-message");

            if (errorMessage) {
                errorMessage.textContent = "";
            }

            field.style.borderColor = "";

        });


        /* Validate name */

        if (name.value.trim() === "") {

            showError(name, "Please enter your name.");

            isValid = false;

        }


        /* Validate email */

        if (email.value.trim() === "") {

            showError(email, "Please enter your email address.");

            isValid = false;

        } else if (!isValidEmail(email.value.trim())) {

            showError(email, "Please enter a valid email address.");

            isValid = false;

        }


        /* Validate phone */

        if (phone.value.trim() === "") {

            showError(phone, "Please enter your phone number.");

            isValid = false;

        }


        /* Validate message */

        if (message.value.trim() === "") {

            showError(message, "Please enter your message.");

            isValid = false;

        }


        /* Form result */

        if (!isValid) {

            formMessage.textContent =
                "Please correct the highlighted fields.";

            formMessage.className = "form-message error";

            return;

        }


        /*
            At this stage the form is valid.

            This is only frontend validation.
            Later, PHP/backend processing can be connected
            to actually send/store the enquiry.
        */

        formMessage.textContent =
            "Thank you! Your enquiry has been received.";

        formMessage.className = "form-message success";


        contactForm.reset();

    });

}


/* ================= ERROR FUNCTION ================= */

function showError(field, message) {

    const errorMessage =
        field.parentElement.querySelector(".error-message");

    if (errorMessage) {

        errorMessage.textContent = message;

    }

    field.style.borderColor = "#c0392b";

}


/* ================= EMAIL VALIDATION ================= */

function isValidEmail(email) {

    const emailPattern =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    return emailPattern.test(email);

}


/* ================= SCROLL REVEAL ================= */

const animatedElements = document.querySelectorAll(
    ".service-card, .vision-card, .why-item, .experience-category, .contact-item"
);

const observer = new IntersectionObserver(
    entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show-animation");

                observer.unobserve(entry.target);

            }

        });

    },
    {
        threshold: 0.15
    }
);


animatedElements.forEach(element => {

    observer.observe(element);

});


/* ================= HEADER SHADOW ================= */

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {

    if (!header) return;

    if (window.scrollY > 50) {

        header.style.boxShadow =
            "0 5px 25px rgba(0, 0, 0, 0.08)";

    } else {

        header.style.boxShadow = "none";

    }

});