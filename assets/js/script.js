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
var saveBtn0 = $('#save0');
var saveBtn1 = $('#save1');
var saveBtn2 = $('#save2');
var saveBtn3 = $('#save3');
var saveBtn4 = $('#save4');
var saveBtn5 = $('#save5');
var saveBtn6 = $('#save6');
var saveBtn7 = $('#save7');
var saveBtn8 = $('#save8');
// var currentTime = (moment().format('H a'));
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
        console.log(timeArray[i]);
        // console.log(moment(timeArray[i], 'H a'));
        console.log(`#task${i}`);
        var parsed = (moment(timeArray[i], 'H a'));
        var nowH = moment();
        if (nowH.isSame(parsed)) {
            $(`#task${i}`).css("background-color", "steelblue");
        } else if (nowH.isAfter(parsed)) {
            console.log(nowH.isAfter(parsed));
            $(`#task${i}`).css("background-color", "slategray");
        } else {
            (nowH.isBefore(parsed))
            console.log(nowH.isBefore(parsed));
            $(`#task${i}`).css("background-color", "lightgreen");
        } 
    }
};


// function save0data() {
//     var data0 = $('#task0').text();
// }

function loadTasks() {
    for (var i = 0; i < timeArray.length; i++) {
    var task = JSON.parse(localStorage.getItem(`task${i}`));
    console.log(task); 
    $(`#task${i}`).val(task);
    }
};

saveBtn0.click(function() {
    console.log($('#task0').val());
    localStorage.setItem("task0", JSON.stringify($('#task0').val()));
});

saveBtn1.click(function() {
    console.log($('#task1').val());
    localStorage.setItem("task1", JSON.stringify($('#task1').val()));
});

saveBtn2.click(function() {
    console.log($('#task2').val());
    localStorage.setItem("task2", JSON.stringify($('#task2').val()));
});

saveBtn3.click(function() {
    console.log($('#task3').val());
    localStorage.setItem("task3", JSON.stringify($('#task3').val()));
});

saveBtn4.click(function() {
    console.log($('#task4').val());
    localStorage.setItem("task4", JSON.stringify($('#task4').val()));
});

saveBtn5.click(function() {
    console.log($('#task5').val());
    localStorage.setItem("task5", JSON.stringify($('#task5').val()));
});

saveBtn6.click(function() {
    console.log($('#task6').val());
    localStorage.setItem("task6", JSON.stringify($('#task6').val()));
});

saveBtn7.click(function() {
    console.log($('#task7').val());
    localStorage.setItem("task7", JSON.stringify($('#task7').val()));
});

saveBtn8.click(function() {
    console.log($('#task8').val());
    localStorage.setItem("task8", JSON.stringify($('#task8').val()));
});