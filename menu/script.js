function scrollToSection(id) {
    let seccion = document.querySelector(id);

    seccion.scrollIntoView({
        behavior: "smooth"
    });
    
    document.querySelectorAll("nav a").forEach(function (link) {
        link.classList.remove("active");
    });

    
    document.querySelector(id + "link").classList.add("active");
}
