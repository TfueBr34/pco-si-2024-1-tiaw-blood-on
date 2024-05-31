//import puppeteer from "../../node_modules/puppeteer/lib/cjs/puppeteer/puppeteer.js"

/*async function update_tipos(){
    const browser = await puppeteer.launch({
        headless: false,
        defaultViewport: null,
    });

    const page = await browser.newPage();
    await page.goto("http://quotes.toscrape.com/", {
        waitUntil: "domcontentloaded",
    });
}*/

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
        switch(tipo_sangue[0].id_categoria_qt){
            case 1:
                images[i].title = "Crítico";
                break;

            case 2:
                images[i].title = "Alerta";
                break;

            case 3:
                images[i].title = "Adequado";
                break;

            case 4:
                images[i].title = "Estável";
                break;
        }
    }
}

set_medidores();
//update_tipos();