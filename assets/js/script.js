var dayDis = $("#currentDay");
var timeArray = [$('#time0').text(), $('#time1').text(), $('#time2').text(), $('#time3').text(), $('#time4').text(), $('#time5').text(), $('#time6').text(), $('#time7').text(), $('#time8').text()];
var now = moment();
handleTimeDisplay();
hourTracker();
loadTasks();

function handleTimeDisplay() {
    var day = moment().format("dddd, MMMM Do - h a");
    dayDis.text(day);
};  

function hourTracker() {
    for (var i = 0; i < timeArray.length; i++) {
        var parsed = (moment(timeArray[i], 'H a'));
        var nowH = moment();
        if (nowH.isSame(parsed)) {
            $(`#task${i}`).css("background-color", "steelblue");
        } else if (nowH.isAfter(parsed)) {
            $(`#task${i}`).css("background-color", "slategray");
        } else {
            (nowH.isBefore(parsed))
            $(`#task${i}`).css("background-color", "lightgreen");
        } 
    }
};

function loadTasks() {
    for (var i = 0; i < timeArray.length; i++) {
    var task = JSON.parse(localStorage.getItem(`task${i}`));
    $(`#task${i}`).val(task);
    }
};

function saveTask(elem) {
    var id = $(elem).parent().prev().attr('id');
    var task = $('#'+id).val();
    localStorage.setItem(`${id}`, JSON.stringify(`${task}`));
};