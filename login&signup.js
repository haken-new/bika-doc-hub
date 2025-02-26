// script.js
function toggleForm() {
    const loginContainer = document.getElementById('login-container');
    const signupContainer = document.getElementById('signup-container');
    
    if (loginContainer.style.display === "none") {
        loginContainer.style.display = "block";
        signupContainer.style.display = "none";
    } else {
        loginContainer.style.display = "none";
        signupContainer.style.display = "block";
    }
}
// redirection signup
document.getElementById('signup-container').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Form submitted!');
  });
  document.getElementById('signup-container').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting normally
    alert('Form submitted!');
    
    // Redirect to the next page (dashboard.html in this case)
    window.location.href = 'login-container'; // Change this to the URL of your next page
});
// redirection login
document.getElementById('login-container').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting normally
    alert('Login successful!');
    
    // Redirect to the next page (dashboard.html in this case)
    window.location.href = 'index.html'; // Change this to the URL of your next page
  });
  