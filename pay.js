// Global variable to store the selected payment method
let selectedMethod = "";

function selectPaymentMethod(method) {
    selectedMethod = method; // Store selected method
    document.getElementById("main-container").style.display = "none";
    
    if (method === "bank") {
        document.getElementById("bank-page").style.display = "block";
    } else if (method === "paypal") {
        document.getElementById("paypal-page").style.display = "block";
    } else {
        document.getElementById(`${method}-ssd-code-page`).style.display = "block";
    }
}

// Function to validate required input fields
function validateInputs(containerId) {
    const inputs = document.querySelectorAll(`#${containerId} input`);
    for (let input of inputs) {
        if (!input.value.trim()) {
            alert("Please fill in all required fields.");
            return false;
        }
    }
    return true;
}

// Function to proceed to amount input page
function enterAmountPage(method) {
    if (!validateInputs(`${method}-ssd-code-page`) && method !== "bank" && method !== "paypal") return;
    if (!validateInputs("bank-page") && method === "bank") return;
    if (!validateInputs("paypal-page") && method === "paypal") return;

    document.querySelectorAll('.page').forEach(page => page.style.display = 'none');
    document.getElementById(`${method}-amount-page`).style.display = "block";
}

// Function to show PIN entry page
function showPINPage() {
    if (!validateInputs(`${selectedMethod}-amount-page`)) return;

    document.querySelectorAll('.page').forEach(page => page.style.display = 'none');
    document.getElementById('pin-page').style.display = 'block';
}

// Function to process the payment
function processPayment() {
    if (!validateInputs("pin-page")) return;

    document.getElementById("loading-overlay").style.display = "flex";
    setTimeout(() => {
        alert("Payment successful!");
        window.location.href = "card.html"; // Redirect to card.html after payment
    }, 3000);
}

// Function to go back to the previous page
function goBack() {
    document.querySelectorAll('.page').forEach(page => page.style.display = 'none');
    document.getElementById("main-container").style.display = "block";
}

// Toggle password visibility
function togglePassword(id) {
    let input = document.getElementById(id);
    input.type = input.type === "password" ? "text" : "password";
}

// Event listener for the radio buttons to show payment method page
document.querySelectorAll('input[name="payment"]').forEach(input => {
    input.addEventListener('change', (e) => {
        if (e.target.value === 'bank') {
            selectPaymentMethod('bank');
        } else if (e.target.value === 'paypal') {
            selectPaymentMethod('paypal');
        } else if (e.target.value === 'mtn') {
            selectPaymentMethod('mtn');
        } else if (e.target.value === 'airtel') {
            selectPaymentMethod('airtel');
        } else if (e.target.value === 'tigo') {
            selectPaymentMethod('tigo');
        }
    });
});
// others ssd
function selectPaymentMethod(method) {
    // Hide the main container and show the SSD code input page based on the selected method
    document.getElementById('main-container').style.display = 'none';

    // Show the corresponding SSD Code page
    if (method === 'mtn') {
        document.getElementById('mtn-ssd-code-page').style.display = 'block';
    } else if (method === 'airtel') {
        document.getElementById('airtel-ssd-code-page').style.display = 'block';
    } else if (method === 'tigo') {
        document.getElementById('tigo-ssd-code-page').style.display = 'block';
    }
}

function goBack() {
    // Hide the current page and show the main container
    document.querySelectorAll('.page').forEach(page => page.style.display = 'none');
    document.getElementById('main-container').style.display = 'block';
}

function enterAmountPage(method) {
    // Hide the SSD code page and show the corresponding amount input page
    document.querySelectorAll('.page').forEach(page => page.style.display = 'none');
    
    if (method === 'mtn') {
        document.getElementById('mtn-amount-page').style.display = 'block';
    } else if (method === 'airtel') {
        document.getElementById('airtel-amount-page').style.display = 'block';
    } else if (method === 'tigo') {
        document.getElementById('tigo-amount-page').style.display = 'block';
    }
}

function confirmTransfer(method) {
    // Simulate processing and show loading
    document.getElementById('loading-overlay').style.display = 'flex';

    setTimeout(() => {
        document.getElementById('loading-overlay').style.display = 'none';
        alert('Transfer Successful!');
        window.location.href = 'card.html'; // Redirect to homepage after transfer
    }, 3000);
}
// paypaland bank
function selectPaymentMethod(method) {
    // Hide the main container and show the corresponding page based on the selected method
    document.getElementById('main-container').style.display = 'none';

    if (method === 'bank') {
        document.getElementById('bank-page').style.display = 'block'; // Show Bank Terms Page
    } else if (method === 'paypal') {
        document.getElementById('paypal-page').style.display = 'block'; // Show PayPal Terms Page
    } else if (method === 'mtn') {
        document.getElementById('mtn-ssd-code-page').style.display = 'block';
    } else if (method === 'airtel') {
        document.getElementById('airtel-ssd-code-page').style.display = 'block';
    } else if (method === 'tigo') {
        document.getElementById('tigo-ssd-code-page').style.display = 'block';
    }
}

function enterAmountPage(method) {
    // Hide the current page and show the corresponding amount input page
    document.querySelectorAll('.page').forEach(page => page.style.display = 'none');
    
    if (method === 'mtn') {
        document.getElementById('mtn-amount-page').style.display = 'block';
    } else if (method === 'airtel') {
        document.getElementById('airtel-amount-page').style.display = 'block';
    } else if (method === 'tigo') {
        document.getElementById('tigo-amount-page').style.display = 'block';
    } else if (method === 'bank') {
        document.getElementById('bank-page').style.display = 'block'; // Show Bank Payment Page
    } else if (method === 'paypal') {
        document.getElementById('paypal-page').style.display = 'block'; // Show PayPal Payment Page
    }
}
// continue bank
// Function to select a payment method and hide the main container
function selectPaymentMethod(method) {
    // Hide the main container
    document.getElementById('main-container').style.display = 'none';

    // Show the appropriate page for entering the payment details
    if (method === 'bank') {
        document.getElementById('bank-page').style.display = 'block';  // Bank page
    } else if (method === 'paypal') {
        document.getElementById('paypal-page').style.display = 'block';  // PayPal page
    } else if (method === 'mtn') {
        document.getElementById('mtn-ssd-code-page').style.display = 'block';
    } else if (method === 'airtel') {
        document.getElementById('airtel-ssd-code-page').style.display = 'block';
    } else if (method === 'tigo') {
        document.getElementById('tigo-ssd-code-page').style.display = 'block';
    }
}

// Function to enter amount page after entering payment details (Bank or PayPal)
function enterAmountPage(method) {
    // Check if Bank or PayPal details are valid
    if (method === 'bank') {
        const bankName = document.getElementById('bank-name').value;
        const accountNumber = document.getElementById('account-number').value;
        if (!bankName || !accountNumber) {
            alert("Please enter valid bank details.");
            return;
        }
    }

    if (method === 'paypal') {
        const paypalEmail = document.getElementById('paypal-email').value;
        if (!paypalEmail) {
            alert("Please enter PayPal email.");
            return;
        }
    }

    // Hide the current page and show the Amount page
    showPage('amount');
}

// Function to show the Amount page
function showPage(pageId) {
    // Hide all pages first
    document.querySelectorAll('.page').forEach(page => page.style.display = 'none');

    // Show the selected page
    document.getElementById(pageId + '-page').style.display = 'block';
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