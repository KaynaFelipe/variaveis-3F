const prompt = require('prompt-sync');
const entrada = prompt();

let idade = 18;
const anoNascimento = 2006;
let anoAtual = 2024;
const nomeCompleto = "Kaynã Felipe";

console.log("Meu nome é " + nomeCompleto + " nascido no ano de " + anoNascimento + " e no ano atual " + anoAtual + " completo " + idade + " anos ");

anoAtual = anoAtual + 1;
console.log(anoAtual)
idade = idade  + 1;
console.log(idade)


//Agência de viagens Vancouver, Seul, Abu Dhabi, Taiwan, Moscou

const listaDeDestinos = new Array(
  "Vancouver",
  "Seul",
  "Abu Dhabi",
  "Taiwan",
  "Moscou"
);

console.log(listaDeDestinos);
console.log(listaDeDestinos[4]);

listaDeDestinos.push("Coronel Vivida");
listaDeDestinos.push("Bonito");
listaDeDestinos.push("Barreirinhas");
listaDeDestinos.push("Fernando de Noronha");

console.log(listaDeDestinos);

var nomeComprador = entrada("Qual seu nome? ");
var idadeComprador = entrada("Qual a sua idade? ");

if(idadeComprador >= 18) {
  console.log("Olá senhor(a) " + nomeComprador);
  console.log("Comprador maior de idade");
  console.log("Destinos disponíveis: " + listaDeDestinos);
} else {
  console.log("Olá senhor(a) " + nomeComprador);
  console.log("Infelizmente, não será finalizado o procedimento, pois idade informada é menor de 18 anos de idade.");
  console.log("Não será finalizado devido idade");
}
