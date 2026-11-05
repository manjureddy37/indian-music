/* =========================================================
   MANJUREDDY - INDIAN CLASSICAL MUSIC
   Main JavaScript File
   ========================================================= */


/* ================= PAGE LOADED ================= */

document.addEventListener("DOMContentLoaded", function () {

    console.log("MANJUREDDY website loaded successfully.");



    /* =====================================================
       CONTACT FORM
       ===================================================== */

    const contactForm = document.getElementById("contactForm");
    const successMessage = document.getElementById("successMessage");

    if (contactForm) {

        contactForm.addEventListener("submit", function (event) {

            event.preventDefault();

            if (successMessage) {

                successMessage.style.display = "block";

                successMessage.innerHTML =
                    "✓ Thank you! Your message has been submitted successfully.";

            }

            contactForm.reset();

        });

    }



    /* =====================================================
       SMOOTH SCROLL
       ===================================================== */

    const internalLinks =
        document.querySelectorAll('a[href^="#"]');

    internalLinks.forEach(function (link) {

        link.addEventListener("click", function (event) {

            const targetId =
                this.getAttribute("href");

            if (
                targetId &&
                targetId !== "#"
            ) {

                const target =
                    document.querySelector(targetId);

                if (target) {

                    event.preventDefault();

                    target.scrollIntoView({
                        behavior: "smooth"
                    });

                }

            }

        });

    });



    /* =====================================================
       SCROLL ANIMATION
       ===================================================== */

    const animatedElements =
        document.querySelectorAll(
            ".music-card, .feature-box, .event-card, .type-card, .reason-card, .highlight-box"
        );


    const observer =
        new IntersectionObserver(
            function (entries) {

                entries.forEach(function (entry) {

                    if (entry.isIntersecting) {

                        entry.target.classList.add(
                            "show-animation"
                        );

                    }

                });

            },
            {
                threshold: 0.15
            }
        );


    animatedElements.forEach(function (element) {

        observer.observe(element);

    });



    /* =====================================================
       RAGA SEARCH
       ===================================================== */

    const ragaSearch =
        document.getElementById("ragaSearch");

    const ragaCards =
        document.querySelectorAll(".raga-card");


    if (ragaSearch && ragaCards.length > 0) {

        ragaSearch.addEventListener(
            "input",
            function () {

                const searchText =
                    this.value.toLowerCase().trim();


                ragaCards.forEach(function (card) {

                    const cardText =
                        card.textContent.toLowerCase();


                    if (
                        cardText.includes(searchText)
                    ) {

                        card.style.display = "";

                    } else {

                        card.style.display = "none";

                    }

                });

            }
        );

    }



    /* =====================================================
       EVENT BUTTONS
       ===================================================== */

    const eventButtons =
        document.querySelectorAll(".event-button");


    eventButtons.forEach(function (button) {

        button.addEventListener(
            "click",
            function () {

                alert(
                    "Thank you for your interest in MANJUREDDY events!"
                );

            }
        );

    });



    /* =====================================================
       CURRENT YEAR
       ===================================================== */

    const yearElements =
        document.querySelectorAll(".current-year");


    yearElements.forEach(function (element) {

        element.textContent =
            new Date().getFullYear();

    });



    /* =====================================================
       MOBILE MENU
       ===================================================== */

    const navbar =
        document.querySelector(".navbar");

    const navLinks =
        document.querySelector(".nav-links");


    if (navbar && navLinks) {

        let menuButton =
            document.querySelector(".menu-button");


        if (!menuButton) {

            menuButton =
                document.createElement("button");

            menuButton.className =
                "menu-button";

            menuButton.innerHTML = "☰";

            menuButton.setAttribute(
                "aria-label",
                "Open navigation menu"
            );

            navbar.insertBefore(
                menuButton,
                navLinks
            );


            menuButton.addEventListener(
                "click",
                function () {

                    navLinks.classList.toggle(
                        "mobile-open"
                    );

                }
            );

        }


        const links =
            navLinks.querySelectorAll("a");


        links.forEach(function (link) {

            link.addEventListener(
                "click",
                function () {

                    navLinks.classList.remove(
                        "mobile-open"
                    );

                }
            );

        });

    }



    /* =====================================================
       BACK TO TOP BUTTON
       ===================================================== */

    let backToTop =
        document.getElementById("backToTop");


    if (!backToTop) {

        backToTop =
            document.createElement("button");

        backToTop.id = "backToTop";

        backToTop.innerHTML = "↑";

        backToTop.title =
            "Back to top";

        document.body.appendChild(
            backToTop
        );


        backToTop.addEventListener(
            "click",
            function () {

                window.scrollTo({
                    top: 0,
                    behavior: "smooth"
                });

            }
        );

    }


    window.addEventListener(
        "scroll",
        function () {

            if (window.scrollY > 400) {

                backToTop.classList.add(
                    "show"
                );

            } else {

                backToTop.classList.remove(
                    "show"
                );

            }

        }
    );

});



/* =========================================================
   ACTIVE NAVIGATION
   ========================================================= */

const currentPage =
    window.location.pathname
        .split("/")
        .pop();


const navigationLinks =
    document.querySelectorAll(
        ".nav-links a"
    );


navigationLinks.forEach(function (link) {

    const linkPage =
        link.getAttribute("href");


    if (
        linkPage === currentPage
    ) {

        navigationLinks.forEach(
            function (item) {

                item.classList.remove(
                    "active"
                );

            }
        );

        link.classList.add(
            "active"
        );

    }

});


/* =========================================================
   WELCOME MESSAGE
   ========================================================= */

function showWelcomeMessage() {

    alert(
        "Welcome to MANJUREDDY – Indian Classical Music!"
    );

}


/* =========================================================
   MUSIC CATEGORY MESSAGE
   ========================================================= */

function showMusicMessage(type) {

    if (type === "hindustani") {

        alert(
            "Explore the beautiful tradition of Hindustani Classical Music."
        );

    }

    else if (type === "carnatic") {

        alert(
            "Explore the rich tradition of Carnatic Classical Music."
        );

    }

    else {

        alert(
            "Explore Indian Classical Music."
        );

    }

}


/* =========================================================
   EVENT REGISTRATION MESSAGE
   ========================================================= */

function registerEvent(eventName) {

    if (!eventName) {

        eventName =
            "MANJUREDDY Classical Music Event";

    }


    alert(
        "Thank you for your interest in " +
        eventName +
        "!"
    );

}