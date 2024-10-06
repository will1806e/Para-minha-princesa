console.log(dados);
// app.js

// Função para pesquisar na base de dados
function pesquisa() {
    // Obtém o valor do input
    const input = document.getElementById('input').value.toLowerCase();

    // Filtra os resultados baseados no input
    const resultados = dados.filter(item =>
        item.titulo.toLowerCase().includes(input)
    );

    // Atualiza a área de resultados
    atualizarResultados(resultados);
}

// Função para atualizar a área de resultados
function atualizarResultados(resultados) {
    const resultadosDiv = document.querySelector('.resultados-pesquisa');
    resultadosDiv.innerHTML = ''; // Limpa os resultados atuais

    resultados.forEach(item => {
        const itemDiv = document.createElement('div');
        itemDiv.classList.add('item-resultado');
        itemDiv.innerHTML = `
            <h2>${item.titulo}</h2>
            <p class="descricao-meta">${item.descricao}</p>
            ${item.link ? `<a href="${item.link}" target="_blank">Veja mais</a>` : ''}
        `;
        resultadosDiv.appendChild(itemDiv);
    });
}

// Adiciona um event listener ao campo de entrada
document.addEventListener('DOMContentLoaded', (event) => {
    document.getElementById('input').addEventListener('keyup', pesquisa);
});
