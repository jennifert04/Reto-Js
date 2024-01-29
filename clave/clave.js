window.onload = init;

document.addEventListener("DOMContentLoaded", function() {
  const keyboard = document.getElementById("keyboard");
  const inputBox = document.getElementById("inputBox");
  const keys = keyboard.getElementsByClassName("key");

  function shuffleKeyValues() {
    const values = Array.from({ length: 10 }, (_, index) => index.toString());
    values.sort(() => Math.random() - 0.5);

    Array.from(keys).forEach((key, index) => {
      key.setAttribute("data-value", values[index]);
    });
  }

  function showNumbers() {
    Array.from(keys).forEach(key => {
      key.textContent = key.getAttribute("data-value");
    });
  }

  function hideNumbers() {
    Array.from(keys).forEach(key => {
      key.textContent = "*";
    });
  }

  keyboard.addEventListener("mouseenter", function() {
    shuffleKeyValues();
    showNumbers();
  });

  keyboard.addEventListener("mouseleave", function() {
    hideNumbers();
  });

  Array.from(keys).forEach(key => {
    key.addEventListener("click", function() {
      inputBox.value += key.getAttribute("data-value");
    });
  });
});
