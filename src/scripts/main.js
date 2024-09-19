// Declaração de um array chamado 'frutas' que contém objetos representando diferentes frutas
let frutas = [
    {
        // Objeto representando a fruta "Maçã"
        nome: "Maçã", // Nome da fruta
        beneficios: "A maçã é uma fruta deliciosa e nutritiva, rica em vitaminas, minerais e fibras. Seus benefícios para a saúde são diversos e abrangem desde a prevenção de doenças até a promoção do bem-estar geral.", // Descrição dos benefícios da maçã
        link: "https://pt.wikipedia.org/wiki/Maçã", // Link para mais informações sobre a maçã
        tags: "fruta, fibras, saude", // Tags associadas à maçã para facilitar a busca
        imagem: "https://cdn.pixabay.com/photo/2016/10/30/18/01/apple-1783882_1280.png" // URL da imagem da maçã
    },
    {
        // Objeto representando a fruta "Banana"
        nome: "Banana", // Nome da fruta
        beneficios: "A banana é uma excelente fonte de potássio, essencial para a saúde do coração e dos músculos. Além disso, é rica em vitaminas do complexo B e vitamina C, que ajudam a fortalecer o sistema imunológico.", // Descrição dos benefícios da banana
        link: "https://pt.wikipedia.org/wiki/Banana", // Link para mais informações sobre a banana
        tags: "fonte, vitaminas, ajudam", // Tags associadas à banana para facilitar a busca
        imagem: "https://cdn.pixabay.com/photo/2016/04/01/12/20/banana-1300669_1280.png" // URL da imagem da banana
    },
    {
        // Objeto representando a fruta "Morango"
        nome: "Morango", // Nome da fruta
        beneficios: "O morango é rico em antioxidantes, como a vitamina C, que ajudam a combater os radicais livres e protegem as células. Além disso, é uma ótima fonte de fibras e possui baixo índice glicêmico.", // Descrição dos benefícios do morango
        link: "https://pt.wikipedia.org/wiki/Morango", // Link para mais informações sobre o morango
        tags: "rico, ajudam, protegem", // Tags associadas ao morango para facilitar a busca
        imagem: "https://cdn.pixabay.com/photo/2012/04/18/12/54/strawberry-36949_1280.png" // URL da imagem do morango
    },
    {
        // Objeto representando a fruta "Laranja"
        nome: "Laranja", // Nome da fruta
        beneficios: "A laranja é uma excelente fonte de vitamina C, que fortalece o sistema imunológico e ajuda a prevenir gripes e resfriados. Além disso, é rica em fibras e possui propriedades antioxidantes.", // Descrição dos benefícios da laranja
        link: "https://pt.wikipedia.org/wiki/Laranja", // Link para mais informações sobre a laranja
        tags: "vitamina c, imunologico, gripe", // Tags associadas à laranja para facilitar a busca
        imagem: "https://cdn.pixabay.com/photo/2019/10/13/20/35/orange-4547207_1280.png" // URL da imagem da laranja
    }
];

function pesquisar() {
    // Seleciona o elemento da página onde os resultados da pesquisa serão exibidos.
    let section = document.getElementById("resultados");

    // Captura o valor digitado pelo usuário no campo de pesquisa.
    let campoPesquisa = document.getElementById("campo-pesquisa").value;
    
    // Verifica se o campo de pesquisa está vazio.
    if (!campoPesquisa) {
        // Exibe uma mensagem informando que a busca está vazia.
        section.innerHTML = "<div class='container'><p class='mensagem-busca'>Busca vazia, digite o nome da fruta!<p></div>";
        return; // Encerra a função, pois não há o que pesquisar.
    }

    // Converte o texto de pesquisa para letras minúsculas para evitar problemas de case sensitive.
    campoPesquisa = campoPesquisa.toLowerCase();

    // Variáveis para armazenar o resultado final da pesquisa e informações temporárias sobre a fruta.
    let resultado = "";
    let nome = "";
    let beneficios = "";

    // Loop que percorre todas as frutas disponíveis no array 'frutas'.
    for (let fruta of frutas) {
        // Converte o nome, benefícios e tags da fruta para letras minúsculas.
        nome = fruta.nome.toLowerCase();
        beneficios = fruta.beneficios.toLowerCase();
        tags = fruta.tags.toLowerCase();

        // Verifica se o nome, benefícios ou tags da fruta contêm o texto digitado pelo usuário.
        if (nome.includes(campoPesquisa) || beneficios.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
            // Se houver uma correspondência, adiciona o resultado formatado em HTML à variável 'resultado'.
            resultado += `
            <div class="item-resultado">
                <img src="${fruta.imagem}" alt="${fruta.nome}" class="imagem-fruta">
                <h2>
                    <a href="#">${fruta.nome}</a>
                </h2>
                <p class="descriao-meta">
                    ${fruta.beneficios}
                </p>
                <a href="${fruta.link}" target="_blank">mais informações!</a>
            </div>
            `;
        }
    }

    // Verifica se nenhum resultado foi encontrado.
    if (!resultado) {
        // Caso não haja correspondências, exibe uma mensagem informando que a busca não encontrou resultados.
        resultado = "<div class='container'><p class='mensagem-busca'>Informação não confere<p></div>";
    }

    // Atualiza o conteúdo da seção de resultados com o conteúdo armazenado na variável 'resultado'.
    section.innerHTML = resultado;
}