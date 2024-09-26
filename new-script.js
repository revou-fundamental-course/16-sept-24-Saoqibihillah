function validateForm() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const message = document.getElementById('message').value;
    const submittedMessageDiv = document.getElementById('submittedMessage');

    // Simple validation
    if (!name || !email || !phone || !message) {
        alert('Please fill in all fields');
        return false;
    }

    // Display the message on the page instead of using an alert
    submittedMessageDiv.style.display = 'block';
    submittedMessageDiv.innerHTML = `
        <strong>Thank you, ${name}!</strong><br>
        Your message has been sent successfully. We will contact you at ${email}.
    `;

    // Clear form inputs
    document.getElementById('contactForm').reset();

    return false; // Prevent form submission
}
