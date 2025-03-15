//validacion formulario
document.getElementById("contact-form").addEventListener("submit", function (e) {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;
  
    if (!name || !email || !message) {
      e.preventDefault(); 
      alert("Por favor completa todos los campos.");
    }
  });

  document.getElementById("contact-form").addEventListener("submit", function () {
    alert("¡Gracias por tu mensaje! Te responderemos pronto.");
  });
  