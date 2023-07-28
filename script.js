let runButton = document.querySelector('.btn');

let days = document.querySelector('.days');
let hours = document.querySelector('.hours');
let minutes = document.querySelector('.minutes');
let seconds = document.querySelector('.seconds');

let time = -2;

function warning(){
    alert('time is over');
}

const run = () => {
    if(time == -2){
        time = parseInt(seconds.value);
        time += parseInt(minutes.value) * 60;
        time += parseInt(hours.value) * 3600;
        time += parseInt(days.value) * 86400;
    }
    sec = --time;
    min = sec / 60;
    hrs = min / 60;
    if(time <= 0){
        clearInterval(timer);
        let audio = new Audio();
        audio.preload = 'auto';
        audio.src = 'sounds/timer-end.mp3';
        audio.play();
        setTimeout(warning, 1000);
    } else {
        days.value = Math.floor(hrs / 24);
        hours.value = Math.floor(hrs % 24);
        minutes.value = Math.floor(min % 60);
        seconds.value = Math.floor(sec % 60);
    };
}

const stop = () => {
    time = -2;
    clearInterval(timer);
    days.value = 0;
    hours.value = 0;
    minutes.value = 0;
    seconds.value = 0;
}