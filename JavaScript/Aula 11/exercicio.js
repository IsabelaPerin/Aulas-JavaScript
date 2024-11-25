let carros = [`CELTA`, `GOL`, `PRISMA`, `CHEVETTE` ]

let novosCarros = ((carros)=>{
    return carros.toLowerCase()
})

carros.forEach ((carros, cadastro, ArrayCompleto ) => {
    console.log(`Modelo do carro: ${carros}`);
    console.log(`ID do carro: ${cadastro}`);
    console.log(`Lista: ${ArrayCompleto}`);
    console.log(carros);
    console.log(novosCarros);
    console.log(`-----------------------`);
})

let filtro = carros.filter((carros)=>{
    return carros == `PRISMA` 
})

console.log(`Filtro: ${filtro}`);


