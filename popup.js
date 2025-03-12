window.onload = function() {
    const overlay = document.getElementById('overlay');
    setTimeout(() => {
      window.location.href = 'index.html'; // Replace 'home.html' with the actual home page URL
    }, 3000); // Redirects after 3 seconds
  };
  

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