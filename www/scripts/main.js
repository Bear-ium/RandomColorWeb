document.getElementById('generateButton').addEventListener('click', function() {
    const colorCount = document.getElementById('colorCount').value;
    const colorGrid = document.getElementById('colorGrid');
    
    // Clear existing colors
    colorGrid.innerHTML = '';

    // Validate input
    if (colorCount < 1 || colorCount > 100) {
        alert('Please enter a number between 1 and 100.');
        return;
    }

    // Generate random colors
    for (let i = 0; i < colorCount; i++) {
        const colorBox = document.createElement('div');
        colorBox.className = 'color-box';
        const randomColor = getRandomColor();
        colorBox.style.backgroundColor = randomColor;
        colorBox.innerText = randomColor; // Display the color code
        colorGrid.appendChild(colorBox);
    }
});

// Function to generate a random color
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}