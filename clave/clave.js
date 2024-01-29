window.onload = init;

let data = [0,1,2,3,4,5,6,7,8,9];

 const keyboard = document.getElementById("keyboard");
 const inputBox = document.getElementById("inputBox");
 const keys = keyboard.getElementsByClassName("key");
const borrar = document.getElementById("borrar");
const entrar = document.getElementById("entrar");

function init() {
  
  keyboard.addEventListener("mouseenter", function() {
    desordenarNumeros();
    mostrarNumeros();
  });

  keyboard.addEventListener("mouseleave", function() {
    ocultarNumeros();
  });

  Array.from(keys).forEach(key => {
    key.addEventListener("click", function() {
      inputBox.value += key.getAttribute("data-value"); 
    });
  });
  
  borrar.addEventListener("click", borrarNumero);
  
  entrar.addEventListener("click", () =>{
    alert("Vous êtes bienvenu(e)");
    inputBox.value = "";
  });
};

function desordenarNumeros() {
    //const numeros = Array.from({ length: 10 }, (_, index) => index.toString());
    data.sort(() => Math.random() - 0.5);

    Array.from(keys).forEach((key, index) => {
      key.setAttribute("data-value", data[index]);
    });
  }

  function mostrarNumeros() {
    Array.from(keys).forEach(key => {
      key.textContent = key.getAttribute("data-value");
    });
  }

  function ocultarNumeros() {
    Array.from(keys).forEach(key => {
      key.textContent = "*";
    });
  }

  function borrarNumero(){
    inputBox.value = inputBox.value.slice(0, -1);
  }
