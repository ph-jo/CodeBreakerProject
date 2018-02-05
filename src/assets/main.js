var answer = document.getElementById('answer');
var attempt = document.getElementById('attempt');
function setHiddenFields(){
    attempt = 0;
    answer = Math.floor(Math.random()*10000).toString();
    while(answer.length<4){
        answer = "0" + answer;
    }
}

function guess() {
    var input = document.getElementById('user-guess');
//add functionality to guess function here

    if (answer == '' || attempt == '') {
        setHiddenFields();
    }

    if (!validateInput(input.valueOf())) {
        return;
    }
    attempt++;
    if (getResults(i)) {
        setMessage("You Win! :)");
        showAnswer(true);
        showReplay();
    } else if (attempt.value >= 10) {
        setMessage("You Lose! :(");
        showAnswer(false);
        showReplay();
    } else {
        setMessage("Incorrect, try again.");

    }
}

//implement new functions here



function setMessage(message){
    document.getElementById("message").innerHTML = message;
}

function validateInput(input){
    if(input.length != 4){
        setMessage('Guesses must be exactly 4 characters long');
        return false;
    }
    return true;
}


function getResults(input) {
    var html = '<div class="row"><span class ="col-md-6">' + input + '</span><div class="col-md-6">';
    for (i = 0 i < input.length;
    i++
)
    {
        if (input.charAt(i) == answer.value.charAt(i)) {
            html +=
        <
            span
        class
            = "glyphicon glyphicon-ok" > < /span>;
        }
        else if (answer.value.indexOf(input.charAt(i)) > -1) {
            html +=
        <
            span
        class
            = "glyphicon glyphicon-transfer" > < /span>;
        } else {
            html +=
        <
            span
        class
            = "glyphicon glyphicon-remove" > < /span>;
        }

    }
    html += '</div></div>';
    document.getElementById('results').innerHTML += html;

    if (input == answer.value) {
        return true;
    }
    return false;
}


function showAnswer(success){
    var code = document.getElementById("code");
    if(success) {
        code.className += ' success';
    }else{
        code.className += ' failure';
    }
   code.innerHTML = answer.value;
}


function showReplay(){
    document.getElementById('guessing-div').style.display = "none";
    document.getElementById('replay-div').style.display = "block";
}
