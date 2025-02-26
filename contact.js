
// Smooth Scroll
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const target = this.getAttribute('href');
        if (target.startsWith("#")) { // Only prevent default for internal links
            e.preventDefault();
            document.querySelector(target)?.scrollIntoView({ behavior: 'smooth' });
        }
    });
});



document.getElementById('').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    let valid = true;

    // Name Validation
    const name = document.getElementById('name');
    const nameError = document.getElementById('name-error');
    if (name.value.trim() === '') {
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
    if (message.value.trim() === '') {
        messageError.textContent = "Message cannot be empty!";
        valid = false;
    } else {
        messageError.textContent = "";
    }

    if (valid) {
        alert("Message Sent Successfully!");
        this.reset();
    }
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

document.addEventListener("DOMContentLoaded", function () {
    const backToTopButton = document.getElementById("backToTop");

    if (!backToTopButton) {
        console.error("Back to Top button not found in the DOM!");
        return;
    }

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
});
