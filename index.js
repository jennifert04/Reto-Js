var lastScrollTop = 0;
    var header = document.getElementById("myHeader");

    window.addEventListener("scroll", function() {
      var scrollTop = window.scrollY;

      // Verifica si el scroll es hacia arriba o hacia abajo
      if (scrollTop > lastScrollTop) {
        // Hacia abajo
        header.style.top = "-100px"; // Oculta completamente el header
      } else {
        // Hacia arriba
        header.style.top = "0"; // Muestra el header
      }

      lastScrollTop = scrollTop;
    });