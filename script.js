// Countdown for testing (1-minute timer)
const countdown = () => {
    // Set the target time to 1 minute from now
    const now = new Date().getTime();
    const targetTime = now + 60000; // 1 minute in milliseconds

    const updateCountdown = () => {
        const currentTime = new Date().getTime();
        const gap = targetTime - currentTime;

        // Time calculations
        const second = 1000;
        const minute = second * 60;

        if (gap <= 0) {
            // Hide the entire countdown section and the header
            document.getElementById('countdown-section').classList.add('hidden');
            document.querySelector('.header').classList.add('hidden');

            // Show the celebration section
            document.getElementById('celebration-section').classList.remove('hidden');
            document.getElementById('fireworks').classList.remove('hidden');
            document.getElementById('new-year').textContent = new Date().getFullYear();

            clearInterval(timerInterval); // Stop the interval
            return;
        }

        const minutes = Math.floor(gap / minute);
        const seconds = Math.floor((gap % minute) / second);

        // Update countdown values
        document.getElementById('days').textContent = '00';
        document.getElementById('hours').textContent = '00';
        document.getElementById('minutes').textContent = minutes.toString().padStart(2, '0');
        document.getElementById('seconds').textContent = seconds.toString().padStart(2, '0');
    };

    // Update countdown every second
    const timerInterval = setInterval(updateCountdown, 1000);
    updateCountdown(); // Initial call to display immediately
};

// Start the test countdown
countdown();
