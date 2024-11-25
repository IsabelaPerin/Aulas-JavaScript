let nome = prompt (`Insira o seu nome aqui`);
let idade = Number(prompt(`Insira aqui a sua idade`));
let genero = prompt (`Qual é o seu gênero?`);

let maiorIdade = idade >= 18;

alert (`${nome}, você é maior de idade ${maiorIdade}`)
alert (`${nome}, seu gênero é ${genero}`)