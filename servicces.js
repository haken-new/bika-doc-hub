
// button
document.querySelectorAll(".location-btn").forEach(button => {
    button.addEventListener("click", function() {
        let targetPage = this.getAttribute("data-target");

        // Hide main page
        document.getElementById("mainPage").style.display = "none";

        // Hide all hidden pages
        document.querySelectorAll(".full-page").forEach(page => page.style.display = "none");

        // Show the selected hidden page
        document.getElementById(targetPage).style.display = "block";
    });
});

document.querySelectorAll(".go-back-btn").forEach(button => {
    button.addEventListener("click", function() {
        document.querySelectorAll(".full-page").forEach(page => page.style.display = "none");
        document.getElementById("mainPage").style.display = "block";
    });
});

// button icon

document.getElementById("goBackButton").addEventListener("click", function() {
    window.location.href = "form.html";  // Replace with your target page URL
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
// Function to display the image overlay
function viewImage(imageSrc, overlayId, overlayImageId) {
    const overlay = document.getElementById(overlayId);
    const overlayImage = document.getElementById(overlayImageId);
    if (overlay && overlayImage) {
        overlayImage.src = imageSrc;
        overlay.style.display = 'flex';
    }
}

// Function to close the image overlay
function closeImage(overlayId) {
    const overlay = document.getElementById(overlayId);
    if (overlay) {
        overlay.style.display = 'none';
    }
}

// Add the "+" button for viewing document images dynamically

document.addEventListener("DOMContentLoaded", function() {
    document.querySelectorAll(".document-list").forEach((list, index) => {
        list.querySelectorAll(".document-item").forEach((item, docIndex) => {
            const docImage = item.querySelector(".info img");
            if (docImage) {
                const viewBtn = document.createElement("button");
                viewBtn.classList.add("view-btn");
                viewBtn.innerHTML = "+";
                
                // Generate unique IDs for overlay elements
                const overlayId = `imageOverlay-${index}-${docIndex}`;
                const overlayImageId = `overlayImage-${index}-${docIndex}`;

                // Create overlay for each document item
                const overlay = document.createElement("div");
                overlay.classList.add("image-overlay");
                overlay.id = overlayId;
                overlay.innerHTML = `
                    <span class="close-btn" onclick="closeImage('${overlayId}')">&times;</span>
                    <img id="${overlayImageId}" src="" alt="Enlarged Image">
                `;
                document.body.appendChild(overlay);

                // Attach click event to view button
                viewBtn.onclick = function() {
                    viewImage(docImage.src, overlayId, overlayImageId);
                };

                item.querySelector(".info").appendChild(viewBtn);
            }
        });
    });
});


function goToHome() {
    window.location.href = 'pay.html'; // Replace 'home.html' with the actual home page URL
  }

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



function goToHome() {
    window.location.href = 'pay.html'; // Replace 'home.html' with the actual home page URL
  }

  
  
// peoples list lost documents

function viewDocument(name, imageSrc) {
    document.getElementById('docTitle').innerText = name + "'s Document";
    document.getElementById('docImage').src = imageSrc;
    document.getElementById('documentViewer').style.display = 'flex';
}

function closeViewer() {
    document.getElementById('documentViewer').style.display = 'none';
}
// poeple search
function toggleDetails(index, element) {
    let details = document.querySelectorAll('.details')[index];
    details.style.display = details.style.display === 'block' ? 'none' : 'block';
    
    if (details.style.display === 'block') {
        element.classList.remove('bx-show');
        element.classList.add('bx-hide', 'open');
    } else {
        element.classList.remove('bx-hide', 'open');
        element.classList.add('bx-show');
    }
}

// pepole seen
function toggleStory(index, element) {
    const story = document.querySelectorAll('.full-comment-story')[index];
    const eyeIcon = element;
    if (story.style.display === 'block') {
        story.style.display = 'none';
        eyeIcon.classList.remove('bx-hide');
        eyeIcon.classList.add('bx-show');
    } else {
        story.style.display = 'block';
        eyeIcon.classList.remove('bx-show');
        eyeIcon.classList.add('bx-hide');
    }
}

function postComment() {
    const userComment = document.getElementById('userComment').value;
    if (userComment.trim() !== "") {
        const commentContainer = document.createElement('div');
        commentContainer.classList.add('testimonial-card');
        
        const commentText = document.createElement('p');
        commentText.classList.add('testimonial-comment');
        commentText.textContent = userComment + " ❤️👍";
        
        commentContainer.appendChild(commentText);

        // Add the new comment at the top of the container
        const container = document.querySelector('.testimonial-container');
        container.insertBefore(commentContainer, container.firstChild);

        // Clear the input field
        document.getElementById('userComment').value = '';
    }
}
 
// chat
const responses = {
    "how can i get my document?": "Yes vey easy here we can help you by visiting our service page and you try to find in those sliding buttons.",
    "where can l submit lost documents?": "Good! question asked just click only in our service page and report tha document.",
    "it is not working": "Okay text to us in our contact page and send us a message for you to help you to solve your problem.",
    "thanks": "thank you too for using our platform just share to built a world of connected people with stress-free of lost documents?",
    "yes": "Okay it is fine just call us if you want more help here on BIKA Doc Hub. ?",
    "l have lost a document": "OOHH Sorry but BIKA Doc Hub l promise is going to help you to recover your document very soon.",
    "how?": "Okay if you need more help text to us on bigsamdmd@gmail.com for more details.",
    "help me": "Yes it's okay describe you problem and we help you",
    "hi": "Hy how are you ?",
    "okay": "Yes thanks for using our services if you have any problem don't worry we are here for you.",
    "Hello": "Hello! how are you don't wory our team is here for you. Which problem do you have?",
    "lost document": "If you lost a document, you can report it on our website and search if someone has found it.",
    "found document": "If you found a document, please upload its details so we can help reunite it with its owner.",
    "how does this work?": "Our platform connects people who have lost documents with those who have found them.",
    "where to report?": "You can report lost or found documents on our website under the 'Report' section.",
    "how to search?": "Use the search function on our homepage to check if someone has found your document.",
    "what documents are accepted": "We help with lost IDs, passports, certificates, and other official documents.",
    "where": "If you're asking where you might have lost your document, please check the services page on our website to see the locations we cover.",
    "when can I get my document": "The availability of your document depends on the specific location it was found. You can visit our website or check with the found location to know when it is ready for pickup.",
    "what time can I get my document": "Please check the 'Services' or 'Report' sections on our website to find the exact time and details about retrieving your document.",
    "location to find my document": "To find where your document may be, please check the 'Services' page on our website. It has a list of locations where lost documents are commonly found.",
    "place to get document found": "If you have found a document but are unsure of the place to pick it up from, we recommend checking nearby locations where lost documents are commonly kept. The 'Services' page on our website may also provide more details on locations and procedures.",
    "document found but don't know where": "If you've found a document but are unsure of the place where it might be, we suggest checking the locations nearby or referring to the 'Services' page for potential places where documents are kept. You might want to try local offices, transit stations, or public venues.",
    "how do I know if the document is mine": "You can check the document's specific details and compare them to the information you have. If you are unsure, contact us, and we will assist you in verifying its ownership.",
    "who is the owner project": "The owner of the project  is BIG Sam."
};

        function toggleChat() {
            let chatBody = document.getElementById("chatBody");
            if (chatBody.style.display === "flex") {
                return;
            }
            chatBody.style.display = "flex";
            let chatMessages = document.getElementById("chatMessages");
            let teamMessage = document.createElement("div");
            teamMessage.classList.add('message', 'team-message');
            teamMessage.textContent = "Team: Hello! How can I assist you today?";
            chatMessages.appendChild(teamMessage);
            scrollToBottom(); // Scroll to the bottom when the chat opens
        }

        function sendMessage() {
            let input = document.getElementById("userInput");
            let message = input.value.trim();
            if (message) {
                let chatMessages = document.getElementById("chatMessages");
                let userMessage = document.createElement("div");
                userMessage.classList.add('message', 'user-message');
                userMessage.textContent = "You: " + message;
                chatMessages.appendChild(userMessage);
                input.value = "";
                scrollToBottom(); // Scroll to the bottom after user message
                setTimeout(() => teamResponse(message), 1000);
            }
        }

        function handleKeyPress(event) {
            if (event.key === "Enter") {
                sendMessage();
            }
        }

        function scrollToBottom() {
            let chatMessages = document.getElementById("chatMessages");
            chatMessages.scrollTop = chatMessages.scrollHeight;
        }

        function teamTyping() {
            let chatMessages = document.getElementById("chatMessages");
            let typingMessage = document.createElement("div");
            typingMessage.className = "message team-message";
            typingMessage.textContent = "Team: Typing...";
            chatMessages.appendChild(typingMessage);
            scrollToBottom(); // Scroll to the bottom after typing
            return typingMessage;
        }

        function stopTyping(typingMessage) {
            typingMessage.remove();
        }

        function teamResponse(userMessage) {
            let chatMessages = document.getElementById("chatMessages");
            let typingMessage = teamTyping();

            setTimeout(() => {
                let teamMessage = document.createElement("div");
                teamMessage.classList.add('message', 'team-message');
                let response = "I am here to help! Please ask me anything about lost and found documents.";
                if (userMessage.toLowerCase().includes("lost document")) {
                    response = "If you lost a document, you can report it on our website and search if someone has found it.";
                } else if (userMessage.toLowerCase().includes("found document")) {
                    response = "If you found a document, please upload its details so we can help reunite it with its owner.";
                } else if (responses[userMessage.toLowerCase()]) {
                    response = responses[userMessage.toLowerCase()];
                }else if (userMessage.toLowerCase().includes("find document")) {
                    response = "Stay in touch we will help you find your document.";
                }
                teamMessage.textContent = "Team: " + response;
                chatMessages.appendChild(teamMessage);
                stopTyping(typingMessage); // Remove the typing indicator
                scrollToBottom(); // Scroll to the bottom after response
            }, 2000); // Simulate a 2-second delay before team response
        }

        // Close the chat when clicking on the close button
        function closeChat(event) {
            event.stopPropagation(); // Prevent toggleChat from firing
            document.getElementById("chatBody").style.display = "none";
        }


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
        
        