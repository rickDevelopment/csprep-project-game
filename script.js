
const submitButton = document.querySelector('.submit-button');
const answer = document.querySelector('#answer');


submitButton.onclick= handleSubmit;


function handleSubmit(){
 //convert user answer to  integer 
  userAnswer  = parseInt(answer.value)
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

let codeBlock = document.querySelector('.code-block');
 codeBlock.textContent = gameArray[0]["code-block"]

 




