// Ejemplo de función para búsqueda
const searchButton = document.querySelector('.search-bar button');
const searchInput = document.querySelector('.search-bar input');

searchButton.addEventListener('click', function() {
    const query = searchInput.value;
    alert('Buscando: ' + query);
    // Aquí podrías redirigir a una página de resultados o filtrar productos
});

// Abrir y cerrar el modal
const modal = document.getElementById("authModal");
const loginLink = document.querySelector(".user-options a"); 
const closeModal = document.querySelector(".close");

loginLink.onclick = function() {
    modal.style.display = "block";
};

closeModal.onclick = function() {
    modal.style.display = "none";
};

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
};

// Alternar entre formularios de inicio de sesión y registro
const loginForm = document.getElementById("loginForm");
const registerForm = document.getElementById("registerForm");
const toggleForm = document.getElementById("toggleForm");

toggleForm.onclick = function() {
    if (registerForm.style.display === "none") {
        registerForm.style.display = "block";
        loginForm.style.display = "none";
        toggleForm.innerHTML = "¿Ya tienes cuenta? <a href='#'>Inicia sesión aquí</a>";
    } else {
        registerForm.style.display = "none";
        loginForm.style.display = "block";
        toggleForm.innerHTML = "¿No tienes cuenta? <a href='#'>Regístrate aquí</a>";
    }
};
