const container = document.getElementById('grid-container');
const clearBtn = document.getElementById('clear-btn');
const statusText = document.getElementById('status-text');
const colorPicker = document.getElementById('color-picker');
const colorBtns = document.querySelectorAll('.color-btn');

// Configuration
const CONTAINER_SIZE = 960; // Matches CSS width/height
let currentSize = 16;
let currentColor = 'black'; // Can be hex or named color
let isRainbowMode = false;
let isDrawing = false; // For click-and-drag drawing

// Helper Functions
function setColor(color) {
    currentColor = color;
    isRainbowMode = false;
    statusText.innerText = `Tool: ${color.toUpperCase()} | Size: ${currentSize}x${currentSize}`;

    // Sync color picker if valid hex
    if (color.startsWith('#')) {
        colorPicker.value = color;
    }
}

function setRainbow() {
    isRainbowMode = true;
    statusText.innerText = `Tool: MAGIC | Size: ${currentSize}x${currentSize}`;
}

// 1. Create Grid Function
function createGrid(size) {
    // Clear existing
    container.innerHTML = '';

    // Logic: Calculate width of one square
    // We use strict arithmetic. 960 / 16 = 60.
    const itemSize = CONTAINER_SIZE / size;
    const totalSquares = size * size;

    for (let i = 0; i < totalSquares; i++) {
        const square = document.createElement('div');
        square.classList.add('grid-item');

        // Dynamic Sizing
        square.style.width = `${itemSize}px`;
        square.style.height = `${itemSize}px`;

        // Interaction Listeners
        square.addEventListener('mouseover', draw);
        square.addEventListener('mousedown', draw);

        container.appendChild(square);
    }

    statusText.innerText = `Canvas Ready. Size: ${size}x${size}`;
}

// 2. Drawing Logic
function draw(e) {
    // Only draw if mouse is pressed OR it's a mouseover event (traditional Etch-A-Sketch style)
    // For standard pixel art, we usually want click+drag.
    // However, the prompt asked for "pass over them" (hover).
    // Let's stick to simple Hover for the prompt requirements.

    let colorToApply = currentColor;

    if (isRainbowMode) {
        const r = Math.floor(Math.random() * 256);
        const g = Math.floor(Math.random() * 256);
        const b = Math.floor(Math.random() * 256);
        colorToApply = `rgb(${r},${g},${b})`;
    }

    e.target.style.backgroundColor = colorToApply;
}

// 3. User Controls
const sizeSlider = document.getElementById('size-slider');
const sizeValue = document.getElementById('size-value');

sizeSlider.addEventListener('input', (e) => {
    const newSize = parseInt(e.target.value);
    sizeValue.innerText = newSize;
});

sizeSlider.addEventListener('change', (e) => {
    const newSize = parseInt(e.target.value);
    currentSize = newSize;
    createGrid(currentSize);
});

clearBtn.addEventListener('click', () => {
    // Just re-run createGrid with current size to wipe it
    createGrid(currentSize);
    createGrid(currentSize);
});

// Color Picker Listener
colorPicker.addEventListener('input', (e) => {
    setColor(e.target.value);
});

// Preset Color Buttons
colorBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const color = btn.getAttribute('data-color');
        setColor(color);
    });
});

// Initialize
window.onload = () => {
    createGrid(16);
    // Optional: Add global listener to enable "Click and Drag" instead of just hover
    // For now, adhering strictly to "hover effect" prompt.
};
// Make functions available globally for HTML onclick handlers
window.setColor = setColor;
window.setRainbow = setRainbow;
