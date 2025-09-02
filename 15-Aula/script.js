// Com array
var aluno = ["Pedro", "Thiago", "Barquinho"];
var media = [7, 8, 4];

console.log("O aluno ", aluno[0], "teve média de", media[2]);

// Criando um objeto
var aluno1 = {
  // chave: "Valor",
  nome: "Pedro",
  media: 7,
}

var aluno2 ={
  nome: "Jonas",
  media: 9
}

// Acessa todo o objeto
console.log(aluno1);


// Acessa uma propriedade daquele objeto
console.log(aluno1.nome);
console.log(aluno2.media);

// Criação de um objeto de uma escola, com 4 propriedades
var intervalo = {
  horaInicio: "20h",
  horaFim: "21h",
  duracao: "10 min",
  local: "Pátio"
}

console.log("O intervalo inicia às", intervalo.horaInicio, "e finaliza às", intervalo.horaFim);

// Acessando um valor passando uma chave
console.log("Onde:", intervalo["local"]);

// Criando um objeto vazio
var garrafa = {}

console.log(garrafa);

garrafa.cor = "Azul"
garrafa.tamanho = "2L"
garrafa.preco = 600
garrafa["marca"] = "Stanley"

console.log(garrafa);

// Alterar uma propriedade já existente
garrafa.cor = "Roxo"
garrafa["marca"] = "Topoué"
console.log(garrafa);

// Peça para o usuário uma nova propriedade e um novo valor para ser adicionado a garrafa
var novaPropriedade = prompt("Nova Propriedade: ")
garrafa [novaPropriedade] = prompt("Digite um Valor: ")

console.log(garrafa);
console.log(garrafa.quantidade);

var animal1 = {
  nome: "Tom",
  especie: "Gato",
  raca: "Puma",
  andar: function(){
    console.log("Estou andando, acredite")
  },
  fala: function () {
    console.log("MIAAAAAAAAAAAAAAAU");
    
  }
}

console.log(animal1);
console.log(animal1.andar);
animal1.andar();