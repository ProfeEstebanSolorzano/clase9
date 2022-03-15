document.querySelector(".signup-form").addEventListener("submit", function(event) {
    event.preventDefault()
});

const procesarFormulario = async() => {
    try {
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
        console.log(usuario);

        const params = {
            method: 'POST',
            body: JSON.stringify(usuario),
            mode: 'no-cors', // no-cors, *cors, same-origin,
            headers: {
                "Content-Type": "application/json"
            }
        };
        console.log(params)
        const response = await fetch('http://localhost:3000/api/v1/registrar', params);

        if (response) {
            location.href = "http://localhost:5500/frontEnd/login.html";
        } else {
            alert('error registrando usuario')
        }
        return false;
    } catch (e) {
        console.log(e);
    }

    return false;

}