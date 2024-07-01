const url_usuario = "http://api-storage-tiaw-navy.vercel.app/usuarios";

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
                    url_pic: "",
                    requisitos:{
                        "peso": false,
                        "idade": false,
                        "viagem": false,
                        "ist": false,
                        "hep/hiv": false,
                        "doenca": false
                    },
                    url_perfil: "telaperfil.html?id="+last_id.toString()
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