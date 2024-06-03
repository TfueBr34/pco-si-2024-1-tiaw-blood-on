function formatDate(data_1) {   //Função para formatar a data
    const options = {day: 'numeric', month: 'long', year: 'numeric'};
    return data_1.toLocaleDateString('pt-BR', options);
}

document.addEventListener('DOMContentLoaded', function () { //Define a data atual ao carregar a página
    const currentDate = new Date();
    document.getElementById('data_1').textContent = formatDate(currentDate);


    fetch('base_dados_doadores.json') // Carrega dados dos doadores a partir de arquivo json
        .then(response => response.json())
        .then(base_dados_doadores => {
            window.base_dados_doadores = base_dados_doadores; //Grava os dados dos doadores em uma variável global
        })
        .catch(error => console.error('Erro ao carregar dados dos doadores:', error)); //Caso ocorra algum erro este é capturado e exibido
});

document.getElementById('botao_pesquisa').addEventListener('click', function () { //Pesquisa se o Doador está na agenda do dia
    const campo_pesquisa = document.getElementById('campo_pesquisa').value.trim();

    const var_campo_vazio = document.getElementById('campo_vazio');

        if (campo_pesquisa === "") { // Verifica se o campo de busca está vazio
            var_campo_vazio.style.display = 'block'; // Exibe a mensagem de erro
            return; 
        } else {
            var_campo_vazio.style.display = 'none'; // Esconde a mensagem de erro
        }
        
        const tab_exibe_consulta = document.querySelector('#tab_exibe_consulta tbody');
        tab_exibe_consulta.innerHTML = ''; // Limpa resultados antigos

        let flag_Resultado = false; //define com false variável para verificar se alguém com o nome foi encontrado

        window.base_dados_doadores.forEach(doador => {
            if (doador.nome.toLowerCase().includes(campo_pesquisa.toLowerCase())) {
                const linha = document.createElement('tr');

                const var_nome = document.createElement('td');
                var_nome.textContent = doador.nome;

                const var_data_nascimento = document.createElement('td');
                var_data_nascimento.textContent = doador.data_nascimento;

                const var_mae = document.createElement('td');
                var_mae.textContent = doador.nome_mae;

                const var_data_marcacao = document.createElement('td');
                var_data_marcacao.textContent = doador.data_marcacao;

                linha.appendChild(var_nome);//Exibe na tabela os valores encontrados 
                linha.appendChild(var_data_nascimento);
                linha.appendChild(var_mae);
                linha.appendChild(var_data_marcacao);

                tab_exibe_consulta.appendChild(linha);
                flag_Resultado = true;  //seta a variável como verdadeira quando encontra algum doador
            }
        });

        if (!flag_Resultado) {  //Caso nenhum doador seja encontrado uma mensagem será exibida
            const linha = document.createElement('tr');
            const var_resultado = document.createElement('td');
            var_resultado.colSpan = 4;
            var_resultado.textContent = 'Doador não encontrado';
            var_resultado.style.textAlign = 'center';        
            linha.appendChild(var_resultado);
            tab_exibe_consulta.appendChild(linha);
        }
    }
);

document.getElementById('btn_imp').addEventListener('click', function () {
    window.print();
});
