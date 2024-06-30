document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('loginForm').addEventListener('submit', function(event) {
        event.preventDefault();

        const razaoSocial = document.getElementById('login').value;
        const senha = document.getElementById('senha').value;

        const users = JSON.parse(localStorage.getItem('users')) || [];

        const user = users.find(user => user.razaoSocial === razaoSocial && user.senha === senha);

        if (user) {
            // Redirecionando para a página de teste após a validação bem-sucedida
            window.location.href = '../index.html';
        } else {
            alert('Login ou senha incorretos. Por favor, tente novamente.');
        }
    });
});
