//Saída de boas-vindas e introdução ao jogo
console.log("Bem vindo ao desafio do Felipão! Escolha o nome do seu personagem:");

// Simulação de entrada do usuário
// Neste exemplo, vamos definir o nome do personagem diretamente
console.log("Digite o nome do seu personagem:");

// Definindo o nome do personagem
// Em um jogo real, você poderia usar algo como prompt() para capturar a entrada do usuário
// Aqui, vamos apenas definir uma variável com o nome escolhido
let nomePersonagem = "Master of Code";

// Exibindo o nome escolhido pelo usuário
console.log("Você escolheu o nome: " + nomePersonagem + ". Vamos começar a aventura!");

// Definindo o nível e a experiência inicial do personagem
let experiencia = 0;
let nivel = "Ferro"; // Nível inicial do personagem
// Definindo o nível inicial do personagem e os demais níveis com base na experiência
if (experiencia < 1001) {
    let nivel = "Ferro";
}else if (experiencia > 1000 && experiencia < 2001) {
    let nivel = "Bronze";
}else if (experiencia < 2000 && experiencia < 5001) {
    let nivel = "Prata";
}else if (experiencia < 5000 && experiencia < 7001) {
    let nivel = "Ouro";
}else if (experiencia < 7000 && experiencia < 8001) {
    let nivel = "Platina";
}else if (experiencia < 8000 && experiencia < 9001) {
    let nivel = "Ascendente";
}else if (experiencia < 9000 && experiencia < 10001) {
    let nivel = "imortal";
}else {
    let nivel = "Radiante";
}

do {
    // Exibindo o nível e a experiência do personagem
    console.log("O Herói de nome " + nomePersonagem + " está no nível de " + nivel + " e possui " + experiencia + " de experiência.");
    // Simulando um encontro com um inimigo e ganhando experiência
    console.log("Você se depara com inimigos ferozes! Prepare-se para a batalha!");
    // Simulando as batalhas e ganhando experiência
    for (let i = 0; i < 11; i++) {
    experiencia += 100; // Ganha 100 de experiência por batalha
    console.log("Você venceu a batalha! Experiência atual: " + experiencia);

        // Atualizando o nível do personagem com base na nova experiência (usando switch/case em lugar de if/else)
        switch (true) {
    case (experiencia < 1001):
        nivel = "Ferro";
        break;
    case (experiencia < 2001):
        nivel = "Bronze";
        break;
    case (experiencia < 5001):
        nivel = "Prata";
        break;
    case (experiencia < 7001):
        nivel = "Ouro";
        break;
    case (experiencia < 8001):
        nivel = "Platina";
        break;
    case (experiencia < 9001):
        nivel = "Ascendente";
        break;
    case (experiencia < 10001):
        nivel = "Imortal";
        break;
    default:
        nivel = "Radiante";
        }
    } 
}while (experiencia < 11000); // Continua até alcançar 11.000 de experiência

// Exibindo o resultado final do personagem
console.log("O Herói de nome " + nomePersonagem + " está no nível de " + nivel + " e possui " + experiencia + " de experiência.");
// Parabéns, você completou o desafio do Felipão! Agora você é um verdadeiro mestre do código!");
console.log("Parabéns, você completou o desafio do Felipão! Agora você é um verdadeiro mestre do código!");
// Fim do jogo