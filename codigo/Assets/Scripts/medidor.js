//var xhttp = new XMLHttpRequest();
//xhttp.onreadystatechange = function() {
//    if(this.readyState == 4 && this.status == 200) {
//       // Typical action to be performed when the document is ready:
//       //document.getElementById("demo").innerHTML = xhttp.responseText;
//       console.log("teste correto");
//    }else{
//        console.log("Erro ao realizar a requisição, tente novamente mais tarde!");
//    }
//};
//xhttp.open("GET", "https://www.hemominas.mg.gov.br/", true);
//xhttp.setRequestHeader("Accept","text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7");
//xhttp.setRequestHeader("Access-Control-Allow-Origin","*");
//xhttp.setRequestHeader("Accept-Language","pt-BR,pt;q=0.9,en-US;q=0.8,en;q=0.7,de;q=0.6");
//xhttp.setRequestHeader("Cache-Control","max-age=0");
//xhttp.setRequestHeader("Connection","Keep-Alive");
//xhttp.setRequestHeader("Host","www.hemominas.mg.gov.br");
//xhttp.send();
//
//function construir_medidor(){
//    console.log("tenta");
//}
const url_sangue = "http://localhost:3000/tipos_sangue";
async function get_info(url) {
    const res = await fetch(url);
  
    return res.json();
}

async function set_medidores(){
    images = document.querySelectorAll(".blood");
    for(let i = 0; i < images.length; i++){
        let tipo_sangue = await get_info(url_sangue+"?id="+images[i].id);
        images[i].src="Assets/cat_"+tipo_sangue[0].id_categoria_qt+".png";
    }
}

set_medidores();