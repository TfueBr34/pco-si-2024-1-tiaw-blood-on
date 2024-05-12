//Declaração das rotas do JSON Server e da url atual da página
const url_topico = "http://localhost:3000/topicos";
const url_usuario = "http://localhost:3000/usuarios";
const url_page = window.location.href;

//Função que salva o usuário atual no storage da sessão
function set_user(usuario){
    sessionStorage.setItem("usuario",JSON.stringify(usuario));
}

//Função que verifica se o usuário já está salvo na sessão e, se não estiver, determinar o usuário que será salvo
async function verify_user(){
    let usuario = sessionStorage.getItem("usuario");
    
    if(usuario == null){
        usuario = await get_info(url_usuario+`?id=${1}`);
        set_user(usuario);
    }
}

//Função de coleta de informações do JSON Server dado o id do elemento
async function get_info(url) {
    const res = await fetch(url);
  
    return res.json();
}

//Função que constrói a porção do HTML que apresenta os tópicos salvos no JSON Server
function construir_topicos(){
    //Realiza a requisição dos dados no JSON Server
    fetch(url_topico).then(res => res.json()).then(async topicos => {
        let html_topicos = ""; 
        //Para cada dado encontrado adiciona o código HTML na página
        for(let i=0; i < topicos.length; i++){
            let id_user = topicos[i].user;
            let user = await get_info(url_usuario+`?id=${id_user}`);
            let current_user = JSON.parse(sessionStorage.getItem("usuario"));
            //Verifica se o usuário da sessão é o usuário do tópico alterando o HTML inserido se for
            if(current_user[0].id == user[0].id){
                html_topicos += `
                <div id="${topicos[i].id}" class="topico container">
                    <div class="row">
                        <div class="col-1 text-end">
                            <img src="${user[0].url_pic}" alt="foto de perfil">
                        </div>
                        <div class="col-9 mt-1 text-start">
                            <h6>${user[0].username}</h6>
                        </div>
                        <div class="col-2 text-end">
                            <i class="fa-solid fa-trash" onclick="deletar_topico(${topicos[i].id})"></i>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-12 text-center">
                            <p>
                            ${topicos[i].texto}
                            </p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-12 text-end">
                            <i class="fa-solid fa-thumbs-up"> ${topicos[i].num_curtida} </i>
                            <a href="comentario.html?id=${topicos[i].id}"><i class="fa-solid fa-comment"></i></a>
                            <i class="fa-solid fa-arrow-up-from-bracket" onclick="copy_link()"></i>
                        </div>
                    </div>
                </div>`;
            }else{
                html_topicos += `
                <div id="${topicos[i].id}" class="topico container">
                    <div class="row">
                        <div class="col-1 text-end">
                            <img src="${user[0].url_pic}" alt="foto de perfil">
                        </div>
                        <div class="col-11 mt-1 text-start">
                            <h6>${user[0].username}</h6>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-12 text-center">
                            <p>
                            ${topicos[i].texto}
                            </p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-12 text-end">
                            <i class="fa-solid fa-thumbs-up" onclick="curtir_topico(${topicos[i].id})"> ${topicos[i].num_curtida} </i>
                            <a href="comentario.html?id=${topicos[i].id}"><i class="fa-solid fa-comment"></i></a>
                            <i class="fa-solid fa-arrow-up-from-bracket" onclick="copy_link()"></i>
                        </div>
                    </div>
                </div>`;
            }
            section_topicos.innerHTML = html_topicos;
            //Salva o último id dos tópico do JSON
            last_id_topico = parseInt(topicos[i].id);
        }
    });
}

//Função que atualiza o tópico selecionado colocando mais uma curtida
async function curtir_topico(id_topico){
    let topico = await get_info(url_topico+`?id=${id_topico}`);
    topico[0].num_curtida += 1;
    topico = JSON.stringify(topico[0]);
    fetch(`${url_topico}/${id_topico}`,{
        method: "PUT",
        headers:{
            "Content-type": "aplication/json"
        },
        body: topico
    }).then(res => res.json()).then(() => location.reload());
}

//Função que deleta o tópico selecionado
function deletar_topico(id_topico){
    if(confirm("Deseja mesmo deletar o tópico?\nTodos os comentários e curtidas serão perdidos")){
        fetch(`${url_topico}/${id_topico}`,{
            method: "DELETE",
        }).then(res => res.json()).then(() => location.reload());
    }
}

//Função que adiciona um tópico no JSON
function add_topico(texto){
    last_id_topico+=1;
    let usuario = JSON.parse(sessionStorage.getItem("usuario"));
    const new_topico = JSON.stringify({
        id: last_id_topico.toString(),
        user: usuario[0].id,
        texto: texto,
        num_curtida: 0,
        comentarios: []
    });
    fetch(url_topico,{
        method: "POST",
        headers:{
            "Content-type": "aplication/json"
        },
        body: new_topico
    }).then(res => res.json()).then(() => location.reload());
}

//Função que deleta um comentário
async function deletar_comentario(id_comentario){
    if(confirm("Deseja mesmo deletar o comentário?")){
        let id_topico = url_page.split("=")[1];
        let topico = await get_info(url_topico+`?id=${id_topico}`);
        let comentario = [];
        for(let i = 0; i < topico[0].comentarios.length; i++){
            if(topico[0].comentarios[i].id != id_comentario){
                comentario[i] = {
                    id: topico[0].comentarios[i].id,
                    user: topico[0].comentarios[i].user,
                    texto: topico[0].comentarios[i].texto,
                    num_curtida: topico[0].comentarios[i].num_curtida
                };
            }
        }

        const new_topico= JSON.stringify({
            id: topico[0].id,
            user: topico[0].user,
            texto: topico[0].texto,
            num_curtida: topico[0].num_curtida,
            comentarios: comentario
        });
        fetch(`${url_topico}/${id_topico}`,{
            method: "PUT",
            headers:{
                "Content-type": "aplication/json"
            },
            body: new_topico
        }).then(res => res.json()).then(() => location.reload());
    }
}

//Função que constrói a porção do HTML que apresenta os comentarios do tópico selecionado
async function construir_comentarios(){
    let id_topico = url_page.split("=")[1];
    let topico = await get_info(url_topico+`?id=${id_topico}`);
    let comentarios = document.getElementById("comentarios");
    let user = await get_info(url_usuario+`?id=${topico[0].user}`);
    let current_user = JSON.parse(sessionStorage.getItem("usuario"));
    let div_topico = document.getElementById("topico");
    let html_topico = "";
    //Essa porção adiciona o tópico no começo da página, da mesma forma que a função construir_tópicos
    if(current_user[0].id == user[0].id){
        html_topico = `
        <div class="row">
            <div class="col-1 text-end">
                <img src="${user[0].url_pic}" alt="foto de perfil">
            </div>
            <div class="col-9 mt-1 text-start">
                <h6>${user[0].username}</h6>
            </div>
            <div class="col-2 text-end">
                <i class="fa-solid fa-trash" onclick="deletar_topico(${topico[0].id})"></i>
            </div>
        </div>
        <div class="row">
            <div class="col-12 text-center">
                <p>
                ${topico[0].texto}
                </p>
                <a href="comentario.html"><span></span></a>
            </div>
        </div>
        <div class="row">
            <div class="col-12 text-end">
                <i class="fa-solid fa-thumbs-up"> ${topico[0].num_curtida} </i>
                <i class="fa-solid fa-arrow-up-from-bracket" onclick="copy_link()"></i>
            </div>
        </div>`;
    }else{
        html_topico = `
        <div class="row">
            <div class="col-1 text-end">
                <img src="${user[0].url_pic}" alt="foto de perfil">
            </div>
            <div class="col-11 mt-1 text-start">
                <h6>${user[0].username}</h6>
            </div>
        </div>
        <div class="row">
            <div class="col-12 text-center">
                <p>
                ${topico[0].texto}
                </p>
                <a href="comentario.html"><span></span></a>
            </div>
        </div>
        <div class="row">
            <div class="col-12 text-end">
                <i class="fa-solid fa-thumbs-up" onclick="curtir_topico(${topico[0].id})"> ${topico[0].num_curtida} </i>
                <i class="fa-solid fa-arrow-up-from-bracket" onclick="copy_link()"></i>
            </div>
        </div>`;
    }
    div_topico.innerHTML = html_topico;

    //Para cada comentário presente no código adiciona ele no HTML
    for(let i=0; i < topico[0].comentarios.length; i++){
        let user = await get_info(url_usuario+`?id=${topico[0].comentarios[i].user}`);
        let html_comentarios = "";
        //Verifica se o usuário da sessão é o usuário do comentário alterando o HTML inserido se for
        if(current_user[0].id == user[0].id){
            html_comentarios = `
            <div class="topico container">
                <div class="row">
                    <div class="col-1 text-end">
                        <img src="${user[0].url_pic}" alt="foto de perfil">
                    </div>
                    <div class="col-9 mt-1 text-start">
                        <h6>${user[0].username}</h6>
                    </div>
                    <div class="col-2 text-end">
                        <i class="fa-solid fa-trash" onclick="deletar_comentario(${topico[0].comentarios[i].id})"></i>
                    </div>
                </div>
                <div class="row">
                    <div class="col-12 text-center">
                        <p>
                        ${topico[0].comentarios[i].texto}
                        </p>
                        <a href="comentario.html"><span></span></a>
                    </div>
                </div>
                <div class="row">
                    <div class="col-12 text-end">
                        <i class="fa-solid fa-thumbs-up"> ${topico[0].comentarios[i].num_curtida} </i>
                        <i class="fa-solid fa-arrow-up-from-bracket" onclick="copy_link()"></i>
                    </div>
                </div>
            </div>`;
        }else{
            html_comentarios = `
            <div class="topico container">
                <div class="row">
                    <div class="col-1 text-end">
                        <img src="${user[0].url_pic}" alt="foto de perfil">
                    </div>
                    <div class="col-11 mt-1 text-start">
                        <h6>${user[0].username}</h6>
                    </div>
                </div>
                <div class="row">
                    <div class="col-12 text-center">
                        <p>
                        ${topico[0].comentarios[i].texto}
                        </p>
                        <a href="comentario.html"><span></span></a>
                    </div>
                </div>
                <div class="row">
                    <div class="col-12 text-end">
                        <i class="fa-solid fa-thumbs-up" onclick="curtir_comentario(${topico[0].comentarios[i].id})"> ${topico[0].comentarios[i].num_curtida} </i>
                        <i class="fa-solid fa-arrow-up-from-bracket" onclick="copy_link()"></i>
                    </div>
                </div>
            </div>`;
        }
        comentarios.innerHTML += html_comentarios;
        //Salva o último id dos comentários do tópico
        last_id_comentario = parseInt(topico[0].comentarios[i].id);
    }
}

//Função que adiciona um comentário no tópico
async function add_comentario(texto){
    last_id_comentario+=1;
    let id_topico = url_page.split("=")[1];
    let topico = await get_info(url_topico+`?id=${id_topico}`);
    let usuario = JSON.parse(sessionStorage.getItem("usuario"));
    let comentario = {
        id: last_id_comentario.toString(),
        user: usuario[0].id,
        texto: texto,
        num_curtida: 0
    };
    topico[0].comentarios.push(comentario);
    const new_topico= JSON.stringify({
        id: topico[0].id,
        user: topico[0].user,
        texto: topico[0].texto,
        num_curtida: topico[0].num_curtida,
        comentarios: topico[0].comentarios
    });
    fetch(`${url_topico}/${id_topico}`,{
        method: "PUT",
        headers:{
            "Content-type": "aplication/json"
        },
        body: new_topico
    }).then(res => res.json()).then(() => location.reload());
}

//Função para curtir um comentário do tópico
async function curtir_comentario(id_comentario){
    let id_topico = url_page.split("=")[1];
    let topico = await get_info(url_topico+`?id=${id_topico}`);
    topico[0].comentarios[id_comentario-1].num_curtida += 1;
    topico = JSON.stringify(topico[0]);
    fetch(`${url_topico}/${id_topico}`,{
        method: "PUT",
        headers:{
            "Content-type": "aplication/json"
        },
        body: topico
    }).then(res => res.json()).then(() => location.reload());
}

//Função que copia o link atual da página para a área de transferência
function copy_link(){
    navigator.clipboard.writeText(url_page);
    alert("Link de compartilhamento copiado para a área de tranferência!");
}

verify_user();

//Verifica se a página atual é a mural ou comentários
if(url_page.includes("comentario")){

    construir_comentarios();
    var last_id_comentario;

    //Espera a página carregar para continuar
    window.addEventListener("load", function () {
        let text = document.getElementById("postagem");
        let post = document.querySelector("#form_post button");

        //Faz com que o botão de postar seja visível ao clicar na área de texto
        text.addEventListener("focus", function(){
            post.classList.remove("d-none");
        }, false);
        
        //Faz com que o botão de postar não seja mais visível ao clicar fora da área de texto
        text.addEventListener("blur", function(){
            if(text.value.trim() == ""){
                post.classList.add("d-none");
            }
        }, false);
        
        //Configura o comportamento do botão de postar (Posta o comentário se houver texto escrito na área de texto)
        post.addEventListener("click", function(event){
            event.preventDefault();
            let postagem = text.value.trim();
            if(postagem == ""){
                alert("Campo de postagem não pode ser enviado vazio!");
            }else{
                text.value = "";
                post.classList.add("d-none");
                add_comentario(postagem);
            }
        }, false);
    });
}else{

    construir_topicos();
    var section_topicos = document.getElementById("topicos");
    var last_id_topico;

    //Espera a página carregar para continuar
    window.addEventListener("load", function () {
        let text = document.getElementById("postagem");
        let post = document.querySelector("#form_post button");

        //Faz com que o botão de postar seja visível ao clicar na área de texto
        text.addEventListener("focus", function(){
            post.classList.remove("d-none");
        }, false);
        
        //Faz com que o botão de postar não seja mais visível ao clicar fora da área de texto
        text.addEventListener("blur", function(){
            if(text.value.trim() == ""){
                post.classList.add("d-none");
            }
        }, false);
        
        //Configura o comportamento do botão de postar (Posta o tópico se houver texto escrito na área de texto)
        post.addEventListener("click", function(event){
            event.preventDefault();
            let postagem = text.value.trim();
            if(postagem == ""){
                alert("Campo de postagem não pode ser enviado vazio!");
            }else{
                text.value = "";
                post.classList.add("d-none");
                add_topico(postagem);
            }
        }, false);
    });
}