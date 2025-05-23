
document.getElementById("contatoForm").addEventListener("submit", function(e) {
    e.preventDefault();
    document.getElementById("mensagemEnviada").textContent = "Mensagem enviada com sucesso!";
    this.reset();
});
