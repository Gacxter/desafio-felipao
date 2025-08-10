//Saída de boas-vindas e introdução ao jogo
console.log("Bem vindo ao desafio da Calculadora de partidas Rankeadas! Escolha o nome do seu personagem:");
//Utilizaremos nesse desafio Variáveis, Estruturas de Decisão, Laços de Repetição, Operadores Lógicos e Funções

// Simulação de entrada do usuário
// Neste exemplo, vamos definir o nome do personagem diretamente
console.log("Digite o nome do seu personagem!");

// Definindo o nome do personagem
// Em um jogo real, você poderia usar algo como prompt() para capturar a entrada do usuário
// Aqui, vamos apenas definir uma variável com o nome escolhido
let nomePersonagem = "Master of Code";

// Variável para armazenar o número de vitórias
let numeroVitorias = 0;

// Variável para armazenar o número de derrotas
let numeroDerrotas = 0;

// Variável para armazenar o resultado das partidas jogadas
let resultado = experienciaParaRank(numeroVitorias, numeroDerrotas);

console.log("O Herói " + nomePersonagem + " tem saldo de " + resultado.saldoVitoria + " vitórias e está no nível de " + resultado.rank + ".");

// A experiência de Rank é calculada com base no número de vitórias e derrotas
function experienciaParaRank(numeroVitorias, numeroDerrotas) {
    let saldoVitoria = numeroVitorias - numeroDerrotas;
    let rank;

    // Definindo o rank com base no número de vitórias
    if (saldoVitoria < 10) rank = "Ferro";
    else if (saldoVitoria <= 20) rank = "Bronze";
    else if (saldoVitoria <= 50) rank = "Prata";
    else if (saldoVitoria <= 80) rank = "Ouro";
    else if (saldoVitoria <= 90) rank = "Diamante";
    else if (saldoVitoria <= 100) rank = "Lendário";
    else rank = "Imortal";

    // Retornando o saldo de vitórias e o rank atual
    return { saldoVitoria, rank };
}

// Laço de repetição para simular as partidas até atingir o rank Imortal
do {
    numeroVitorias += Math.floor(Math.random() * 10) + 1;
    numeroDerrotas += Math.floor(Math.random() * 6);
    resultado = experienciaParaRank(numeroVitorias, numeroDerrotas);
    console.log("O Herói " + nomePersonagem + " tem saldo de " + resultado.saldoVitoria + " vitórias e está no nível de " + resultado.rank + ".");
    console.log("------------------------");
} 
while (resultado.rank !== "Imortal");

// Saída final
console.log(`Parabéns!! O seu Herói ${nomePersonagem} atingiu o rank MÁXIMO de Imortal!`);