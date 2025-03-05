document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById('myForm'); // Replace 'myForm' with your actual form ID
    if (form) {
        form.addEventListener('submit', function (event) {
            event.preventDefault();

            let valid = true;

            // Name Validation
            const name = document.getElementById('name');
            const nameError = document.getElementById('name-error');
            if (!name.value.trim()) {
                nameError.textContent = "Name is required!";
                valid = false;
            } else {
                nameError.textContent = "";
            }

            // Email Validation
            const email = document.getElementById('email');
            const emailError = document.getElementById('email-error');
            const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,6}$/;
            if (!email.value.match(emailPattern)) {
                emailError.textContent = "Enter a valid email!";
                valid = false;
            } else {
                emailError.textContent = "";
            }

            // Message Validation
            const message = document.getElementById('message');
            const messageError = document.getElementById('message-error');
            if (!message.value.trim()) {
                messageError.textContent = "Message cannot be empty!";
                valid = false;
            } else {
                messageError.textContent = "";
            }

            if (valid) {
                alert("Message Sent Successfully!");
                form.reset();
            }
        });
    }

    // Mobile Menu Toggle
    const menuIcon = document.querySelector(".menu-icon");
    const navLinks = document.querySelector(".nav-links");
    if (menuIcon && navLinks) {
        menuIcon.addEventListener("click", () => {
            navLinks.classList.toggle("active");
        });
    }

    // Settings Menu Toggle with Border Down
    const settingsIcon = document.querySelector(".settings-icon");
    const settingsMenu = document.querySelector(".settings-menu");
    if (settingsIcon && settingsMenu) {
        settingsIcon.addEventListener("click", () => {
            settingsMenu.style.display = settingsMenu.style.display === "block" ? "none" : "block";
            settingsMenu.classList.toggle("active");
        });
    }

    // Toggle Dark Mode
    const toggleThemeBtn = document.getElementById("toggle-theme");
    const body = document.body;
    if (toggleThemeBtn) {
        toggleThemeBtn.addEventListener("click", () => {
            body.classList.toggle("dark-mode");
            toggleThemeBtn.innerHTML = body.classList.contains("dark-mode") ?
                "<i class='bx bx-sun'></i> Light Mode" :
                "<i class='bx bx-moon'></i> Dark Mode";
        });
    }

    // Back to Top Button
    const backToTopButton = document.getElementById("backtoTop");
    if (backToTopButton) {
        window.addEventListener("scroll", function () {
            if (window.scrollY > 300) {
                backToTopButton.style.opacity = "1";
                backToTopButton.style.visibility = "visible";
            } else {
                backToTopButton.style.opacity = "0";
                backToTopButton.style.visibility = "hidden";
            }
        });

        backToTopButton.addEventListener("click", function () {
            window.scrollTo({ top: 0, behavior: "smooth" });
        });
    }

    // Google Translate Initialization and Language Selection
    function googleTranslateElementInit() {
        new google.translate.TranslateElement({
            pageLanguage: 'en',
            layout: google.translate.TranslateElement.InlineLayout.SIMPLE
        }, 'google_translate_element');

        // Apply saved language if it exists
        const savedLang = getCookie('siteLang');
        if (savedLang) {
            setTimeout(() => {
                document.querySelector('.goog-te-combo').value = savedLang;
                document.querySelector('.goog-te-combo').dispatchEvent(new Event('change'));
            }, 1000);
        }
    }

    // Function to set cookie
    function setCookie(name, value, days) {
        let date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        let expires = "expires=" + date.toUTCString();
        document.cookie = name + "=" + value + ";" + expires + ";path=/";
    }

    // Function to get cookie
    function getCookie(name) {
        let decodedCookies = decodeURIComponent(document.cookie);
        let ca = decodedCookies.split(';');
        for (let i = 0; i < ca.length; i++) {
            let c = ca[i].trim();
            if (c.indexOf(name + "=") === 0) {
                return c.substring(name.length + 1, c.length);
            }
        }
        return "";
    }

    // Save selected language in cookie
    window.addEventListener('load', function () {
        setTimeout(() => {
            const languageSelect = document.querySelector('.goog-te-combo');
            if (languageSelect) {
                languageSelect.addEventListener('change', function () {
                    setCookie('siteLang', languageSelect.value, 7);
                });
            }
        }, 2000);
    });

    // Disable Right Click & Developer Tools Shortcuts
    document.addEventListener("contextmenu", (e) => e.preventDefault());

    document.addEventListener("keydown", (e) => {
        if (e.ctrlKey && e.key === "u") e.preventDefault();
        if (e.ctrlKey && e.shiftKey && e.key === "I") e.preventDefault();
        if (e.key === "F12") e.preventDefault();
    });
});


document.addEventListener("DOMContentLoaded", () => {
    const menuIcon = document.querySelector(".menu-icon");
    const navLinks = document.querySelector(".nav-links");
    const settingsIcon = document.querySelector(".settings-icon");
    const settingsMenu = document.querySelector(".settings-menu");
    const toggleThemeBtn = document.getElementById("toggle-theme");
    const body = document.body;

    // Toggle Mobile Menu
    menuIcon.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });

    // Toggle Settings Menu
    settingsIcon.addEventListener("click", () => {
        settingsMenu.style.display = settingsMenu.style.display === "block" ? "none" : "block";
    });

    // Toggle Dark Mode
    toggleThemeBtn.addEventListener("click", () => {
        body.classList.toggle("dark-mode");
        if (body.classList.contains("dark-mode")) {
            toggleThemeBtn.innerHTML = "<i class='bx bx-sun'></i> Light Mode";
        } else {
            toggleThemeBtn.innerHTML = "<i class='bx bx-moon'></i> Dark Mode";
        }
    });

    // Close settings menu when clicking outside
    document.addEventListener("click", (event) => {
        if (!settingsIcon.contains(event.target) && !settingsMenu.contains(event.target)) {
            settingsMenu.style.display = "none";
        }
    });
});