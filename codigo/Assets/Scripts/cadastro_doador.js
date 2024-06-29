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

//Função de coleta de informações do JSON Server dado o id do elemento
async function get_info(url) {
    const res = await fetch(url);
  
    return res.json();
}

async function salva_doador(){
    if(document.getElementById("registrationForm").checkValidity()){
        let usuarios = await get_info(url_usuario);
        let last_id = 0;
        let has_mail;
        if(usuarios != null){
            usuarios.forEach(usuario => {
                if(document.getElementById('email').value.toLowerCase() == usuario.email){
                    has_mail = true;
                }
                last_id = parseInt(usuario.id);
            });
        }
        if(has_mail){
            alert("Email já está cadastrado no site");
        }else{
            if(document.getElementById('senha').value != document.getElementById('repetirSenha').value){
                alert("Senhas digitadas devem ser iguais");
            }else{
                last_id++;
                let userData =  JSON.stringify({
                    id: last_id.toString(),
                    username: document.getElementById('name').value,
                    email: document.getElementById('email').value.toLowerCase(),
                    senha: document.getElementById('senha').value,
                    bairro: document.getElementById('bairro').value.toLowerCase(),
                    cidade: document.getElementById('cidade').value.toLowerCase(),
                    dt_nasc: document.getElementById('dt_nasc').value,
                    telefone: document.getElementById('telefone').value,
                    sexo: document.querySelector('input[name="sexo"]:checked').value,
                    url_pic: ""
                });
                fetch(url_usuario,{
                    method: "POST",
                    headers:{
                        "Content-type": "aplication/json"
                    },
                    body: userData
                }).then(res => res.json()).then(() => location.assign("../index.html"));
            }
        }
    }
}