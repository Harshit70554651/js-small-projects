const btn =  document.getElementById("btn")
const result = document.getElementById("result");
const condition = document.getElementById("condition")


function calculateBMI(){

    const  heightEl = document.getElementById("height").value  / 100
    const weigthEl = document.getElementById("weight").value;

    const BmiEl = weigthEl / (heightEl * heightEl);

    result.value = BmiEl;

     if(BmiEl < 18){
        condition.innerText = "You are Underweight "
        condition.style.color = "red"
     } else if(BmiEl >= 18.5 && BmiEl <= 24.5 ){
        condition.innerText = "You Have a Normal Weight"
        condition.style.color = "green"
     } else if(BmiEl > 25 && BmiEl <= 29.9){
        condition.innerText = "You are overWeight"
          condition.style.color = "red"
     } else if(BmiEl < 30 && BmiEl >= 34.9){
        condition.innerText = "You have class I obesity"
          condition.style.color = "red"
     }else if(BmiEl < 35 && BmiEl >=  39.9){
        condition.innerText = "You Have class 2nd obesity"
     }else{
        condition.innerText = "Your Have Higher Obesity"
          condition.style.color = "red"
     }

}


btn.addEventListener("click", calculateBMI)