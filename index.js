class Heroi {
    constructor(nome, idade, tipo){
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    atacar() {
        if(this.tipo == "mago")
            return "magia";

        if(this.tipo == "guerreiro")
            return "espada";

        if(this.tipo == "monge")
            return "artes marciais";

        if(this.tipo == "ninja")
            return "shuriken";
    }
}

const heroi = new Heroi("Asta", 15, "ninja");

console.log(`O ${heroi.tipo} ${heroi.nome} atacou usando ${heroi.atacar()}.`)