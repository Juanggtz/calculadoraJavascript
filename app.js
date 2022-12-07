/*---------------DOM----------------- */
let btn_0 = document.getElementById("btn_0");
let btn_1 = document.getElementById("btn_1");
let btn_2 = document.getElementById("btn_2");
let btn_3 = document.getElementById("btn_3");
let btn_4 = document.getElementById("btn_4");
let btn_5 = document.getElementById("btn_5");
let btn_6 = document.getElementById("btn_6");
let btn_7 = document.getElementById("btn_7");
let btn_8 = document.getElementById("btn_8");
let btn_9 = document.getElementById("btn_9");
let btn_point = document.getElementById("btn_point");
let btn_rst = document.getElementById("btn_rst");
let btn_sin = document.getElementById("btn_sin");
let btn_cos = document.getElementById("btn_cos");
let btn_tan = document.getElementById("btn_tan");
let btn_arcsin = document.getElementById("btn_arcsin");
let btn_arccos = document.getElementById("btn_arccos");
let btn_arctan = document.getElementById("btn_arctan");
let btn_parentizq = document.getElementById("btn_parentizq");
let btn_parentder = document.getElementById("btn_parentder");
let btn_mas = document.getElementById("btn_mas");
let btn_menos = document.getElementById("btn_menos");
let btn_por = document.getElementById("btn_por");
let btn_entre = document.getElementById("btn_entre");
let btn_backspace = document.getElementById("btn_backspace");
let entrada = document.getElementById("input");
let btn_igual = document.getElementById("btn_igual");
let btn_pi = document.getElementById("btn_pi");
let btn_e = document.getElementById("btn_e");
let btn_ln = document.getElementById("btn_ln");
let btn_exp = document.getElementById("btn_exp");
let output = document.getElementById("output");

/*---------------Botones Onclick de Post------- */
btn_0.onclick = function () {entrada.value += 0;}
btn_1.onclick = function () {entrada.value += 1;}
btn_2.onclick = function () {entrada.value += 2;}
btn_3.onclick = function () {entrada.value += 3;}
btn_4.onclick = function () {entrada.value += 4;}
btn_5.onclick = function () {entrada.value += 5;}
btn_6.onclick = function () {entrada.value += 6;}
btn_7.onclick = function () {entrada.value += 7;}
btn_8.onclick = function () {entrada.value += 8;}
btn_9.onclick = function () {entrada.value += 9;}
btn_point.onclick = function(){
    if (!entrada.value.includes('.'))
        entrada.value += "."
}
btn_backspace.onclick = function (){entrada.value = entrada.value.slice(0,-1);}

/*--------------Funciones trigonométricas----- */
btn_sin.onclick = function(){entrada.value += "sin(";}
btn_cos.onclick = function(){entrada.value += "cos(";}
btn_tan.onclick = function(){entrada.value += "tan(";}
btn_arcsin.onclick = function(){entrada.value += "aSin(";}
btn_arccos.onclick = function(){entrada.value += "aCos(";}
btn_arctan.onclick = function(){entrada.value += "aTan(";}

/*----------------Logaritmos---------- */
btn_ln.onclick = function(){entrada.value += "ln(";}

/*---------------Exponente-------- */
btn_exp.onclick = function(){
    if ((!entrada.value.includes("^")))
        entrada.value += "^"
}

/*----------Paréntesis---------- */
btn_parentizq.onclick = function(){entrada.value += "(";}
btn_parentder.onclick = function(){entrada.value += ")";}

/*-----------Constantes---------- */
btn_pi.onclick = function(){entrada.value += "π";}
btn_e.onclick = function(){entrada.value += "e";}

/*---------------RESET----------------- */
btn_rst.onclick = function() {
    entrada.value = "";
    output.innerHTML = "";
}

/*---------------KEYDOWNS------------------- */
window.addEventListener("keydown",function(e){
    keyDowns(e);
});

/*--------------Operadores-----------*/

btn_mas.onclick = function(){entrada.value += "+";}
btn_menos.onclick = function(){entrada.value += "-";}
btn_por.onclick = function(){entrada.value += "*";}
btn_entre.onclick = function(){entrada.value += "/";}
btn_igual.onclick = function(){
    igual();
}

/*------------función igualdad */

function igual(){

    let valor = entrada.value, valor1;

    if (entrada.value.includes('sin'))
        entrada.value = entrada.value.replace(/sin/g,'Math.sin');
    if (entrada.value.includes('cos'))
        entrada.value = entrada.value.replace(/cos/g,'Math.cos');
    if (entrada.value.includes('tan'))
        entrada.value = entrada.value.replace(/tan/g,'Math.tan');

    if (entrada.value.includes('aSin'))
        entrada.value = entrada.value.replace(/aSin/g,'Math.asin');
    if (entrada.value.includes('aCos'))
        entrada.value = entrada.value.replace(/aCos/g,'Math.acos');
    if (entrada.value.includes('aTan'))
        entrada.value = entrada.value.replace(/aTan/g,'Math.atan');

    if (entrada.value.includes('π'))
        entrada.value = entrada.value.replace(/π/g,'Math.PI');
    if (entrada.value.includes('e'))
        entrada.value = entrada.value.replace('e','Math.E');
    if (entrada.value.includes('ln'))
        entrada.value = entrada.value.replace('ln','Math.log');
    
    if (entrada.value.includes('^')){
        let base, exp;
        base = entrada.value.indexOf('^') - 1;
        base = entrada.value.slice(0, base+1);
        exp = entrada.value.indexOf('^') + 1;
        exp = entrada.value.slice(exp,entrada.value.length);
        entrada.value = entrada.value.replace(`${base}^${exp}`,`Math.pow(${base},${exp})`);
    }
    
    valor1 = eval(entrada.value);
    console.log(valor1);

    
    if (isNaN(valor1)){
        output.innerHTML = "Error"
        entrada.value = entrada.value
    } else {
        output.innerHTML = valor1;
        console.log(isNaN(valor1))
        entrada.value = valor;
    }
}

/*-----------------KeyDowns---------------- */

function keyDowns(e){
    if (e.key ==="0") entrada.value += 0;
    else if(e.key === "1") entrada.value += 1;
    else if(e.key === "2") entrada.value += 2;
    else if(e.key === "3") entrada.value += 3;
    else if(e.key === "4") entrada.value += 4;
    else if(e.key === "5") entrada.value += 5;
    else if(e.key === "6") entrada.value += 6;
    else if(e.key === "7") entrada.value += 7;
    else if(e.key === "8") entrada.value += 8;
    else if(e.key === "9") entrada.value += 9;
    else if(e.key === ".") {
        if (!entrada.value.includes('.'))
            entrada.value += "."
    }
    else if(e.key === "*") entrada.value += "*";
    else if(e.key === "+") entrada.value += "+";
    else if(e.key === "-") entrada.value += "-";
    else if(e.key === "/") entrada.value += "/";
    else if(e.key === "Enter") igual();
    else if(e.key === "Backspace") entrada.value = entrada.value.slice(0,-1);
}