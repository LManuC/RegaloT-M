const cards = document.querySelectorAll('.card');
const submitBtn = document.getElementById('submitBtn');

let selectedValue = null;

cards.forEach(card => {
    card.addEventListener('click', () => {

        // Volver todas a estado normal
        if (selectedValue === card.dataset.value) {
            card.classList.remove('flipped');
            selectedValue = null;
            submitBtn.disabled = true;
        } else {
            cards.forEach(c => c.classList.remove('flipped'));
            card.classList.add('flipped');
            selectedValue = card.dataset.value;
            submitBtn.disabled = false;
        }
    });
});

submitBtn.addEventListener('click', () => {
    if (!selectedValue) return;

    const subject = encodeURIComponent("Elección de heladera");
    const body = encodeURIComponent(
        `Hola!\n\nLa heladera elegida es:\n\n${selectedValue}\n\n¡Gracias!`
    );

    window.location.href = `mailto:lmanuelcarra@gmail.com?subject=${subject}&body=${body}`;

    const subject2 = encodeURIComponent("Reserva de hotel");
    const body2 = encodeURIComponent(
        `Para que descansen después de la fiesta\n\n` +
                `Hotel: Hotel Plaza Central Canning ⭐⭐⭐⭐⭐\n\n` +
                `Habitación: Suite Deluxe\n\n` +
                `Check-in: 22:00 hs\n\n` +
                `Reservas: Tomas Marco y Luciana Maio\n\n`
    );

    window.location.href = `mailto:lmanuelcarra@gmail.com?subject=${subject2}&body=${body2}`;

    window.location.href = `./dedicatoria.html`;
});
