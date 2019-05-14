/* *************************Question Bank******************/
gameArray = [
  {
  "question": "myFun2()",
  "code-block": `var myFun2 = function() { 
var num = -1
function incrementUntil(max) { 
   if(num >= max) return num 
   num++
   incrementUntil(max)
 }
 incrementUntil(3)
 return num 
}    `,
  "answer": "3"
  },
  {
  "question": "func(2, 9)",
  "code-block": `var func = function(x, y) {
  if (y - x === 2){
      return [x + 1];
  } else {
    var list = range (x, y - 1);
          list.push (y - 1);
          return list;
  }
};`,
  "answer": "[3,4,5,6,7,8]"
  },
  {
  "question": "func('', '')",
  "code-block": `var func = function (str1, str2) {
  if(str1.length === 0 && str2.length === 0) {
      return true;
  } else if (str1[0] === str2[0]) {
      return func(str1.slice(1), str2.slice(1))
  };
  return false;
};`,
  "answer": "true"
  },
  {
  "question": "func([1, 2, 3, 4], (a, b) => a + b, 0)",
  "code-block": `function func(array, combine, start) {
let current = start;
for (let element of array) {
  current = combine(current, element);
}
return current;
};`,
  "answer": "10"
  },
  {
  "question": "func(46, [25, 10, 5, 2,1])",
  "code-block": `function func(amount1, amount2) 
{
if (amount === 0) 
{
   return [];
 } 
else
 {
   if (amount >= amount2[0]) 
     {
      left = (amount - amount2[0]);
      return [amount2[0]].concat(func (left, amount2) );
      } 
    else
      {
       amount2.shift();
       return func (amount, amount2);
      }
  }
} `,
  "answer": "[25,10,10,1]"
  },
  {
  "question": "func('zebra', 'b')",
  "code-block": `function func(str, letter) 
{
var letter_Count = 0;
for (var position = 0; position < str.length; position++) 
{
  if (str.charAt(position) == letter) 
    {
    letter_Count += 1;
    }
}
return letter_Count;
}`,
  "answer": "1"
  },
  {
  "question": "func('abacddbec')",
  "code-block": `function func(str) {
var arra1 = str.split('');
var result = '';
var ctr = 0;

for (var x = 0; x < arra1.length; x++) {
  ctr = 0;

  for (var y = 0; y < arra1.length; y++) 
  {
    if (arra1[x] === arra1[y]) {
      ctr+= 1;
    }
  }

  if (ctr < 2) {
    result = arra1[x];
    break;
  }
}
return result;
}`,
  "answer": "e"
  },
  {
  "question": "func (0, 5)",
  "code-block": `var func = function(value, length) {
let array = [];
if(length === 0) {
    return array;
}
array.push(value);
return array.concat(func(value, length -1));
};`,
  "answer": "[0,0,0,0,0]"
  },
  {
  "question": "func([2,7,4,4,1,4], 4)",
  "code-block": `var func = function(array, value) {
  if(array.length === 0) { 
      return 0;
 }
  return (array[0] === value) + func (array.slice(1), value);
};`,
  "answer": "3"
  },
  {
  "question": "func([2,0,0,0,1,4])",
  "code-block": `var func = function(array) {
  if (array.length === 0) { return array };
  if(func(array.slice(1))[0] === 0 && array[0] === 0) {
      return func(array.slice(1));
  } else {
      return [array[0]].concat(minimizeZeroes(array.slice(1)));
  }
};`,
  "answer": "[2,0,1,4]"
  },
]
/**************************************************************** */
const submitButton = document.querySelector('.submit-button');
const answer = document.querySelector('#answer');
const codeArea = document.querySelector('.code-area');
const question = document.querySelector('.question')
let questionIndex = 0
let lastQuestionIndex = gameArray.length - 1
let score = document.querySelector('.score')



function calculateScore(){

}
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
  answer.value =""
  answer.focus();
  
}
function loadQuestions(){

    question.textContent = gameArray[questionIndex]["question"]
    codeArea.textContent = gameArray[questionIndex]["code-block"]
}



function checkAnswer(){
  let count = 0
  score.textContent = count
 let userAnswer  = answer.value
  console.log(typeof userAnswer)
 let quizAnswer = gameArray[questionIndex].answer 

  if(userAnswer == quizAnswer){
    alert('Correct')
    count++
    score.textContent = count
  }else{
    alert('Incorrect')
  }
  alert(`The Correct Answer is: ${gameArray[questionIndex].answer} answer submitted is ${userAnswer}` ) 
}



