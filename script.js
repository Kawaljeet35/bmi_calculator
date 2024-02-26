document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("bmiCalculatorForm");
    const resultDiv = document.getElementById("result");

    form.addEventListener("submit", function(event) {
        event.preventDefault();

        const heightInput = document.getElementById("height");
        const weightInput = document.getElementById("weight");

        const height = parseFloat(heightInput.value)/100;
        const weight = parseFloat(weightInput.value);

        const bmi = (weight / (height * height)).toFixed(1);

        let message = "";
        if (bmi < 18.5) {
            message = `Your BMI is ${bmi}, you are underweight.`;
        } else if (bmi < 25) {
            message = `Your BMI is ${bmi}, you have a normal weight.`;
        } else if (bmi < 30) {
            message = `Your BMI is ${bmi}, you are slightly overweight.`;
        } else if (bmi < 35) {
            message = `Your BMI is ${bmi}, you are obese.`;
        } else {
            message = `Your BMI is ${bmi}, you are clinically obese.`;
        }

        resultDiv.textContent = message;
    });
});
