const exercicio1 = () => {
  for (let i = 1; i <= 10; i++) {
    document.getElementById("resposta").innerHTML = "<h2>Resposta da Atividade</h2>";
    document.getElementById("resposta").innerHTML += `<h3>#${i}</h3>`;
  }
};
const exercicio2 = () => {
  document.getElementById("resposta").innerHTML =
    " <h2>Resposta da Atividade</h2>";
  let valor = document.getElementById("num").value;

  for (let i = 0; i <= valor; i++) {
    if (i % 2 == 0) {
      document.getElementById("resultado").innerHTML += `#${i}`;
    }
  }
};
const exercicio3 = () => {
  document.getElementById("resposta").innerHTML =
    " <h2>Resposta da Atividade</h2>";
  let valor = document.getElementById("num").value;
  if (valor % 2 !== 0 || valor == 2) {
    document.getElementById("resposta").innerHTML += `<h3>Seu número é primo`;
  } else {
    document.getElementById(
      "resposta"
    ).innerHTML += `<h3>Seu número não é primo`;
  }
};
const exercicio4 = () => {
  document.getElementById("resposta").innerHTML =
    "<h2>Resposta da Atividade</h2>";
  let valor = document.getElementById("num").value;
  for (let i = 1; i <= 10; i++) {
    document.getElementById("resposta").innerHTML += `#${valor * i}`;
  }
};
const exercicio5 = () => {
    document.getElementById("resposta").innerHTML = "<h2>Resposta da Atividade</h2>"
  let valor = document.getElementById("num").value;
  let contador = 0;
  while (contador <= valor) {
    if (contador % 2 != 0) {
      document.getElementById("resposta").innerHTML += `#${contador}`;
    }
    contador++;
  }
};
const exercicio6=()=>{
    let valor = document.getElementById("").value
}
