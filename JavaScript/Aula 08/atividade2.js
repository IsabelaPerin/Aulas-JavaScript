function conversao() {
    let real = Number(prompt(`Digite o valor em reais (R$) para a conversão:`))
    let converter = (real / 6.16)
    return `O valor convertido é igual a: €${converter.toFixed(2)}`
}

alert(conversao())