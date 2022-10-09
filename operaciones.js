let a = parseInt(prompt('Ingrese un valor:'));
let b = parseInt(prompt('Ingrese otro valor:'));

/*let a = (a) =>{
    a=parseInt(prompt('Introdusca el primer valor: '));
    return(a);
};

let b = (b) =>{
    b=parseInt(prompt('Introdusca el primer valor: '));
    return(b);
};*/


let multiplicar = (a,b) =>{
    return(parseInt(a*b));
}; /*alert(multiplicar(a,b));*/

let dividir = (a,b) =>{
    return(parseInt(a/b));
}; /*alert(dividir(a,b));*/

let restar = (a,b) =>{
    return(parseInt(a-b));
}; /*alert(restar(a,b));*/

let suma = (a,b) =>{
    return(parseInt(a+b));
}; /*alert(suma(a,b));*/



function fnSumar(a,b){
    alert(parseInt(suma(a,b)));
};

function fnRestar(a,b){
    alert(parseInt(restar(a,b)));
};

function fnMultiplicar(a,b){
    alert(parseInt(multiplicar(a,b)));
};

function fnDividir(a,b){
    alert(parseInt(dividir(a,b)));
};

