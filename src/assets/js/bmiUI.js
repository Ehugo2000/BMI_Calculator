const calculateBMI = () => {
    let weightInput = document.getElementById("weight")
    let heightInput = document.getElementById("height")
    let results = calculateMetric(weightInput.value, heightInput.value)
    let displayResultElement = document.getElementById('results')
    displayResultElement.innerHTML =`<h1>Your BMI value is: ${results}</h1>`
}

