document.addEventListener('DOMContentLoaded', function() {
    console.log("I'm ready");
    
    var flashCardArray = []
    
    // Object model of the flash card
    /* var flashCard = {
        id: "",
        question : "",
        answer : ""
    } */
    
    // Add flash card to array (array to be added to, flash card to be added to array)
    var addFlashCardToArray = function(fcArray, fc){
        fcArray.push(fc)
        console.log(`new flash card added: ${fc.question} - ${fc.answer}`)
    }
    
    // Create new flash card (newQuestion, newAnswer) - Also checks for the current length of the array to give a new id to the flash card
    var createFlashCard = function(newQuestion, newAnswer){
        var newId = flashCardArray.length;
        return {
            id : newId,
            question: newQuestion,
            answer: newAnswer
        }
    }
    
    //createFlashCard and addFlashCardToArray should be called as a pair each time to make sure the id's of new flash cards don't mix up.
    
    var fc1 = createFlashCard("What is Javascript", "It's a programming language");
    addFlashCardToArray(flashCardArray, fc1);
    var fc2 = createFlashCard("What is HTML", "It's a markup language");
    addFlashCardToArray(flashCardArray, fc2);
    
    console.log(flashCardArray);

    console.log(document.getElementById("flashCardGroup1"));
    
    var showFlashCard = function(targetElement, fc){
        targetElement.querySelector(".fcNumber").innerText = fc.id
    }
    
    var switchFlashCard = function(targetElement){


    }

});




//Make an object for flash card
/* - Question
- Answer 
- id
*/