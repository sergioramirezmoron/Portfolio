document.addEventListener("DOMContentLoaded", () => {
  // Botón modo oscuro
  const btn = document.getElementById("toggle-dark");
  if (btn) {
    btn.addEventListener("click", () => {
      document.body.classList.toggle("dark");
    });
  }
});
