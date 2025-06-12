document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("loginForm");

  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      const usuario = document.getElementById("usuario").value;
      const senha = document.getElementById("senha").value;

      // Validação simulada
      if (usuario === "admin" && senha === "1234") {
        window.location.href = "principal.html";
      } else {
        alert("Usuário ou senha inválidos.");
      }
    });
  }
});
