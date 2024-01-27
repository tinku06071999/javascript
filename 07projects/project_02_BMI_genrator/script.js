const form = document.querySelector('form')

// when we submit a form or something else then it will go to the broswer now we have to stop t

form.addEventListener('submit',function(e){
   
    //stop the default action like sending data on browser etc.
    e.preventDefault();
   const height = parseFloat (document.querySelector('#height').value); // parseFloat wiil convert number that we reciverd in string form to float form
    // console.log(height)
  const weight = parseFloat(document.querySelector('#weight').value);
//   console.log(weight);

  const results = document.querySelector('#results')
  
  if(height==='' || height < 0 || isNaN(height)){
    results.innerHTML =`Please Enter a Valid height ${height}`
  }else if(weight==='' || weight < 0 || isNaN(weight)){
    results.innerHTML = `Please Enter a Valid weight ${weight}`
  }else{ // calculating BMI
    const res = (weight / ((height * weight)/10000)).toFixed(2);
    results.innerHTML = `<span>${res}</span>`
 }


 // based on the result manuplate the BMI weight Guide
    const BMI = (weight / ((height * weight)/10000)).toFixed(2);
    if(BMI < 18.6){
      const underweight = document.querySelector('#underweight');
    //   console.log(underweight);
      underweight.style.color = 'red'
      results.innerHTML = `result: ${BMI}</br>${underweight.textContent}`

    }else if(BMI >=18.6 && BMI <= 24.9){
       const normal = document.querySelector('#normal');
    //    console.log(normal)
       normal.style.color = 'green';
      results.innerHTML = `result: ${BMI}</br>${normal.textContent}`
       

    }else{
        const overweight = document.querySelector('#overweight');
        // console.log(overweight);
        overweight.style.color = 'red'
        results.innerHTML = `result: ${BMI}</br>${overweight.textContent}`
      
    }
})