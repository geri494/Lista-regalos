window.onload = () => {
    // Cargar estado de los regalos desde el localStorage
    const giftList = document.querySelectorAll('#giftList input[type="checkbox"]');
    
    giftList.forEach(gift => {
        const giftId = gift.id;
        // Recuperar el estado guardado en localStorage
        if (localStorage.getItem(giftId) === 'checked') {
            gift.checked = true;
        }

        // Escuchar los cambios en el checkbox
        gift.addEventListener('change', () => {
            if (gift.checked) {
                localStorage.setItem(giftId, 'checked');
            } else {
                localStorage.removeItem(giftId);
            }
        });
    });
};
