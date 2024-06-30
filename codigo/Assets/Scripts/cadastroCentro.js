document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio do formulário

    // Coleta os dados do formulário
    const userData = {
        razaoSocial: document.getElementById('razaoSocial').value,
        email: document.getElementById('email').value,
        senha: document.getElementById('senha').value,
        repetirSenha: document.getElementById('repetirSenha').value,
        logradouro: document.getElementById('logradouro').value,
        bairro: document.getElementById('bairro').value,
        cidade: document.getElementById('cidade').value,
        telefone: document.getElementById('telefone').value
    };

    // Verifica se as senhas coincidem
    if (userData.senha !== userData.repetirSenha) {
        alert('As senhas não coincidem!');
        return;
    }

    // Verifica se já existe um usuário com a mesma razão social
    const existingUsers = JSON.parse(localStorage.getItem('users')) || [];
    if (existingUsers.some(user => user.razaoSocial === userData.razaoSocial)) {
        alert('Usuário já existe!');
        return;
    }

    // Adiciona o novo usuário ao local storage
    existingUsers.push(userData);
    localStorage.setItem('users', JSON.stringify(existingUsers));

    alert('Cadastro realizado com sucesso!');
});
