/*function fazerChamada(numero) {
    window.location.href = `tel:${numero}`;
}*/

/*Neste exemplo:

1. Usamos um emoji de telefone (📞) como ícone, mas você pode substituí-lo por uma imagem ou um ícone de uma biblioteca como Font Awesome, se preferir.

2. O CSS estiliza o ícone, dando-lhe um tamanho, cor e efeito de hover.

3. A função JavaScript `fazerChamada(numero)` é chamada quando o ícone é clicado. Esta função usa o protocolo `tel:` para iniciar uma chamada telefônica.

4. O número de telefone '1234567890' está hardcoded neste exemplo, mas você pode facilmente modificar o código para usar um número dinâmico, por exemplo, obtido de um banco de dados ou entrada do usuário.

Algumas observações importantes:

- Esta funcionalidade funcionará em dispositivos móveis e em alguns navegadores desktop que suportam o protocolo `tel:`.
- Em dispositivos desktop sem suporte para chamadas telefônicas, isso geralmente abrirá um aplicativo de chamadas associado (como Skype) ou simplesmente não fará nada.
- Certifique-se de obter permissão do usuário antes de implementar funcionalidades que façam chamadas automáticas, para evitar problemas de privacidade e segurança.

*/

//-------------------------------------------------------------------------------
// Função para detectar dispositivo móvel
function isMobileDevice() {
    return /Mobi|Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

document.addEventListener("DOMContentLoaded", function () {
    const phoneLink = document.getElementById('phoneLink');
    const errorMessage = document.getElementById('errorMessage');

    if (!isMobileDevice()) {
        // Oculta o link de telefone
        phoneLink.style.display = 'none';
        // Exibe a mensagem de erro
        errorMessage.style.display = 'block';
    } else {
        // Opcional: Adicione eventos adicionais se necessário
        phoneLink.addEventListener('click', function (event) {
            // Você pode adicionar lógica extra aqui se desejar
        });
    }
});

