 function calcular() {
      let num1 = parseFloat(document.getElementById("num1").value);
      let num2 = parseFloat(document.getElementById("num2").value);
      let op = document.getElementById("operador").value;

      let resultado;

      if (op === "+") {
        resultado = num1 + num2;
      } else if (op === "-") {
        resultado = num1 - num2;
      } else if (op === "*") {
        resultado = num1 * num2;
      } else if (op === "/") {
        resultado = num2 !== 0 ? num1 / num2 : "Erreur: division par zéro";
      }

      document.getElementById("resultado").innerText = "Resultado: " + resultado;
    }