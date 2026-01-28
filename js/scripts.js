document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    const usernameError = document.getElementById("usernameError");
    const passwordError = document.getElementById("passwordError");

    if (!username) {
        usernameError.textContent = "El usuario es requerido.";
        usernameError.style.display = "block";
    } else {
        usernameError.style.display = "none";
    }

    if (!password) {
        passwordError.textContent = "La contraseña es requerida.";
        passwordError.style.display = "block";
    } else {
        passwordError.style.display = "none";
    }

    if (username === "admin" && password === "1234") {
        window.location.href = "welcome.html";
    } else if (username && password) {
        alert("Usuario o contraseña incorrectos.");
    }
});
