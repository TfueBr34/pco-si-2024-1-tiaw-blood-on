const url_sangue = "http://localhost:3000/tipos_sangue";
async function get_info(url) {
    const res = await fetch(url);
  
    return res.json();
}

async function set_medidores(){
    images = document.querySelectorAll(".blood");
    for(let i = 0; i < images.length; i++){
        let tipo_sangue = await get_info(url_sangue+"?id="+images[i].id);
        images[i].src = "Assets/cat_"+tipo_sangue[0].id_categoria_qt+".png";
    }
}

set_medidores();

window.addEventListener("DOMContentLoaded",function(){
    let images = document.querySelectorAll(".blood");
    images.forEach(image =>{
        image.addEventListener("click", async function(){
            let box_description = document.getElementById("dialog");
            box_description.classList.remove("d-none");
            let tipo_sangue = await get_info(url_sangue+"?id="+image.id);
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
                        <h4>Dados atualizados em:</h4><h6>${tipo_sangue[0].data_att}  <i class="fa-solid fa-plus" ondblclick="add_border()"></i></h6>
                    </div>`;
            box_description.innerHTML = html_description;
        },false);
    });
},false);

function close_dialog(){
    let box_description = document.getElementById("dialog");
    box_description.classList.add("d-none");
}

function add_border(){
    let box_description = document.getElementById("dialog");
    let html_description = `<div class="description">
                                <div class="text-end">
                                    <i class="fa-solid fa-xmark fa-xl" onclick="close_dialog()"></i>
                                </div>
                                <p>Os dados da seção de estoque são fornecidos pelos centros de coleta de sangue cadastrados nesse site, por isso podem não representar a real situação do estoque de sangue em seu estado. Para mais informações sobre a situação atual do estoque de sangue no estado de Minas Gerais acesse o site do <a href="https://www.hemominas.mg.gov.br/">hemominas</a></p>
                            </div>`;
    box_description.innerHTML = html_description;
}