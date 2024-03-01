const form = document.querySelector('form')

form.addEventListener('submit', function(event){
  event.preventDefault()

  const height = parseInt(document.querySelector('#height').value)

  const weight = parseInt(document.querySelector('#weight').value)

  const result = document.querySelector('#results')

  if(height ==='' || height <= 0 || isNaN(height)){
    results.innerHTML = `Please Give a valid height ${height}`
  } else if(weight ==='' || weight <= 0 || isNaN(weight)){
    results.innerHTML = `Please Give a valid Weight ${weight}`
  }
  else{
    const bmi = (weight / ((height * height)/10000)).toFixed(2) ;
    //show result
    const show = document.createElement('h3')

    if(bmi < 18.6){
      result.innerHTML = `<span> BMI = ${bmi} [Under Weight]</span>`
      const current = this.querySelector('span')
      current.style.color = 'hsl(0, 89%, 36%)'
      
    }else if(bmi >= 18.6 && bmi < 24.9){
      result.innerHTML =`<span> BMI = ${bmi} [Normal]</span>`
      const current = this.querySelector('span')
      current.style.color = 'green'
    }else{
      result.innerHTML =`<span> BMI = ${bmi} [Over Weight]</span>`
      const current = this.querySelector('span')
      current.style.color = 'blue'
    }
    
  }
 

})