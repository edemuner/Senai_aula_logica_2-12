var listaDePecas = ["Filtro de Ar", "Motor", "Amortecedor"]

if (listaDePecas.length <= 10){
    console.log("A lista está no tamanho adequado!")
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
// solução alternativa com switch
switch (nomePeca.length){
    case 0:
        console.log("O nome da peça não pode ser vazio")
        break;
    case 1:
    case 2:
    case 3:
        console.log("O nome deve ter mais de 3 caracteres, digite um nome adequado")
        break;
    default:
        console.log("Nome da peça está adequado")
        break;  

}
