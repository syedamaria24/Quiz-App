var questions = [
    {
      question: "Q1: HTML Stands for?",
      option1: "Hyper Text Markup Language",
      option2: "Hyper Tech Markup Language",
      option3: "Hyper Touch Markup Language",
      corrAnswer: "Hyper Text Markup Language",
    },
    {
      question: "Q2: CSS Stands for",
      option1: "Cascoding Style Sheets",
      option2: "Cascading Style Sheets",
      option3: "Cascating Style Sheets",
      corrAnswer: "Cascading Style Sheets",
    },
    {
      question: "Q3: Which tag is used for most large heading",
      option1: "<h6>",
      option2: "<h2>",
      option3: "<h1>",
      corrAnswer: "<h1>",
    },
    {
      question: "Q4: Which tag is used to make element unique ",
      option1: "id",
      option2: "class  ",
      option3: "label",
      corrAnswer: "id",
    },
    {
      question: "Q5: Any element assigned with id, can be get in css ",
      option1: "by # tag",
      option2: "by @ tag",
      option3: "by & tag",
      corrAnswer: "by # tag",
    },
    {
      question: "Q6: CSS can be used with ______ methods ",
      option1: "8",
      option2: "3",
      option3: "4",
      corrAnswer: "3",
    },
    {
      question: "Q7: In JS variable types are ____________ ",
      option1: "6",
      option2: "3",
      option3: "8",
      corrAnswer: "8",
    },
    {
      question: "Q8: In array we can use key name and value ",
      option1: "True",
      option2: "False",
      option3: "None of above",
      corrAnswer: "False",
    },
    {
      question: "Q9: toFixed() is used to define length of decimal ",
      option1: "True",
      option2: "False",
      option3: "None of above",
      corrAnswer: "True",
    },
    {
      question: "Q10: push() method is used to add element in the start of array ",
      option1: "True",
      option2: "False",
      option3: "None of above",
      corrAnswer: "False",
    },
  
  ];
  
  var questionElement = document.getElementById('ques');
  var option1 = document.getElementById('opt1');
  var option2 = document.getElementById('opt2');
  var option3 = document.getElementById('opt3');
  var index = 0;
  var score = 0;
  var timer = document.getElementById('timer');
  var min, sec;
  var timerInterval;
  
  function startTimer() {
    min = 1;
    sec = 59;
    timer.innerText = `2:00`; // Reset display to initial value
  
    clearInterval(timerInterval); // Clear previous interval
    
    timerInterval = setInterval(function () {
      if (sec === 0 && min === 0) {
        clearInterval(timerInterval); // Stop timer at 0
        nextQuestion(); // Automatically move to the next question when time runs out
      } else {
        if (sec === 0) {
          min--;
          sec = 59;
        } else {
          sec--;
        }
        timer.innerText = `${min}:${sec < 10 ? '0' + sec : sec}`; // Display with leading zero for seconds
      }
    }, 1000);
  }
  
  function nextQuestion() {
    var options = document.getElementsByClassName('options');
    var button = document.getElementById('btn');
    
    // Check the answer for the current question
    if (index > 0) { // Skip checking for the first question
      for (var i = 0; i < options.length; i++) {
        if (options[i].checked) {
          var userSelectedInput = options[i].value;
          var selectedOption = questions[index - 1][`option${userSelectedInput}`];
          var correctAnswer = questions[index - 1]['corrAnswer'];
          
          if (selectedOption === correctAnswer) {
            score++;
          }
          options[i].checked = false; // Uncheck the option for next question
        }
      }
    }
  
    // Enable/disable the button and check if the quiz is over
    button.disabled = true;
    if (index >= questions.length) {
      clearInterval(timerInterval); // Stop timer when quiz ends
      Swal.fire({
        title: "Good job!",
        text: `Your Final Score is ${(score / questions.length) * 100}`,
        icon: "success"
      });
    } else {
      // Load the next question
      questionElement.innerText = questions[index].question;
      option1.innerText = questions[index].option1;
      option2.innerText = questions[index].option2;
      option3.innerText = questions[index].option3;
      index++;
      startTimer(); // Reset timer for the new question
    }
  }
  
  function clicked() {
    var button = document.getElementById('btn');
    button.disabled = false;
  }
  
  // Initialize the first question and start the timer when the page loads
  window.onload = () => {
    nextQuestion();
  };
  