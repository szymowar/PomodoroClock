
function changeValue(elem, alter) {
    if ((elem.value > 0  && alter == 1 || alter == -1) || (elem.value == 0 && alter == -1) ) {
        if((elem.value < 99  && alter == -1 || alter == 1) || (elem.value == 99 && alter == 1)){
            elem.value -= alter;;
        }
        return;
    }
    return
}

function countDown(minutes){
    console.log(minutes);
    return setInterval(function () {
        minutes --;
        console.log(minutes,'1');
    },1000);
}


$(document).ready(function () {
    $('.timedisp').click(function(){
        countDown(this.value);
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
