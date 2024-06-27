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

    // Converte os dados para Json e armazena no localStorage
    localStorage.setItem('userData', JSON.stringify(userData));

    // Exibe uma mensagem de sucesso após o cadastro
    alert('Cadastro realizado com sucesso!');

    
});
