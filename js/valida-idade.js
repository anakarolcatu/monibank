export default function ehMaiorDeIdade(campo) {
    const dataNascimento = new Date(campo.value);
    validaIdade(dataNascimento);

    console.log(validaIdade(dataNascimento));
}

function validaIdade(data) {
    const dataAtual = new Date();
    //pega a data de nascimento do campo e adiciona 18
    const dataMais18 = new Date(data.getUTCFullYear() + 18, data.getUTCMonth(), data.getUTCDate());
    //faz a comparação da data atual e da data mais 18 para saber se o usuário já fez 18 anos
    return dataAtual >= dataMais18;
}