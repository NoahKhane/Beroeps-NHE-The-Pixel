document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll('.character-button');

    buttons.forEach(button => {
        button.addEventListener('click', function (event) {
            const targetId = button.getAttribute('href').substring(1); // Get target section ID
            const targetSection = document.getElementById(targetId);

            // Only prevent default and scroll if the target section exists on the same page
            if (targetSection) {
                event.preventDefault(); // Prevent default anchor click behavior
                targetSection.style.display = 'flex'; // Show the target section
                targetSection.scrollIntoView({ behavior: 'smooth' }); // Smooth scroll to the section
            }
        });
    });
});
