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
console.log("");
console.log("★ ★ ★ ★ ★ ★ ★ ★ ★ ★ ★ ★ ★ ★ ★ ★ ★ ★ ★ ★ ★ ★ ★");
console.log("★                                           ★");
console.log("★ - - - -  ＫＡＹ ＡＩＲＬＩＮＥＳ  - - - - ★");
console.log("★                                           ★");
console.log("★ ★ ★ ★ ★ ★ ★ ★ ★ ★ ★ ★ ★ ★ ★ ★ ★ ★ ★ ★ ★ ★ ★");
console.log("");
console.log("");

const listaDeDestinos = new Array(
  " ✧ Vancouver",
  " ✧ Seul",
  " ✧ Abu Dhabi",
  " ✧ Taiwan",
  " ✧ Moscou"
);

console.log(listaDeDestinos);
//console.log(listaDeDestinos[4]);

listaDeDestinos.push(" ✧ Coronel Vivida");
listaDeDestinos.push(" ✧ Bonito");
listaDeDestinos.push(" ✧ Barreirinhas");
listaDeDestinos.push(" ✧ Fernando de Noronha");

console.log(listaDeDestinos);

const loginCerto = "teste";
const senhaCerta = 2006;

console.log("");
console.log("★ ★ ★ ★ ★ ÁREA DE LOGIN ★ ★ ★ ★ ★");
console.log("");

var login = entrada("✧ Qual é o seu login? ");
var senha = entrada("✧ Digite sua senha: ");
console.log("");

while(login != loginCerto || senha != senhaCerta){
  console.log("⚠ Login ou senha inválidos. Verifique as informações ou tente novamente mais tarde. ");
  console.log("");
  login = entrada("✧ Qual é o seu login? ");
  senha = entrada("✧ Digite sua senha: ");
  console.log("");
}

var nomeComprador = entrada("✦ Qual seu nome? ");
var idadeComprador = entrada("✦ Qual a sua idade? ");

console.log("");
console.log("");
console.log("");
console.log("★ ★ ★ ★ ★ ÁREA DE SELEÇÃO ★ ★ ★ ★ ★");
console.log("");

if(idadeComprador >= 18) {
  console.log("☆ Olá senhor(a) " + nomeComprador);
  console.log("  Sua identidade foi confirmada com sucesso!");
  console.log("");
  console.log("☆ Por favor, selecione o seu destino:");
  console.log("");
  var contador = 0;

  while(contador < 9) {
    console.log(listaDeDestinos[contador]);
    contador++;
  }

  console.log("");
  var destino = entrada("✦ Digite o número correspondente ao destino selecionado (0-8)");
  console.log("");
  console.log(`  ✦ Destino selecionado foi:
             ${(listaDeDestinos[destino])}`);
  
} else {
  console.log("⚠ ERRO");
  console.log("Olá senhor(a) " + nomeComprador);
  console.log("Infelizmente, não será possível finalizar o procedimento.");
  console.log("Motivo: idade informada é menor que 18 anos.");
  console.log("");
  console.log("𝖲𝖾 𝖺𝖼𝗁𝖺𝗋 𝗊𝗎𝖾 𝗂𝗌𝗌𝗈 𝖾́ 𝗎𝗆 𝗉𝗋𝗈𝖻𝗅𝖾𝗆𝖺, 𝖺𝖼𝖾𝗌𝗌𝖾 𝗇𝗈𝗌𝗌𝖺 𝖼𝖾𝗇𝗍𝗋𝖺𝗅 𝖽𝖾 𝖺𝗃𝗎𝖽𝖺.");
}
