document.getElementById('donation-form').addEventListener('submit', function (event) {
    event.preventDefault();
    // Simulate donation process
    setTimeout(function () {
        document.getElementById('donation-form').reset();
        document.getElementById('confirmation-message').classList.remove('hidden');
        document.getElementById('confirmation-message').classList.add('visible');
        setTimeout(function () {
            document.getElementById('confirmation-message').classList.remove('visible');
            document.getElementById('confirmation-message').classList.add('hidden');
        }, 3000); // Hide message after 3 seconds
    }, 1000); // Simulate processing time
});
