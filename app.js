const endDate = "19 November 2023 10:00 PM"

document.getElementById('end-date').innerText = endDate; 
const inputs = document.querySelectorAll("input")

function clock() {
    const end = new Date (endDate)
    const now = new Date ()
    const diff = end - now;
    console.log(diff);
    inputs[0].value = Math.floor(diff / 3600 / 24);
}
clock()