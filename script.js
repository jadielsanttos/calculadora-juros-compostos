const error_msg = document.querySelector('.alert-danger');
const input_valor = document.querySelector('#input_valor');
const input_juros = document.querySelector('#input_juros');
const input_periodo = document.querySelector('#input_periodo');

function calcular() {
    // fórmula para calcular porcentagem = taxa x valor / 100

    // fórmula para calcular juros compostos: m = c.(1+i)**t

    let c = document.querySelector('#input_valor').value;
    let i = document.querySelector('#input_juros').value; // i/100
    let t = document.querySelector('#input_periodo').value;

    if(c.length == '0' || i.length == '0' || t.length == '0') {
        input_valor.style.border = '1px solid #B02A37';
        input_juros.style.border = '1px solid #B02A37';
        input_periodo.style.border = '1px solid #B02A37';
        error_msg.style.display = 'block';
        document.querySelector('.main').style.height = '530px';
    }else {
        let taxa_juros = i / 100;  // 10%100 = 10/100  = 0,10
        let calculo = (taxa_juros + 1) ** t;
        let montante_total = c * calculo;
        let juros_total = montante_total - c;


        input_valor.style.border = '';
        input_juros.style.border = '';
        input_periodo.style.border = '';
        error_msg.style.display = '';
    
        document.querySelector('.main').style.height = '650px';
        document.querySelector('.area-resultado').style.display = 'block';
        document.querySelector('#td-valor-aplicado').innerHTML = `R$ ${c}`;
        document.querySelector('#td-valor-final').innerHTML = `R$ ${montante_total.toLocaleString('pt-BR', {minimumFractionDigits:2,maximumFractionDigits:2})}`;
        document.querySelector('#td-juros-total').innerHTML = `R$ ${juros_total.toLocaleString('pt-BR', {minimumFractionDigits:2,maximumFractionDigits:2})}`;
    }

}

document.querySelector('.btn-clear').addEventListener('click', () => {
    document.querySelector('.main').style.height = '500px';
    document.querySelector('.area-resultado').style.display = 'none';

    document.querySelector('#input_valor').value = '';
    document.querySelector('#input_juros').value = '';
    document.querySelector('#input_periodo').value = '';
    
});