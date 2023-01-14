function timeToWalk(steps, stepsLength, speed){
    let distance = steps * stepsLength;
    let speedMperSec = speed / 3.6;
    let rest = Math.floor(distance / 500) * 60;
    let time = distance / speedMperSec + rest;
    let hours = Math.floor(time / 3600);
    let minutes = Math.floor(time / 60);
    let sec = Math.round(time % 60);

    console.log(`${hours < 10 ? '0' : ''}${hours}:${minutes < 10 ? '0' : ''}${minutes}:${sec < 10 ? '0' : ''}${sec}`);
}

timeToWalk(4000, 0.60, 5);