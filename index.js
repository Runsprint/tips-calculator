'use strict' //its for errors
 let firstInput = document.getElementById("bill_input");
 let people_input = document.getElementById("people_input");
 let output1 = document.getElementById("output1");
 let output2 = document.getElementById("output2");
 let reset = document.getElementById("reset");
 let cant = document.getElementById("cant");
 let buttons = document.querySelectorAll(".percent");
 let custom = document.getElementById("custom")
 let active = null;
//I usec forech for arrays and parseFloat for take number drom string(there is second variant too) and toFixed, cuz I wanted fix numbers fetr whole numbers.
//I used min and max in html and oninput="validity.valid||(value='');" cus I wanted write just positive numbers
// I used element active process where active is null from the beginning and after one click it not null and have some meaning and 
//the first if is when oldeady have clicked and clicked second time another or same button. and second if is for the first click where active take meaning.
// after, in second if I wrote what I wanted to happaned after first click.after irst click active which was null = element.and after every manipulation happan on element and not on active
buttons.forEach(element => {
    element.addEventListener('click', ()=>{
        if(firstInput.value !== 0 && people_input.value !== 0 ){
            let tip =(parseFloat(element.textContent)/100) * firstInput.value ;
            output1.textContent = (tip/people_input.value).toFixed(2); 
            let variable = Number(firstInput.value)+tip;
            output2.textContent = (variable / people_input.value).toFixed(2);
        }
        if(element === active){
            element.style.backgroundColor = "#00474B"; 
            active = null;
          }else {
           element.style.backgroundColor = "#26C2AE";
    
           if(active){
           active.style.backgroundColor = "#00474B"; 
          }
          active = element;
          }
          
        changes();
        reset.style.backgroundColor = "#26C2AE";    
    }) 
});
function changes() {
    if(firstInput.value !== 0 && people_input.value == 0){
        cant.style.display = "flex"
        output1.textContent = " $00.00";
        output2.textContent = "$00.00";
        firstInput.style.borderColor = "#d9d9d9";
    }else {
        cant.style.display = "none";
        people_input.style.borderColor = "#d9d9d9";
        firstInput.style.borderColor = "#d9d9d9";
    }
    if(firstInput.value == 0 && people_input.value !== 0){
        firstInput.style.borderColor = "red";
    }
    if(firstInput.value == 0 && people_input.value == 0){
        firstInput.style.borderColor = "red";
        cant.style.display = "flex";
        people_input.style.borderColor = "red";   
    }
}
custom.addEventListener("input", () =>{
    if(firstInput.value !== 0 && people_input.value !== 0 ){
        let tip = ((custom.value / 100)*firstInput.value);
        output1.textContent = (tip/people_input.value).toFixed(2); 
        let variable = Number(firstInput.value)+tip;
        output2.textContent = (variable / people_input.value).toFixed(2);
    }
    buttons.forEach(function(element){
        element.style.backgroundColor = "#00474B"
    })
    changes(); 
    custom.style.borderColor = "#9FE8DF";
    reset.style.backgroundColor = "#26C2AE";   
})

reset.addEventListener("click", ()=>{
    location.reload();
})


























