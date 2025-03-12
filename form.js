document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("documentForm");
    const resultContainer = document.querySelector(".result-container");
    const formContainer = document.querySelector(".form-container");
    const goBackButtons = document.querySelectorAll("#goBackButton");

    // Handle form submission
    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent page reload

        // Get input values
        document.getElementById("resultFullName").textContent = document.getElementById("fullName").value;
        document.getElementById("resultDob").textContent = document.getElementById("dob").value;
        document.getElementById("resultAddress").textContent = document.getElementById("address").value;
        document.getElementById("resultPhone").textContent = document.getElementById("phone").value;
        document.getElementById("resultEmail").textContent = document.getElementById("email").value;
        document.getElementById("resultCountry").textContent = document.getElementById("Country").value;
        document.getElementById("resultGender").textContent = document.getElementById("gender").value;
        document.getElementById("resultType of document").textContent = document.getElementById("Type of document").value;

        // Handle profile picture
        const fileInput = document.getElementById("profilePicture");
        const resultProfilePic = document.getElementById("resultProfilePic");

        if (fileInput.files.length > 0) {
            const reader = new FileReader();
            reader.onload = function (e) {
                resultProfilePic.src = e.target.result;
            };
            reader.readAsDataURL(fileInput.files[0]);
        } else {
            resultProfilePic.style.display = "none"; // Hide if no image uploaded
        }

        // Hide form, show result
        formContainer.style.display = "none";
        resultContainer.style.display = "block";
    });

    // Handle "Go Back" button click in result-details
    goBackButtons.forEach(button => {
        button.addEventListener("click", function (event) {
            event.preventDefault();
            window.location.href = "servicces.html"; // Redirect to services.html
        });
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