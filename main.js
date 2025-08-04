// Seletores de elementos DOM
const elementos = {
    tamanhoTexto: document.querySelector('.parametro-senha__texto'),
    botoes: document.querySelectorAll('.parametro-senha__botao'),
    campoSenha: document.querySelector('#campo-senha'),
    checkboxes: document.querySelectorAll('.checkbox'),
    forcaSenha: document.querySelector('.forca'),
    entropiaTexto: document.querySelector('.entropia')
};

// Definições de caracteres
const caracteres = {
    maiusculas: 'ABCDEFGHIJKLMNOPQRSTUVXYWZ',
    minusculas: 'abcdefghijklmnopqrstuvxywz',
    numeros: '0123456789',
    simbolos: '!@%*?'
};

// Configurações e estado
let tamanhoSenha = 12;

// Funções de manipulação do tamanho da senha
const controleTamanho = {
    diminuir: () => {
        if (tamanhoSenha > 1) {
            tamanhoSenha--;
        }
        elementos.tamanhoTexto.textContent = tamanhoSenha;
        gerarSenha();
    },
    aumentar: () => {
        if (tamanhoSenha < 20) {
            tamanhoSenha++;
        }
        elementos.tamanhoTexto.textContent = tamanhoSenha;
        gerarSenha();
    }
};

// Event listeners
elementos.botoes[0].addEventListener('click', controleTamanho.diminuir);
elementos.botoes[1].addEventListener('click', controleTamanho.aumentar);
elementos.checkboxes.forEach(checkbox => {
    checkbox.addEventListener('click', gerarSenha);
});

// Inicialização
elementos.tamanhoTexto.textContent = tamanhoSenha;
gerarSenha();

// Função principal de geração de senha
function gerarSenha() {
    let alfabeto = '';
    if (elementos.checkboxes[0].checked) alfabeto += caracteres.maiusculas;
    if (elementos.checkboxes[1].checked) alfabeto += caracteres.minusculas;
    if (elementos.checkboxes[2].checked) alfabeto += caracteres.numeros;
    if (elementos.checkboxes[3].checked) alfabeto += caracteres.simbolos;
