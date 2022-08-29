//index app var
var angleone = document.querySelector("#angleOne");
var angleTwo = document.querySelector("#angleTwo");
var angleThree = document.querySelector("#angleThree");
var outputMessage = document.querySelector("#messageOut")
var btnChecktriangle = document.querySelector("#submit");
//index app var ends

//quiz app var
var quizOutMessage = document.querySelector("#result");
var array = new Array(10);
var btncheckquiz = document.querySelector("#submitquiz"); 
var rightAnswer = ["90","right angled","one right angle","12, 16, 20","Equilateral triangle","100","30","a+b+c","no", "45"];
//quiz app var ends here

//index app function
function isItTriangle(){
    var sum = +angleone.value + +angleTwo.value + +angleThree.value;
    if(sum===180){
        return true;
    }
    else{
        return false;
    }
}

function btnCheckTriangleHandler(){
    outputMessage.style.display="none";
    if(angleone.value !== "" && angleTwo.value !== "" && angleThree.value !== ""){
        var result = isItTriangle();
        if(result === true){
            outputMessage.style.display="inline";
            outputMessage.innerHTML = "Yes,It is a triangle"
        }
        else{
            outputMessage.style.display="inline";
            outputMessage.innerHTML = "No, It is not a triangle"
        }
    }
    else{
        outputMessage.style.display="inline";
        outputMessage.innerHTML = "All three Values Are Required"
    }
}
console.log(btnChecktriangle);
if(btnChecktriangle !== null){
    btnChecktriangle.addEventListener("click", btnCheckTriangleHandler);
}

//index app functions ends here

//quiz App functions

function checkAnswer(){
    var score = 0;
    for (let index = 0; index < array.length; index++) {
        if(array[index] === rightAnswer[index]){
            score = score + 1;
        }
    }
    return score;
}

function checkQuizAnswer(){
    quizOutMessage.style.display = "none";
    window.scrollTo(0,0);
    for (let index = 0; index < array.length; index++){
        var temp = index + 1; 
        var query = 'input[name="question'+ temp +'"'+']:checked';
        question = document.querySelector(query)
        if(question !== null){
            array[index] = question.value; 
        }
    }
    var score = checkAnswer(); 
    quizOutMessage.style.display = "inline";
    quizOutMessage.style.backgroundColor = "white";
    quizOutMessage.style.color = "black";
    quizOutMessage.innerHTML = score;
}

console.log(btncheckquiz);
if(btncheckquiz !== null){
    btncheckquiz.addEventListener("click", checkQuizAnswer);
}


//quiz App functions end