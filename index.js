/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const convertBtn = document.getElementById("convert-btn")
const numberInput = document.getElementById("number-input")
const lenghtResults = document.getElementById("length-results")
const volumeResults = document.getElementById("volume-results")
const massResults = document.getElementById("mass-results")

function doThemConversions(number){
   
    const feetEquivalent = (number * 3.280839895).toFixed(3)
    const meterEquivalent = (number / 3.280839895).toFixed(3)
    const gallonEquivalent = (number *  0.2641720524).toFixed(3)
    const literEquivalent = (number /  0.2641720524).toFixed(3)
    const poundEquivalent = (number * 2.2046226218).toFixed(3)
    const kiloEquivalent = (number / 2.2046226218).toFixed(3)

   
    lenghtResults.innerHTML = `
        ${number} meters = ${feetEquivalent} feet |
        ${number} feet = ${meterEquivalent} meters`
        
    volumeResults.innerHTML = `
        ${number} liters = ${gallonEquivalent} gallons |
        ${number} gallons = ${literEquivalent} liters`
    
    massResults.innerHTML = `
        ${number} kilos = ${poundEquivalent} pounds |
        ${number} pounds = ${kiloEquivalent} kilos`
}

convertBtn.addEventListener("click", function(){
    doThemConversions(numberInput.value)
  
})