var dayDis = $("#currentDay");
var textArea = $("textarea");
var time0 = $('#time0').text();
var time1 = $('#time1').text();
var time2 = $('#time2').text();
var time3 = $('#time3').text();
var time4 = $('#time4').text();
var time5 = $('#time5').text();
var time6 = $('#time6').text();
var time7 = $('#time7').text();
var time8 = $('#time8').text();
var timeArray = [time0, time1, time2, time3, time4, time5, time6, time7, time8];
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
        // console.log(moment(timeArray[i], 'H a'));
        var parsed = (moment(timeArray[i], 'H a'));
        var nowH = moment();
        console.log(parsed);
        console.log(nowH);
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
    console.log(task); 
    $(`#task${i}`).val(task);
    }
};

function saveTask(elem) {
    if (elem.id = '#save0') {
        localStorage.setItem("task0", JSON.stringify($('#task0').val()));
    }
    if (elem.id = '#save1') {
        localStorage.setItem("task1", JSON.stringify($('#task1').val()));
    }
    if (elem.id = '#save2') {
        localStorage.setItem("task2", JSON.stringify($('#task2').val()));
    }
    if (elem.id = '#save3') {
        localStorage.setItem("task3", JSON.stringify($('#task3').val()));
    }
    if (elem.id = '#save4') {
        localStorage.setItem("task4", JSON.stringify($('#task4').val()));
    }
    if (elem.id = '#save5') {
        localStorage.setItem("task5", JSON.stringify($('#task5').val()));
    }
    if (elem.id = '#save6') {
        localStorage.setItem("task6", JSON.stringify($('#task6').val()));
    }
    if (elem.id = '#save7') {
        localStorage.setItem("task7", JSON.stringify($('#task7').val()));
    }
    if (elem.id = '#save8') {
        localStorage.setItem("task8", JSON.stringify($('#task8').val()));
    }
};