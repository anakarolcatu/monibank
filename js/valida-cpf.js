export default function ehUmCPF(campo) {
    const cpf = campo.value.replace(/\.|-/g, "");
    if(validaNumerosRepetidos(cpf) || validaPrimeiroDigito(cpf) || validaSegundoDigito(cpf)) {
        campo.setCustomValidity('Esse cpf não é válido!');
    }
}

function validaNumerosRepetidos(cpf) {
    const numerosRepetidos = [
        '00000000000',
        '11111111111',
        '22222222222',
        '33333333333',
        '44444444444',
        '55555555555',
        '66666666666',
        '77777777777',
        '88888888888',
        '99999999999'
    ]

    return numerosRepetidos.includes(cpf);
}

function validaPrimeiroDigito(cpf) {
    let soma = 0;
    let multiplicador = 10;

    for(let tamanho = 0; tamanho < 9; tamanho++) {
        soma += cpf[tamanho] * multiplicador;
        multiplicador--;
    }
    // soma todos os 9 primeiros dígitos e faz o módulo de 11
    soma = (soma * 10) % 11;
    
    // se o resultado for igual a 10 ou 11, coloca o valor da soma como 0
    if (soma == 10 || soma == 11) {
        soma = 0;
    }
    //retorna se o valor da soma é igual ou diferente do nono dígito do cpf(se for igual, é válido)
    return soma != cpf[9];
}

function validaSegundoDigito(cpf) {
    let soma = 0;
    let multiplicador = 11;

    for(let tamanho = 0; tamanho < 10; tamanho++) {
        soma += cpf[tamanho] * multiplicador;
        multiplicador--;
    }
    // soma todos os 10 primeiros dígitos e faz o módulo de 11
    soma = (soma * 10) % 11;
    
    // se o resultado for igual a 10 ou 11, coloca o valor da soma como 0
    if (soma == 10 || soma == 11) {
        soma = 0;
    }
    //retorna se o valor da soma é igual ou diferente do décimo dígito do cpf(se for igual, é válido)
    return soma != cpf[10];
}