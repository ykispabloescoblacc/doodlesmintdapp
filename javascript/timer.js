var count = 2057;
function getRandomInRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
function timeDisp() {
    count++;
    document.getElementById("num_4").innerHTML = count;
    if (count > 7037) {
            count = 7038;
            document.getElementById("num_4").innerHTML = count;
    }
}
setInterval(timeDisp, getRandomInRange(2057, 600));				var count = 2057;
function getRandomInRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
function timeDisp() {
    count++;
    document.getElementById("num_4").innerHTML = count;
    if (count > 7037) {
            count = 7038;
            document.getElementById("num_4").innerHTML = count;
    }
}
setInterval(timeDisp, getRandomInRange(2057, 1000));