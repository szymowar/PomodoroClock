let __GLOBAL_N__ = {};
    __GLOBAL_N__.work = "WORK";
    __GLOBAL_N__.rest = "REST";

let secInterval;

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
            elem.val(displayFormat(elem.val()));
        }
}

function changeValueMinus(elem) {
    changeValueX(elem, 1, 1, 100);
}

function changeValuePlus(elem) {
    changeValueX(elem, -1, 0, 99);
 }

function stopCount(interval){
    clearInterval(interval);
}

function phaseChange(phase, work, rest, elemMins){
    if (phase.html() == __GLOBAL_N__.work){
        elemMins.val(rest.val());
        phase.html(__GLOBAL_N__.rest);
    }else{
        elemMins.val(work.val());
        phase.html(__GLOBAL_N__.work);
    }
}

function countSecs(phase, work, rest, elemMins, elemSecs){
    secInterval = setInterval(function () {
        if(elemMins.val() == 0 && elemSecs.val() == 0){
            phaseChange(phase, work, rest, elemMins);
        }
        if(elemSecs.val() == 0) {
            elemMins.val(elemMins.val() - 1);
            elemMins.val(displayFormat(elemMins.val()));
            elemSecs.val(60);
        }
        elemSecs.val(elemSecs.val() - 1);
        elemSecs.val(displayFormat(elemSecs.val()));
    },1000);
    return secInterval;
}

function getDefault(phase, work, rest, min, sec) {
    phase.html(__GLOBAL_N__.work);
    work.val(25);
    rest.val(displayFormat(5));
    min.val(work.val());
    sec.val(displayFormat(0));
}

$(document).ready(function () {
    let phase = $("#timer-phase");
    let work = $('#dispwork');
    let rest = $('#disprest');
    let mins = $('#min');
    let secs = $('#sec');

    getDefault(phase, work, rest, mins, secs);

    $('#reset').click(function(){
        stopCount(secInterval);
        getDefault(phase, work, rest, mins, secs);
        }
    );
    $('#start').click(function(){
        countSecs(phase, work, rest, mins, secs);
    });
    $('#pause').click(function(){
        stopCount(secInterval);
    });
    $('.minw').click(function(){
        changeValueMinus(work);
        mins.val(work.val());
     });
    $('.minr').click(function(){
        changeValueMinus(rest);
    });
    $('.plusw').click(function(){
        changeValuePlus(work);
        mins.val(work.val());
    });
    $('.plusr').click(function(){
        changeValuePlus(rest);
    });
});
