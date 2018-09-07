function displayFormat(sec) {
    sec = sec *1;
    if(sec < 10){
        sec = "0" + sec;
    }
    return sec;
}

function changeValuePlus(elem) {
    if (elem.val() > 0  && elem.val() < 99) {
            elem.val(elem.val()*1 + 1);
            elem.val(displayFormat(elem.val()));
    }
    return;
}

function changeValueMinus(elem) {
    if (elem.val() > 1  && elem.val() < 100) {
            elem.val(elem.val()*1 - 1);
            elem.val(displayFormat(elem.val()));
    }
    return;
}

function stopCount(interval){
    clearInterval(interval);
}

function countSecs(){
    let elemSecs = $('#sec');
    let elemMins = $('#min');
    let secInterval = setInterval(function () {
        if(elemSecs.val() == 0){
            elemMins.val(elemMins.val() - 1);
            elemMins.val(displayFormat(elemMins.val()));
        }
        if(elemSecs.val() == 0){
            elemSecs.val(60);
        }
        elemSecs.val(elemSecs.val() - 1);
        elemSecs.val(displayFormat(elemSecs.val()));

    },1000);
    return secInterval;
}

function getDefault(work, rest, min, sec) {
    work.val(25);
    rest.val(displayFormat(5));
    min.val(work.val());
    sec.val(displayFormat(0));
}

$(document).ready(function () {
    let work = $('#dispwork');
    let rest = $('#disprest');
    let mins = $('#min');
    let secs = $('#sec');

    getDefault(work, rest, mins, secs);

    $('#reset').click(function(){
        getDefault(work, rest, mins, secs);
        }
    );
    $('#start').click(function(){
        countSecs();
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
