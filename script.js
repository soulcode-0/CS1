document.addEventListener('DOMContentLoaded', () => {
    const section4Images = [
        { src: 'images/3.avif', text: 'EDUCATION & INFRASTRUCTURE' },
        { src: 'images/4.avif', text: 'KNOWLEDGE & DETERMINATION.' },
        { src: 'images/5.avif', text: 'MOTIVATION AND LEADERSHIP' }
    ];

    let section4Index = 0;

    function updateContent() {
        const image = document.getElementById('section4-image');
        const text = document.getElementById('section4-text');

        // Slide out the current text
        text.classList.add('hidden');
        text.classList.remove('slide-in-right'); // Ensure it's reset

        // Fade out the current image
        image.classList.add('hidden');

        // Wait for the transitions to complete before changing content
        setTimeout(() => {
            image.src = section4Images[section4Index].src;
            text.textContent = section4Images[section4Index].text;

            // Fade in the new image
            image.classList.remove('hidden');

            // Slide in the new text
            text.classList.add('slide-in-right');
            text.classList.remove('hidden');
        }, 500); // Match the CSS transition duration
    }

    document.getElementById('next').addEventListener('click', () => {
        section4Index = (section4Index + 1) % section4Images.length;
        updateContent();
    });

    document.getElementById('prev').addEventListener('click', () => {
        section4Index = (section4Index - 1 + section4Images.length) % section4Images.length;
        updateContent();
    });

    // Initial setup
    updateContent();
});
