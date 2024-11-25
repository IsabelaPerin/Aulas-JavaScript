let peso = Number(prompt(`Qual é o seu peso? (Em quilogramas)`))
let altura = Number(prompt(`Qual é a sua altura? (Em metros)`))

function IMC(peso, altura) {
    
    let IMC = peso / (altura * altura);

    if (IMC < 16.9) {
        return(`O seu IMC está muito abaixo do peso.`)
    } else if (IMC >= 17 && IMC <= 18.4) {
        return(`O seu IMC está abaixo do peso`)
    }else if (IMC >= 18.5 && IMC <= 24.9) {
        return(`O seu IMC está dentro do índice saudável.`);
    }else if (IMC >= 25 && IMC <= 29.9) {
        return(`O seu IMC está acima do peso.`);
    }else if (IMC >= 30 && IMC <= 34.9) {
        return(`O seu IMC é igual a Obesidade grau I.`);
    }else if (IMC >= 35 && IMC <= 40) {
        return(`O seu IMC é igual a Obesidade grau II.`);
    }else if (IMC < 40) {
        return(`O seu IMC é igual a Obesidade grau III.`);
    }
}

alert(IMC(peso,altura))
