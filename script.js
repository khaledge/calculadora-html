/*
Nessa parte do JS são apenas Eventos com funções.
*/

function somar(){       //somar
    var soma1 = Number(window.document.getElementById('texto1').value)
    var soma2 = Number(window.document.getElementById('texto2').value)
    var resultado = window.document.getElementById('resultado') 
    var resu = soma1 + soma2
    resultado.innerText = `O resultador de ${soma1} + ${soma2} é igual a ${resu}.`
}
function multiplicar(){         //multiplicar
    var soma1 = Number(window.document.getElementById('texto1').value)
    var soma2 = Number(window.document.getElementById('texto2').value)
    var resultado = window.document.getElementById('resultado') 
    var resu = soma1 * soma2
    resultado.innerText = `O resultador de ${soma1} * ${soma2} é igual a ${resu}.`
}
function subtrair(){        //subtrair
    var soma1 = Number(window.document.getElementById('texto1').value)
    var soma2 = Number(window.document.getElementById('texto2').value)
    var resultado = window.document.getElementById('resultado') 
    var resu = soma1 - soma2
    resultado.innerText = `O resultador de ${soma1} - ${soma2} é igual a ${resu}.`
}
function dividir(){         //dividir
    var soma1 = Number(window.document.getElementById('texto1').value)
    var soma2 = Number(window.document.getElementById('texto2').value)
    var resultado = window.document.getElementById('resultado') 
    var resu = soma1 / soma2
    resultado.innerText = `O resultador de ${soma1} / ${soma2} é igual a ${resu}.`
}

/*
Já nessa parte dos botões usei também no caso das funções, porem com o lance de disparar a mensagem no input.
*/

function um() {
    var write1 = window.document.getElementById('texto1').value = 1
    var write2 = window.document.getElementById('texto2').value = 1
 
}
function dois() {
    var write1 = window.document.getElementById('texto1').value = 2
    var write2 = window.document.getElementById('texto2').value = 2
 
}
function tres() {
    var write1 = window.document.getElementById('texto1').value = 3
    var write2 = window.document.getElementById('texto2').value = 3
 
}
function quatro() {
    var write1 = window.document.getElementById('texto1').value = 4
    var write2 = window.document.getElementById('texto2').value = 4
 
}
function cinco() {
    var write1 = window.document.getElementById('texto1').value = 5
    var write2 = window.document.getElementById('texto2').value = 5
 
}
function seis() {
    var write1 = window.document.getElementById('texto1').value = 6
    var write2 = window.document.getElementById('texto2').value = 6
 
}
function sete() {
    var write1 = window.document.getElementById('texto1').value = 7
    var write2 = window.document.getElementById('texto2').value = 7
 
}
function oito() {
    var write1 = window.document.getElementById('texto1').value = 8
    var write2 = window.document.getElementById('texto2').value = 8
 
}
function nove() {
    var write1 = window.document.getElementById('texto1').value = 9
    var write2 = window.document.getElementById('texto2').value = 9
 
}
function zero() {
    var write1 = window.document.getElementById('texto1').value = 0
    var write2 = window.document.getElementById('texto2').value = 0
 
}

// foi o mesmo esquema.