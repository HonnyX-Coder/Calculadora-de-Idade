function calcular() {
  const valorDentroDaCaixa = document.getElementById("MostrarNumero");
  const valorInput = parseInt(document.getElementById("ValorCaixa").value);
  const Resultado = document.getElementById("Resultado");

  valorDentroDaCaixa.innerHTML = valorInput;

  if (valorInput >= 65) {
    Resultado.innerHTML = "Idoso";
  } else if (valorInput >= 18) {
    Resultado.innerHTML = " Adulto";
  } else if (valorInput >= 13) {
    Resultado.innerHTML = "Adolescente";
  } else {
    Resultado.innerHTML = "Infantil";
  }
}
