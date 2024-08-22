// form.js
function validateForm() {
    // Get form elements
    const firstName = document.getElementById('firstName').value.trim();
    const lastName = document.getElementById('lastName').value.trim();
    const birthday = document.getElementById('birthday').value;
    const gender = document.querySelector('input[name="gender"]:checked');
    const email = document.getElementById('email').value.trim();
    const phoneNumber = document.getElementById('phoneNumber').value.trim();
    const address = document.getElementById('address').value.trim();

    // Function to escape HTML special characters
    function escapeHTML(str) {
        return str.replace(/[&<>"']/g, function (match) {
            const escape = {
                '&': '&amp;',
                '<': '&lt;',
                '>': '&gt;',
                '"': '&quot;',
                "'": '&#039;'
            };
            return escape[match];
        });
    }

    // Validate first name
    if (!firstName || /[^a-zA-Z\s]/.test(firstName)) {
        alert('Please enter a valid first name (letters only).');
        return false;
    }
    
    // Validate last name
    if (!lastName || /[^a-zA-Z\s]/.test(lastName)) {
        alert('Please enter a valid last name (letters only).');
        return false;
    }

    // Validate birthday
    if (!birthday) {
        alert('Please enter your birthday.');
        return false;
    }
    // Optional: Check if the birthday is in the past
    const today = new Date();
    const birthDate = new Date(birthday);
    if (birthDate > today) {
        alert('Birthday cannot be a future date.');
        return false;
    }

    // Validate gender
    if (!gender) {
        alert('Please select your gender.');
        return false;
    }

    // Validate email
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailPattern.test(email)) {
        alert('Please enter a valid email address.');
        return false;
    }

    // Validate phone number
    const phonePattern = /^[0-9]{10}$/;
    if (!phoneNumber || !phonePattern.test(phoneNumber)) {
        alert('Please enter a valid 10-digit phone number.');
        return false;
    }

    // Validate address
    if (!address || /[^a-zA-Z0-9\s,]/.test(address)) {
        alert('Please enter a valid address (letters, numbers, and basic punctuation only).');
        return false;
    }

    // Escape special characters in input fields for additional security
    document.getElementById('firstName').value = escapeHTML(firstName);
    document.getElementById('lastName').value = escapeHTML(lastName);
    document.getElementById('email').value = escapeHTML(email);
    document.getElementById('address').value = escapeHTML(address);

    // Redirect to success.html
    window.location.href = 'success.html';

    // Prevent form submission since we are handling the redirection
    return false;
}
