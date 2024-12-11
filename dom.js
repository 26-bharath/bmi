var h1 = "";
var w1 = "";

function resultfun() {
    h1 = document.getElementById("h").value;
    w1 = document.getElementById("w").value;
    var result = document.getElementById("result");
    var over = document.getElementById("over");


    if (isNaN(h1) || isNaN(w1) || h1 <= 0 || w1 <= 0) {
        result.textContent = "Please enter valid height and weight values.";
        return;
    }

    let he = h1 / 100;
    let total = w1 / (he ** 2);

    result.textContent = "Your BMI is: " + total;
    if (total < 18.5) {
        over.textContent +="You are Underweight.";
    } else if (total >= 18.5 && total < 24.9) {
        over.textContent += "You have Normal weight.";
    } else if (total >= 25 && total < 29.9) {
        over.textContent += "You are Overweight.";
    } else {
        over.textContent += "You are Obese.";
    }
    
}

function clearfun() {
    document.getElementById("w").value = "";
    document.getElementById("h").value = "";
    var result = document.getElementById("result");
    result.textContent = "";
    var over = document.getElementById("over");
    over.textContent="";

}
