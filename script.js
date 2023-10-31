function adicao(){
    let num1 = parseFloat(document.getElementById('primeiroValor').value);                        
    let num2 = parseFloat(document.getElementById('segundoValor').value); 
    

document.getElementById('resultado').innerHTML= 'resultado:' +(num1 + num2);

}
function subtracao(){
    let num1 = parseFloat(document.getElementById('primeiroValor').value);                        
    let num2 = parseFloat(document.getElementById('segundoValor').value); 
  

document.getElementById('resultado').innerHTML= 'resultado:' +(num1 - num2);
}


function multiplicacao(){
    let num1 = parseFloat(document.getElementById('primeiroValor').value);                        
    let num2 = parseFloat(document.getElementById('segundoValor').value); 
    

document.getElementById('resultado').innerHTML= 'resultado:' +(num1 * num2);
}
function divisao(){
    let num1 = parseFloat(document.getElementById('primeiroValor').value);                        
    let num2 = parseFloat(document.getElementById('segundoValor').value); 
    

document.getElementById('resultado').innerHTML= 'resultado:' +(num1 / num2);
}
