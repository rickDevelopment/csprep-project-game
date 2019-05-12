
const submitButton = document.querySelector('.submit-button');

console.log(submitButton)
submitButton.onclick= handleSubmit;

function handleSubmit(){
  alert(`The Correct Answer is: ${gameArray[0].solution}`)
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

 




