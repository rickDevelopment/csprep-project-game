
const submitButton = document.querySelector('.submit-button');
const answer = document.querySelector('#answer');
const codeBlock = document.querySelector('.code-block');

submitButton.onclick= handleSubmit;

//Function will run when the submit button is clicked
function handleSubmit(){
 //convert user answer to  integer 
  userAnswer  = parseInt(answer.value)
  console.log(typeof userAnswer)
  solution = gameArray[0].solution 
  if(userAnswer === solution){
    alert('Correct')
  }else{
    alert('Incorrect')
  }
  alert(`The Correct Answer is: ${gameArray[0].solution} answer submitted is ${answer.value}` )
}

const gameArray = [

  {"code-block": `
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
    solution:3
  }
  ]


 codeBlock.textContent = gameArray[0]["code-block"]

 




