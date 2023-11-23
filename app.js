const endDate = "24 November 2023 10:00 PM";

document.getElementById("end-date").innerText = endDate

const inputs = document.querySelectorAll("input");

function updateCountdown() {
    const end = new Date(endDate);
    const now = new Date();
    const diff = end - now;

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    inputs[0].value = days;
    inputs[1].value = hours;
    inputs[2].value = minutes;
    inputs[3].value = seconds;
}

updateCountdown(); // Initial call to set the countdown on page load
setInterval(updateCountdown, 1000); // Update the countdown every second
