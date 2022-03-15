document.querySelector(".signup-form").addEventListener("submit", function(event) {
    event.preventDefault()
});


const login = async() => {
    const usuario = {};
    usuario.correo = document.querySelector('#correo').value;
    usuario.password = document.querySelector('#pass').value;
    const params = {
        method: 'POST',
        body: JSON.stringify(usuario),
        mode: 'no-cors', // no-cors, *cors, same-origin,
        headers: {
            "Content-Type": "application/json"
        }
    };

    const response = await fetch('http://localhost:3000/api/v1/login', params);
    return false;
}

const boton = document.querySelector('#login');

boton.onclick = () => {
    login();
}