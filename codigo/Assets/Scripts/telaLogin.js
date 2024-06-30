const url_usuario = "http://localhost:3000/usuarios";

//Função de coleta de informações do JSON Server dado o id do elemento
async function get_info(url) {
    const res = await fetch(url);
  
    return res.json();
}

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('loginForm').addEventListener('submit', async function(event) {
        event.preventDefault();

        const email = document.getElementById('email').value.toLowerCase();
        const senha = document.getElementById('senha').value;

        let users = await get_info(url_usuario);
        let usuario = null;

        users.forEach(user => {
            if(user.email == email && user.senha === senha){
                usuario = user;
            }
        });

        if (usuario != null) {
            sessionStorage.setItem("usuario",JSON.stringify(usuario));
            // Redirecionando para a página de teste após a validação bem-sucedida
            window.location.href = '../index.html';
        } else {
            alert('Login ou senha incorretos. Por favor, tente novamente.');
        }
    });
});
