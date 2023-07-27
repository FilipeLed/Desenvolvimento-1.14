

function calculadora() {
    while (true) {
      const operacao = window.prompt(
        "Escolha a operação:\n1: Soma\n2: Subtração\n3: Multiplicação\n4: Divisão\n0: Sair");
  
      if (operacao === "0") {
        alert("Saindo da calculadora...");
        break;
      }
  
      const numero1 = parseFloat(window.prompt("Digite o primeiro número:"));
      const numero2 = parseFloat(window.prompt("Digite o segundo número:"));
      let resultado;
  
      switch (operacao) {
        case "1":
          resultado = numero1 + numero2;
          break;
        case "2":
          resultado = numero1 - numero2;
          break;
        case "3":
          resultado = numero1 * numero2;
          break;
        case "4":
          resultado = numero1 / numero2;
          break;
        default:
          alert("Essa opção não existe.");
          continue;
      }
  
      alert(`Resultado: ${resultado}`);
    }
  }
  
  // Chamada da função calculadora
  calculadora();

