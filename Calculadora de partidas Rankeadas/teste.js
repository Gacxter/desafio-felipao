// Saída de boas-vindas
console.log("Bem-vindo ao desafio da Calculadora de partidas Rankeadas!");

// Nome do personagem (simulação de entrada)
let nomePersonagem = "Master of Code";

// Variáveis iniciais
let numeroVitorias = 0;
let numeroDerrotas = 0;
let rankAtual = "";

// Laço de repetição até atingir o nível Lendário (ou Imortal)
while (rankAtual !== "Lendário" && rankAtual !== "Imortal") {
    // Incrementa vitórias aleatoriamente (entre 1 e 10)
    numeroVitorias += Math.floor(Math.random() * 10) + 1;
    
    // Incrementa derrotas aleatoriamente (entre 0 e 5)
    numeroDerrotas += Math.floor(Math.random() * 6);
    
    // Calcula o rank atual
    let resultado = experienciaParaRank(numeroVitorias, numeroDerrotas);
    rankAtual = resultado.rank;
    
    // Exibe o progresso
    console.log(`Vitórias: ${numeroVitorias} | Derrotas: ${numeroDerrotas}`);
    console.log(`Rank Atual: ${rankAtual} | Saldo: ${resultado.saldoVitoria}`);
    console.log("------------------------");
}

// Saída final
console.log(`O Herói ${nomePersonagem} atingiu o rank ${rankAtual}!`);
console.log(`Saldo final: ${numeroVitorias - numeroDerrotas} vitórias.`);

// Função que calcula o rank (igual à sua versão)
function experienciaParaRank(numeroVitorias, numeroDerrotas) {
    let saldoVitoria = numeroVitorias - numeroDerrotas;
    let rank;

    if (numeroVitorias < 10) rank = "Ferro";
    else if (numeroVitorias <= 20) rank = "Bronze";
    else if (numeroVitorias <= 50) rank = "Prata";
    else if (numeroVitorias <= 80) rank = "Ouro";
    else if (numeroVitorias <= 90) rank = "Diamante";
    else if (numeroVitorias <= 100) rank = "Lendário";
    else rank = "Imortal";

    return { saldoVitoria, rank };
}