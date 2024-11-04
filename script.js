// zegar
function updateClock() {
    const now = new Date();
    const clock = document.getElementById('clock');
    clock.textContent = now.toLocaleTimeString();
}

setInterval(updateClock, 1000);

// formularz
const form = document.getElementById('contactForm');
if (form) {
    form.addEventListener('submit', function (event) {
        event.preventDefault();

        const email = document.getElementById('email').value;
        const subject = document.getElementById('subject').value;
        const message = document.getElementById('message').value;

        document.getElementById('responseMessage').textContent = 'Dziękujemy za kontakt!';
        form.reset();
    });
}


