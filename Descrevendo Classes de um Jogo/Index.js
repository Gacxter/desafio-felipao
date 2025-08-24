class Heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }
    // Método para o herói atacar
    atacar() {
        let ataque = this.ataqueBasico();
        console.log(`O ${this.tipo} atacou usando ${ataque}!`);
    }

    //Função para definir o ataque básico com base no tipo de herói
    ataqueBasico () { 
    switch (this.tipo) {
        case 'Guerreiro':
            return 'Espada';
        case 'Mago':
            return 'Magia';
        case 'Monge':
            return 'Artes Marciais';
        case 'Ninja':
            return 'Shuriken';
        default:
            return 'Atque Desconhecido';
        }
    }

    //Mostrar informações do herói
    mostrarInfo() {
    console.log(`Herói ${this.nome}, Idade: ${this.idade}, Tipo: ${this.tipo}`);
    }
}

// Criando instâncias de heróis
let herois = [
    new Heroi('Aragorn', 87, 'Guerreiro'),
    new Heroi('Gandalf', 2019, 'Mago'),
    new Heroi('Lee', 35, 'Monge'),
    new Heroi('Hanzo', 25, 'Ninja'),
    new Heroi('Desconhecido', 30, 'arqueiro') // Para testar o default
]

// Exibindo informações e ataques dos heróis
console.log("=== BATALHA DE HERÓIS ===\n");
for (let i = 0; i < herois.length; i++) {
    herois[i].mostrarInfo();
    herois[i].atacar();
    console.log("---");
}
