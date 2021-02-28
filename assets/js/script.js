var dayDis = $("#currentDay");
var textArea = $("textarea");
var time3 = $('#time11');
var time4 = $('#time12');
var now = moment();

function handleTimeDisplay() {
    var day = moment().format("dddd, MMMM Do");
    dayDis.text(day);
};
// };
// console.log(time3.text());
// handleTimeDisplay();
// textAreaColor();

// function textAreaColor() {
//     textArea.setAttribute("style", "background-color: green");
// };
function past() {
    var beginningTime = moment(time3.text(), 'h:mma');
    var endTime = moment();
    if (beginningTime.isBefore(endTime)) {
        // console.log((beginningTime.isBefore(endTime)));
        $( "#task11" ).css("background-color", "yellow");
    }
};

function current() {
    var beginningTime = moment(time3.text(), 'h:mma');
    var endTime = moment(time3.text(), 'h:mma');
    if (beginningTime.isSame(endTime)) {
        // console.log(beginningTime.isSame(endTime));
    }
};

function future() {
    var beginningTime = moment(time4.text(), 'h:mma');
    var endTime = moment();
    if (beginningTime.isAfter(endTime)) {
        console.log((beginningTime.isAfter(endTime)));
        $( "#task12" ).css("background-color", "green");
    }
};
past();
current();
future;