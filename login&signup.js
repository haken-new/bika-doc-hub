// script.js
function toggleForm() {
    const loginContainer = document.getElementById('login-container');
    const signupContainer = document.getElementById('signup-container');
    
    if (loginContainer.style.display === "none") {
        loginContainer.style.display = "block";
        signupContainer.style.display = "none";
    } else {
        loginContainer.style.display = "none";
        signupContainer.style.display = "block";
    }
}
// redirection signup
document.getElementById('signup-container').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Form submitted!');
  });
  document.getElementById('signup-container').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting normally
    alert('Form submitted!');
    
    // Redirect to the next page (dashboard.html in this case)
    window.location.href = 'login&signup.html'; // Change this to the URL of your next page
});
// redirection login
document.getElementById('login-container').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting normally
    alert('Login successful!');
    
    // Redirect to the next page (dashboard.html in this case)
    window.location.href = 'dashbord.html'; // Change this to the URL of your next page
  });
  

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

