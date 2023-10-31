document.addEventListener('DOMContentLoaded', function() {
    const startButton = document.getElementById('start-button');
    const instructions = document.querySelector('.breathing-instructions');
    const circle = document.querySelector('.circle');
    const completionMessage = document.getElementById('completion-message');
    const returnButton = document.querySelector('.return-button'); // Botón de regreso

    let isInhaling = true; // Variable para alternar entre inhalación y exhalación

    startButton.addEventListener('click', function() {
        // Oculta las instrucciones y el botón al hacer clic en "Iniciar"
        instructions.style.display = 'none';
        startButton.style.display = 'none';

        circle.classList.add('breathing-animation');

        // Controla la animación de inhalación y exhalación
        let timer = setTimeout(function() {
            completionMessage.style.display = 'block';
            returnButton.style.display = 'block'; // Muestra el botón de regreso
            circle.style.display = 'none';
        }, 60000); // 1 minuto (60,000 ms)

        setInterval(function() {
            if (isInhaling) {
                // Cambia el texto a "Inhala" durante la expansión
                circle.classList.remove('reverse');
                circle.querySelector('.breathing-text').textContent = 'Inhala';
            } else {
                // Cambia el texto a "Exhala" durante la contracción
                circle.classList.add('reverse');
                circle.querySelector('.breathing-text').textContent = 'Exhala';
            }

            isInhaling = !isInhaling; // Alterna entre inhalación y exhalación
        }, 10000); // 10 segundos para inhalación y 10 segundos para exhalación
    });
});
