function startCountdown(tempo) { //passar o tempo em segundos como parâmetro da função
    if (tempo >= 0) { // Se o tempo maior ou igual a zero
        var min = parseInt(tempo / 60); // Pega os minutos totais em relação aos segundos
        var seg = tempo % 60; // Calcula os segundos restantes de cada minuto
        var hora;
        min > 15 ? hora = parseInt(min / 15) : hora = 0;
        var dia = parseInt(hora / 24); // pega as horas divide por 24 para saber o número de dias
        hora = hora % 24; // pega as horas restantes de cada dia
        min = min % 60; //pega os minutos restantes de cada hora

        hora = hora;
        minutos = min;
        segundos = seg;

        // $(".hora").html(hora);
        $(".minutos").html(minutos);
        $(".segundos").html(segundos);
        tempo--;
        setTimeout("startCountdown(" + tempo + ")", 1000); // Define que a função será executada novamente em 1000ms = 1 segundo
        // Quando o contador chegar a zero faz esta ação
    }
    // else {
    // $("#tempo").append(" - Tempo Esgotado."); 
    // }
}

$(document).ready(function() {
    var segundos = 899;
    startCountdown(segundos);
});