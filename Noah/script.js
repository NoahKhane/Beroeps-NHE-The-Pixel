document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll('.character-button');

    buttons.forEach(button => {
        button.addEventListener('click', function (event) {
            event.preventDefault(); // Prevent default anchor click behavior
            
            const targetId = button.getAttribute('href').substring(1); // Get target section ID
            const targetSection = document.getElementById(targetId);

            // Show the target section
            if (targetSection) {
                targetSection.style.display = 'flex'; // Change to flex to match previous styles
                targetSection.scrollIntoView({ behavior: 'smooth' }); // Smooth scroll to the section
            }
        });
    });
});
