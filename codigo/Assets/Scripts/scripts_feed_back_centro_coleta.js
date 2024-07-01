//Declaração da rota do JSON Server
const url_centros= "http://localhost:3000/pontosDoacao";
const url_page = window.location.href;

//Função de coleta de informações do JSON Server dado o id do elemento
async function get_info(url) {
    const res = await fetch(url);
  
    return res.json();
}

async function carrega_dados(){
    let empresas = await get_info(url_centros);
    let html_empresa = "";

    empresas.forEach(empresa => {
        if(empresa.id == url_page.split("=")[1]){
            html_empresa = `<div class="empresa-foto">
                    <img src="${empresa.image}" alt="Foto da Empresa">
                </div>
                <div class="empresa-nome">
                    ${empresa.razaoSocial}
                </div>
                <div class="empresa-info">
                    <br>
                    <h3>Informações de Contato</h3>
                    <p>Telefone</p> ${empresa.telefone}
                    <p>Email</p> ${empresa.email}
                </div>`;
        }
    });
    let secao_empresa = document.querySelector(".sec_tab1");
    secao_empresa.innerHTML = html_empresa;
}

document.addEventListener("DOMContentLoaded", function() {
    carrega_dados();
    let selectedRating = 0;

    // Adiciona eventos aos elementos de estrela
    document.querySelectorAll('.star').forEach(star => {
        star.addEventListener('click', function() {
            selectedRating = this.getAttribute('data-value');
            updateStarSelection();
        });
    });

    function updateStarSelection() {
        document.querySelectorAll('.star').forEach(star => {
            if (parseInt(star.getAttribute('data-value')) <= selectedRating) {
                star.classList.add('selected');
            } else {
                star.classList.remove('selected');
            }
        });
    }

    // Submete a avaliação
    window.submitReview = function() {
        const comentario = document.getElementById('comentario').value;
        if (selectedRating === 0 || comentario.trim() === "") {
            alert("Por favor, preencha todos os campos.");
            return;
        }

        const review = {
            rating: selectedRating,
            comment: comentario,
            user: "Nome do Usuário"
        };

        // Simula salvamento em um arquivo JSON
        saveReview(review);
        addReviewToPage(review);
    };

    function saveReview(review) {
        let reviews = localStorage.getItem('reviews');
        if (reviews) {
            reviews = JSON.parse(reviews);
        } else {
            reviews = [];
        }
        reviews.push(review);
        localStorage.setItem('reviews', JSON.stringify(reviews));
    }

    function addReviewToPage(review) {
        const comentariosDiv = document.getElementById('comentarios');
        const reviewDiv = document.createElement('div');
        reviewDiv.className = 'comentario';
        reviewDiv.innerHTML = `
            <p><strong>${review.user}:</strong> ${'⭐'.repeat(review.rating)}</p>
            <p>${review.comment}</p>
        `;
        // Insere a nova avaliação no topo
        comentariosDiv.insertBefore(reviewDiv, comentariosDiv.firstChild);
        // Remove avaliações adicionais, mantendo apenas as três mais recentes
        while (comentariosDiv.children.length > 3) {
            comentariosDiv.removeChild(comentariosDiv.lastChild);
        }
    }

    function loadReviews() {
        let reviews = localStorage.getItem('reviews');
        if (reviews) {
            reviews = JSON.parse(reviews);
            // Itera sobre as avaliações em ordem inversa, limitando a três mais recentes
            const limit = Math.min(reviews.length, 3);
            for (let i = reviews.length - 1; i >= reviews.length - limit; i--) {
                addReviewToPage(reviews[i]);
            }
        }
    }

    loadReviews();
});
