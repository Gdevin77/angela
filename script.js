document.getElementById('heartButton').addEventListener('click', function() {
    createFireworks(200); // Adjust the number of fireworks
});

function createFireworks(count) {
    const container = document.getElementById('fireworks-container');

    for (let i = 0; i < count; i++) {
        const firework = document.createElement('div');
        firework.classList.add('firework');

        // Random start position
        const startX = Math.random() * window.innerWidth;
        const startY = Math.random() * window.innerHeight;

        firework.style.left = startX + 'px';
        firework.style.top = startY + 'px';

        // Random end position (explosion)
        const endX = (Math.random() - 0.5) * 400; // Adjust range as needed
        const endY = (Math.random() - 0.5) * 400;

        firework.style.setProperty('--x', endX + 'px');
        firework.style.setProperty('--y', endY + 'px');

        // Random size and color
        const size = Math.random() * 5 + 5; // Size between 5px and 10px
        firework.style.width = size + 'px';
        firework.style.height = size + 'px';

        const hue = Math.random() * 360; // Random hue
        firework.style.backgroundColor = `hsl(${hue}, 100%, 50%)`;

        container.appendChild(firework);

        // Remove the firework element after the animation
        firework.addEventListener('animationend', () => {
            firework.remove();
        });
    }
}