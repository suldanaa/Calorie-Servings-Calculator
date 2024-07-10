const servings = document.createElement("servings");
const calories = document.createElement("caloriesNum");

const option1 = document.getElementById("calorieForServing");
const option2 = document.getElementById("servingForCalories")

const finalOutput1 = document.getElementById("finalOutput1");
const finalOutput2 = document.getElementById("finalOutput2");
option1.addEventListener('click', ()=>{
        finalOutput1.style.display = "contents";
        finalOutput2.style.display = "none";
        
})

option2.addEventListener('click', ()=>{
    finalOutput1.style.display = "none";
    finalOutput2.style.display = "contents";
    console.log("Hi!");
})

