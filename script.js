let decisionFlag = 1;
const servings = document.getElementById("servings");
const calories = document.getElementById("caloriesNum");

const button1 = document.getElementById("calorieForServing");
const button2 = document.getElementById("servingForCalories")

const desiredServing = document.getElementById("desiredServing");
const desiredCalories = document.getElementById("desiredCalories");

const submit = document.getElementById("submit");

const outputMessage = document.getElementById("outputMessage");
const outputNumber = document.getElementById("outputNumber");
const outputLetters = document.getElementById("outputLetters");



button1.addEventListener('click', ()=>{
        finalOutput1.style.display = "contents";
        outputMessage.style.display = "none";
        finalOutput2.style.display = "none";
        decisionFlag = 1;
})

button2.addEventListener('click', ()=>{
    finalOutput1.style.display = "none";
    finalOutput2.style.display = "contents";
    outputMessage.style.display = "none";
    decisionFlag = 2;
})

submit.addEventListener('click',()=>{
    colorAuthentication();

    if(decisionFlag==1){
        outputMessage.style.display = "contents";
        outputLetters.textContent = "It will be...";
        outputNumber.textContent = Math.trunc((desiredServing.value/servings.value)*calories.value) + " calories";
    }
    else if(decisionFlag==2){
        outputMessage.style.display = "contents";
        outputLetters.textContent = "You need...";
        outputNumber.textContent = Math.trunc((desiredCalories.value/calories.value)*servings.value) + "g";
    }

});

function colorAuthentication(){
    if(decisionFlag==1){
        if(desiredServing.value == ""){
            desiredServing.style.border = "2px solid tomato";
        }
        else{
            desiredServing.style.border = "1px solid black";
        }
    } else if(decisionFlag==2){
        if(desiredCalories.value == ""){
            desiredCalories.style.border = "2px solid tomato";
        }
        else{
            desiredCalories.style.border = "1px solid black";
        }
    }

    if(servings.value == ""){
        servings.style.border = "2px solid tomato";
    }
    else{
        servings.style.border = "1px solid black";
    }

    if(calories.value == ""){
        calories.style.border = "2px solid tomato";
    }
    else{
        calories.style.border = "1px solid black";
    }
}