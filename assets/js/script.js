var dayDis = $("#currentDay");

function handleTimeDisplay() {
    var day = moment().format("dddd, MMMM Do");
    dayDis.text(day);
};

handleTimeDisplay();