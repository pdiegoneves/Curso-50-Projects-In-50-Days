const doc = document
const hourEl = doc.querySelector('.hour')
const minuteEl = doc.querySelector('.minute')
const secondEl = doc.querySelector('.second')
const timeEl = doc.querySelector('.time')
const dateEl = doc.querySelector('.date')
const toogle = doc.querySelector('.toogle')

const days = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sabado"]
const months = ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out ", "Nov", "Dez"]

toogle.addEventListener('click', (e) => {
    const html = doc.querySelector('html')
    if (html.classList.contains('dark')) {
        html.classList.remove('dark')
        toogle.innerHTML = '<i class="fas fa-moon"></i>'
    } else {
        html.classList.add('dark')
        toogle.innerHTML = '<i class="fas fa-sun"></i>'
    }
})

function setTime() {
    const time = new Date()
    const month = time.getMonth()
    const day = time.getDay()
    const date = time.getDate()
    const hours = time.getHours()
    const hoursForClock = hours % 12
    const minutes = time.getMinutes()
    const seconds = time.getSeconds()
     
    const iconEl = doc.querySelector('.toogle i')

    hourEl.style.transform = `translate(-50%, -100%) rotate(${scale(hoursForClock, 0, 11, 0, 360)}deg)`
    minuteEl.style.transform = `translate(-50%, -100%) rotate(${scale(minutes, 0, 59, 0, 360)}deg)`
    secondEl.style.transform = `translate(-50%, -100%) rotate(${scale(seconds, 0, 59, 0, 360)}deg)`
    iconEl.style.transform = `rotate(${scale(seconds, 0, 59, 0, 360)}deg)`

    timeEl.innerHTML = `${hours < 10 ? '0'+ hours: hours}:${minutes < 10 ? '0'+ minutes: minutes}:<span class='seconds'>${seconds < 10 ? '0'+ seconds: seconds}</span>`
    dateEl.innerHTML = `${days[day]}, ${months[month]} <span class='circle'>${date}</span>`

}


const scale = (number, inMin, inMax, outMin, outMax) => {
    return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}


setInterval(setTime, 1000)