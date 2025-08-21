// Espera a que todo el contenido del HTML esté cargado
document.addEventListener('DOMContentLoaded', () => {

    // --- SELECCIÓN DE ELEMENTOS DEL DOM ---
    const resultText = document.getElementById('result-text');
    const diceControls = document.getElementById('dice-controls');
    const historyList = document.getElementById('history-list');
    const clearHistoryBtn = document.getElementById('clear-history');

    // --- FUNCIÓN PRINCIPAL PARA LANZAR EL DADO ---
    const rollDice = (sides) => {
        // Genera un número aleatorio entre 1 y el número de caras
        return Math.floor(Math.random() * sides) + 1;
    };

    // --- FUNCIÓN PARA ACTUALIZAR LA INTERFAZ ---
    const updateUI = (sides, result) => {
        // 1. Muestra el resultado en la pantalla principal
        resultText.textContent = result;
        
        // 2. Crea un nuevo elemento para el historial
        const historyItem = document.createElement('li');
        const dieType = sides === 100 ? '%' : `d${sides}`;
        historyItem.textContent = `Tiraste un ${dieType}: Sacaste ${result}`;
        
        // 3. Añade el nuevo elemento al principio de la lista del historial
        historyList.prepend(historyItem);
    };

    // --- MANEJO DE EVENTOS ---

    // Event Listener para los botones de los dados (usando delegación de eventos)
    diceControls.addEventListener('click', (event) => {
        // Nos aseguramos de que se hizo clic en un botón
        if (event.target.classList.contains('dice-button')) {
            // Obtenemos el número de caras desde el atributo 'data-sides'
            const sides = parseInt(event.target.dataset.sides, 10);
            
            // Lanzamos el dado y obtenemos el resultado
            const result = rollDice(sides);
            
            // Actualizamos la interfaz con los nuevos datos
            updateUI(sides, result);
        }
    });

    // Event Listener para el botón de limpiar historial
    clearHistoryBtn.addEventListener('click', () => {
        historyList.innerHTML = ''; // Borra todo el contenido de la lista
        resultText.textContent = '¡Listo para rodar!'; // Resetea el texto principal
    });

});