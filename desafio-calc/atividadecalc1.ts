const teclado = require (`prompt-sync`)();

let opcao : number = 1
let n1 : number = 0;
let n2 : number = 0;

while (opcao != 0) {
    console.log(`Digite 1 para +`);
    console.log(`Digite 2 para -`);
    console.log(`Digite 3 para /`);
    console.log(`Digite 4 para *`);
    console.log(`Digite 0 para sair`);

    opcao = teclado(`Digite sua opção`);

    if(opcao == 1){
        n1= parseInt(teclado(`Digite primeiro número para o calculo: `));
        n2= parseInt(teclado(`Digite segundo número para o calculo: `));

        console.log(`O valor da soma de ${n1} com ${n2} é ${n1 + n2}`);

    }
    else if (opcao == 2){
        n1= parseInt(teclado(`Digite primeiro número para o calculo: `));
        n2= parseInt(teclado(`Digite segundo número para o calculo: `));

        console.log(`O valor da subtração de ${n1} com ${n2} é ${n1 - n2}`);

    }
        else if (opcao == 3){
        n1= parseInt(teclado(`Digite primeiro número para o calculo: `));
        n2= parseInt(teclado(`Digite segundo número para o calculo: `));
    
        console.log(`O valor da divisão de ${n1} com ${n2} é ${n1 / n2}`);
    
    }
    else if (opcao == 4){
        n1= parseInt(teclado(`Digite primeiro número para o calculo: `));
        n2= parseInt(teclado(`Digite segundo número para o calculo: `));

        console.log(`O valor da multiplicação de ${n1} com ${n2} é ${n1 * n2}`);

    }
    else if (opcao == 0){
    console.log(`sair`);

}
