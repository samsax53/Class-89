name1 = localStorage.getItem("player1");
name2 = localStorage.getItem("player2");

scoreP1 = 0;
scoreP2 = 0;

questionTurn = "player1";
answerTurn = "player2";

document.getElementById("playerDisplay1").innerHTML = name1 + ": ";
document.getElementById("playerDisplay2").innerHTML = name2 + ": ";
document.getElementById("playerScore1").innerHTML = scoreP1;
document.getElementById("playerScore2").innerHTML = scoreP2;
document.getElementById("QuestionTurn").innerHTML = "Question Turn: " + name1;
document.getElementById("AnswerTurn").innerHTML = "Answer Turn: " + name2;

function sendWrd() {

    userInput  = document.getElementById("wordInput").value;
    lowerCaseWrd = userInput.toLowerCase();
    console.log(lowerCaseWrd);

    charAt1 = lowerCaseWrd.charAt(1);
    console.log(charAt1);

    wrdLength = Math.floor(lowerCaseWrd.length / 2);
    charAt2 = lowerCaseWrd.charAt(wrdLength);
    console.log(charAt2);

    lgtMinus = lowerCaseWrd.length - 1;
    charAt3 = lowerCaseWrd.charAt(lgtMinus);
    console.log(charAt3);

    rmvLetter1 = lowerCaseWrd.replace(charAt1, "_");
    rmvLetter2 = rmvLetter1.replace(charAt2, "_");
    rmvLetter3 = rmvLetter2.replace(charAt3, "_");
    console.log(rmvLetter3);

    questionTag = "<h4 id='questionDisplay'> Q. " + rmvLetter3 + "</h4>"
    inputTag = "<br>" + "<input type='text' id='answerInput' placeholder='Type here'>";
    btnTag = "<br> <br>" + "<button class='btn btn-info' onclick='checkWrd()'> Check </button>";
    outputTags = questionTag + inputTag + btnTag;

    document.getElementById("output").innerHTML = outputTags;
    document.getElementById("wordInput").value = "";

}

function checkWrd() {

    ansInput = document.getElementById("answerInput").value;
    lowerCaseAns = ansInput.toLowerCase();
    console.log(lowerCaseAns);

    if(lowerCaseAns==lowerCaseWrd) 
    {
        if(answerTurn=="player1"){
            scoreP1 = scoreP1 + 1;
            document.getElementById("playerScore1").innerHTML = scoreP1;
        } else {
            scoreP2 = scoreP2 + 1;
            document.getElementById("playerScore2").innerHTML = scoreP2;
        }        
    }

    if(questionTurn=="player1"){
        questionTurn = "player2";
        document.getElementById("QuestionTurn").innerHTML = "Question Turn: " + name1;
    } else {
        questionTurn = "player1";
        document.getElementById("QuestionTurn").innerHTML = "Question Turn: " + name2;
    }

    if(answerTurn=="player1"){
        answerTurn = "player2";
        document.getElementById("AnswerTurn").innerHTML = "Answer Turn: " + name1;
    } else {
        answerTurn = "player1";
        document.getElementById("AnswerTurn").innerHTML = "Answer Turn: " + name2;
    }
    document.getElementById("output").innerHTML = "";

}