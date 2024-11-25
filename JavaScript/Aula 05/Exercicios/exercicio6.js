let nu;
let ns = 9;

do{
    nu = parseInt(prompt(`Insira um número de 0 a 10:`));

    if (nu===ns){
        alert(`Você Ganhou!!!`)
    }
    
    else{
        alert(`Você Perdeu!!!`)
    }
} while (nu !== ns);