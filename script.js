
const submitButton = document.querySelector('.submit-button');
const answer = document.querySelector('#answer');
const questionArea = document.querySelector('.question-area');

//Function will run when the submit button is clicked
function handleSubmitAnswer(){
 //convert user answer to  integer 
  
 checkAnswer()
}

function loadQuestions(array){

  for(let i = 0; i < array.length; i++){
    questionArea.textContent = array[i]["question"]
  }

}

function displayQuestion(questions){
  question.textContent = questions
}

function checkAnswer(){
 let userAnswer  = parseInt(answer.value)
  console.log(typeof userAnswer)
 let quizAnswer = gameArray[0].answer 

  if(userAnswer === quizAnswer){
    alert('Correct')
  }else{
    alert('Incorrect')
  }
  alert(`The Correct Answer is: ${gameArray[0].answer} answer submitted is ${answer.value}` ) 
}

/*Array of object for questions */
const gameArray = [

  {"question": `
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
    answer:3
  },
  {'question': `this is some code 1`,
    answer: false
},

  {'question': `this is some code 2`,
    answer: 10
},

  {'question': `this is some code 3`,
    answer: 25
},

  {'question': `this is some code 4`,
    answer: true
}


  ]

loadQuestions(gameArray)
submitButton.onclick= handleSubmitAnswer;
 

 




