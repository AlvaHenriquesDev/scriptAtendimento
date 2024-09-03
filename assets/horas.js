
// Captação de dados de hora e minutos
const elemHorario = document.querySelector(".horario")

function atualizarHoras() {
const horas = new Date().getHours().toString().padStart(2,"0");
const minutos = new Date().getMinutes().toString().padStart(2,"0");
const segundos = new Date().getSeconds().toString().padStart(2,"0");
const horario = horas + ":" + minutos + ":" + segundos

elemHorario.innerText = horario
}
atualizarHoras()

// Definição de alarme
function verificarHorario() {
    // Obtém a hora atual
    let agora = new Date();
    let horaAtual = agora.getHours();
    console.log()
    let minutoAtual = agora.getMinutes();

    // Define o horário desejado
    let horaDesejada = 9;
    let minutoDesejado = 20;
    let voltaIntervalo = 10;

    // Verifica se o horário atual é igual ao horário desejado
    if (horaAtual === horaDesejada && minutoAtual === minutoDesejado) {
        alert("Intervalo! 🎉");
    }

    if (horaAtual === voltaIntervalo && minutoAtual === minutoDesejado){
        alert("Fim do Intervalo!")
    }
}

// atualiza o horario e aplica verificação para alarme definido
setInterval(() => {
    atualizarHoras()
    verificarHorario()
    }, 1000 )