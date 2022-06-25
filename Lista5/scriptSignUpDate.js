const selectMes = document.getElementById("campoMes")
const selectDia = document.getElementById("campoDia")
const selectAno = document.getElementById("campoAno")
const botao = document.getElementById("btnEnviarCadastro")

var campoSenha = document.getElementById("campoSenha")
var campoConfirmarSenha = document.getElementById("campoConfirmarSenha")

/* Senhas */
function compararSenhas(){
    if(campoSenha.value != campoConfirmarSenha.value){
        campoConfirmarSenha.setCustomValidity("Senhas diferentes")
        campoConfirmarSenha.reportValidity()
        return false
    }else{
        campoConfirmarSenha.setCustomValidity("");
        return true
    }
}

/* Checkbox */
function btnClickSignUp() {
    const checkBoxValidation = document.getElementById("btnSim");
    document.addEventListener("change", ()=> {
        if (checkBoxValidation.checked) {
            botao.disabled = false;
        } else {
            botao.disabled = true;
        }
    })
}

/* Datas */
const meses = [
    'Janeiro', 'Fevereiro', 'Março', 'Abril',
    'Maio', 'Junho', 'Julho', 'Agosto', 
    'Setembro', 'Outubro', 'Novembro', 'Dezembro']

function mesesAno(mes){
    const optionHTML = document.createElement('option')
    optionHTML.textContent = mes
    selectMes.appendChild(optionHTML)
}
meses.forEach(mesesAno)
selectMes.value = ''

function configDia(mes) {
    var qtdDias
    if(mes === 'Abril' || mes === 'Junho' || mes === 'Setembro' || mes === 'Novembro') {
        qtdDias = 30
    }else if(mes === 'Janeiro' || mes === 'Março' || mes === 'Maio' || mes === 'Julho' || mes === 'Agosto' || mes === 'Outubro' || mes === 'Dezembro') {
        qtdDias = 31
    }else if (mes === 'Fevereiro') {
        qtdDias = 29
    }

    while(selectDia.firstChild) {
        selectDia.removeChild(selectDia.firstChild)
    }

    for (var i = 1; i <= qtdDias; i++) {
        const optionHTML = document.createElement('option')
        optionHTML.textContent = i
        selectDia.appendChild(optionHTML)
    } 
}

function configAno() {
    if(selectDia.value == 29 && selectMes.value === 'Fevereiro'){
        for (var i = 1930; i <= 2022; i++) {
            if ((i % 4 == 0) && ((i % 100 != 0) || i % 400 == 0)){
                const optionHTML = document.createElement('option')
                optionHTML.textContent = i
                selectAno.appendChild(optionHTML)
            }
        }
    }else{
        for (var i = 1930; i <= 2022; i++) {
            const optionHTML = document.createElement('option')
            optionHTML.textContent = i
            selectAno.appendChild(optionHTML)
        }
    }
}

// -----
campoConfirmarSenha.addEventListener('input', compararSenhas)

// -----
btnClickSignUp()

// -----
configDia(selectMes.value)
selectAno.value = ''

selectMes.onchange = function() {
    configDia(selectMes.value)
}
selectDia.onchange = function(){
    configAno()
}


