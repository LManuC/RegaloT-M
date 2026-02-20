const cards = document.querySelectorAll('.card');
const submitBtn = document.getElementById('submitBtn');
const textsubmitBtn = document.getElementById('textsubmitBtn');

let selectedValue = null;

cards.forEach(card => {
    card.addEventListener('click', () => {

        // Volver todas a estado normal
        if (selectedValue === card.dataset.value) {
            card.classList.remove('flipped');
            selectedValue = null;
            submitBtn.textContent = "Elegir otra heladera";
        } else {
            cards.forEach(c => c.classList.remove('flipped'));
            card.classList.add('flipped');
            selectedValue = card.dataset.value;
            submitBtn.textContent = "Confirmar elección";
        }
    });
});

submitBtn.addEventListener('click', () => {
    message = '';

    if (!selectedValue) {
        message = `Queremos la heladera: ...`;
    } else {
        message = `La heladera elegida es:\n\n*${selectedValue}*`;
    }

    const url = `https://wa.me/5491159929089?text=${encodeURIComponent(message)}`;
    
    window.open(url, 'blank');
    window.open('./dedicatoria.html', '_self');
});
