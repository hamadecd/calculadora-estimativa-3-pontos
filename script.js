const otimista = document.getElementById('otimista');
const provavel = document.getElementById('provavel');
const pessimista = document.getElementById('pessimista');
const casosTesteInput = document.getElementById('casosTeste');

function calcular() {
    const o = parseFloat(otimista.value);
    const m = parseFloat(provavel.value);
    const p = parseFloat(pessimista.value);
    const casosTesteValue = casosTesteInput.value.trim();

    let casosTeste = 1;

    if (isNaN(o) || isNaN(m) || isNaN(p)) {
        alert('Por favor, preencha os campos obrigatórios (Otimista, Mais Provável, Pessimista) com números válidos.');
        limparValores();
        return;
    }

    if (casosTesteValue !== '' && isNaN(parseFloat(casosTesteValue))) {
        alert('Por favor, insira um número válido para a Quantidade de Casos de Teste, ou deixe o campo vazio.');
        limparValores();
        return;
    }

    if (casosTesteValue !== '') {
        casosTeste = parseFloat(casosTesteValue);
        if (casosTeste <= 0) {
            alert('A Quantidade de Casos de Teste deve ser maior que zero.');
            limparValores();
            return;
        }
    }

    const estimativaE = (o + 4 * m + p) / 6;

    const desvioSD = (p - o) / 6;

    const estimativaTotal = estimativaE * casosTeste;

    const desvioSDTotal = desvioSD * Math.sqrt(casosTeste);

    document.getElementById('resultadoE').textContent = estimativaE.toFixed(2);
    document.getElementById('resultadoSD').textContent = desvioSD.toFixed(2);
    document.getElementById('resultadoTotal').textContent = estimativaTotal.toFixed(2);
    document.getElementById('desvioTotal').textContent = desvioSDTotal.toFixed(2);
}

function limparValores() {
    otimista.value = '';
    provavel.value = '';
    pessimista.value = '';
    casosTesteInput.value = '';
    document.getElementById('resultadoE').textContent = '-';
    document.getElementById('resultadoSD').textContent = '-';
    document.getElementById('resultadoTotal').textContent = '-';
    document.getElementById('desvioTotal').textContent = '-';
}