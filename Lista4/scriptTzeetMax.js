function maxTzeet(){

const areaTexto = document.getElementById("campoTexto")
const contador = document.getElementById("contador")
const botao = document.getElementById("enviar")

areaTexto.addEventListener("keyup", function(){

    var conteudo = areaTexto.value
    
    if (conteudo !== null && conteudo !== '') {
        botao.disabled = false;
    } else {
        botao.disabled = true;
    }

    var caracteres = this.value.length;
    var maximoCaracteres = 140
    
    if(caracteres >= 100 && caracteres <= maximoCaracteres){
        contador.style.color = "rgb(255, 200, 0)";
        contador.innerHTML = maximoCaracteres - caracteres;

    }else if(caracteres >= maximoCaracteres){
        contador.style.color = "rgb(255, 0, 0)";
        botao.disabled = true;
        contador.innerHTML = maximoCaracteres - caracteres;

    }else if(caracteres > 0 && caracteres < 100){
        contador.style.color = "rgb(0, 0, 0)";
        contador.innerHTML = maximoCaracteres - caracteres;
    }
    else{
    contador.innerHTML = "";
    }

})
}

maxTzeet()


