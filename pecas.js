var listaDePecas = ["Filtro de Ar", "Motor", "Amortecedor"]

if (listaDePecas.length < 2){
    console.log("Outras peças podem ser adicionadas")
}
else {
    console.log("Não tem mais espaço na lista")
}

let peso = 50

if (peso < 100){
    console.log("A peça deve pesar no mínimo 100g")
}
else {
    console.log("A peça possui peso adequado")
}

let nomePeca = "Disco de freio"

if (nomePeca.length > 3){
    console.log("Nome da peça está adequado para o cadastro!")
}
else{
    console.log("O nome deve ter mais de 3 caracteres, digite um nome adequado")
}