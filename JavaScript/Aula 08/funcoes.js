// ENTRADA - DADOS | SAIDA DADOS
// NAO TEM ENTRADA - DADOS | SAIDA DADOS
// NAO TEM ENTREADA - DADOS |  NAO TEM  SAIDA DADOS
// TEM ENTRADA | NAO TEM SAIDA DADOS

// media aluno;
// nota1 e nota2;

// function calcularMedia(nota1 = 0, nota2 = 0) {
//     let media = (nota1 + nota2)/2 
//     console.log(`Sua média é ${media}`);  
// }

// calcularMedia(7,9)


function calcularMedia(nota1 = 0, nota2 = 0) {
    let media = (nota1 + nota2)/2 
    return `A média do aluno é: ${media}`
}

console.log(calcularMedia(6,9));