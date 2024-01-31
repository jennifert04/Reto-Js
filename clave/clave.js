window.onload = init;

let data = [0,1,2,3,4,5,6,7,8,9];

const teclado = document.getElementById("teclado");
const texto = document.getElementById("texto");
const numeros = teclado.getElementsByClassName("numero");
const borrar = document.getElementById("borrar");
const entrar = document.getElementById("entrar");

function init() {
  
  teclado.addEventListener("mouseenter", function() {
    ocultarNumeros();
  });

  teclado.addEventListener("mouseleave", function() {
    desordenarNumeros();
    mostrarNumeros();
  });

  Array.from(numeros).forEach(numero => {
    numero.addEventListener("click", function() {
      texto.value += numero.getAttribute("data-value"); 
    });
  });
  
  borrar.addEventListener("click", borrarNumero);
  
  entrar.addEventListener("click", () =>{
    alert("Vous êtes bienvenu(e)");
    texto.value = "";
  });
};

function desordenarNumeros() {
    //const numeros = Array.from({ length: 10 }, (_, index) => index.toString());
    data.sort(() => Math.random() - 0.5);

    Array.from(numeros).forEach((numero, index) => {
      numero.setAttribute("data-value", data[index]);
    });
  }

  function mostrarNumeros() {
    Array.from(numeros).forEach(numero => {
      numero.textContent = numero.getAttribute("data-value");
    });
  }

  function ocultarNumeros() {
    Array.from(numeros).forEach(numero => {
      numero.textContent = "*";
    });
  }

  function borrarNumero(){
    texto.value = texto.value.slice(0, -1);
  }
