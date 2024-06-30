const url_centros= "http://localhost:3000/pontosDoacao";

function searchHemocenters() {
    const city = document.getElementById('city-input').value.trim(); 
    const resultsDiv = document.getElementById('results');
    
    // Limpa os resultados anteriores
    resultsDiv.innerHTML = '';

    // Verifica se o campo de entrada da cidade está vazio
    if (city === '') {
        const noInputMessage = document.createElement('p');
        noInputMessage.textContent = 'Por favor, digite o nome da cidade para buscar os hemocentros.';
        resultsDiv.appendChild(noInputMessage);
        return; 
    }


    fetch(url_centros)
        .then(response => response.json()) 
        .then(data => {
            let pontosDoacao = data;
            // Filtra os hemocentros que correspondem à cidade digitada ignoando letras maiusculas minusculas
            let filteredHemocenters = pontosDoacao.filter(hc => hc.cidade.toLowerCase().includes(city.toLowerCase()));

            // Verifica se há hemocentros correspondentes
            if (filteredHemocenters.length > 0) {
        
                filteredHemocenters.forEach(hc => {
                    let hemocenterDiv = document.createElement('div');
                    hemocenterDiv.classList.add('hemocenter');
                    let img = document.createElement('img');
                    img.src = hc.image || 'default-image.png'; 
                    img.alt = hc.razaoSocial;

                    let link = document.createElement('a');
                    link.href = `perfil_empresa.html?id=${hc.id}`;
                    let h2 = document.createElement('h2');
                    h2.textContent = hc.razaoSocial;
                    link.append(h2);

                    let p1 = document.createElement('p');
                    p1.textContent = `Endereço: ${hc.logradouro}, ${hc.bairro}`;

                    let p2 = document.createElement('p');
                    p2.textContent = `Telefone: ${hc.telefone}`;

                    // Adiciona a imagem o nome o endereço e o telefone ao contêiner do hemocentro
                    hemocenterDiv.appendChild(img);
                    hemocenterDiv.appendChild(link);
                    hemocenterDiv.appendChild(p1);
                    hemocenterDiv.appendChild(p2);

                    resultsDiv.appendChild(hemocenterDiv);
                });
            } else {
                // Se nenhum hemocentro for encontrado, exibe uma mensagem informando
                let noResults = document.createElement('p');
                noResults.textContent = 'Nenhum hemocentro encontrado para a cidade digitada.';
                resultsDiv.appendChild(noResults);
            }
        })
        .catch(error => {
            // Em caso de erro ao carregar o JSON, exibe uma mensagem de erro
            console.error('Erro ao carregar o JSON:', error);
            const errorMessage = document.createElement('p');
            errorMessage.textContent = 'Ocorreu um erro ao buscar os dados. Tente novamente mais tarde.';
            resultsDiv.appendChild(errorMessage);
        });
}
