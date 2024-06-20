document.addEventListener("DOMContentLoaded", function() {
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
