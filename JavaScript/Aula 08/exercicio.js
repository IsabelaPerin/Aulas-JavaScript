function calcularMedia() {
    let nota1 = parseFloat(prompt(`Digite a sua primeira nota`));
    let nota2 = parseFloat(prompt(`Digite a sua segunda nota`));
    let media = (nota1 + nota2)/2;
    return `A sua média final é igual a ${media}`
}

alert(calcularMedia())