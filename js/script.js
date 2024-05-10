import ehUmCPF from "./valida-cpf.js";
import ehMaiorDeIdade from "./valida-idade.js";

//cria uma variável que armazena todos os campos com o atributo required
const camposDoFormulario = document.querySelectorAll("[required]")

//pega o campo do formulário e para cada campo ele espera acontecer o evento de tirar o foco do input para executar a função
camposDoFormulario.forEach((campo) => {
    campo.addEventListener("blur", () => verificaCampo(campo));
})

function verificaCampo(campo) {
    if(campo.name == "cpf" && campo.value.length >= 11) {
        ehUmCPF(campo);
    }
    if (campo.name == "aniversario" && campo.value != "") {
        ehMaiorDeIdade(campo);
    }
    
}