let __GLOBAL_N__ = {};
    __GLOBAL_N__.work = "WORK";
    __GLOBAL_N__.rest = "REST";
    __GLOBAL_N__.start = "START";
    __GLOBAL_N__.stop = "STOP";

let secInterval = undefined;


function displayFormat(sec) {
    sec = sec *1;
    if(sec < 10){
        sec = "0" + sec;
    }
    return sec;
}

function changeValueX(elem, fact, min, max) {
    let val = parseInt(elem.val(), 10);
    if (elem.val() > min  && elem.val() < max) {
            elem.val(val - fact);
            elem.val(elem.val());
            elem.html(elem.val());
        }
}

function changeValueMinus(elem) {
    changeValueX(elem, 1, 1, 61);
}

function changeValuePlus(elem) {
    changeValueX(elem, -1, 0, 60);
 }
 function changeValuePlusRest(elem) {
     changeValueX(elem, -1, 0, 60);
  }

function stopCount(interval){
        clearInterval(interval);
}

function phaseChange(phase, work, rest, timeL){
    if (phase.html() == __GLOBAL_N__.work){
        timeL.val(timeLeft(rest.val()));
        timeL.html(timeL.val());
        phase.html(__GLOBAL_N__.rest);
    }else{
        timeL.val(timeLeft(work.val()));
        timeL.html(timeL.val())
        phase.html(__GLOBAL_N__.work);
    }
}
function beep(audiosrc) {
            audiosrc.play();
            audiosrc.loop = false;
}
function beepReloader(audiosrc){
    audiosrc.load();
}

function timeLeft(mins, secs=0){
    return displayFormat(mins) + ":" + displayFormat(secs);
}
function countSecs(phase, work, rest, timeL, audiosrc){
    let mins = timeL.val().slice(0,2);
    let secs = timeL.val().slice(3);
    secInterval = setInterval(function () {
        if(mins == 0 && secs == 0){
            if (phase.html() == __GLOBAL_N__.work){
                phase.html(__GLOBAL_N__.rest);
                mins = rest.val();
            }else {
                phase.html(__GLOBAL_N__.work);
                mins = work.val();
            }
            beep(audiosrc);
        }
        if(secs == 0) {
            mins -= 1;
            secs = 60;
            timeL.val(timeLeft(mins, 60));
            timeL.html(timeL.val());
        }
        secs -= 1;
        timeL.val(timeLeft(mins, secs));
        timeL.html(timeL.val());
    },1000);
    return secInterval;
}

function getDefault(phase, work, rest, timeL, start_stop) {
    phase.html(__GLOBAL_N__.work);
    work.val(25);
    rest.val(5);
    work.html(25);
    rest.html(5);
    timeL.val(timeLeft(work.val()))
    timeL.html(timeL.val());
    start_stop.html(__GLOBAL_N__.start);
}
function changTimeLeft(elem) {
    elem.html(elem.val());
}
$(document).ready(function () {
    let phase = $("#timer-label");
    let work = $('#session-length');
    let rest = $('#break-length');
    let timeL = $('#time-left');
    let audiosrc = $('#beep')[0];
    let start_stop = $('#start_stop');

    getDefault(phase, work, rest, timeL, start_stop);
    $('#reset').click(function(){
        stopCount(secInterval);
        getDefault(phase, work, rest, timeL, start_stop);
        beepReloader(audiosrc);
    });
    start_stop.click(function(){
        if(start_stop.html() == __GLOBAL_N__.start){
            start_stop.html(__GLOBAL_N__.stop);
            countSecs(phase, work, rest, timeL, audiosrc);
        } else if (start_stop.html() == __GLOBAL_N__.stop){
            start_stop.html(__GLOBAL_N__.start);
            stopCount(secInterval);
        }
    });
    $('#session-decrement').click(function(){
        changeValueMinus(work);
        timeL.val(timeLeft(work.val()));
        timeL.html(timeL.val());

     });
    $('#break-decrement').click(function(){
        changeValueMinus(rest);
    });
    $('#session-increment').click(function(){
        changeValuePlus(work);
        timeL.val(timeLeft(work.val()));
        timeL.html(timeL.val());
    });
    $('#break-increment').click(function(){
        changeValuePlusRest(rest);
    });
});
