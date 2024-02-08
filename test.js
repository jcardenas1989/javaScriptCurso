const tipoDeSuscripcion = "Basic";

switch (tipoDeSuscripcion) {
   case "Free":
       console.log("Solo puedes tomar los cursos gratis");
       break;
   case "Basic":
       console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
       break;
   case "Expert":
       console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
       break;
   case "ExpertPlus":
       console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
       break;
}

var resultado= function(){
    const tipoDeSuscripcionn = "Basic";
    if(tipoDeSuscripcionn ==="Free"){
       console.log("Solo puedes tomar los cursos gratis");
    }
     if (tipoDeSuscripcionn === "Basic"){
        console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
    }
    if (tipoDeSuscripcionn === "Expert"){
        console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
    }
    if (tipoDeSuscripcionn === "ExpertPlus"){
        console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
    }
}
resultado();

///// ciclos 

for (let i = 0; i < 5; i++) {
    console.log("El valor de i es: " + i);
}
var i=0;
while(i<5){
    console.log("El valor de i es: " + i); 
    i++;
}

///
for (let i = 10; i >= 2; i--) {
    console.log("El valor de i es: " + i);
}

var i=10;
while(i>=2){
    console.log("El valor de i es: " + i); 
    i--;
}
///

var numero= Number(prompt("Cuanto es 2 + 2 ?"));

    if(numero === 4){
        console.log("felicitaciones!");
    }else{
        numero= Number(prompt("No es correcto, Cuanto es 2 + 2 ?"));
        if(numero === 4){
            console.log("felicitaciones!");
        }
    }
    
///// listas arrays o objetos

var nombres =["javier","nidia","martin"];

var resultado= function (nombres){
    return console.log(nombres[0]);
}
resultado(nombres);

var nombres =["javier","nidia","martin"];
var resultadoNombres= function (nombres){
    for(var i=0; i< nombres.length;i++){
        console.log(nombres[i]);
    }    
}
resultadoNombres(nombres);

// objetos

var cars =[{
    placa:"AAA1",
    color:"rojo",
    modelo:2021,
    marca:"chevrolet"
}]

function retornaCar(cars){

    for(var i in cars){
        console.log(cars[i]);
    }
}
retornaCar(cars);