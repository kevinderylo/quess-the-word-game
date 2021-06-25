player1_name=localStorage.getItem("player1_name");
player2_name=localStorage.getItem("player2_name");

player1_score=0;
player2_score=0;
question_turn="player1";
answer_turn="player2";

document.getElementById("player1_name").innerHTML=player1_name+" : ";
document.getElementById("player2_name").innerHTML=player2_name+" : ";
document.getElementById("player1_score").innerHTML=player1_score;
document.getElementById("player2_score").innerHTML=player2_score;
document.getElementById("player_question").innerHTML="QUESTION TURN- "+player1_name;
document.getElementById("player_answer").innerHTML="ANSWER TURN- "+player2_name;

function send(){
    get_word=document.getElementById("word").value;
    word=get_word.toLowerCase();
    console.log(word);

    char1=word.charAt(1);
    console.log(char1);
    len=Math.floor(word.length/2);

    char2=word.charAt(len);
    console.log(char2);
    len1=word.length-1;
    
    char3=word.charAt(len1);
    console.log(char3);

    replace1=word.replace(char1, "_");
    replace2=replace1.replace(char2, "_");
    replace3=replace2.replace(char3, "_");

    console.log(replace3);

    question="<h4 id='word_display'>Q."+replace3+"</h4>";
    input="<br> answer:<input type='text' id='checkbox'>";
    buttonCheck="<br><br><button class='btn btn-info' onclick='check()'>CHECK</button>";
    row=question+input+buttonCheck;
    document.getElementById("output").innerHTML=row;
    document.getElementById("word").value="";
}

function check(){
    get_answer=document.getElementById("checkbox").value;
    answer=get_answer.toLowerCase();
    console.log(answer);

    if(word == answer){
        if(answer_turn == "player1"){
            player1_score=player1_score+1;
            document.getElementById("player1_score").innerHTML=player1_score;
        }
        else{
            player2_score=player2_score+1;
            document.getElementById("player2_score").innerHTML=player2_score;
        }
    }
    if(question_turn == "player1"){
        question_turn="player2"
        document.getElementById("player_question").innerHTML="QUESTION TURN - "+player2_name;
    }
    else{
        question_turn="player1"
        document.getElementById("player_question").innerHTML="QUESTION TURN - "+player1_name;
    }
    if(answer_turn == "player1"){
        answer_turn="player2"
        document.getElementById("player_answer").innerHTML="ANSWER TURN - "+player2_name;
    }
    else{
        answer_turn="player1"
        document.getElementById("player_answer").innerHTML="ANSWER TURN - "+player1_name;
    }
    document.getElementById("output").innerHTML="";
}