function createElement(tag, className, content, style) {
    const element = document.createElement(tag);
    element.className = className;
    element.textContent = content;
    Object.assign(element.style, style);
    document.body.appendChild(element);
    // Apply animation
    const animationDuration = Math.random() * 5 + 5; // Random duration between 5s and 10s
    element.style.animationDuration = `${animationDuration}s`;
}

function generateRandomPosition() {
    return {
        top: Math.random() * -100 + 'vh', // Start above the viewport
        left: Math.random() * 100 + 'vw'  // Random horizontal position
    };
}

// Create hearts
for (let i = 0; i < 80; i++) {
    let { top, left } = generateRandomPosition();
    createElement('div', 'heart', '❤️', { top, left, fontSize: '3em' });
}

// Create flowers
for (let i = 0; i < 80; i++) {
    let { top, left } = generateRandomPosition();
    createElement('div', 'flower', '🌸', { top, left, fontSize: '3em' });
}

// Create text
for (let i = 0; i < 80; i++) {
    let { top, left } = generateRandomPosition();
    createElement('div', 'text', 'A+H', { top, left, fontSize: '2em' });
}
