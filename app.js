const counterElem = document.getElementById("counter")
const chassisElem = document.getElementById("chassis")
const safeboxCount = 30
const maxSafebox = safeboxCount * 2 - 1

for (let i = 0; i < safeboxCount; i++) {
    const spanElem = document.createElement("span")
    spanElem.classList.add("number")
    spanElem.style = `--i:${i}`
    if (i === 0 || i === 15) {
        spanElem.style.height = "7.5rem"
    } else if (i === 5 || i === 10 || i === 20 || i === 25) {
        spanElem.style.height = "7rem"
    } else {
        spanElem.style.height = "6.5rem"
    }
    counterElem.appendChild(spanElem)
}

setInterval(() => {
    const number = randomNumberGenerator(maxSafebox)
    chassisElem.style = `--i: ${number}`
}, 1500);

const randomNumberGenerator = (max) => {
    return Math.floor(Math.random() * max);
}