function btnClickLogin(){
    const campoEmail = document.getElementById('campoEmail')
    const campoSenha = document.getElementById('campoSenha')
    const botao = document.getElementById('btnEnviarLogin')

    document.addEventListener('keyup', ()=>{
        if(campoEmail.value.length == 0 || campoSenha.value.length == 0){
            botao.disabled = true
        }else{
            botao.disabled = false
        }
    })
}
btnClickLogin()