var valor1 = 10;
var valor2 = 15;
var valor3 = 9;
var valor4 = 7;
var valor5 = "10";

if (valor1 == 10) {
  //se essa condição for verdadeira
  console.log("O valor 1 é igual a 10"); //acontece isso
} else if (valor1 > 10) {
  console.log("O valor 1 é maior que 10");
} else {
  //se for falso o else será executado
  console.log("O valor 1 não é igual a 10");
}

if (valor1 > 5 && valor2 < 10) {
  console.log("deu certo");
} else {
  console.log("não deu certo");
}

if (valor1 > 5 || valor2 < 5) {
  console.log("deu certo");
} else {
  console.log("não deu certo");
}
var info = prompt("digite um número inteiro:");
//essa var é um número que o usuário digita, uma variável não precisa ter um dado estático!
if (info > 10) {
  alert("o número digitado é maior que 10");
} else {
  alert("o número digitado não é maior que 10");
}
var x = 5;
switch (
  x //verifica a var x
) {
  case 0:
    console.log("O x é igual a 0");
    break;
  case 1:
    console.log("O x é igual a 1");
    break;
  case 2:
    console.log("O x é igual a 2");
    break;
  default:
    //se não for nenhum dos cases acima, vai no default
    console.log("nenhum valor encontrado");
}
//se eu não tiver o break, no switch, ele vai ficar verificando todas as outras condições, mesmo se a primeira for verdadeira
//quando eu coloco o break, ele para na condição certa
