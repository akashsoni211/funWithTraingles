var angleone = document.querySelector("#angleOne");
var angleTwo = document.querySelector("#angleTwo");
var angleThree = document.querySelector("#angleThree");
var outputMessage = document.querySelector("#messageOut")
var btnChecktriangle = document.querySelector("#submit");



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

btnChecktriangle.addEventListener("click", btnCheckTriangleHandler);