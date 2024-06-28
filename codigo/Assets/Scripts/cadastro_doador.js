// document.getElementById('registrationForm').addEventListener('submit', function(event) {
//     event.preventDefault(); // Impede o envio do formulário

//     // Coleta os dados do formulário
//     const userData = {
//         razaoSocial: document.getElementById('razaoSocial').value,
//         email: document.getElementById('email').value,
//         senha: document.getElementById('senha').value,
//         repetirSenha: document.getElementById('repetirSenha').value,
//         logradouro: document.getElementById('logradouro').value,
//         bairro: document.getElementById('bairro').value,
//         cidade: document.getElementById('cidade').value,
//         telefone: document.getElementById('telefone').value
//     };

//     // Converte os dados para Json e armazena no localStorage
//     localStorage.setItem('userData', JSON.stringify(userData));

//     // Exibe uma mensagem de sucesso após o cadastro
//     alert('Cadastro realizado com sucesso!');

    
// });

const url_usuario = "http://localhost:3000/usuarios";

function salva_doador(){
    if(document.getElementById('telefone').value){

    }
    let userData = {
        nome: document.getElementById('name').value,
        email: document.getElementById('email').value,
        senha: document.getElementById('senha').value,
        bairro: document.getElementById('bairro').value,
        cidade: document.getElementById('cidade').value,
        dt_nasc: document.getElementById('dt_nasc').value,
        telefone: document.getElementById('telefone').value,
        sex: document.querySelector('input[name="sexo"]:checked').value
    };

    fetch(url_usuario,{
        method: "POST",
        headers:{
            "Content-type": "aplication/json"
        },
        body: userData
    }).then(res => res.json()).then(() => location.reload());
}