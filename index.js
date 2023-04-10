let firstInput = document.getElementById("bill_input");
let five = document.getElementById("five");
let fifteen = document.getElementById("fifteen");
let fiftee = document.getElementById("fiftee");
let ten = document.getElementById("ten");
let twentyfive = document.getElementById("twentyfive");
let custom = document.getElementById("custom");
let people_input = document.getElementById("people_input");
let output1 = document.getElementById("output1"); //value
let output2 = document.getElementById("output2");
let reset = document.getElementById("reset");
let cant = document.getElementById("cant");

let isButtonClicked = false;

five.addEventListener("click", () =>{
    if(firstInput.value !== 0 && people_input.value !== 0){
        let tip = (firstInput.value * 0.05);
        output1.textContent = (tip / people_input.value).toFixed(2); 
        let variable = firstInput.value +++ tip
        output2.textContent =  (variable / people_input.value).toFixed(2);
        five.style.backgroundColor = "#26C2AE";
        fifteen.style.backgroundColor = "#00474B";
        fiftee.style.backgroundColor = "#00474B";
        twentyfive.style.backgroundColor = "#00474B";
        ten.style.backgroundColor = "#00474B";
        custom.style.borderColor = "#547878"; 
        reset.style.backgroundColor = "#26C2AE";  
    };
    if(firstInput.value !== 0 && people_input.value == 0){
        cant.style.display = "flex"
        output1.textContent = " $00.00";
        output2.textContent = "$00.00";
        people_input.style.borderColor = "red";
    }else {
        cant.style.display = "none";
        people_input.style.borderColor = "#d9d9d9";
    } 
    isButtonClicked = true;
})

fifteen.addEventListener("click", () =>{
    if(firstInput.value !== 0 && people_input.value !== 0){
       let tip = (firstInput.value * 0.15);
       output1.textContent = (tip / people_input.value).toFixed(2); 
       let variable = firstInput.value +++ tip
       output2.textContent = (variable / people_input.value).toFixed(2); 
       fifteen.style.backgroundColor = "#26C2AE";
       five.style.backgroundColor = "#00474B";
       fiftee.style.backgroundColor = "#00474B";
       twentyfive.style.backgroundColor = "#00474B";
       ten.style.backgroundColor = "#00474B";
       custom.style.borderColor = "#547878";
       reset.style.backgroundColor = "#26C2AE";
    } 
    if(firstInput.value !== 0 && people_input.value == 0){
        cant.style.display = "flex";
        output1.textContent = " $00.00";
        output2.textContent = "$00.00";
        people_input.style.borderColor = "red";
    } else {
        cant.style.display = "none";
        people_input.style.borderColor = "#d9d9d9";
    }  
    isButtonClicked = true; 
})

fiftee.addEventListener("click", () =>{
    if(firstInput.value !== 0 && people_input.value !== 0){
        let tip = (firstInput.value * 0.5);
        output1.textContent = (tip / people_input.value).toFixed(2); 
        let variable = firstInput.value +++ tip
        output2.textContent = (variable / people_input.value).toFixed(2);
        fiftee.style.backgroundColor = "#26C2AE";
        fifteen.style.backgroundColor = "#00474B";
        five.style.backgroundColor = "#00474B";
        twentyfive.style.backgroundColor = "#00474B";
        ten.style.backgroundColor = "#00474B";
        custom.style.borderColor = "#547878"; 
        reset.style.backgroundColor = "#26C2AE"; 
     }  
     if(firstInput.value !== 0 && people_input.value == 0){
        cant.style.display = "flex";
        output1.textContent = " $00.00";
        output2.textContent = "$00.00";
        people_input.style.borderColor = "red";
    }else {
        cant.style.display = "none";
        people_input.style.borderColor = "#d9d9d9";
    } 
    isButtonClicked = true;
})

ten.addEventListener("click", () =>{
    if(firstInput.value !== 0 && people_input.value !== 0){
        let tip = (firstInput.value * 0.1);
        output1.textContent = (tip / people_input.value).toFixed(2); 
        let variable = firstInput.value +++ tip
        output2.textContent = (variable / people_input.value).toFixed(2);  
        ten.style.backgroundColor = "#26C2AE"; 
        fiftee.style.backgroundColor = "#00474B";
        fifteen.style.backgroundColor = "#00474B";
        five.style.backgroundColor = "#00474B";
        twentyfive.style.backgroundColor = "#00474B";
        custom.style.borderColor = "#547878";
        reset.style.backgroundColor = "#26C2AE";
     } 
     if(firstInput.value !== 0 && people_input.value == 0){
        cant.style.display = "flex";
        output1.textContent = " $00.00";
        output2.textContent = "$00.00";
        people_input.style.borderColor = "red";
    }else {
        cant.style.display = "none";
        people_input.style.borderColor = "#d9d9d9";
    } 
    isButtonClicked = true;
})

twentyfive.addEventListener("click", () =>{
    if(firstInput.value !== 0 && people_input.value !== 0){
        let tip = (firstInput.value * 0.25);
        output1.textContent = (tip / people_input.value).toFixed(2); 
        let variable = firstInput.value +++ tip
        output2.textContent = (variable / people_input.value).toFixed(2); 
        twentyfive.style.backgroundColor = "#26C2AE"; 
        ten.style.backgroundColor = "#00474B"; 
        fiftee.style.backgroundColor = "#00474B";
        fifteen.style.backgroundColor = "#00474B";
        five.style.backgroundColor = "#00474B";
        custom.style.borderColor = "#547878";
        reset.style.backgroundColor = "#26C2AE";
     } 
    if(firstInput.value !== 0 && people_input.value == 0){
        cant.style.display = "flex";
        output1.textContent = " $00.00";
        output2.textContent = "$00.00";
        people_input.style.borderColor = "red";
    } else {
       cant.style.display = "none";
       people_input.style.borderColor = "#d9d9d9";
    } 
    isButtonClicked = true;  
})

custom.addEventListener("input", () =>{
    if(firstInput.value !== 0 && people_input.value !== 0 ){
        let tip = ((custom.value / 100)*firstInput.value);
        output1.textContent = (tip/people_input.value).toFixed(2); 
        let variable = firstInput.value +++ tip;
        output2.textContent = (variable / people_input.value).toFixed(2);  
        custom.style.borderColor = "#9FE8DF";
        twentyfive.style.backgroundColor = "#00474B"; 
        ten.style.backgroundColor = "#00474B"; 
        fiftee.style.backgroundColor = "#00474B";
        fifteen.style.backgroundColor = "#00474B";
        five.style.backgroundColor = "#00474B";
        reset.style.backgroundColor = "#26C2AE";

        if(isButtonClicked) {
            custom.value = "";
        }
     } 
    if(firstInput.value !== 0 && people_input.value == 0){
        cant.style.display = "flex";
        people_input.style.borderColor = "red";
        output1.textContent = " $00.00";
        output2.textContent = "$00.00";
    }else {
        cant.style.display = "none";
        people_input.style.borderColor = "#d9d9d9";
    }  
})
reset.addEventListener("click", ()=>{
    location.reload();

})