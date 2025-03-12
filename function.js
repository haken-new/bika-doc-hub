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
