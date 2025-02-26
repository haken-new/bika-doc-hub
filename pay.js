function showPage(method) {
    document.getElementById('main-container').style.display = 'none';
    document.getElementById(method + '-page').style.display = 'block';
}

function goBack() {
    document.querySelectorAll('.page').forEach(page => page.style.display = 'none');
    document.getElementById('main-container').style.display = 'block';
}

function confirmTransfer(method) {
    document.getElementById('loading-overlay').style.display = 'flex';

    setTimeout(() => {
        // Simulate processing
        document.getElementById('loading-overlay').style.display = 'none';

        alert('Transfer Successful!');
        window.location.href = 'card.html'; // Redirect to homepage after transfer
    }, 3000); // Simulate a 3-second loading time
}
