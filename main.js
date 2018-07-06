var flashCardArray = []
var addFlashCardToArray = function(fcArray, fc){
    fcArray.push(fc)
    console.log(`new flash card added: ${fc.question} - ${fc.answer}`)
}

// Create new flash card (newQuestion, newAnswer) - Also checks for the current length of the array to give a new id to the flash card
var createFlashCard = function(newQuestion, newAnswer, category){
    var newId = flashCardArray.length +1;
    return {
        id : newId,
        question: newQuestion,
        answer: newAnswer,
        category : category
    }
}
//Submit flash card function from user data.
function submitFlashCard() {
    var inputFieldQuestion = document.getElementById("newfcQuestion").value;
    var inputFieldAnswer = document.getElementById("newfcAnswer").value;


    var createNewFlashCard= createFlashCard(inputFieldQuestion, inputFieldAnswer);
    addFlashCardToArray(flashCardArray, createNewFlashCard);




    
  };

document.addEventListener('DOMContentLoaded', function() {
    console.log("I'm ready");
    
    
    // Object model of the flash card
    /* var flashCard = {
        id: "",
        question : "",
        answer : ""
    } */
    
    // Add flash card to array (array to be added to, flash card to be added to array)
  

// Finds the the flash card in the array when provided with the id and array

    var findFlashCardInArray = function(fcArray, id){
        
        var fcToBeReturned;
        
        fcArray.forEach(function(fc, index){
            if (fc.id == id){
                fcToBeReturned = fc;
            }
        });
        console.log(fcToBeReturned);
        return fcToBeReturned
    }

    
    //createFlashCard and addFlashCardToArray should be called as a pair each time to make sure the id's of new flash cards don't mix up.
    
    var fc1 = createFlashCard("What is Javascript", "It's a programming language", "javascript");
    addFlashCardToArray(flashCardArray, fc1);
    var fc2 = createFlashCard("What is HTML", "It's a markup language", "HTML");
    addFlashCardToArray(flashCardArray, fc2);
    
    var showFlashCardQuestion = function(targetElement, fc){
        targetElement.querySelector(".fcNumber").innerText = fc.id;
        targetElement.querySelector(".fcOnScreen").innerText = fc.question;
        console.log("showFlashCardQuestion fired");
    }
    var testElem = document.getElementById("flashCardGroup1");
    showFlashCardQuestion(testElem, fc2);

// This function is fired on click, it shows the answer or the question depending on the state of the flashcard
    var switchFlashCard = function(targetElement){
        var te = targetElement;
        if (targetElement.tagName.toLowerCase() === 'p'){
            te = targetElement.parentElement;
            console.log(te);
        }
        var id = te.querySelector(".fcNumber").innerHTML;
        var text = te.querySelector(".fcOnScreen").innerText;
        var fcToBeShown = findFlashCardInArray(flashCardArray, id);
        console.log(flashCardArray);
        
        if (text === fcToBeShown.question){
            te.querySelector(".fcOnScreen").innerText = fcToBeShown.answer
        }else if (text === fcToBeShown.answer){
            te.querySelector(".fcOnScreen").innerText = fcToBeShown.question
        }else{
            return
        }
    }

// This binds the onclick event of the div to the switchFlashCard Function    
    document.getElementById("flashCardGroup1").addEventListener("click", function(event){
        console.log(event);
        console.log(event.target);
        switchFlashCard(event.target);
    });
    



});



//Make an object for flash card
/* - Question
- Answer 
- id
*/