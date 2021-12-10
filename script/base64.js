function base64(){
    var base = document.querySelector("#mensagem").value
    var codificar = document.querySelector("#codificar").checked
    var decodificar = document.querySelector("#decodificar").checked

    if(codificar){
        var base64 = btoa(base);
        document.querySelector("#mensagemBase64").innerHTML = base64;
    } else if (decodificar) {
        var base64 = atob(base);
        document.querySelector("#mensagemBase64").innerHTML = base64;
    }
}

function confirmarBase() {
    event.preventDefault()
    return base64()
}