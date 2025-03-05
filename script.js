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
//---test---//
let slideIndex = 0;

function showSlides() {
    let items = document.querySelectorAll('.testimonial-item');
    
    // Hide all testimonials
    items.forEach(item => {
        item.classList.remove('active');
    });
    
    // Show the next testimonial
    slideIndex++;
    if (slideIndex > items.length) {
        slideIndex = 1;
    }

    items[slideIndex - 1].classList.add('active');
    
    // Change slide every 2 seconds
    setTimeout(showSlides, 3000); 
}

// Initialize the slideshow
showSlides();

// back to top
const backToTopButton = document.getElementById("backToTop");

        window.addEventListener("scroll", () => {
            if (window.scrollY > 300) {
                backToTopButton.style.opacity = "1";
                backToTopButton.style.visibility = "visible";
            } else {
                backToTopButton.style.opacity = "0";
                backToTopButton.style.visibility = "hidden";
            }
        });

        backToTopButton.addEventListener("click", () => {
            window.scrollTo({ top: 0, behavior: "smooth" });
    });
   
    // search bar
    const pages = [
        { name: "Hospital", id: "hospitalPage", link: "servicces.html" },
        { name: "Schools", id: "schoolsPage", link: "#schoolsPage" },
        { name: "Banks", id: "banksPage", link: "#banksPage" },
        { name: "Markets", id: "marketsPage", link: "#marketsPage" },
        { name: "Airport", id: "airportPage", link: "#airportPage" }
    ];
    
    const searchInput = document.getElementById("searchInput");
    const dropdownList = document.getElementById("dropdownList");
    
    // Function to show dropdown suggestions
    searchInput.addEventListener("input", function() {
        const query = searchInput.value.toLowerCase();
        dropdownList.innerHTML = "";
    
        if (query.length === 0) {
            dropdownList.style.display = "none";
            return;
        }
    
        const filteredPages = pages.filter(page => page.name.toLowerCase().includes(query));
    
        if (filteredPages.length === 0) {
            dropdownList.innerHTML = "<div>No results found</div>";
            dropdownList.style.display = "block";
            return;
        }
    
        filteredPages.forEach(page => {
            const item = document.createElement("div");
            item.textContent = page.name;
            item.onclick = function() {
                navigateToPage(page.id);
            };
            dropdownList.appendChild(item);
        });
    
        dropdownList.style.display = "block";
    });
    
    // Function to perform the search
    function performSearch() {
        const query = searchInput.value.toLowerCase();
        const match = pages.find(page => page.name.toLowerCase() === query);
    
        if (match) {
            navigateToPage(match.id);
        } else {
            alert("No results found");
        }
    }
    
    // Function to navigate to a specific page
    function navigateToPage(pageId) {
        document.querySelectorAll(".content-page").forEach(page => {
            page.style.display = "none";
        });
    
        const selectedPage = document.getElementById(pageId);
        if (selectedPage) {
            selectedPage.style.display = "block";
        }
    
        dropdownList.style.display = "none";
        searchInput.value = "";
    }
    // h1 auto effects
    const textElement = document.querySelector("h1");
    const text = "How can we help you?";
    let index = 0;
    let direction = 1;
    
    function animateText() {
        textElement.style.display = "inline-block"; // Prevents layout shifts
        textElement.textContent = text.slice(0, index);
        index += direction;
        
        if (index > text.length || index < 0) {
            direction *= -1;
            index += direction;
        }
        
        setTimeout(animateText, 150); // Adjust speed here
    }
    
    animateText();

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

    function toggleGoogleTranslate() {
        let dropdown = document.getElementById("google_translate_dropdown");
        dropdown.classList.toggle("active");
    }
    
    function googleTranslateElementInit() {
        new google.translate.TranslateElement({pageLanguage: 'en'}, 'google_translate_element');
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

    function googleTranslateElementInit() {
        new google.translate.TranslateElement({ pageLanguage: 'en' }, 'google_translate_element');
    }
    
    // Function to get the selected language from localStorage
    function getSavedLanguage() {
        return localStorage.getItem("selectedLanguage");
    }
    
    // Function to set the selected language
    function setSavedLanguage(lang) {
        localStorage.setItem("selectedLanguage", lang);
    }
    
    // Function to apply the saved language
    function applySavedLanguage() {
        let lang = getSavedLanguage();
        if (lang && lang !== "en") {
            let select = document.querySelector(".goog-te-combo");
            if (select) {
                select.value = lang;
                select.dispatchEvent(new Event("change"));
            }
        }
    }
    
    // Wait for Google Translate to load and apply the saved language
    document.addEventListener("DOMContentLoaded", function () {
        setTimeout(applySavedLanguage, 1000);
    
        document.addEventListener("change", function (event) {
            if (event.target.classList.contains("goog-te-combo")) {
                setSavedLanguage(event.target.value);
            }
        });
    });

    document.addEventListener("contextmenu", function (e) {
        e.preventDefault(); // Disable right-click
    });
    
    document.addEventListener("keydown", function (e) {
        if (e.ctrlKey && e.key === "u") {
            e.preventDefault(); // Disable Ctrl+U
        }
        if (e.ctrlKey && e.shiftKey && e.key === "I") {
            e.preventDefault(); // Disable Ctrl+Shift+I (DevTools)
        }
        if (e.key === "F12") {
            e.preventDefault(); // Disable F12 (DevTools)
        }
    });
    
    