function cifra() {

    var codificar = document.querySelector("#codificar").checked
    var decodificar = document.querySelector("#decodificar").checked

    var mensagem = document.querySelector("#mensagemC").value.toUpperCase();
    var deslocamento = document.querySelector("#deslocamento").value
    var desl = parseInt(deslocamento)
    var mensagemFinal = ""

    
    if (desl > 0 && desl < 26) {
        for (var i = 0; i < mensagem.length; i++) {
            if (codificar) {
                var numeroInicial = mensagem.charCodeAt(i)
                var numeroFinal = 0
                if(numeroInicial != 32){
                    numeroFinal = ((numeroInicial - 65 + desl ) % 26) + 65
                }else{
                    numeroFinal = 32
                }
                mensagemFinal += String.fromCharCode(numeroFinal);
                document.querySelector("#mensagemCesar").innerHTML = mensagemFinal.toLowerCase()

                } else if (decodificar) {
                    var numeroInicial = mensagem.charCodeAt(i)
                    var numeroFinal = 0
                    if(numeroInicial != 32){
                        numeroFinal = ((numeroInicial - 65 - desl + 26) % 26) + 65
                    }else{
                        numeroFinal = 32
                    }
                    mensagemFinal += String.fromCharCode(numeroFinal);

                    document.querySelector("#mensagemCesar").innerHTML = mensagemFinal.toLowerCase()
                }
            }
        }else {
            document.querySelector("#mensagemCesar").innerHTML = "Por favor, digite um deslocamento entre 1 e 25."
        }
    }




function confirmar() {
    event.preventDefault()
    return cifra()
}
