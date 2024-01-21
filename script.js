function fuja(){
    var botaoNao = document.getElementById("nao")

    var larguraJanela = window.innerWidth;
    var alturaJanela = window.innerHeight;

    var minX = larguraJanela - botaoNao.offsetWidth;
    var minY = alturaJanela - botaoNao.offsetHeight;

    var aleatorioX = Math.floor(Math.random() * minX);
    var aleatorioY = Math.floor(Math.random() * minY);

    botaoNao.style.left = aleatorioX + "px";
    botaoNao.style.top = aleatorioY + "px";
}

function parabens(){
    alert("Você acaba de tomar a melhor decisão da sua vida 💍​❤️.​")
}
