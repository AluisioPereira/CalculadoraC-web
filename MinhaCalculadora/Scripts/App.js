$(document).ready(function () {
    $('#btAdicao').click(function () {
        var numero1 = $('#numeroA').val();
        var numero2 = $('#numeroB').val();
        $.ajax({
            type: "POST",
            url: "/Home/CalcularSoma",
            data: { a: numero1, b: numero2 },
            dataType: "json",
            success: function (resposta) {
                $('#resultado').text(resposta);
            }
        });
    })
    $('#btSubtracao').click(function () {
        var numero1 = $('#numeroA').val();
        var numero2 = $('#numeroB').val();
        $.ajax({
            type: "POST",
            url: "/Home/CalcularSubtracao",
            data: { a: numero1, b: numero2 },
            dataType: "json",
            success: function (resposta) {
                $('#resultado').text(resposta);
            }
        });
    })
    $('#btMultiplicacao').click(function () {
        var numero1 = $('#numeroA').val();
        var numero2 = $('#numeroB').val();
        $.ajax({
            type: "POST",
            url: "/Home/CalcularMultiplicacao",
            data: { a: numero1, b: numero2 },
            dataType: "json",
            success: function (resposta) {
                $('#resultado').text(resposta);
            }
        });
    })
    $('#btDivisao').click(function () {
        var numero1 = $('#numeroA').val();
        var numero2 = $('#numeroB').val();
        $.ajax({
            type: "POST",
            url: "/Home/CalcularDivisao",
            data: { a: numero1, b: numero2 },
            dataType: "json",
            success: function (resposta) {
                $('#resultado').text(resposta);
            }
        });
    })
});