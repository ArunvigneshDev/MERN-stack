document.getElementById('loginForm')?.addEventListener('submit', function(event) {
    event.preventDefault();
    // Perform login validation here
    alert('Login form submitted');
});

document.getElementById('signupForm')?.addEventListener('submit', function(event) {
    event.preventDefault();
    
    const username = document.getElementById('signupUsername').value;
    const email = document.getElementById('signupEmail').value;
    const password = document.getElementById('signupPassword').value;
    const confirmPassword = document.getElementById('signupConfirmPassword').value;
    
    if (!validatePassword(password)) {
        alert('Password must be at least 8 characters long and include uppercase, lowercase, number, and special character.');
        return;
    }
    
    if (password !== confirmPassword) {
        alert('Passwords do not match');
        return;
    }
    
    // Perform signup validation here
    alert('Signup form submitted');
});

function validatePassword(password) {
    const minLength = 8;
    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);
    const hasDigit = /\d/.test(password);
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);

    return password.length >= minLength && hasUpperCase && hasLowerCase && hasDigit && hasSpecialChar;
}
