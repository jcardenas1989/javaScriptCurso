const h1= document.querySelector('h1');

const input1= document.querySelector('#calculo1');
const input2= document.querySelector('#calculo2');
const btn= document.querySelector('#btnCalcular');
const btnresultado= document.querySelector('#resultado');

function btnOnClick(){
    console.log(" se ejecuto el btn");
    let sumar= Number(input1.value)  + Number(input2.value);
    
    btnresultado.innerText= "Resultado: "+ String (sumar);
}