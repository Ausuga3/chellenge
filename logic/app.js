
function encriptar(texto){

let arrayTexto = texto.split("");

for (let i = 0; i < arrayTexto.length; i++){
    let letra = arrayTexto[i];
    if ("a".includes(letra)){
        arrayTexto[i]="ai"
    }
    if ("e".includes(letra)){
        arrayTexto[i]="enter"
    }
    if ("i".includes(letra)){
        arrayTexto[i]="imes"
    }
    if ("o".includes(letra)){
        arrayTexto[i]="ober"
    }
    if ("u".includes(letra)){
        arrayTexto[i]="ufat"
    }

}
const textoEncriptado = arrayTexto.join("");
return textoEncriptado;
}

function encriptarTexto() {
    const textoOriginal = document.querySelector("#texto").value;

    if (confirmarLetrasMinusculas(textoOriginal)){
        const textoEncriptado = encriptar(textoOriginal);
        asignarTextoElemento('#resultTextOut',textoEncriptado)
        document.querySelector('#btnCopiar').removeAttribute('disabled');
        document.querySelector('#resultTextOut').removeAttribute('disabled');
        asignarTextoElemento('#alertMessaje',"Tu texto encriptado")
        //alert(textoEncriptado);
    }
}    

function mostrarContenido() {
    const contenido = textoEncriptado
    alert("El contenido del área de texto es:\n" + textoEncriptado);
}


function desencriptar(texto){
    let textoDesencriptado = texto;
    textoDesencriptado = textoDesencriptado.replace(/ai/g, "a");
    textoDesencriptado = textoDesencriptado.replace(/enter/g, "e");
    textoDesencriptado = textoDesencriptado.replace(/imes/g, "i");
    textoDesencriptado = textoDesencriptado.replace(/ober/g, "o");
    textoDesencriptado = textoDesencriptado.replace(/ufat/g, "u");
    return textoDesencriptado;
    
}


function desencriptarTexto(){
    const textoOriginal = document.querySelector("#texto").value;
    if (confirmarLetrasMinusculas(textoOriginal)){

        const textoDesencriptado = desencriptar(textoOriginal);
        asignarTextoElemento('#resultTextOut',textoDesencriptado)
        document.querySelector('#btnCopiar').removeAttribute('disabled');
        document.querySelector('#resultTextOut').removeAttribute('disabled');
        asignarTextoElemento('#alertMessaje',"Tu texto desencriptado")
    }else{

    }


}






function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function confirmarLetrasMinusculas(texto) {

    if(texto.match(/[A-Z]/)){
        document.querySelector('#warning').style.color = 'red';
        asignarTextoElemento('#warning', "prohibidas las letras mayusculas");
        return false;
    }
    return true;
}



