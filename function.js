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
