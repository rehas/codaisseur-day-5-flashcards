document.addEventListener('DOMContentLoaded', function() {
    console.log("I'm ready");
    
    var flashCardArray = []
    var flashCard = {
        id: "",
        question : "",
        answer : ""
    }

    var testFc = {
        id: 1,
        question : "question1",
        answer : "answer1"
    }

    var addFlashCardToArray = function(fcArray, fc){
        fcArray.push(fc)
        console.log(`new flash card added: ${fc.question} - ${fc.answer}`)
    }

    addFlashCardToArray(flashCardArray, testFc );
    console.log(flashCardArray);
});




 //Make an object for flash card
/* - Question
- Answer 
- id
 */