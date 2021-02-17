$(document).ready(function(){
    let shuffledQuestions, currentQuestionIndex

    let score = 0;
    $(".main-container").hide();
    $("#show-score").hide();
    $("#image").hide();
    $("#submit").hide();


    $("#startBtn").click(startQuiz);
    
    function startQuiz () {
        resetState()
        score = 0;
        $("#beginGame").hide();
        $(".main-container").show();

        // shuffle the array

        shuffledQuestions = questions.sort(() => Math.random() - 0.5);
        currentQuestionIndex = 0;
        nextQuestion()
    }
    
    function nextQuestion () {
        resetState()
        showQuestion(shuffledQuestions[currentQuestionIndex])
    }

    function showQuestion(question) {
        resetState()
        $("#question").text(question.question)
        
        question.answers.forEach((answer, i) => {
            const input = document.createElement('input')
            const label = document.createElement('label')
            let x;

            input.setAttribute("type", "radio")
            input.id = i
            input.name = "chosenAnswer"
            $("label").addClass("label")
            label.setAttribute("for", i);            
            label.innerText = answer.text;


            // console.log(input);
            // console.log(label);

            $("#answer").append(input)
            $("#answer").append(label)

            if (answer.correct) {
                input.value = "correct"
            } else {
                input.value = "wrong"
            }
        })        
    }

    $("#prev-btn").on('click', function() {
        currentQuestionIndex -= 1;
        console.log(currentQuestionIndex);

        if (currentQuestionIndex > 0 ) {
            nextQuestion();
        } else {
            resetState()
            $("#beginGame").show();
            $(".main-container").hide();
        }
    });

    $("#next-btn").on('click', function() {
        let radioValue = $('input[name="chosenAnswer"]:checked').val();

        if (radioValue == "correct") {
            score += 10;
        } 
        currentQuestionIndex += 1;
        console.log(currentQuestionIndex);
        
        if (shuffledQuestions.length > currentQuestionIndex ) {
            nextQuestion();
        } else {
            $("#next-btn").hide()
            $("#prev-btn").hide()
            $("#submit").show()
        }

        $("#submit").click(function(){
            if (score >= 70) {
                $("body").addClass("correct")
            } else {
                $("body").addClass("wrong")
            }

            $("#beginGame").show();
            $(".main-container").hide();
            $("#startBtn").hide();
            $("#score").text(score);
            $("#show-score").show();

            if (score >= 70) {
                $("#image").show();
                $("#image").animate({
                    left:"+=100"
                }, 20  );
            }
            
        })        
    })

    function resetState() {
        $("#answer").empty();
        $("body").removeClass("correct")
        $("body").removeClass("wrong")
    }
})

const questions = [
    {  
    question: "What is the correct term for a question mark immediately followed by an exclamation mark?",
    answers: [
        { text: "puzzled-interogation", correct: false},
        { text: "Interogative question", correct: false},
        { text: "Interrobang", correct: true }
    ]        
    },
    {  
        question: "What is What does GIF stand for?",
        answers: [
            { text: "Graphics Image Format", correct: false },
            { text: "Graphics Interchange Format", correct: true },
            { text: "Graphic Imagechange Format", correct: false }
        ]        
    },       

    {  
        question: "What colour is the blood of a lobster?",
        answers: [
            { text: "Blue", correct: true },
            { text: "Red", correct: false },
            { text: "Off-white", correct: false }
        ]        
    },
    {  
        question: "What is the only domesticated animal not mentioned in the Bible?",
        answers: [
            { text: "Dogs", correct: false },
            { text: "Cats", correct: true },
            { text: "Cattle", correct: false }
        ]        
        
    },
    {  
        question: "Which country owns every panda in the world?",
        answers: [
            { text: "Japan", correct: false },
            { text: "Malaysia", correct: false },
            { text: "China", correct: true }
        ]        
    },
    {  
        question: "How can you make rubber bands last longer?",
        answers: [
            { text: "Soak overnight in oil", correct: false },
            { text: "Refridgerate them", correct: true },
            { text: "Rub with powder", correct: false }
        ]        
    },
    {  
        question: "Who directed Pulp Fiction?",
        answers: [
            { text: "Quentin Tarantino", correct: true },
            { text: "Alfred Hitchcock", correct: false },
            { text: "Steven Spielberg", correct: false }
        ]        
    },
    {  
        question: "What is Scooby-Doo's full name?",
        answers: [
            { text: "Scoobert Doo", correct: true},
            { text: "Scooby-Dooby-Doo", correct: false},
            { text: "Scooby-Doo", correct: false }
        ]        
    },
    {  
        question: "Which sea creature has three hearts?",
        answers: [
            { text: "Pelican Eel", correct: false },
            { text: "Octopus", correct: true },
            { text: "Squid", correct: false }
        ]        
    },
    {  
        question: "How many pedals do most modern pianos have?",
        answers: [
            { text: "Three", correct: true },
            { text: "Four", correct: false },
            { text: "Two", correct: false }
        ]        
    }
];