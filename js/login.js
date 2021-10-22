import { Usuario } from './usuario.js';

const processForm = (event, options) => {
    event.preventDefault(); // Prevent default action of form
    login() // Perform Logic
};
document.querySelector('form').addEventListener('submit', processForm);


async function login() {
    const data = {
            correo: document.querySelector('#correo').value,
            password: document.querySelector('#pass').value
        }
        // const params = {
        //     method: 'POST',
        //     body: JSON.stringify(data),
        //     mode: 'no-cors', // no-cors, *cors, same-origi
        // }
        // const response = await fetch('http://localhost:3000/api/v1/login', params);

    const titulo = document.createElement('h1');
    titulo.textContent = `Bienvenido ${JSON.parse(localStorage.getItem('usuario')).correo}`;
    document.querySelector('body').appendChild(titulo)


    //console.log(response)
}