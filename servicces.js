// Chatbot functionality
const chatBtn = document.getElementById('chat-btn');
const chatbot = document.getElementById('chatbot');
const closeBtn = document.getElementById('close-btn');
const sendBtn = document.getElementById('send-btn');
const userInput = document.getElementById('user-input');
const messages = document.getElementById('messages');

// Toggle Chatbot visibility
chatBtn.addEventListener('click', () => {
    chatbot.style.display = 'flex';
});

// Close the Chatbot
closeBtn.addEventListener('click', () => {
    chatbot.style.display = 'none';
});

// Send user message
sendBtn.addEventListener('click', () => {
    const message = userInput.value.trim();
    if (message) {
        const userMessage = document.createElement('div');
        userMessage.classList.add('user-message');
        userMessage.textContent = message;
        messages.appendChild(userMessage);
        userInput.value = '';

        // Simulate chatbot reply
        setTimeout(() => {
            const botMessage = document.createElement('div');
            botMessage.classList.add('bot-message');
            botMessage.textContent = "Thank you for your message! We will help you find your lost document.";
            messages.appendChild(botMessage);
            messages.scrollTop = messages.scrollHeight;  // Scroll to the bottom
        }, 1000);

        
    }
});

// Style for user and bot messages
const styleMessages = document.createElement('style');
styleMessages.textContent = `
    .user-message {
        background-color: #4C49ED;
        color: white;
        padding: 0.8rem;
        border-radius: 10px;
        max-width: 75%;
        align-self: flex-start;
    }
    .bot-message {
        background-color: #f3f3f3;
        color: #333;
        padding: 0.8rem;
        border-radius: 10px;
        max-width: 75%;
        align-self: flex-end;
    }
`;
document.head.appendChild(styleMessages);


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
  
