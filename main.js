//index app var
var angleone = document.querySelector("#angleOne");
var angleTwo = document.querySelector("#angleTwo");
var angleThree = document.querySelector("#angleThree");
var outputMessage = document.querySelector("#messageOut");
var btnChecktriangle = document.querySelector("#submit");
//index app var ends

//quiz app var
var quizOutMessage = document.querySelector("#result");
var array = new Array(10);
var btncheckquiz = document.querySelector("#submitquiz"); 
var rightAnswer = ["90","right angled","one right angle","12, 16, 20","Equilateral triangle","100","30","a+b+c","no", "45"];
//quiz app var ends here

//hypo starts

var hypoOutMessage = document.querySelector("#messageOutHypo");
var base = document.querySelector("#base");
var height = document.querySelector("#height");
var btnHypotenuseCheck = document.querySelector("#hyposubmit");

//hypo ends


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


if(btncheckquiz !== null){
    btncheckquiz.addEventListener("click", checkQuizAnswer);
}
//quiz App functions end


//Hypotenuse App starts

function checkHypoAnswer(){
    var hypo;
    if(+base.value !== "" && +height.value !== ""){
        hypo = +base.value * +base.value + +height.value * +height.value
        hypo = Math.sqrt(hypo)
    }
    else{
        hypo = "Values are required";
    }
    hypoOutMessage.innerHTML = parseFloat(hypo).toFixed(2);   
}

if(btnHypotenuseCheck !== null){
    btnHypotenuseCheck.addEventListener("click", checkHypoAnswer);
}
//Hypotenuse App end

// area app start

var messageOutarea = document.querySelector("#messageOutarea");
var sideOne = document.querySelector("#sideOne");
var sideTwo = document.querySelector("#sideTwo");
var sideThree = document.querySelector("#sideThree");
var areasubmit = document.querySelector("#areasubmit");

function checkAreaHandler(){
    var s = (+sideOne.value + +sideTwo.value + +sideThree.value)/2;
    var area = s*(s - +sideOne.value)*(s - +sideTwo.value)*(s - +sideThree.value); 
    area = Math.sqrt(area);
    messageOutarea.innerHTML = parseFloat(area).toFixed(2);
}

if(areasubmit !== null){
    areasubmit.addEventListener("click", checkAreaHandler)
}


//area app end 