class Pessoa {
    nome;
    constructor(nome){
        this.nome = nome
    }
}
pessoa = new Pessoa ("Raimundo Careca")
pessoa1 = new Pessoa ("Erico Borgonove")
const pessoas = [pessoa, pessoa1]
console.log (pessoas)
