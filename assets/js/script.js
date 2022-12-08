const button = document.getElementById('generate');

button.addEventListener('click', function() {
    const min = parseInt(document.getElementById('min').value);
    const max = parseInt(document.getElementById('max').value);

    let resultat = Math.floor(Math.random() * (max - min + 1)) + min;

    if (isNaN(resultat)) {
        resultat = 'Valor inválido';
    }

    document.querySelector('#resultat > span').textContent = resultat;


});