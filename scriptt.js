// scriptt.js

document.addEventListener('DOMContentLoaded', function() {
    // Define os valores corretos para comparação
    const nomeCorreto = 'Heloise Sophia Teles dos Santos';
    const nomeNamoradoCorreto = 'Alexandre';
    const idadeCorreta = 16;
    const querCorreto = 'Sim';

    // Adiciona o listener para o evento de submissão do formulário
    document.getElementById('meuFormulario').addEventListener('submit', function(event) {
        event.preventDefault(); // Impede o envio padrão do formulário

        // Coleta os valores dos campos
        const nomeC = document.getElementById('nomeC').value.trim();
        const nomeNamorado = document.getElementById('nomeNamorado').value.trim();
        const idadeNamorado = parseInt(document.getElementById('idadeNamorado').value.trim(), 10);
        const quer = document.getElementById('quer').value.trim();

        // Verifica se todos os campos estão preenchidos
        if (nomeC === '' || nomeNamorado === '' || isNaN(idadeNamorado) || quer === '') {
            alert('Por favor, preencha todos os campos corretamente.');
            return;
        }

        // Valida cada campo contra o valor correto
        if (nomeC !== nomeCorreto) {
            alert('O nome completo está incorreto.');
            return;
        }

        if (nomeNamorado !== nomeNamoradoCorreto) {
            alert('O nome do namorado está incorreto.');
            return;
        }

        if (idadeNamorado !== idadeCorreta) {
            alert('A idade está incorreta.');
            return;
        }

        if (quer !== querCorreto) {
            alert('Se vc nn quer, nn tem o pq estar aqui!');
            return;
        }

        // Se todas as validações passarem, redireciona para a página pag5.html
        window.location.href = 'pag5.html';
    });
});
