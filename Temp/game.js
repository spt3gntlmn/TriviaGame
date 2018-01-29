var time = 18;
var randomNumber = 0;
var question = "";
var possibleAnswers = [];
var answerIndex = 0;
var theAnswer = "";

var questionArray = [
    trivia1 = {
        "question": "How many books comprise the Bible?",
        "answerChoices": [75, 32, 49, 66],
        "answer": 3,
        "img": "src='bible.jpg'"
    },
    trivia2 = {
        "question": "How many Apostles are there in the Bible?",
        "answerChoices": [14, 22, 12, 15],
        "answer": 2,
        "img": "src='aspotles.jpg'"
        },
    trivia3 = {
        "question": "What town was Jesus from when he began his ministry?",
        "answerChoices": ['Nazereth', 'Bethlehem', 'Jehrico', 'Jerusalem'],
        "answer": 0,
        "img": "src='towns.jpg'"
        },
    trivia4 = {
        "question": "What was the reason for Christ's suffering and dying on the cross?",
        "answerChoices": ['Healing people', 'Sin of man', 'Pay someone a ransom', 'The angry mob'],
        "answer": 1,
        "img": "src='towns.jpg'"
        },
    trivia5 = {
        "question": "Who parted the Red Sea?",
        "answerChoices": ["Aaron", "Jacob", "Moses", "Soloman"],
        "answer": 2,
        "img": "src='redSea.jpg'"
    },
    trivia6 = {
        "question": "How many books of the New Testement are there in the Bible?",
        "answerChoices": [14, 12, 27, 15],
        "answer": 2,
        "img": "src='aspotles.jpg'"
        },
    trivia7 = {
        "question": "What town was Jesus born in & where did he go shortly after birth?",
        "answerChoices": ['Bethlehem & Egypt', 'Nazereth & Chicago', 'Jehrico & Gomorrah', 'Jerusalem & Canaan'],
        "answer": 0,
        "img": "src='towns.jpg'"
        },
    trivia8 = {
        "question": "Once Jesus assended to heaven where did he sit in relation to God?",
        "answerChoices": ['In front of Him', 'At His right hand', 'In back of Him', 'At His left hand'],
        "answer": 1,
        "img": "src='towns.jpg'"
        },
    trivia9 = {
        "question": "Why did God destroy the Israelites in the wilderness?",
        "answerChoices": ['They became pagans', 'They refused to eat the food He provided', 'They didn\'t believe in Christ', 'At His left hand'],
        "answer": 1,
        "img": "src='towns.jpg'"
    } ,
    trivia10 = {
        "question": "To which tribe of Israel did Saul belong?",
        "answerChoices": ['Naphtali', 'Ephraim', 'Manasseh', 'Benjamin'],
        "answer": 3,
        "img": "src='towns.jpg'"
    }
];
    // var q = questionArray.length;
    // for(i = 0; i < q; i++) {
    //     randomQuestion();
    //     console.log(questionArray);
    //     var answer = questionArray[i].answer;
    //     console.log(questionArray[i].question);
    //     console.log(questionArray[i].answerChoices[answer]);
    //     console.log(questionArray);
    // }
        
function gameTimer() {
    if( time > 0 ) {
        displayTime();
        nextQuestion();
        console.log( time );
    } else if ( time == 0 ) {
        // endGame();
    }
}
    
function displayTime() {
    var timer = setInterval( theTimer, 1000 );
    
    function theTimer() {
        var s = time%60;
        var m = Math.floor( time/60 );

        if( m < 10 && s < 10 ) {
            $("#the-time").html('<p><strong>' + "The time remaining is: " + "0" + m + ":" + "0" + s + '</strong></p>');
        } else if( m < 10 ) {
            $("#the-time").html('<p><strong>' + "The time remaining is: " + "0" + m + ":" + s + '</strong></p>');
        }
        time--;
        clearTime();
    }
    
    function clearTime() {
        if (time < 0) {
        clearInterval(timer);
        }
    }
}


$(document).ready(function(){
    $("button").click(function() {
        randomQuestion();
        putQuestion();
    });
    $("p").click(function(){
        $(this).fadeOut();
        
    });
});

function putQuestion() {
    $("#question-goes-here").html(question);
    for( var i = 0; i < 4; i++ ) {
        // $("#answerChoices-go-here").html(questionArray[randomNumber].answerChoices[i]);
        $("#choice-"+i).html(possibleAnswers[i]);
        console.log('Possible Answers:',possibleAnswers[i]);
    }
}

    // if(time > 0 && 0 < questionArray.length + 1) {
        // setTimeout(randomQuestion, 0.5);
        // setInterval(randomQuestion, 5000);
        // nextTrivia();
        // console.log("Hello, Samuel");
    // } else {
        // endGame();
    // }
// });


// function nextTrivia() {          // Produces one question after the other without delay
//     var q = questionArray.length;
//     for(i = 0; i < q; i++) {
//         randomQuestion();
    // setTimeout(radioButtons, 500);
//     }
// }

function randomQuestion() {
    randomNumber = Math.floor(Math.random() * Math.floor(questionArray.length));
    possibleAnswers = questionArray[randomNumber].answerChoices;
    answerIndex = questionArray[randomNumber].answer;
    console.log('The Choice is:',answerIndex);
    theAnswer = questionArray[randomNumber].answerChoices[answerIndex];
    question = questionArray[randomNumber].question;
    console.log("Test:", question);
    console.log("The answer is:", theAnswer);
    questionArray.splice(randomNumber, 1);
    console.log("Questions remaining:",questionArray.length);
}
// gameTimer();