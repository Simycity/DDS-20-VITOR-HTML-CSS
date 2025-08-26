// Mostra uma mensagem no console
console.log("Salve, rapaziadinha top");

// Caixinha de Alerta
// alert("Testando aqui pra ver se vai");

var nome = "Cristiano";
var numero = 7;
var pulo = 2.10;
var theBest = true;

console.log("O nome:" + nome);
console.log("De número:", numero);
console.log(pulo);
console.log(theBest);

console.log(typeof(nome));
console.log(typeof(pulo));
console.log(typeof(numero));
console.log(typeof(theBest));

var nulo = null;
var indefinido = undefined;

console.log(typeof(nulo));
console.log(typeof(indefinido));

// OPERADORES ARITMÉTICOS
//  +, -, *, /, %

var a = 10, b = 5;

console.log("Soma: ", a + b);
console.log("Subtração: ", a - b);
console.log("Multiplicação: ", a * b);
console.log("Divisão: ", a / b);
console.log("Módulo: ", a % b);

// OPERADORES LÓGICOS
// E, OU, NÃO
// &&, ||, !

var verdade = true;
var mentira = false;

console.log(verdade && mentira); // E

console.log(verdade || mentira); // OU

console.log(verdade && !mentira); // NÃO


// OPERADORES RELACIONAIS
// >, < , >=, <=, =, !=, ===, !==

var x = 65, y = 32, z = "65";

console.log(x > y);
console.log(x < y);
console.log(x >= y);
console.log(x <= y);
console.log(x == y);
console.log(x != y);
console.log(x === z);
console.log(x !== z);

//INTERAGIR COM O USUÁRUIO
var time = prompt("Que time é teu? ");

console.log(time);

// DESVIOS CONDICIONAIS
var estarVivo = true;

if(estarVivo == true){

    console.log("Você está vivo");
    
} else if(estarVivo == false){

    console.log("Está morto ☠️");
    
} else {
    console.log("Você não tá nada");
    
}

//SWITCH = ESCOLHA
var camisa = "Laranja";

switch (camisa) {
    case "Azul":
        console.log("Ganhou um voucher");
        break;

    case "Branco":
        console.log("Ganhou um playstation");
        break;

    case "Vermelho":
        console.log("Ganhou uma Ferrari");
        break;
           
    default:
        console.log("Camisa Inválida");
        break;
}

//LAÇOS DE REPETIÇÃO => LOOPS

//  FOR = PARA

for (var i = 0; i < 5; i++) {
    console.log("Estoy Aquí");
}

//WHILE = ENQUANTO

var c = 1;

while (c < 10) {
    console.log("Entrei no loop");
    c++;
}

// FUNÇÕES
//SÓ EXECUÇÃO
function teste() {
    console.log("Funfionou sim o teste");
}

teste();

// COM PARÂMENTRO
function teste2(parametro) {
    console.log("O parametrro é: ", parametro);
    
}
teste2("Arroz");

// COM RETORNO
function calculo(n1, n2){
    let resultado = n1 + n2;
    return resultado;
}

var final = calculo(3,5);

console.log("A conta deu:", final);
// sasas