
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
    "how can i get my document?": "Visit our service page and check the sliding buttons for your document.",
    "where can I submit lost documents?": "Click on our service page and report the lost document.",
    "it is not working": "Contact us through our contact page or send us a message for assistance.",
    "thanks": "You're welcome! Share our platform to help more people reconnect with their lost documents.",
    "yes": "Great! Call us if you need further help.",
    "I have lost a document": "Sorry to hear that! BIKA Doc Hub will help you recover your document soon.",
    "how?": "For more details, email us at bigsamdmd@gmail.com.",
    "help me": "Describe your problem, and we will assist you.",
    "hi": "Hello! How can we assist you today?",
    "okay": "Thank you for using our services! Let us know if you need help.",
    "Hello": "Hello! Our team is here for you. What issue are you facing?",
    "lost document": "Report your lost document on our website and check if someone has found it.",
    "found document": "Upload details of the found document so we can reunite it with its owner.",
    "how does this work?": "We connect people who lost documents with those who found them.",
    "where to report?": "Report lost or found documents in the 'Report' section on our website.",
    "how to search?": "Use the search function on our homepage to see if your document has been found.",
    "what documents are accepted?": "We handle IDs, passports, certificates, and other official documents.",
    "who owns this project?": "The project is managed by BIG Sam.",
    "can I trust this platform?": "Yes! We are dedicated to helping people recover their lost documents.",
    "is there a fee?": "Our services are free! You can submit or search for documents without cost.",
    "can I retrieve someone else's document?": "No, only the rightful owner can claim a document.",
    "how do I prove ownership?": "Provide details that match the document’s information.",
    "what happens if my document is not found?": "Keep checking our site. Someone may find and submit it later.",
    "how do I contact support?": "Reach out to us via the contact page or email us at bigsamdmd@gmail.com.",
    "do you have a physical office?": "We operate mainly online. Check our contact page for more details.",
    "how long does it take to find a document?": "It depends. Keep checking our platform for updates.",
    "do you notify me if my document is found?": "Yes, if you have submitted a lost report with your contact details.",
    "is this available in all countries?": "Currently, we operate in select locations. Visit our website for more details.",
    "what should I do if I found a document?": "Submit the details on our website to help reunite it with its owner.",
    "how do I delete my report?": "Contact us through email or the contact page to request removal.",
    "is there a mobile app?": "We are working on it! Stay tuned for updates.",
    "how secure is my data?": "We prioritize security and do not share personal information without consent.",
    "can I report multiple documents?": "Yes, you can submit multiple reports for different documents.",
    "how do I update my report?": "Contact us with your report details, and we will update it.",
    "what languages are supported?": "Currently, we support All. More languages are there just check translate button in the nav bar.",
    "do you charge for lost document retrieval?": "Yes, our services are completely 500frw fees only.",
    "what happens if a fake report is submitted?": "Fake reports are removed, and users may be banned.",
    "how can businesses help?": "Businesses can partner with us to assist in document recovery.",
    "do you work with authorities?": "Yes, we collaborate with local authorities to verify documents.",
    "what happens if my document is stolen?": "Report it to the police first, then submit it on our platform.",
    "can someone else claim my document?": "No, only the rightful owner can retrieve a lost document.",
    "do you accept anonymous reports?": "Yes, but providing contact details helps us verify ownership.",
    "can I search by document type?": "Yes, use filters to search for specific document types.",
    "how often is the database updated?": "We update our database in real time as reports are submitted.",
    "do you have a helpline?": "Contact us through our website or email for support.",
    "how do I prevent losing my documents?": "Keep digital copies and use secure storage options.",
    "do you offer document tracking?": "We currently do not track documents but provide a search service.",
    "how do I claim a found document?": "Contact the person who submitted it and provide proof of ownership.",
    "is there a way to verify found documents?": "Yes, our team helps verify and authenticate reported documents.",
    "how do I share this service with others?": "Share our website link 'bika-doc-hub.vercel.app' and let others know about our services.",
    "can I submit documents found in public places?": "Yes, but also inform local authorities if needed.",
    "what happens after I report my lost document?": "We list it in our database and notify you if a match is found.",
    "is there a way to prioritize urgent cases?": "Email us directly for urgent assistance.",
    "how do I know if my document is with you?": "Use the search feature or check the latest found documents section.",
    "do you have social media pages?": "Yes! Follow us on social media for updates and tips.",
    "what should I do if I find a passport?": "Submit it on our site and also report it to local authorities.",
    "do you handle digital document loss?": "No, we focus on physical document recovery.",
    "do you help with lost credit cards?": "Yes, we recommend reporting them to the owners immediately.",
    "can I search for lost document?": "Yes, our platform is specifically for lost documents areas you may find your lost document.",
    "how do I edit my report?": "Contact our support team to make changes.",
    "what do I do if I found multiple documents?": "Submit them individually or email us for bulk submissions.",
    "do you store found documents?": "yes, But by soft Orginal documents and we helps you to connect finders and owners."
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
        
        