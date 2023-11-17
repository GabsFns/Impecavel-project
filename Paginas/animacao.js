// Lista de URLs das imagens a serem trocadas
var imagens = [
    "https://i.pinimg.com/564x/94/3f/aa/943faa1178d5517cc1661babaa73f27b.jpg",
    "https://i.pinimg.com/564x/df/3c/a3/df3ca3c60f5fc052223e2b38c6160a25.jpg",
    "https://i.pinimg.com/736x/1f/b0/03/1fb003f7447bb1991139865a34cf9dd2.jpg"
];

var index = 0;

function trocarImagem() {
    var imagem = document.getElementById("img-principal");
    imagem.style.opacity = 0; // Define a opacidade como 0 para iniciar a transição

    setTimeout(function() {
        imagem.src = imagens[index];
        index = (index + 1) % imagens.length;

        // Define a opacidade como 1 para finalizar a transição
        imagem.style.opacity = 1;
    }, 500); // Tempo correspondente à duração da transição em milissegundos
}

setInterval(trocarImagem, 3000);

document.getElementById('btnToggle').addEventListener('click', function() {
    toggleMenu();
});

function toggleMenu() {
    var menu = document.getElementById('menu');
    if (menu.style.width === '250px') {
        menu.style.width = '0';
    } else {
        menu.style.width = '250px';
    }
}

document.addEventListener('DOMContentLoaded', function() {
    var botao = document.getElementById('botao');
    var texto1 = document.getElementById('texto1');
    var texto2 = document.getElementById('texto2');

    botao.addEventListener('click', function() {
        // Alternar entre mostrar e ocultar textos
        if (texto1.style.display !== 'none') {
            texto1.style.display = 'none';
            texto2.style.display = 'block';
        } else {
            texto1.style.display = 'block';
            texto2.style.display = 'none';
        }
    });
});