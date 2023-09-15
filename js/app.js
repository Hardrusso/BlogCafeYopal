// Seleccionadores 

// querySelector => selecciona 0 o 1 elemento
const heading = document.querySelector('.header__texto h2');
console.log(heading);

heading.textContent = 'JONATHAN CARO - THE BEST DB PROGRAMMER';


//querySelectorAll => selecciona varios elementos
const enlaces = document.querySelectorAll('.navegacion a');
console.log(enlaces);

enlaces[0].textContent = 'Jonathan';
enlaces[0].classList.add('nueva-clase');

//getElementById
const heading1 = document.getElementById('heading');
console.log(heading1);


// GENERAR UN NUEVO ENLACE
const nuevoEnlace = document.createElement('A');
// generar el texto
nuevoEnlace.textContent = 'Nuevo Enlace';
// generar el href
nuevoEnlace.href = 'jonathan.caro.com.co';
// generar la clase
nuevoEnlace.classList.add('navegacion__enlace');
console.log(nuevoEnlace);

// Agregarlo al documento
const navegacion = document.querySelector('.navegacion');
navegacion.appendChild(nuevoEnlace);


// EVENTOS  

console.log(1);

window.addEventListener('load', function() { // 'load' espera que el JS y los archivos que dependen de html esten listos
    console.log(2);
});

window.onload = function(){
    console.log(3);    
};

document.addEventListener('DOMContentLoaded', function(){ // 'DomContentLoaded' solo espera a que se descargue por el html, no espera css o imagenes
    console.log(4);
});

console.log(5);

// window.onscroll = function(){
//     console.log('scrolling.....');
// }

// Seleccionar elementos y asociarles un evento

const btnEnviar = document.querySelector('.boton--primario');
btnEnviar.addEventListener('click', function(evento){
    console.log(evento);
    evento.preventDefault();
    console.log('enviando formulario');    
});
