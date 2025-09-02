var produto_1 = {
    nome: "Coca cola",
    categoria: "Bebidas",
    quantidade: 30,
    tamanhos: ["200ml", "Lata", "600ml", "2L"],
    // Criação de um método interno
    descricao: function() {
        // Uso do this como referencial
        console.log("O produto", this.nome, "é da categoria:", this.categoria);
        
    },
    // Criação de método externo
    verTamanhos: opcoes
}

var produto_2 = {
    nome: "Salgado",
    categoria: "Comida",
    quantidade: 10,
    tamanhos: ["Pequeno", "Médio", "Grande"],
    descricao: function() {
        console.log("O produto", this.nome, "é da categoria:", this.categoria);
    },
    verTamanhos: opcoes
}


// THIS
produto_1.descricao();
produto_2.descricao();

function opcoes(){
    // let tmhs = ""
    // for(var i in this.tamanhos){
    //     tmhs += this.tamanhos[i] + ","
    // }
    // console.log("As opções são:", tmhs);
    console.log("As opções são:", this.tmhs.toString());
    
    
}

produto_1.verTamanhos()
produto_2.verTamanhos()

var produto_3 = {
    nome: prompt("nome:"),
    categoria: prompt("categoria:"),
    quantidade: prompt("quantidade"),
    tamanhos: prompt("Tamanhos: separados por vírgula)"),
    descricao: function() {
        console.log("O produto", this.nome, "é da categoria:", this.categoria);
    },
    verTamanhos: opcoes
}

produto_3.descricao()
produto_3.verTamanhos()