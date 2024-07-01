//Declaração da rota do JSON Server
const url_sangue = "https://api-storage-tiaw-navy.vercel.app/tipos_sangue";

//Função de coleta de informações do JSON Server dado o id do elemento
async function get_info(url) {
    const res = await fetch(url);
  
    return res.json();
}

//Função para configurar a imagem correta na seção de estoque de sangue, baseado nos dados armazenados em JSON
async function set_medidores(){
    images = document.querySelectorAll(".blood");
    for(let i = 0; i < images.length; i++){
        let tipo_sangue = await get_info(url_sangue+"?id="+images[i].id);
        images[i].src += "cat_"+tipo_sangue[0].id_categoria_qt+".png";
    }
}

//Aguarda o conteúdo do html carregar para continuar
window.addEventListener("DOMContentLoaded",function(){
    set_medidores();

    let images = document.querySelectorAll(".blood");

    //Para cada imagem encontrada na seção de estoque adiciona uma função onclick que cria uma caixa informativa sobre o tipo sanguíneo selecionado
    images.forEach(image =>{
        image.addEventListener("click", async function(){
            let box_description = document.getElementById("dialog");
            box_description.classList.remove("d-none");
            let tipo_sangue = await get_info(url_sangue+"?id="+image.id);
            //Realiza o tratamento do nome do JSON
            let nome_extenso = tipo_sangue[0].nome_tipo.substr(0, tipo_sangue[0].nome_tipo.length-1) + " ";
    
            switch(tipo_sangue[0].nome_tipo.substr(tipo_sangue[0].nome_tipo.length-1, tipo_sangue[0].nome_tipo.length)){
                case "+":
                    nome_extenso += "Positivo";
                    break;
                case "-":
                    nome_extenso += "Negativo";
                    break;
                default:
                    console.log("Erro ao catalogar nome do tipo sanguíneo!");
                    break;
            }
            //Determina o nome do estado atual do estoque
            switch(tipo_sangue[0].id_categoria_qt){
                case 1:
                    estado = "Crítico";
                    break;
                case 2:
                    estado = "Alerta";
                    break;
                case 3:
                    estado = "Adequado";
                    break;
                case 4:
                    estado = "Estável";
                    break;
                default:
                    console.log("Erro ao catalogar estado do estoque!");
                    break;
            }
    
            let html_description = `<div class="description">
                        <div class="text-end">
                            <i class="fa-solid fa-xmark fa-xl" onclick="close_dialog()"></i>
                        </div>
                        <h4>Tipo Sanguíneo:</h4><h6>${nome_extenso}</h6>
                        <hr>
                        <h4>Estado do Estoque:</h4><h6>${estado}</h6>
                        <hr>
                        <h4>Momento recomendado para doar:</h4><h6>${tipo_sangue[0].dsc_categoria}</h6>
                        <hr>
                        <h4>Dados atualizados em:</h4><h6>${tipo_sangue[0].data_att}  <i class="fa-solid fa-plus" ondblclick="saiba_mais()"></i></h6>
                    </div>`;
            box_description.innerHTML = html_description;
        },false);
    });
},false);

//Função que fecha o painel informativo
function close_dialog(){
    let box_description = document.getElementById("dialog");
    box_description.classList.add("d-none");
}

//Função que substitui o painel atual por uma explicação da origem dos dados do estoque
function saiba_mais(){
    let box_description = document.getElementById("dialog");
    let html_description = `<div class="description">
                                <div class="text-end">
                                    <i class="fa-solid fa-xmark fa-xl" onclick="close_dialog()"></i>
                                </div>
                                <p>Os dados da seção de estoque são fornecidos pelos centros de coleta de sangue cadastrados nesse site, por isso podem não representar a real situação do estoque de sangue em seu estado. Para mais informações sobre a situação atual do estoque de sangue no estado de Minas Gerais acesse o site do <a href="https://www.hemominas.mg.gov.br/">hemominas</a></p>
                            </div>`;
    box_description.innerHTML = html_description;
}