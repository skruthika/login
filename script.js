// JavaScript for sign-up page
document.getElementById('signup-form').addEventListener('submit', function (e) {
    e.preventDefault();
    const username = document.getElementById('signup-username').value;
    const password = document.getElementById('signup-password').value;

    // Here, you can implement your sign-up logic (e.g., sending data to a server).
    // For this example, we'll simply alert the values.
    alert(`Signed up with Username: ${username} and Password: ${password}`);
});

// JavaScript for sign-in page
document.getElementById('signin-form').addEventListener('submit', function (e) {
    e.preventDefault();
    const username = document.getElementById('signin-username').value;
    const password = document.getElementById('signin-password').value;

    // Here, you can implement your sign-in logic (e.g., checking credentials).
    // For this example, we'll simply alert the values.
    alert(`Signed in with Username: ${username} and Password: ${password}`);
});
