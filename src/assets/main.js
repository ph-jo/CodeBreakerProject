var answer = document.getElementById('answer');
var attempt = document.getElementById('attempt');

function guess() {
    let input = document.getElementById('user-guess');
    //add functionality to guess function here
}

//implement new functions here

function setHiddenFields(){
    attempt = 0;
    answer = Math.floor(Math.random()*Math.floor(9999));
    while(answer.toString().length<4){
        answer = "0" + answer;
    }
}

