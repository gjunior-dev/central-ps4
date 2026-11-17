
console.log("CENTRAL PS4 iniciada!");

document.addEventListener("DOMContentLoaded", () => {

    // ANIMAÇÃO DOS CARTÕES DA PÁGINA INICIAL
    const cards = document.querySelectorAll(".card");

    cards.forEach((card, index) => {
        card.style.opacity = "0";
        card.style.transform = "translateY(15px)";

        setTimeout(() => {
            card.style.transition = "0.5s ease";
            card.style.opacity = "1";
            card.style.transform = "translateY(0)";
        }, 150 * index);
    });

    // CATÁLOGO DE FIRMWARES
    const versoes = [
        "5.05", "6.72", "7.02", "7.55",
        "8.00", "8.03", "8.50", "9.00",
        "9.03", "9.50", "9.60", "10.00",
        "10.01", "10.50", "11.00", "11.02",
        "11.50", "11.52", "12.00", "12.02",
        "12.50", "12.52", "13.00", "13.02",
        "13.50", "13.52", "14.00"
    ];

    const lista = document.getElementById("listaFirmwares");

    if (lista) {
        versoes.forEach(versao => {
            const botao = document.createElement("button");

            botao.className = "firmware";
            botao.textContent = versao;

            botao.onclick = function() {
    window.location.href =
        "FIRMWARES/" + versao + ".html";
};

            lista.appendChild(botao);
        });
    }

});
