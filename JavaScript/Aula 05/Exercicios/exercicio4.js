let sla = 0;
let num1 = 0;
let num2 = 1;

while(sla < 10){
    console.log(num1);
    let troca = num1 + num2;
    num1 = num2;
    num2 = troca;
    sla ++
}