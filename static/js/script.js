document.addEventListener("DOMContentLoaded", function () {
    const textElement = document.getElementById("typewriter");
    const text = textElement.textContent; // O texto que será exibido
    let index = 0;

    textElement.textContent = ""; // Limpa o texto para começar o efeito

    function type() {
        if (index < text.length) {
            textElement.textContent += text.charAt(index);
            index++;
            setTimeout(type, 100); // Atraso de 100ms entre cada letra
        }
    }

    type();
});