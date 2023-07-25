// AND
function mayorYMenor (num) {
    if(num > 5 && num < 10) console.log(true);

};

mayorYMenor(2);
mayorYMenor(7);

function mayorYMenorYPar(num){
    if (num > 5 && num < 10 && num % 2===0) console.log(true);
    else console.log(false);
};

mayorYMenorYPar(7);
mayorYMenorYPar(8);

// El primer ejemplo '7' es FALSE porque no cumple la condicion de ser par.
// El segundo ejemplo '8' es TRUE porque cumple con todas las condiciones.  

// OR
function operadorOr(str){
    if (str === 'Henry' || str.length < 2) console.log(true);
    else console.log(false);
};

operadorOr('Henry');
operadorOr('JavaScrip');
operadorOr('H');

// 'Henry' cumple primera condicion. 'Javascript' no cumple ninguna de las condiciones. 
// 'H' cumple la segunda condicion, es menor de 2 caracteres. 

// NOT
function negacion(permiso){
    if(!permiso) console.log('Tiene permiso');
}

negacion(true)
negacion(false)

// El '!' en el condicional pregunta el valor opuesto del parametro. 
// En este caso el valor solo se imprimira 'Tiene permiso' si el valor es FALSE.


//CONDICION COMPLEJA
function condicionCompleja(num){
    if(num > 9 && num % 2 === 0 || num === 3) console.log(true);
    else console.log(false);
};

// esta condicion pregunta si el numero recibido es mayor a 9
// si es divisible por 2 (par) o si es igual a 3. 
// en este caso se tienen que cumplir dos condiciones para que imprima TRUE.
// por un lado tiene que ser mayor a 9 y por otro tiene que ser par o igual a 3.

condicionCompleja(10);
condicionCompleja(6);
condicionCompleja(3);
condicionCompleja(5);

// es importante recordar la precedencia de operadores.
// En este caso el operador || precede al operador &&.




