import { Usuario } from './usuario.js';

const processForm = (event, options) => {
    event.preventDefault(); // Prevent default action of form
    readForm() // Perform Logic
};
document.querySelector('form').addEventListener('submit', processForm);

function readForm() {
    const pass = document.querySelector('#password').value;
    const confirm = document.querySelector('#confirm-password').value;
    if (pass !== confirm) {
        alert('Las contraseñas no coinciden');
        return false;
    }
    const usuario = {};
    usuario.nombre = document.querySelector('#firstname').value;
    usuario.apellido = document.querySelector('#lastname').value;
    usuario.correo = document.querySelector('#email').value;
    usuario.password = pass;
    usuario.genero = document.querySelector('input[name=gender]:checked').value;
    usuario.hobbies = [];
    document.querySelectorAll('input[type=checkbox]').forEach(elem => {
        if (elem.checked) usuario.hobbies.push(elem.value);
    })
    usuario.edad = document.querySelector('input[type=number]').value;
    usuario.bio = document.querySelector('textarea').value;

    const usuarioListo = new Usuario(usuario);
    usuarioListo.registrar();


}