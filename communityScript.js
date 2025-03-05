document.getElementById('searchButton').addEventListener('click', function() {
    const searchTerm = document.getElementById('searchBar').value;
    console.log('Cerca:', searchTerm);
    // Qui puoi aggiungere la logica per avviare la ricerca
});

// Gestione del menu a tendina
document.getElementById('menuButton').addEventListener('click', function(event) {
    const modal = document.getElementById('filterModal');
    modal.style.display = 'block'; // Mostra la finestra del filtro
    event.stopPropagation(); // Impedisce la propagazione dell'evento al documento
});

// Chiudi la finestra se si fa clic sul pulsante di chiusura
document.getElementById('closeModal').addEventListener('click', function() {
    const modal = document.getElementById('filterModal');
    modal.style.display = 'none'; // Nascondi la finestra del filtro
});

// Chiudi il menu se si fa clic al di fuori di esso
document.addEventListener('click', function(event) {
    const modal = document.getElementById('filterModal');
    if (modal.style.display === 'block' && !modal.contains(event.target) && event.target !== document.getElementById('menuButton')) {
        modal.style.display = 'none';
    }
});

document.getElementById('filterButton').addEventListener('click', function() {
    const checkboxes = document.querySelectorAll('#filterModal input[type="checkbox"]');
    let selectedFilters = [];
    checkboxes.forEach((checkbox) => {
        if (checkbox.checked) {
            selectedFilters.push(checkbox.value);
        }
    });
    console.log('Filtri selezionati:', selectedFilters);
    // Qui puoi aggiungere la logica per applicare i filtri
});