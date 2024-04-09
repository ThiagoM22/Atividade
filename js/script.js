const exercicio1 = () => {
  for (let i = 1; i <= 10; i++) {
    document.getElementById("resposta").innerHTML =
      "<h2>Resposta da Atividade</h2>";
    document.getElementById("resultado").innerHTML += `<h3>#${i}</h3>`;
  }
};
const exercicio2 = () => {
  document.getElementById("resultado").innerText = ``;
  let valor = document.getElementById("num").value;
  if (valor <= 0) {
    document.getElementById(
      "erro"
    ).innerText = `Número inválido digite um valor maior que 0`;
  }
  for (let i = 0; i <= valor; i++) {
    if (i % 2 == 0 && i !== 0) {
      document.getElementById("resultado").innerText += `#${i}`;
    }
  }
};
const exercicio3 = () => {
  let num = document.getElementById("num").value;
  document.getElementById("erro").innerText = "";
  document.getElementById("resultado").innerText = ``;
  if (num <= 1) {
    document.getElementById("erro").innerText = "Seu número não é primo";
    document.getElementById("resultado").innerText = ``;
  } else {
    document.getElementById("erro").innerText = "";
    document.getElementById("resultado").innerText = ``;
    let primo = true;
    for (let i = 2; i < num; i++) {
      if (num % i == 0) primo = false;
    }
    primo
      ? (document.getElementById("resultado").innerText = `Seu número é primo`)
      : (document.getElementById("erro").innerText = `Seu número não é primo`);
  }
};
const exercicio4 = () => {
  document.getElementById("erro").innerText = ``;
  document.getElementById("resultado").innerText = ``;
  let valor = document.getElementById("num").value;
  if (valor <= 0) {
    document.getElementById("erro").innerText += `Digite um valor maior que 0`;
  } else {
    for (let i = 0; i <= 10; i++) {
      document.getElementById("resultado").innerHTML += ` ${valor}X${i}=${
        valor * i
      } <br/>`;
    }
  }
};
const exercicio5 = () => {
  document.getElementById("erro").innerText = ``;
  document.getElementById("resultado").innerText = ``;
  let valor = document.getElementById("num").value;
  let contador = 0;
  if (valor <= 0) {
    document.getElementById(
      "erro"
    ).innerText = `Número inválido digite um valor maior que 0`;
  }
  while (contador <= valor) {
    if (contador % 2 != 0) {
      document.getElementById("resultado").innerText += `#${contador}`;
    }
    contador++;
  }
};
const exercicio6 = () => {
  let valor = document.getElementById("num").value;
  document.getElementById("erro").innerText = ``;
  document.getElementById("resultado").innerText = ``;
  let contador = 0;
  let nm = 0;
  if (valor <= 0) {
    document.getElementById("erro").innerText = `Digite um número maior que 0`;
  } else {
    while (contador <= valor) {
      if (contador % 2 == 0) {
        nm += contador;
        document.getElementById("resultado").innerText = `A soma é ${nm}`;
      }
      contador++;
    }
  }
};
const exercicio7 = () => {
  document.getElementById(
    "resposta"
  ).innerHTML = `<h3>Resposta da Atividade </h3>`;
  let contador = 10;
  while (contador > 0) {
    document.getElementById("resposta").innerHTML += `#${contador}`;
    contador--;
  }
};
const exercicio8 = () => {
  let palavra = document.getElementById("palavra").value;
  let error = document.getElementById("erro");
  let result = document.getElementById("resultado");
  error.innerText = "";
  result.innerText = "";

  let inversa = "";

  for (let i = 1; i <= palavra.length; i++) {
    inversa += palavra.charAt(palavra.length - i);
  }

  palavra.toLowerCase() == inversa.toLowerCase()
    ? (result.innerText = "A palavra é um palíndromo!")
    : (error.innerText = "A palavra não é um palíndromo!");
  // document.getElementById("resultado").innerText = ``;
  // document.getElementById("erro").innerText = ``;
  // let valor = document.getElementById("palavra").value;
  // const palavras = valor.split("");
  // const palavrasinv = [];
  // if(valor = ""){
  //   document.getElementById("erro").innerText = `Favor informar palavra`;
  // }
  // else{

  // }
  // for (let i = palavras.length; i >= 0; i--) {
  //   palavrasinv.push(palavras[i]);
  // }
  // if (palavras.join("") == palavrasinv.join("")) {
  //   document.getElementById(
  //     "resultado"
  //   ).innerText = `Essa palavra é um palíndromo`;
  // } else {
  //   document.getElementById(
  //     "erro"
  //     ).innerText = `Essa palavra não é um palíndromo`;
};
const exercicio9 = () => {
  document.getElementById("resposta").innerHTML =
    "<h2>Resposta da Atividade<h2>";
  let mc = 0;
  for (let i = 1; i <= 100; i++) {
    mc += i;
  }
  document.getElementById("resposta").innerHTML += mc;
};
const exercicio10 = () => {
  document.getElementById("resultado").innerText = ``
  let valor = document.getElementById("num").value;
  let contador = 1;
  let num = 0;
  while (contador <= valor) {
    num += contador;
    contador++;
  }
  num /= valor;
  document.getElementById("resultado").innerText = `A média da lista é ${num}`;
};
const exercicio11 = () => {
  document.getElementById(
    "resposta"
  ).innerHTML = `<h3>Resposta da Atividade </h3>`;
  for (let i = 1; i <= 100; i++) {
    if (i % 3 == 0) {
      document.getElementById("resposta").innerHTML += ` #${i}`;
    }
  }
};
const exercicio12 = () => {
  document.getElementById("erro").innerText = "";
  let valor = document.getElementById("num").value;
  num = valor.split("");
  let soma = 0;
  console.log(num);
  for (let i = 0; i < num.length; i++) {
    soma += num[i] * 1;
  }
  document.getElementById(
    "resultado"
    ).innerText = `A soma dos digitos é ${soma}`;
    if (valor <= 9) {
      document.getElementById("erro").innerText = "digite um valor maior que 9";
    document.getElementById("resultado").innerText = "";
  
    }
};
const verificaPrimo = (numero) => {
  if (numero <=1){
    return false
  }

  let primo = true;
  for (let m = 2; m * m <= numero; m++) { //Se encontrarmos um divisor maior que a raiz quadrada de um número, 
    //podemos concluir que ele não é primo, o uso da raiz quadrada nessa situação nos permite englobar o 2
    if (numero % m === 0) {
      primo = false;
      break
    }
  }
  return primo;
};
const exercicio13 = () => {
  let resultado = document.getElementById("resultado");
  resultado.innerHTML = "";

  let min = document.getElementById("num1").value;
  min = Math.round(min);

  let max = document.getElementById("num2").value;
  max = Math.round(max);

  let erro = document.getElementById("erro");

  if (min < 0 || max <= 0 || min >= max) {
    erro.innerText =
      "Erro: Favor informar um número positivo e diferente do outro número colocado";
    resultado.innerText = "";
  } else {
    for (let m = min; m <= max; m++) {
      let numEntre = verificaPrimo(m);
      if (numEntre) {
        resultado.innerHTML += `<h3>#${m}</h3>`;
      }
    }
  }
};
const exercicio14 = () => {
  document.getElementById("erro").innerText = "";
  document.getElementById("resultado").innerText = "";
  let lado1 = document.getElementById("num1").value;
  let lado2 = document.getElementById("num2").value;
  if (lado1 <= 0 || lado2 <= 0) {
    document.getElementById("erro").innerText = "digite um valor maior que 0";
    document.getElementById("resultado").innerText = ``;
  } else {
    document.getElementById("resultado").innerText = `A área do retângulo é ${
      lado1 * lado2
    }`;
    document.getElementById("erro").innerText = "";
  }
};
const exercicio15 = () => {
  let pala = document.getElementById("palavra").value;
  document.getElementById("resultado").innerText = "";
  document.getElementById("erro").innerText = "";
  console.log(pala.length);
  let vog = [`a`, `e`, `i`, `o`, `u`];
  let consoante = [
    "b",
    "c",
    "d",
    "f",
    "g",
    "h",
    "j",
    "k",
    "l",
    "m",
    "n",
    "p",
    "q",
    "r",
    "s",
    "t",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  pala = pala.toLowerCase();
  if (pala == "") {
    document.getElementById("erro").innerText = `Favor informar uma palavra`;
  }
  for (let i = 0; i < pala.length; i++) {
    for (let l = 0; l < vog.length; l++) {
      if (pala.charAt(i) == vog[l]) {
        document.getElementById("resultado").innerText += ` #${pala.charAt(i)}`;
      }
    }
    for (let z = 0; z < consoante.length; z++) {
      if (pala.charAt(i) == consoante[z]) {
        document.getElementById("erro").innerText += ` #${pala.charAt(i)}`;
      }
    }
  }
};
const exercicio16 = () => {
  document.getElementById("resultado").innerText = "";
  document.getElementById("erro").innerText = "";
  let raio = document.getElementById("num1").value;
  let pi = 3.14;
  if (raio <= 0) {
    document.getElementById("erro").innerText = "Insira um valor maior que 0";
  } else {
    raio *= raio;
    document.getElementById("resultado").innerText = `A área do circulo é ${
      pi * raio
    }`;
  }
};
const exercicio17 = () => {
  document.getElementById("erro").innerText = "";
  document.getElementById("resultado").innerText = "";
  let lado1 = document.getElementById("num1").value;
  let lado2 = document.getElementById("num2").value;
  if (lado1 <= 0 || lado2 <= 0) {
    document.getElementById("erro").innerText = "digite um valor maior que 0";
    document.getElementById("resultado").innerText = ``;
  } else {
    document.getElementById("resultado").innerText = `A área do triângulo é ${
      (lado1 * lado2) / 2
    }`;
    document.getElementById("erro").innerText = "";
  }
};
const exercicio18 = () => {
  document.getElementById("resultado").innerText = ``;
  document.getElementById("erro").innerText = ``;
  let bMa = document.getElementById("num1").value * 1;
  let bMe = document.getElementById("num2").value * 1;
  let h = document.getElementById("num3").value * 1;
  somaB = bMa + bMe;
  antDiv = somaB * h;
  if (bMa <= 0 || bMe <= 0 || h <= 0) {
    document.getElementById("erro").innerText = `Digite um valor maior que 0`;
  } else {
    document.getElementById("resultado").innerText = `A área é ${antDiv / 2}`;
  }
};
const exercicio19 = () => {
  document.getElementById("resultado").innerText = ``;
  document.getElementById("erro").innerText = ``;
  let Na = document.getElementById("data").value;
  let Nasc = new Date(document.getElementById("data").value);
  let Atuak = new Date();
  if (Na == "") {
    document.getElementById("erro").innerText = "Digite sua data de nascimento";
  } else {
    if (
      Nasc.getMonth() < Atuak.getMonth() ||
      (Nasc.getMonth() == Atuak.getMonth && Nasc.getDate() < Atuak.getDate())
    ) {
      document.getElementById("resultado").innerText = `${
        Atuak.getFullYear() - Nasc.getFullYear()
      } anos`;
    } else {
      document.getElementById("resultado").innerText = `${
        Atuak.getFullYear() - Nasc.getFullYear() - 1
      } anos`;
    }
  }
};
const exercicio20 = () => {
  document.getElementById("erro").innerText = ``;
  let valor = document.getElementById("frase").value;
  let frase = valor.split(" ");
  let inv = [];
  if (valor == "") {
    document.getElementById("erro").innerText = ``;
  }
  for (let i = frase.length; i >= 0; i--) {
    inv.push(frase[i]);
  }
  document.getElementById("resultado").innerText = `${inv.join(" ")}`;
};
const exercicio21 = () => {
  document.getElementById("resultado").innerText = ``
  document.getElementById("erro").innerText = ``

  let frase = document.getElementById("frase").value;
  corte = frase.split(" ");
  if (frase == "") {
    document.getElementById("erro").innerText = `Escreva uma frase`;
  } else {
    document.getElementById("resultado").innerText = `${corte.join("")}`;
  }
};
var soma = 0
const exercicio22 = () => {
  document.getElementById("resultado").innerText = ``
  document.getElementById("erro").innerText =``
let valor = document.getElementById("num").value*1;
if(valor<=0){
  document.getElementById("erro").innerText ="Digite um valor positivo"
}
else if (soma <=100){
soma+=valor
document.getElementById("resultado").innerText = `#${soma}`
}
else if (soma>100){
  document.getElementById("erro").innerText =`A soma deu maior que 100`
}

};
const exercicio23 = () => {
  let frase = document.getElementById("frase").value;
  let pala = document.getElementById("palavra").value;
  frase = frase.toLowerCase();
  pala = pala.toLowerCase();
  let corte = frase.split(" ");
  let contador = 0;
  console.log(corte);
  if (frase == "" || pala == "") {
    document.getElementById("erro").innerText =
      "Escreva uma frase e uma palavra";
  } else {
    for (let i = 0; i < corte.length; i++) {
      if (corte[i] == pala) {
        contador++;
      }
    }
    document.getElementById(
      "resultado"
    ).innerText = `O número de vezes que ${pala} aparece é ${contador}`;
  }
};
const exercicio24 = () => {
  let resultado = document.getElementById("resultado");

  let valor = document.getElementById("frase").value;
  let frase = valor.split(" ");
  const array = [];

  let erro = document.getElementById("erro");

  if (valor == "") {
    erro.innerText = "Coloque um título!";
    resultado.innerHTML = "";
  } else {
    erro.innerText = "";
    const fraseMod = frase.map((palavra) => {
      //Utilizei o map para retornar o array com os transofrmações feitas pela função
      const primeiraLetra = palavra[0].toUpperCase(); //Acessa o primeiro caractere da palavra
      array.push(primeiraLetra); //Adiciona as letras maiúsculas na array primeirasLetras
      return primeiraLetra + palavra.slice(1); // Substituindo a primeira letra pela versão maiúscula
    });
    resultado.innerHTML = `<h1>${fraseMod.join(" ")}</h1>`;
  }
};
const exercicio25 = () => {
  document.getElementById("resultado").innerText =``
  document.getElementById("erro").innerText =``

  let valor1 = document.getElementById("num1").value;
  let valor2 = document.getElementById("num2").value;
  let valor3 = document.getElementById("num3").value;
  let array = valor1.split(" ");
  console.log(array);
  array.push(valor2);
  array.push(valor3);
  console.log(array);
  array.sort((a,b)=>a-b);//organiza valores em ordem alfabética e crescente por unicode.
  for (let i = 0; i <=2; i++) {
    document.getElementById("resultado").innerText +=` #${array[i]}`
  }
};


