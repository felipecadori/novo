function validarCarteira() {
    var numeroCarteira = document.getElementById("numeroCarteira").value;
  
    // Verificação da validade da carteira
    if (numeroCarteira === "034837001") {
      var mensagem = "ALUNO: FELIPE PEDROTTI CADORI<br>CURSO: ANIMAÇÃO DIGITAL<br>MATRÍCULA: 03483700-1<br>CPF: 098.077.549-33<br>VALIDADE: 31/12/2025";
      document.getElementById("mensagemValidacao").innerHTML = mensagem;
    } else {
      document.getElementById("mensagemValidacao").textContent = "Número de carteira inválido.";
    }
  }
  