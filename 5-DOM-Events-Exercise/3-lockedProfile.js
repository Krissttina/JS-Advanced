function lockedProfile(){
    console.log(Array.from(document.querySelectorAll('.profile button')));
    Array.from(document.querySelectorAll('.profile button')).forEach((e) =>
    e.addEventListener('click', onClick));

    function onClick(event){
        const parent = event.target.parentElement;
        const unlockedCheck = parent.querySelector('input[value="unlock"]');
        if(unlockedCheck.checked){
            const hiden = parent.querySelector('div');
            hiden.style.display === 'block'
            ? (hiden.style.display = 'none')
            : (hiden.style.display = 'block');

            event.target.textContent === 'Show more'
            ? (event.target.textContent = 'Hide it')
            : (event.target.textContent = 'Show more');
        }
    }
}