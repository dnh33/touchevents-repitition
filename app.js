var xStart, xEnd, yStart, yEnd;

var tolerance = 50;

window.addEventListener("touchstart", function (e) {
    xStart = e.changedTouches[0].pageX;
    yStart = e.changedTouches[0].pageY;
})

window.addEventListener("touchend", function (e) {
    xEnd = e.changedTouches[0].pageX;
    yEnd = e.changedTouches[0].pageY;

    if (xEnd < (xStart + tolerance)) {
        console.log("You have swiped to the right")
    }

    if (xEnd > (xStart - tolerance)) {
        console.log("You have swiped to the left")
    }
})