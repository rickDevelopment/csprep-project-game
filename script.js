/* *************************Question Bank******************/
const gameArray = [

  {'question': 'What does the  following code evaluates to',
    "code-block": `
    var myFun2 = function() { 
      var num = -1
      function incrementUntil(max) { 
         if(num >= max) return num 
         num++
         incrementUntil(max)
       }
       incrementUntil(3)
       return num 
    }    
    myFun2() }
    `,
    answer:'3'
  },
  {"question": `func ([1, 2, 3, 4], (a, b) => a + b, 0)`,
"code-block": `function func(array, combine, start) {
  let current = start;
  for (let element of array) {
    current = combine(current, element);
  }
  return current;
};`,
"answer": 10
},

  {'question': `this is some code 2`,
  "code-block": "A block of code should go",
    answer: '10'
},

  {'question': `this is some code 3`,
  "code-block": "A block of code should go",
    answer: '25'
},

  {'question': `this is some code 4`,
  "code-block": "A block of code should go",
    answer: 'true'
}

  ]
/**************************************************************** */
const submitButton = document.querySelector('.submit-button');
const answer = document.querySelector('#answer');
const codeArea = document.querySelector('.code-area');
const question = document.querySelector('.question')
let questionIndex = 0
let lastQuestionIndex = gameArray.length - 1



loadQuestions()
submitButton.onclick= handleSubmitAnswer;
 

//Function will run when the submit button is clicked
 
function handleSubmitAnswer(){
 //convert user answer to  integer 
  
 checkAnswer()

  if(questionIndex <= lastQuestionIndex){
    questionIndex++;
    clearAnswerField();
    loadQuestions();
    
  }
}

function clearAnswerField(){
  console.log(answer)
  answer.value =""
  answer.focus();
  
}
function loadQuestions(){

    question.textContent = gameArray[questionIndex]["question"]
    codeArea.textContent = gameArray[questionIndex]["code-block"]
}



function checkAnswer(){
 let userAnswer  = answer.value
  console.log(typeof userAnswer)
 let quizAnswer = gameArray[questionIndex].answer 

  if(userAnswer === quizAnswer){
    alert('Correct')
  }else{
    alert('Incorrect')
  }
  alert(`The Correct Answer is: ${gameArray[questionIndex].answer} answer submitted is ${userAnswer}` ) 
}



