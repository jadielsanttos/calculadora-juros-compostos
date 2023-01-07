function calcular() {

    // fórmula para calcular porcentagem = taxa x valor / 100

    // fórmula para calcular juros compostos: m = c.(1+i)**t

    let c = document.querySelector('.input_valor').value;
    let i = document.querySelector('.input_juros').value; // i/100
    let t = document.querySelector('.input_periodo').value;

    let taxa_juros = i / 100;  // 10%100 = 10/100    0,10
    let calculo = (taxa_juros + 1) ** t;
    let montante_total = c * calculo;
    let juros_total = montante_total - c;
    
    document.querySelector('.area-resultado').style.display = 'block';
    document.querySelector('#span-montante').innerHTML = `Montante total: R$ ${montante_total.toLocaleString('pt-BR', {minimumFractionDigits:2,maximumFractionDigits:2})}`;
    document.querySelector('#span-juros').innerHTML = `Juros total: R$ ${juros_total.toLocaleString('pt-BR', {minimumFractionDigits:2,maximumFractionDigits:2})}`;

}


