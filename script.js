const textArea = document.querySelector(".text-area");
const mensagem = document.querySelector(".mensagem");
const textofuturo = document.querySelector(".textofuturo");
const mensagemCopiado = document.getElementById("mensagem-copiado");
const btnCopiar = document.querySelector(".btn-copiar");

// Evento quando o campo da mensagem perde o foco
mensagem.addEventListener("blur", function() {
    if (mensagem.value.trim() === "") {
        mostrarImagem();
        mostrarTextoFuturo();
        esconderBotaoCopiar(); // Esconde o botão Copiar se a mensagem estiver vazia
    }
});

function btnEncriptar() {
    const textoEncriptado = encriptar(textArea.value);
    mensagem.value = textoEncriptado;
    textArea.value = "";
    esconderImagem();
    esconderTextoFuturo();
    ativarMensagem(); // Ativa o campo para permitir a cópia
    mostrarBotaoCopiar(); // Mostra o botão Copiar
}

function btnDesencriptar() {
    const textoDesencriptado = desencriptar(textArea.value);
    mensagem.value = textoDesencriptado;
    textArea.value = "";
    esconderImagem();
    esconderTextoFuturo();
    ativarMensagem(); // Ativa o campo para permitir a cópia
    mostrarBotaoCopiar(); // Mostra o botão Copiar
}

function ativarMensagem() {
    mensagem.removeAttribute("readonly");
    mensagem.focus(); // Opcional: Foca o campo para facilitar a cópia
}

function desativarMensagem() {
    mensagem.setAttribute("readonly", true);
}

function esconderImagem() {
    mensagem.classList.add("ocultar-imagem");
}

function esconderTextoFuturo() {
    textofuturo.classList.add("ocultar-textofuturo");
}

function mostrarImagem() {
    mensagem.classList.remove("ocultar-imagem");
}

function mostrarTextoFuturo() {
    textofuturo.classList.remove("ocultar-textofuturo");
}

function copiarTexto() {
    mensagem.select();
    document.execCommand("copy");
    mostrarMensagemCopiado(); // Mostra a mensagem "Texto copiado!"
}

function mostrarMensagemCopiado() {
    mensagemCopiado.style.display = "block";
    setTimeout(() => {
        mensagemCopiado.style.display = "none";
    }, 2000); // Oculta a mensagem após 2 segundos
}

function mostrarBotaoCopiar() {
    if (mensagem.value.trim() !== "") {
        btnCopiar.style.display = "block";
    }
}

function esconderBotaoCopiar() {
    btnCopiar.style.display = "none";
}

function encriptar(stringEncriptada) {
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase();

    for (let i = 0; i < matrizCodigo.length; i++) {
        stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
    }
    return stringEncriptada;
}

function desencriptar(stringDesencriptada) {
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringDesencriptada = stringDesencriptada.toLowerCase();

    for (let i = 0; i < matrizCodigo.length; i++) {
        stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
    }
    return stringDesencriptada;
}
