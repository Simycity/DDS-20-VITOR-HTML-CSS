// Console - Terminal do navegador
console.log(console);

// Window - Janela do navegador

/* window.alert("Sim")
alert("Não") */

// Document - DOM ou seu código html inteiro
console.log(document);
console.log(document.head);
console.log(document.body);

//  Acessar elementos do body

// Pega elementos pela tag
var titulos = document.getElementsByTagName("h1");
console.log(titulos);

//  Pega elementos pela class
var paragrafos = document.getElementsByClassName("para");
console.log(paragrafos);

// Pega elemento pelo id
var especifico = document.getElementById("p3");
console.log(especifico);

// Modificando propriedades de algum elemento
// pego por id
especifico.style.backgroundColor = "green";
especifico.style.color = "yellow";

// Pego por class
paragrafos[0].style.backgroundColor = "pink";

// Pego por tag
titulos[2].style.backgroundColor = "orange";

function cliquei() {
    // alert("Eu falei para você não clicar!");
    console.log("Eu falei para você não clicar!");
}


// Exemplo

function shazam() {
    for(var i = 0; i < titulos.length; i++)
    titulos[i].style.backgroundColor = "red"
    titulos[i].style.color = "yellow"
    titulos[i].style.fontSize = "100px"
    
}