document.addEventListener("DOMContentLoaded", function() {
    const idCard = document.querySelector(".id-card");
    const personalCard = document.querySelector(".card");

    // Hover effect for ID Card
    idCard.addEventListener("mouseover", function() {
        this.style.transform = "scale(1.05)";
        this.style.transition = "0.3s";
    });

    idCard.addEventListener("mouseleave", function() {
        this.style.transform = "scale(1)";
    });

    // Hover effect for Personal Address Card
    personalCard.addEventListener("mouseover", function() {
        this.style.transform = "scale(1.05)";
        this.style.transition = "0.3s";
    });

    personalCard.addEventListener("mouseleave", function() {
        this.style.transform = "scale(1)";
    });
});




document.addEventListener("DOMContentLoaded", function() {
    const idCard = document.querySelector(".id-card");
    const personalCard = document.querySelector(".card");

    // Hover effect for ID Card
    idCard.addEventListener("mouseover", function() {
        this.style.transform = "scale(1.05)";
        this.style.transition = "0.3s";
    });

    idCard.addEventListener("mouseleave", function() {
        this.style.transform = "scale(1)";
    });

    // Hover effect for Personal Address Card
    personalCard.addEventListener("mouseover", function() {
        this.style.transform = "scale(1.05)";
        this.style.transition = "0.3s";
    });

    personalCard.addEventListener("mouseleave", function() {
        this.style.transform = "scale(1)";
    });

    // Hide Admin Notification after 5 seconds
    setTimeout(function() {
        const notification = document.querySelector(".admin-notification");
        if (notification) {
            notification.style.display = "none";
        }
    }, 5000); // 5000ms = 5 seconds
// download button
function downloadApp(appName) {
    // Replace the URL with the actual download link for your app
    const downloadLinks = {
        'app1': 'assets/images/card.JPG',
        'app2': 'https://sourceforge.net/projects/orwelldevcpp/',
    };

    const link = downloadLinks[appName];
    if (link) {
        window.location.href = link;
    } else {
        alert('Download link not available.');
    }
}

    // Navigate to Home Page (example)
    document.getElementById("home-btn").addEventListener("click", function() {
        window.location.href = "/";  // Change this to your actual home page URL
    });
});


document.addEventListener("DOMContentLoaded", function() {
    const idCard = document.querySelector(".id-card");
    const personalCard = document.querySelector(".card");

    // Hover effect for ID Card
    idCard.addEventListener("mouseover", function() {
        this.style.transform = "scale(1.05)";
        this.style.transition = "0.3s";
    });

    idCard.addEventListener("mouseleave", function() {
        this.style.transform = "scale(1)";
    });

    // Hover effect for Personal Address Card
    personalCard.addEventListener("mouseover", function() {
        this.style.transform = "scale(1.05)";
        this.style.transition = "0.3s";
    });

    personalCard.addEventListener("mouseleave", function() {
        this.style.transform = "scale(1)";
    });

    // Hide Admin Notification after 5 seconds
    setTimeout(function() {
        const notification = document.querySelector(".admin-notification");
        if (notification) {
            notification.style.display = "none";
        }
    }, 5000); // 5000ms = 5 seconds

    // Download Card as Image
    document.getElementById("download-btn").addEventListener("click", function() {
        html2canvas(document.querySelector(".container")).then(canvas => {
            const link = document.createElement('a');
            link.href = canvas.toDataURL('image/png');
            link.download = 'card-image.png';
            link.click();
        });
    });

    // Navigate to Home Page (example)
    document.getElementById("home-btn").addEventListener("click", function() {
        window.location.href = "/";  // Change this to your actual home page URL
    });
});
// buttons
function downloadImage() {
    const link = document.createElement('a');
    link.href = 'https://via.placeholder.com/150'; // Image URL
    link.download = 'image.jpg'; // Name the file when downloaded
    link.click();
  }
  
  function goToHome() {
    window.location.href = 'popup.html'; // Replace with your actual home page URL
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