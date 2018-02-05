var answer = document.getElementById('answer');
var attempt = document.getElementById('attempt');

function guess() {
    let input = document.getElementById('user-guess');
    //add functionality to guess function here
}

//implement new functions here

function setHiddenFields(){
    answer = Math.floor(Math.random()*Math.floor(10000));
    while(answer.toString().length<4){
        answer = "0" + answer;
    }
}

