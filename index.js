var result = document.querySelector("#result");
var weight = document.querySelector("#weight");
var height = document.querySelector("#height");

function Weight() {
    var spanWeight = document.getElementById("spanWeight");
    spanWeight.innerHTML = weight.value;
}
function Height () {
    var spanHeight = document.getElementById ("spanHeight");
    spanHeight.innerHTML = height.value;
}

var calculate = () => {
    if (weight.value == 0 || height.value == 0) {
      result.innerHTML = "Peso ou Atlura Inválido(s).";       
    } else {
        var imc = (weight.value / (height.value ** 2)).toFixed(1);
        if (imc < 18.5) {
            condition = "Abaixo do Peso";
        } else if (imc <= 24.9) {
            condition = "Peso normal";
        } else if (imc <= 29.9) {
            condition = "Acima do peso";
        } else if (imc <= 39.9) {
            condition = "Obesidade";
        } else {
            condition = "Obesidade Mórbida";
        }
        result.innerHTML = `${imc} ${condition}`;
    }
}



