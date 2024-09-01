document.addEventListener('DOMContentLoaded', function() {
    // Timer Setup
    const countdownElement = document.getElementById('countdown');
    const targetDate = new Date().setHours(23, 59, 59, 999); // End of the day

    function updateCountdown() {
        const now = new Date();
        const timeLeft = targetDate - now;
        
        if (timeLeft <= 0) {
            countdownElement.textContent = '00:00';
            clearInterval(timerInterval);
            return;
        }

        const minutes = Math.floor(timeLeft / 60000);
        const seconds = Math.floor((timeLeft % 60000) / 1000);

        countdownElement.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    }

    const timerInterval = setInterval(updateCountdown, 1000);

    // Poll Form Handling
    document.getElementById('poll-form').addEventListener('submit', function(event) {
        event.preventDefault();
        
        const formData = new FormData(event.target);
        const selectedDay = formData.get('day');
        
        fetch('poll_results.php', {
            method: 'POST',
            body: JSON.stringify({ day: selectedDay }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(response => response.json())
        .then(data => {
            const resultsDiv = document.getElementById('poll-results');
            resultsDiv.innerHTML = `<p>Thank you for voting! You selected: ${selectedDay}</p>`;
            resultsDiv.classList.add('fade-in');
        });
    });

    // Example of adding messages (in a real application, this would be dynamic)
    const messages = [
        'Welcome to the message management system!',
        'Here you can view and manage your messages.'
    ];

    const messageList = document.getElementById('message-list');
    messages.forEach(message => {
        const li = document.createElement('li');
        li.textContent = message;
        messageList.appendChild(li);
    });
});
