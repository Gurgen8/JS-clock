let houres = document.querySelector('.hours')
let minutes = document.querySelector('.minutes')
let seconds = document.querySelector('.seconds')
let stopButton = document.querySelector('.stopeButton')
let startButton = document.querySelector('.startButton')
var timer

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function getTime() {
    timer = setInterval(() => {
        houres.innerHTML = `${new Date().getHours()} :`
        minutes.innerHTML = ` ${new Date().getMinutes()} :`
        seconds.innerHTML = `${new Date().getSeconds()}`
        houres.style.color = getRandomColor()
        seconds.style.color = getRandomColor()
        minutes.style.color = getRandomColor()

    }, 1000)

}


stopButton.addEventListener("click", function stop() {
    return clearInterval(timer)
})

startButton.addEventListener('click', function start() {
    return getTime()

})



