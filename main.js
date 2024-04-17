const form = document.getElementById('form-html');
const textarea = document.getElementById('textarea');
const inputA = document.getElementById('numero-Campo-A');
const inputB = document.getElementById('numero-Campo-B');
const errorMessage = document.querySelector('.error-message');

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const campoA = parseInt(inputA.value);
    const campoB = parseInt(inputB.value);

    if (!isNaN(campoA) && !isNaN(campoB) && campoB > campoA) {
        const containerMensagemSucesso = document.querySelector('.success-message');
        containerMensagemSucesso.innerText = "Formulário Válido! B é Maior que A";
        containerMensagemSucesso.style.display = 'block';

        inputA.value = '';
        inputB.value = '';
        textarea.value = '';
        errorMessage.style.display = 'none';
    } else {
        inputB.style.border = '1px solid red';
        errorMessage.style.display = 'block';
    }
});

inputA.addEventListener('keyup', function(e) {
    const valorCampoA = parseInt(e.target.value);
    formEValido = !isNaN(valorCampoA);
});

inputB.addEventListener('keyup', function(e) {
    const valorCampoB = parseInt(e.target.value);
    formEValido = !isNaN(valorCampoB) && valorCampoB > parseInt(inputA.value);

    if (!formEValido) {
        inputB.style.border = '1px solid red';
        errorMessage.style.display = 'block';
    } else {
        inputB.style.border = '';
        errorMessage.style.display = 'none';
    }
});

textarea.addEventListener('keyup', function(e) {
    const valorTextarea = e.target.value;
});
