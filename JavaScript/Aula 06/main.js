let saborCafe = prompt(`Qual sabor de café você quer?`)

switch (saborCafe) {
    case 1:
        console.log("Mocaccino");
        break;

    case 2:
        console.log("Machiatto");
        break;

    case 3:
        console.log("Toddy");
        break;

    default:
        console.log("Água");
        break;
}