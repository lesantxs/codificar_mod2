document.querySelector('#selecione').style.display
document.querySelector('#cesar').style.display = 'none'
document.querySelector('#base64').style.display = 'none'
document.querySelector('#radio').style.display = 'none'

function escolherOpcao(){
    

    if(document.querySelector('#selecione').value == 'cesar'){
        document.querySelector('#cesar').style.display = 'flex';
        document.querySelector('#base64').style.display = 'none';
        document.querySelector('#radio').style.display = 'flex'
    }else if(document.querySelector('#selecione').value == 'base64'){
        document.querySelector('#base64').style.display = 'flex';
        document.querySelector('#cesar').style.display = 'none';
        document.querySelector('#radio').style.display = 'flex'
    }
}
    
