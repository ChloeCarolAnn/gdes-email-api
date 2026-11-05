// Handle real form submissions, prevent page reload, and pass EmailJS the service/template IDs as strings.
document.querySelector('.contact-form').addEventListener('submit', function (event) {
    event.preventDefault();

    const templateParams = {
        name: document.querySelector('#name').value,
        email: document.querySelector('#email').value,
        subject: document.querySelector('#subject').value,
        message: document.querySelector('#message').value
    };

    emailjs.send('service_uywvw8o', 'template_ytk9k8o', templateParams)
        .then(() => alert('Email sent!'))
        .catch(() => alert('Failed to send email!'));
});