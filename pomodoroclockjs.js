
let secInterval;
function displayFormat(sec) {
    sec = sec *1;
    if(sec < 10){
        sec = "0" + sec;
    }
    return sec;
}
function changeValueMinus(elem) {
    let val = parseInt(elem.val(), 10);
    if (elem.val() > 1  && elem.val() < 100) {
            elem.val(val - 1);
             elem.val(displayFormat(elem.val()));
     }
 }

function changeValuePlus(elem) {
    let val = parseInt(elem.val(), 10);
    if (elem.val() > 0  && elem.val() < 99) {
            elem.val(val + 1);
             elem.val(displayFormat(elem.val()));
     }
 }

function stopCount(interval){
    clearInterval(interval);
}

function countSecs(elemMins, elemSecs){
    secInterval = setInterval(function () {
        if(elemSecs.val() == 0){
            elemMins.val(elemMins.val() - 1);
            elemMins.val(displayFormat(elemMins.val()));
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
        stopCount(secInterval);
        getDefault(work, rest, mins, secs);
        }
    );
    $('#start').click(function(){
        countSecs(mins, secs);
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
