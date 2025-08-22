document.addEventListener('DOMContentLoaded', () => {
    // --- Elementos del DOM ---
    const gridContainer = document.getElementById('grid-container');
    const startBtn = document.getElementById('start-btn');
    const pauseBtn = document.getElementById('pause-btn');
    const clearBtn = document.getElementById('clear-btn');
    const timerInput = document.getElementById('timer-input');
    const speedInput = document.getElementById('speed-input');
    const generationCounter = document.getElementById('generation-counter');
    const toggleRulesBtn = document.getElementById('toggle-rules-btn');
    const rulesContent = document.getElementById('rules-content');

    // --- Configuración de la Simulación ---
    let cols, rows;
    let grid, nextGrid;
    let isRunning = false;
    let intervalId = null;
    let timerId = null;
    let generation = 0;
    const CELL_SIZE = 15; // Tamaño base de la celda en píxeles.

    // --- Inicialización ---
    function setupGrid() {
        const width = gridContainer.clientWidth;
        cols = Math.floor(width / CELL_SIZE);
        rows = cols; // Hacemos la cuadrícula cuadrada

        gridContainer.style.gridTemplateColumns = `repeat(${cols}, 1fr)`;
        gridContainer.style.gridTemplateRows = `repeat(${rows}, 1fr)`;

        grid = createEmptyGrid();
        nextGrid = createEmptyGrid();

        gridContainer.innerHTML = ''; // Limpiar celdas previas
        for (let i = 0; i < rows; i++) {
            for (let j = 0; j < cols; j++) {
                const cell = document.createElement('div');
                cell.classList.add('cell');
                cell.dataset.row = i;
                cell.dataset.col = j;
                gridContainer.appendChild(cell);
            }
        }
    }
    
    function createEmptyGrid() {
        return new Array(rows).fill(null)
            .map(() => new Array(cols).fill(0));
    }

    // --- Lógica del Juego ---
    function computeNextGeneration() {
        for (let i = 0; i < rows; i++) {
            for (let j = 0; j < cols; j++) {
                const state = grid[i][j];
                const neighbors = countNeighbors(i, j);

                if (state === 0 && neighbors === 3) {
                    nextGrid[i][j] = 1; // Nacimiento
                } else if (state === 1 && (neighbors < 2 || neighbors > 3)) {
                    nextGrid[i][j] = 0; // Muerte
                } else {
                    nextGrid[i][j] = state; // Supervivencia o sigue muerta
                }
            }
        }
        [grid, nextGrid] = [nextGrid, grid];
        generation++;
    }

    function countNeighbors(row, col) {
        let sum = 0;
        for (let i = -1; i < 2; i++) {
            for (let j = -1; j < 2; j++) {
                if (i === 0 && j === 0) continue;
                
                const r = (row + i + rows) % rows;
                const c = (col + j + cols) % cols;
                sum += grid[r][c];
            }
        }
        return sum;
    }

    // --- Renderizado ---
    function drawGrid() {
        for (let i = 0; i < rows; i++) {
            for (let j = 0; j < cols; j++) {
                const cell = gridContainer.children[i * cols + j];
                if (grid[i][j] === 1) {
                    cell.classList.add('alive');
                } else {
                    cell.classList.remove('alive');
                }
            }
        }
        generationCounter.textContent = `Generación: ${generation}`;
    }

    // --- Controles de la Simulación ---
    function runSimulation() {
        computeNextGeneration();
        drawGrid();
    }

    function start() {
        if (isRunning) return;
        isRunning = true;
        const speed = parseInt(speedInput.value, 10) || 100;
        intervalId = setInterval(runSimulation, speed);

        const timeLimit = parseInt(timerInput.value, 10);
        if (timeLimit > 0) {
            timerId = setTimeout(pause, timeLimit * 1000);
        }
    }

    function pause() {
        if (!isRunning) return;
        isRunning = false;
        clearInterval(intervalId);
        clearTimeout(timerId);
        intervalId = null;
        timerId = null;
    }

    function clearGrid() {
        pause();
        grid = createEmptyGrid();
        generation = 0;
        drawGrid();
    }

    // --- Manejo de Eventos ---
    startBtn.addEventListener('click', start);
    pauseBtn.addEventListener('click', pause);
    clearBtn.addEventListener('click', clearGrid);

    gridContainer.addEventListener('click', (event) => {
        if (isRunning || !event.target.classList.contains('cell')) return;
        
        const row = parseInt(event.target.dataset.row, 10);
        const col = parseInt(event.target.dataset.col, 10);

        grid[row][col] = grid[row][col] ? 0 : 1;
        drawGrid();
    });
    
    toggleRulesBtn.addEventListener('click', () => {
        const isHidden = rulesContent.style.display === 'none' || rulesContent.style.display === '';
        rulesContent.style.display = isHidden ? 'block' : 'none';
        toggleRulesBtn.textContent = isHidden ? 'Ocultar Reglas' : 'Mostrar Reglas';
    });
    
    window.addEventListener('resize', () => {
        pause();
        setupGrid();
        drawGrid();
    });

    // --- Inicio ---
    setupGrid();
    drawGrid();
});