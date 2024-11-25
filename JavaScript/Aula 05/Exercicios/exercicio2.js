let idade = prompt(`Insira aqui a sua idade:`);

while (idade > 0){
    idade ++
    console.log(`Idade Válida`);
}

do{
    console.log(`Idade Inválida`);
}while (idade < 0);
alert(`Digite novamente:`)