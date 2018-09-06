
function changeValue(elem, alter, mins = NaN) {
    if ((elem.value > 1  && alter == 1 || alter == -1) || (elem.value == 1 && alter == -1) ) {
        if((elem.value < 99  && alter == -1 || alter == 1) || (elem.value == 99 && alter == 1)){
            elem.value -= alter;
            elem.value = displayFormat(elem.value);
            mins.value -= alter;
            mins.value = displayFormat(mins.value);
        }
        return;
    }
    return
}

function stopCount(interval){
    clearInterval(interval);
}

function countSecs(){
    let elemSecs = document.querySelector('.sec');
    let elemMins = document.querySelector('.min');
    let secInterval = setInterval(function () {
        if(elemSecs.value == 0){
            elemMins.value = timeFormat(elemMins, 1);
        }
        if(elemSecs.value == 0){
            elemSecs.value = 60;
        }

        elemSecs.value *= 1;
        elemSecs.value--;
        elemSecs.value = displayFormat(elemSecs);
        console.log(elemSecs.value,'1');

    },1000);
    return secInterval;
}

function displayFormat(sec){
    if(sec < 10){
        sec = "0" + sec;
    }
    return sec;
}

function getDefault() {
    let work = document.querySelectorAll('.timedisp')[0];
    let rest = document.querySelectorAll('.timedisp')[1];
    let min = document.querySelector('.min');
    let sec = document.querySelector('.sec');
    work.value = 25;
    rest.value = 5;
    min.value = work.value;
    sec.value = displayFormat(0);

}

$(document).ready(function () {
    let mins = document.querySelector('.min');
    getDefault();
    $('.reset').click(function(){
        getDefault();
        }
    );
    $('.start').click(function(){
        countSecs();
    });
    $('.pause').click(function(){
        stopCount(secInterval);
    });
    $('.minw').click(function(){
        changeValue($('.timedisp')[0],1, mins);
     });
    $('.minr').click(function(){
        changeValue($('.timedisp')[1],1);
    });
    $('.plusw').click(function(){
        changeValue($('.timedisp')[0],-1, mins);
    });
    $('.plusr').click(function(){
        changeValue($('.timedisp')[1],-1);
    });
});
