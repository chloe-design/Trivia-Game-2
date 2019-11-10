var card = $("#quiz-area");


var questions = [
  {
    question: "What was the name of Hans Solo Ship",
    answers: ["Yoda", "The Force Within", "Milliennium", "ATGT"],
    correctAnswer: "The Force Within"
  },
  {
    question: "What medicine man presided over the attempt to make a roast of Han Solo in Star Wars?",
    answers: ["Logray", "Starth", "AT-AT", "Yoda"],
    correctAnswer: "Logray"
  },
  {
    question: "What is the name of famous weapon used by Jedi's in Star Wars?",
    answers: ["Akoba", "Light Saber", "Baruda", "The Force Within"],
    correctAnswer: "Light Saber"
  },
  {
    question: "Which young Jedi Knight becomes Darth Vader in Star Wars?",
    answers: ["Anakin Skywalker", "Darth Yoda", "Boba Fett", "Buzz Lightyear"],
    correctAnswer: "Anakin Skywalker"
  },
  
];

var timer;

var game = {
  correct: 0,
  incorrect: 0,
  counter: 120,

  countdown: function() {
    game.counter--;
    $("#counter-number").html(game.counter);
    if (game.counter === 0) {
      console.log("TIME UP");
      game.done();
    }
  },

  start: function() {
    timer = setInterval(game.countdown, 1000);

    $("#sub-wrapper").prepend(
      "<h2>Time Remaining: <span id='counter-number'>60</span> Seconds</h2>"
    );

    $("#start").remove();

    for (var i = 0; i < questions.length; i++) {
      card.append("<h2>" + questions[i].question + "</h2>");
      for (var j = 0; j < questions[i].answers.length; j++) {
        card.append("<input type='radio' name='question-" + i +
          "' value='" + questions[i].answers[j] + "''>" + questions[i].answers[j]);
      }
    }

    card.append("<button id='done'>Done</button>");
  },

  done: function() {
    var inputs = card.children("input:checked");
    for (var i = 0; i < inputs.length; i++) {
      if ($(inputs[i]).val() === questions[i].correctAnswer) {
        game.correct++;
      } else {
        game.incorrect++;
      }
    }
    this.result();
  },

  result: function() {
    clearInterval(timer);

    $("#sub-wrapper h2").remove();

    card.html("<h2>All Done!</h2>");
    card.append("<h3>Correct Answers: " + this.correct + "</h3>");
    card.append("<h3>Incorrect Answers: " + this.incorrect + "</h3>");
  }
};


$(document).on("click", "#start", function() {
  game.start();
});

$(document).on("click", "#done", function() {
  game.done();
});
