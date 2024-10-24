//NOVO CÓDIGO
function returnMail() {
    const emailElement = document.querySelector('.emailMactec'); // Seleciona o span que contém o email
    const emailText = emailElement.textContent;

    // Cria um elemento de área de transferência oculto
    const clipboardInput = document.createElement('input');
    clipboardInput.value = emailText;
    document.body.appendChild(clipboardInput);

    // Seleciona o texto no elemento de entrada
    clipboardInput.select();
    clipboardInput.setSelectionRange(0, emailText.length);

    // Copia o texto para a área de transferência
    document.execCommand('copy');

    // Remove o elemento de entrada da página
    document.body.removeChild(clipboardInput);

    // Exibe um alerta
    alert('O email foi copiado para a área de transferência');
};

//Botão de retorno ao tôpo
window.onload = function () {
    // Exibe o botão quando a página é rolada para baixo
    window.addEventListener('scroll', function () {
        if (window.pageYOffset > 100) {
            document.querySelector('.back-to-top').style.display = 'block';
        } else {
            document.querySelector('.back-to-top').style.display = 'none';
        }
    });
}

function scrollToTop() {
    // Rola a página até o topo
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

