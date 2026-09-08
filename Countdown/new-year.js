const dayEl = document.getElementById("day");
const hourEl = document.getElementById("hour");
const minutsEl = document.getElementById("minuts");
const secondEl = document.getElementById("second");


const newYear = new Date("jan 1, 2027 00:00:00").getTime()
updateCountDown();

function updateCountDown() {
    //how to get current System time in java script
    const now = new Date().getTime()
    const gap = newYear - now
    //console.log(gap);
    //console.log(now , newYear);

    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60
    const day = hour * 24;


    const d = Math.floor(gap / day);
    //console.log(d);

    const h = Math.floor((gap % day) / hour)
    //console.log(h);

    const m = Math.floor((gap % hour) / minute);

    const s = Math.floor((gap % minute) / second);

    dayEl.innerText = d;
    hourEl.innerText = h;
    minutsEl.innerText = m;
    secondEl.innerText = s;

    setTimeout(updateCountDown, 1000)

}
