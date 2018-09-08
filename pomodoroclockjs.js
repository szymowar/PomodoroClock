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

function stopCount(interval){
    clearInterval(interval);
}

function countSecs(elemMins, elemSecs){
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
        countSecs(mins, secs);
    });
    $('#pause').click(function(){
        stopCount(secInterval);
    });
    $('.minw').click(function(){
        changeValueX(work, 1, 1 , 100);
         mins.val(work.val());
     });
    $('.minr').click(function(){
        changeValueX(rest, 1, 1 , 100);;
    });
    $('.plusw').click(function(){
        changeValueX(work, -1, 0 , 99);;
         mins.val(work.val());
    });
    $('.plusr').click(function(){
        changeValueX(rest, -1, 0 , 99);;
    });
});
