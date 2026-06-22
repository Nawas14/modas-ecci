document.addEventListener("DOMContentLoaded", () => {
  const themeToggle = document.getElementById("themeToggle");
  const themeIcon = document.getElementById("themeIcon");

  // Se revisa el tema guardado anteriormente
  const savedTheme = localStorage.getItem("temaModaEcci");

  // Por defecto la página inicia clara
  if (savedTheme === "dark") {
    activarModoOscuro();
  } else {
    activarModoClaro();
  }

  themeToggle.addEventListener("click", () => {
    if (document.body.classList.contains("dark-theme")) {
      activarModoClaro();
    } else {
      activarModoOscuro();
    }
  });

  function activarModoOscuro() {
    document.body.classList.add("dark-theme");

    themeIcon.classList.remove("bi-moon-stars-fill");
    themeIcon.classList.add("bi-sun-fill");

    localStorage.setItem("temaModaEcci", "dark");
  }

  function activarModoClaro() {
    document.body.classList.remove("dark-theme");

    themeIcon.classList.remove("bi-sun-fill");
    themeIcon.classList.add("bi-moon-stars-fill");

    localStorage.setItem("temaModaEcci", "light");
  }
});