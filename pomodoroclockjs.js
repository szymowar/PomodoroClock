
function changeValue(elem, alter) {
    if ((elem.value > 0  && alter == 1 || alter == -1) || (elem.value == 0 && alter == -1) ) {
        if((elem.value < 99  && alter == -1 || alter == 1) || (elem.value == 99 && alter == 1)){
            elem.value -= alter;;
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
        if(elemSecs.value == "00"){
            elemMins.value--;
        }
        if(elemSecs.value == 0){
            elemSecs.value = 60;
        }
        elemSecs.value--;
        console.log(elemSecs.value,'1');

    },1000);
    return secInterval;
}


function displaySec(sec){
    if(sec < 10){
        sec = "0" + sec;
    }
    return sec;
}
function displayMin(min) {
    return min
}

function getDefault() {
    let work = document.querySelectorAll('.timedisp')[0];
    let rest = document.querySelectorAll('.timedisp')[1];
    let min = document.querySelector('.min');
    let sec = document.querySelector('.sec');
    work.value = 25;
    rest.value = 5;
    min.value = displayMin(work.value);
    sec.value = displaySec(0);

}

$(document).ready(function () {
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
        changeValue($('.timedisp')[0],1);
     });
    $('.minr').click(function(){
        changeValue($('.timedisp')[1],1);
    });
    $('.plusw').click(function(){
        changeValue($('.timedisp')[0],-1);
    });
    $('.plusr').click(function(){
        changeValue($('.timedisp')[1],-1);
    });
});
