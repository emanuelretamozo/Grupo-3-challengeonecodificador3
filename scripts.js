function encriptar() {
    let texto = document.getElementById("inputTexto").value.toLowerCase();

    let textoEncriptado = texto.replace(/e/igm, "enter");
    textoEncriptado = textoEncriptado.replace(/o/igm, "ober");
    textoEncriptado = textoEncriptado.replace(/i/igm, "imes");
    textoEncriptado = textoEncriptado.replace(/a/igm, "ai");
    textoEncriptado = textoEncriptado.replace(/u/igm, "ufat");

    document.getElementById("imgDer").style.display = "none";
    document.getElementById("textoDer").style.display = "none";
    document.getElementById("copiar").style.display = "show";
    document.getElementById("textoDer2").innerHTML = textoEncriptado;
    document.getElementById("inputTexto").innerHTML = " ";
    document.getElementById("copiar").style.display = "inherit";
}

let buttonEncriptar = document.getElementById("encriptar");
buttonEncriptar.addEventListener("click", encriptar);

function desencriptar() {
    let texto = document.getElementById("inputTexto").value.toLowerCase();

    let textoEncriptado = texto.replace(/enter/igm, "e");
    textoEncriptado = textoEncriptado.replace(/ober/igm, "o");
    textoEncriptado = textoEncriptado.replace(/imes/igm, "i");
    textoEncriptado = textoEncriptado.replace(/ai/igm, "a");
    textoEncriptado = textoEncriptado.replace(/ufat/igm, "u");

    document.getElementById("imgDer").style.display = "none";
    document.getElementById("textoDer").style.display = "none";
    document.getElementById("copiar").style.display = "show";
    document.getElementById("textoDer2").innerHTML = textoEncriptado;
    document.getElementById("inputTexto").innerHTML = " ";
    document.getElementById("copiar").style.display = "inherit";
}

let buttonDesencriptar = document.getElementById("desencriptar");
buttonDesencriptar.addEventListener("click", desencriptar);

function copiar() {
  let contenido = document.querySelector("#textoDer2");
  contenido.select();
  document.execCommand('copy')
  alert("se copió el texto");
}

let buttonCopiar = document.getElementById("copiar");
buttonCopiar.addEventListener("click", copiar);
