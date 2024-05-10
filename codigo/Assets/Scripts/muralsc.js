window.addEventListener("load", () => {
    const text = document.getElementById("postagem");
    const post = document.querySelector("#form_post button");

    text.addEventListener("focus", function(){
        post.classList.remove("d-none");
    }, false);

    text.addEventListener("blur", function(){
        if(text.value.trim() == ""){
            post.classList.add("d-none");
        }
    }, false);

    post.addEventListener("click", function(event){
        event.preventDefault();
        let postagem = text.value.trim();
        if(postagem == ""){
            alert("Campo de postagem não pode ser enviado vazio!");
        }else{
            alert("Postado!");
            text.value = "";
            post.classList.add("d-none");
        }
    }, false);
});