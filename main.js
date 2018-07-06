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
        answer : "",
        category: ""
    } */
    
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
        // debugger;
        targetElement.querySelector(".fcNumber").innerText = fc.id;
        targetElement.querySelector(".fcOnScreen").innerText = fc.question;
        console.log("showFlashCardQuestion fired");
        // debugger;
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

    var getDifferentRandomFlashCard = function(fcArray, idToOmit){
        var randomIndex = Math.floor(Math.random()*fcArray.length);
        console.log("Random Index is " + randomIndex );
        if (fcArray[randomIndex].id !== idToOmit){
        console.log("We're getting a random flash card now");

            console.log(fcArray[randomIndex]);
            return fcArray[randomIndex]
        }else{
            console.log("We're getting a different one now.");
            return getDifferentRandomFlashCard(fcArray, idToOmit);
        }
    }

    //getDifferentRandomFlashCard(flashCardArray, 1);

    var showNextFlashCard = function(targetElement){
        var te = targetElement;
        if (targetElement.tagName.toLowerCase() === 'p'){
            te = targetElement.parentElement;
            //console.log(te);
        }
        var id = parseInt( te.querySelector(".fcNumber").innerHTML);
        console.log("Current Card ID is : " + id);
        var fcToBeShown = getDifferentRandomFlashCard(flashCardArray, id);
        console.log(fcToBeShown);
        showFlashCardQuestion(te, fcToBeShown);
        //console.log(flashCardArray);
    }

// This binds the onclick event of the div to the switchFlashCard Function    
    document.getElementById("flashCardGroup1").addEventListener("click", function(event){
        console.log(event);
        console.log(event.target);
        switchFlashCard(event.target);
    });
    document.querySelector("body").addEventListener("keydown", function(event){
        // console.log(event);
        // console.log(event.target);
        var keyArr = ["ArrowLeft", "ArrowRight", "ArrowDown", "ArrowUp"]
        if(keyArr.includes( event.key) ){
            //console.log("N pressed");
            var te = document.getElementById("flashCardGroup1");
            showNextFlashCard(te);
        }
    });

    



});



//Make an object for flash card
/* - Question
- Answer 
- id
*/