let timerId;

let minutes = document.querySelector("#minutes");
let seconds = document.querySelector("#seconds");

let counterMinute = 0;
let counterSecond = 0;

function incrementTime() {
    counterSecond++;

    if (counterSecond < 10) {
        seconds.innerText = "0" + counterSecond.toString();
    } else if (counterSecond < 60) {
        seconds.innerText = counterSecond.toString();
    } else {
        counterSecond = 0;
        counterMinute++;

        seconds.innerText = "0" + counterSecond.toString();
        
        if (counterMinute < 10) {
            minutes.innerText = "0" + counterMinute.toString();
        } else {
            minutes.innerText = counterMinute.toString();
        }
    }
}

function start() {
    if (!timerId) {
        timerId = setInterval(incrementTime, 1000);
    }
}

function stop() {
    clearInterval(timerId);
    timerId = null;
}

function reset() {
    counterMinute = 0;
    counterSecond = 0;

    document.querySelector("#minutes").innerText = "0" + counterMinute.toString();;
    document.querySelector("#seconds").innerText = "0" + counterSecond.toString();;

    clearInterval(timerId);
    timerId = null;
}