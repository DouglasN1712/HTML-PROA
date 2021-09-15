const simular = document.getElementById('simular');
function simulador() {
    const input_nome = document.getElementById('input_nome').value;
    const input_mensalidade = document.getElementById('input_mensalidade').value;
    const input_tempo = document.getElementById('input_tempo').value;
    const resultado = document.getElementById('resultado');
    
    document.getElementById('input_mensalidade').value = "";
    document.getElementById('input_tempo').value = "";

    if (input_nome !== '' && input_mensalidade !== '' && input_tempo !== '') {
  
        
        const calculo = (input_tempo * 12 * input_mensalidade).toFixed(2);
        resultado.textContent = "Olá, ${input_nome}! Juntando ${input_mensalidade} todo mês, você terá ${calculo} em ${input_tempo} ano(s).";
    } else {
        resultado.textContent = "Preencha todos os campos.";
    }
}
simular.addEventListener('click', simulador);
