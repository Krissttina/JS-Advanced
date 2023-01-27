function solve() {
    const firstEl = document.createElement('option');
    const secondEl = document.createElement('option');
    firstEl.value = 'binary';
    secondEl.value = 'hexadecimal';
    firstEl.innerHTML = 'Binary';
    secondEl.innerHTML = 'Hexadecimal';

    const menuToEl = document.getElementById('selectMenuTo');
    menuToEl.appendChild(firstEl);
    menuToEl.appendChild(secondEl);

    const button = document.getElementsByTagName('button')[0];

    button.addEventListener('click', function() {
        const numberInput = document.getElementById('input');

        const outputResult = document.getElementById('result');
        if(menuToEl.value === 'binary'){
            outputResult.value = Number(numberInput.value).toString(2);
        }else if(menuToEl.value === 'hexadecimal'){
            outputResult.value = Number(numberInput.value).toString(16).toUpperCase();
        }
    })
}