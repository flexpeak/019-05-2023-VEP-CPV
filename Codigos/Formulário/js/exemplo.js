function ola (){
    alert("ola, sem bem vindos ao Vanilla JS")
}

function somar (){
    limparErro()
    let numero1 = Number(document.querySelector('#numero1').value)
    let numero2 = Number(document.querySelector('#numero2').value)
    //alert (numero1 + numero2)
    document.querySelector('#resultado').value = numero1 + numero2
}
function subtrair (){
    limparErro()
    let numero1 = Number(document.querySelector('#numero1').value)
    let numero2 = Number(document.querySelector('#numero2').value)
    let resultado = numero1 - numero2
    document.querySelector('#resultado').value = resultado
    let operacao = "-"
    gerarHistorico(numero1, numero2, resultado, operacao)
   
}
function multiplicar (){
    limparErro()
    let numero1 = Number(document.querySelector('#numero1').value)
    let numero2 = Number(document.querySelector('#numero2').value)
    document.querySelector('#resultado').value = numero1 * numero2
}
function dividir (){
    limparErro()
    let numero1 = Number(document.querySelector('#numero1').value)
    let numero2 = Number(document.querySelector('#numero2').value)
    if (numero2 !==0) document.querySelector('#resultado').value = numero1 / numero2
    else {
        //alert ("não existe divisão por zero")
        document.querySelector('#resultado').value = ""
        document.querySelector('#erro').innerHTML = "não existe divisão por 0"
    }
    
}
function limparErro(){
      document.querySelector('#erro').innerHTML  = ""
}
function limpar(){
    document.querySelector('#erro').innerHTML  = ""
    document.querySelector('#resultado').value = ""
    document.querySelector('#numero1').value = ""
    document.querySelector('#numero2').value = ""
    document.querySelector('#fui').style.visibility = "hidden" // "visible"
}
function gerarHistorico(numero1, numero2, resultado, operacao){
    document.querySelector('#historico').insertAdjacentHTML("afterbegin",`
    <tr>
    <td> ${numero1} </td>
    <td> ${operacao} </td>
    <td> ${numero2} </td>
    <td> ${resultado} </td>
    <td> <img width="10px" src="https://w7.pngwing.com/pngs/486/24/png-transparent-sigma-symbol-summation-number-computer-icons-excel-miscellaneous-blue-angle.png" alt=""></td>

    </tr>`)
}