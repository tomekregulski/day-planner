var dayDis = $("#currentDay");
var textArea = $("textarea");

function handleTimeDisplay() {
    var day = moment().format("dddd, MMMM Do");
    dayDis.text(day);
};

handleTimeDisplay();
textAreaColor();

function textAreaColor() {
    textArea.setAttribute("style", "background-color: green");
};