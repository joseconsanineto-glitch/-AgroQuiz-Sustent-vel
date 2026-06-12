document.getElementById("corrigir").addEventListener("click", () => {

    let total = 0;

    const q1 = document.querySelector('input[name="q1"]:checked');
    const q2 = document.querySelector('input[name="q2"]:checked');
    const q3 = document.querySelector('input[name="q3"]:checked');

    if(q1) total += Number(q1.value);
    if(q2) total += Number(q2.value);
    if(q3) total += Number(q3.value);

    let mensagem = "";

    if(total === 30){
        mensagem = "🏆 Excelente! Você é um defensor da sustentabilidade.";
    }
    else if(total >= 20){
        mensagem = "🌱 Muito bem! Você conhece boas práticas ambientais.";
    }
    else{
        mensagem = "📚 Continue estudando sobre sustentabilidade no campo.";
    }

    document.getElementById("resultado").innerHTML =
    `Pontuação: ${total}/30 <br><br> ${mensagem}`;
});