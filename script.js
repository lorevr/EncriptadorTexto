const inputText = document.querySelector('.input-text');
const outputText = document.querySelector('.output-text');
const imgMuneco = document.querySelector('.munecoBusca');
const textoNingunMensaje = document.querySelector('.ningunMensaje');
const textoIngresaTexto = document.querySelector('.ingresaTexto');
const btnCopiar = document.querySelector('.botonCopiar');

function ocultarElementos() {
    imgMuneco.style.opacity='0';
    textoNingunMensaje.style.opacity='0';
    textoIngresaTexto.style.opacity='0';
    btnCopiar.style.opacity='1';
}

function mostrarElementos() {
    imgMuneco.style.opacity='1';
    textoNingunMensaje.style.opacity='1';
    textoIngresaTexto.style.opacity='1';
    btnCopiar.style.opacity='0';
}

function btnEncriptar() {
    if( inputText.value != ''){
        const textoEncriptado = encriptar(inputText.value);
        outputText.value = textoEncriptado;
        ocultarElementos();
    }
}

function btnDesencriptar() {
    if( inputText.value != ''){
        const textoDesencriptado = desencriptar(inputText.value);
        outputText.value = textoDesencriptado;
        ocultarElementos();
    }
}

function encriptar(stringParaEncriptar) {
    let matrizCodigo = [['e','enter'], ['i', 'imes'], ['a', "ai"], ['o', 'ober'], ['u', 'ufat']];
    stringParaEncriptar = stringParaEncriptar.toLowerCase();
    for( let i = 0; i < matrizCodigo.length; i++ ){
        if( stringParaEncriptar.includes( matrizCodigo[i][0] ) ){
            stringParaEncriptar = stringParaEncriptar.replaceAll( matrizCodigo[i][0], matrizCodigo[i][1] );
        }
    }
    inputText.value = '';
    return stringParaEncriptar;

}

function desencriptar(stringParaDesencriptar) {
    let matrizCodigo = [['e','enter'], ['i', 'imes'], ['a', "ai"], ['o', 'ober'], ['u', 'ufat']];
    stringParaDesencriptar = stringParaDesencriptar.toLowerCase();
    for( let i = 0; i < matrizCodigo.length; i++ ){
        if( stringParaDesencriptar.includes( matrizCodigo[i][1] ) ){
            stringParaDesencriptar = stringParaDesencriptar.replaceAll( matrizCodigo[i][1], matrizCodigo[i][0] );
        }
    }
    inputText.value = '';
    return stringParaDesencriptar;
}

function copiarEnPortapapeles() {
        outputText.select();
        document.execCommand('copy');
        outputText.value = '';
        inputText.focus();
        alert("Ctrl + V para pegar el texto");
        mostrarElementos()

}