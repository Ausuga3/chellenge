
function encriptar(){
    let texto = document.getElementById("texto").value;
    let tituloMensaje = document.getElementById("tituloMensaje")
    let parrafo = document.getElementById("parrafo");
    let textarea = document.getElementById("texto");

    if (!validarTexto(texto)) {
        parrafo.textContent = "El texto contiene letras mayúsculas o acentos.";
        return;
    }

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
    let textoEncriptado = arrayTexto.join("");

    if (texto !== "") { // Comparar con una cadena vacía
        tituloMensaje.textContent = "Texto encriptado con éxito";
        parrafo.textContent = " ";
        textarea.value = textoEncriptado; // Asegurarse de que 'textarea' está definido correctamente
        document.querySelector('#btnCopiar').removeAttribute('disabled');
    } else {
        parrafo.textContent = "¡Debes ingresar algún texto!";
    }
    
    }
    

function desencriptar(){
    let texto = document.getElementById("texto").value;
    let tituloMensaje = document.getElementById("tituloMensaje")
    let parrafo = document.getElementById("parrafo");
    let textArea = document.getElementById("texto");

    if (!validarTexto(texto)) {
        parrafo.textContent = "El texto contiene letras mayúsculas o acentos."       
        return;
    }


    let textoDesencriptado = texto;
    textoDesencriptado = textoDesencriptado.replace(/ai/g, "a");
    textoDesencriptado = textoDesencriptado.replace(/enter/g, "e");
    textoDesencriptado = textoDesencriptado.replace(/imes/g, "i");
    textoDesencriptado = textoDesencriptado.replace(/ober/g, "o");
    textoDesencriptado = textoDesencriptado.replace(/ufat/g, "u");
        
        
    
        if(texto != 0){
            tituloMensaje.textContent = "Texto Desencriptado con exito";
            parrafo.textContent= " ";
            textArea.value = textoDesencriptado
            document.querySelector("#btnCopiar").removeAttribute('disabled')

            
        }else{
            parrafo.textContent="debes ingresar algun texto!"

        }
    
    
}

function copiar() {
    const texto = document.getElementById("texto").value;
    let parrafo = document.getElementById("parrafo");

    if (!validarTexto(texto)) {
        parrafo.textContent = "El texto contiene letras mayúsculas o acentos.";  
        return;
    }

    navigator.clipboard.writeText(texto).then(function() {
        parrafo.textContent = "Texto copiado correctamente";
    }).catch(function(err) {
        alert("Error al copiar el texto: ", err);
    });
}


function validarTexto(texto) {
    const regex = /[A-ZÁÉÍÓÚáéíóú]/;
    return !regex.test(texto);
}


