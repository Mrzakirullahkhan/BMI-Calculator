
const valueBMI = document.querySelector('.bmivlaue');
const btn = document.querySelector('.myBtn');
const male = document.querySelector('.fa-mars');
const female = document.querySelector('.fa-venus');
const cross = document.querySelector('.fa-regular');





btn.addEventListener('click', () => {
    let heightValue = document.querySelector('.myHeightValue')
    heightValue = heightValue.value
    console.log(heightValue)
    let weightvalue = document.querySelector('.myweightValue');
    weightvalue=weightvalue.value
    console.log(weightvalue)


    if (heightValue === 0 || heightValue < 0 || heightValue == "") {
        valueBMI.innerHTML = "invalid heightvalue"
    }
    else if (weightvalue === 0 || weightvalue < 0 || weightvalue == "") {

        valueBMI.innerHTML = "invalidweightvalue"
    }
    else {
       valueBMI.innerHTML =  ((weightvalue) / (heightValue * heightValue)).toFixed(1);
       
    
        
    }
})



// male btn 
male.addEventListener('click', function () {
    if (male.classList.contains("active1")) {
        male.classList.remove("active1");
        female.classList.remove("active2");
    } else {
        male.classList.add("active1");
        female.classList.remove("active2");
    }
})

// female btn
female.addEventListener('click', function () {
    if (female.classList.contains("active2")) {
        female.classList.remove("active2");
        male.classList.remove("active1");
    } else {
        female.classList.add("active2");
        male.classList.remove("active1");
    }
})

// cross btn 
cross.addEventListener('click',function(){
    valueBMI.innerHTML = 00;
    let heightValue = document.querySelector('.myHeightValue')
    let weightvalue = document.querySelector('.myweightValue');
 
    heightValue.value= 00;
    weightvalue.value=00;
    female.classList.remove("active2");
    male.classList.remove("active1");
    



})


window.onload = function() {
    setTimeout(function() {
      var userName = prompt("Enter your name:");
      setTimeout(function() {
        alert(`Thank you ${userName} for joining BMI calculatar`);
      }, 2000); 
    }, 2000); 
  };

