const url_centros= "https://api-storage-tiaw-navy.vercel.app/pontosDoacao";

//Função de coleta de informações do JSON Server dado o id do elemento
async function get_info(url) {
    const res = await fetch(url);
  
    return res.json();
}

async function salva_centro(){
    if(document.getElementById("registrationForm").checkValidity()){
        let centros = await get_info(url_centros);
        let last_id = 0;
        let has_mail;
        if(centros != null){
            centros.forEach(centro=> {
                if(document.getElementById('email').value.toLowerCase() == centro.email){
                    has_mail = true;
                }
                last_id = parseInt(centro.id);
            });
        }
        if(has_mail){
            alert("Email já está cadastrado no site");
        }else{
            if(document.getElementById('senha').value != document.getElementById('repetirSenha').value){
                alert("Senhas digitadas devem ser iguais");
            }else{
                last_id++;
                console.log("A");
                let userData =  JSON.stringify({
                    id: last_id.toString(),
                    razaoSocial: document.getElementById('razaoSocial').value,
                    email: document.getElementById('email').value.toLowerCase(),
                    senha: document.getElementById('senha').value,
                    logradouro: document.getElementById('logradouro').value.toLowerCase(),
                    bairro: document.getElementById('bairro').value.toLowerCase(),
                    cidade: document.getElementById('cidade').value.toLowerCase(),
                    telefone: document.getElementById('telefone').value,
                    image: "",
                    url_perfil: "perfil_empresa.html?id"+last_id.toString()
                });
                fetch(url_centros,{
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