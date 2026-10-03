// Modo oscuro

const botonModo = document.getElementById("modo");

botonModo.onclick = function(){

document.body.classList.toggle("dark");

if(document.body.classList.contains("dark")){

botonModo.innerHTML="☀️ Modo Claro";

}else{

botonModo.innerHTML="🌙 Modo Oscuro";

}

};


// Mostrar información

const botones=document.querySelectorAll(".info");

const textos=document.querySelectorAll(".textoOculto");

botones.forEach((boton,i)=>{

boton.addEventListener("click",()=>{

if(textos[i].style.display=="block"){

textos[i].style.display="none";

boton.innerHTML="Más información";

}else{

textos[i].style.display="block";

boton.innerHTML="Ocultar";

}

});

});


// Contador

let numero=1;

document.getElementById("mas").onclick=function(){

numero++;

document.getElementById("contador").innerHTML=numero;

}

document.getElementById("menos").onclick=function(){

if(numero>1){

numero--;

document.getElementById("contador").innerHTML=numero;

}

}


// Validación formulario

document.getElementById("formulario").addEventListener("submit",function(e){

e.preventDefault();

let nombre=document.getElementById("nombre").value;

let email=document.getElementById("email").value;

if(nombre=="" || email==""){

document.getElementById("mensaje").innerHTML="❌ Complete todos los campos.";

document.getElementById("mensaje").style.color="red";

}else{

document.getElementById("mensaje").innerHTML="✅ ¡Consulta enviada correctamente!";

document.getElementById("mensaje").style.color="green";

}
});
