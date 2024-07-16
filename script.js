document.addEventListener('DOMContentLoaded', () => {
    const yesButton1 = document.getElementById('b1');
    const noButton1 = document.getElementById('b2');

    yesButton1.addEventListener('click', () => {
        window.location.href = 'pag2.html';
    });

    noButton1.addEventListener('click', () => {
        alert('Então saia da página');
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const yesButton2 = document.getElementById('b3');
    const noButton2 = document.getElementById('b4');

    yesButton2.addEventListener('click', () => {
        window.location.href = 'pag3.html';
    });

    noButton2.addEventListener('click', () => {
        window.location.href = 'index.html';
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const formulario = document.getElementById('meuFormulario');

    formulario.addEventListener('submit', (event) => {
        // Impede o envio do formulário se houver erros
        event.preventDefault();

        // Obtém os valores dos campos do formulário
        const primeiroNome = document.getElementById('primeiroNome').value.trim();
        const segundoNome = document.getElementById('segundoNome').value.trim();
        const idade = parseInt(document.getElementById('idade').value.trim(), 10);
        const nivelBeleza = document.getElementById('nivelBeleza').value.trim();

        // Define as informações corretas que devem ser inseridas
        const nomeCorreto = 'Heloise';
        const sobrenomeCorreto = 'Sophia';
        const idadeCorretaMinima = 15; // Deve ser um número
        const nivelBelezaCorreto = '10';

        // Verifica se os campos correspondem às informações corretas
        if (primeiroNome === nomeCorreto && segundoNome === sobrenomeCorreto && 
            !isNaN(idade) && idade >= idadeCorretaMinima && 
            nivelBeleza === nivelBelezaCorreto) {
            // Se tudo estiver correto, redireciona para a página pag4.html
            window.location.href = 'pag4.html';
        } else {
            // Exibe uma mensagem de erro caso os dados estejam incorretos
            alert('Informações incorretas. Verifique se os campos estão preenchidos corretamente.');
        }
    });
});
