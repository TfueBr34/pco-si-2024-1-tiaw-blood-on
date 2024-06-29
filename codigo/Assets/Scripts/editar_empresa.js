document.getElementById("editar-info").addEventListener("click", function() {
    // Alternar para o modo de edição
    document.getElementById("nome").style.display = "none";
    document.getElementById("nome-input").style.display = "block";
    document.getElementById("telefone").style.display = "none";
    document.getElementById("telefone-input").style.display = "block";
    document.getElementById("email").style.display = "none";
    document.getElementById("email-input").style.display = "block";
    document.getElementById("foto-input").style.display = "block";
    document.getElementById("editar-info").style.display = "none";
    document.getElementById("salvar-info").style.display = "inline-block";
});

document.getElementById("salvar-info").addEventListener("click", function() {
    // Salvar as alterações e alternar para o modo de visualização
    var nome = document.getElementById("nome-input").value;
    var telefone = document.getElementById("telefone-input").value;
    var email = document.getElementById("email-input").value;

    document.getElementById("nome").textContent = nome;
    document.getElementById("telefone").textContent = telefone;
    document.getElementById("email").textContent = email;

    document.getElementById("nome").style.display = "block";
    document.getElementById("nome-input").style.display = "none";
    document.getElementById("telefone").style.display = "block";
    document.getElementById("telefone-input").style.display = "none";
    document.getElementById("email").style.display = "block";
    document.getElementById("email-input").style.display = "none";
    document.getElementById("foto-input").style.display = "none";
    document.getElementById("editar-info").style.display = "inline-block";
    document.getElementById("salvar-info").style.display = "none";

    // Atualizar a foto da empresa
    var fileInput = document.getElementById("foto-input");
    var file = fileInput.files[0];
    if (file) {
        var reader = new FileReader();
        reader.onload = function(e) {
            document.getElementById("foto-empresa").src = e.target.result;
        }
        reader.readAsDataURL(file);
    }
});
