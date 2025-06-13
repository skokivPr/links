console.log('Script.js started loading...');

// Poczekaj na załadowanie index.js i wygenerowanie przycisków
function waitForButtons() {
    console.log('Waiting for buttons to be generated...');
    return new Promise((resolve) => {
        const checkButtons = () => {
            const buttons = document.querySelectorAll('.link-button');
            console.log('Current buttons found:', buttons.length);
            if (buttons.length > 0) {
                console.log('Buttons found, initializing...');
                resolve(buttons);
            } else {
                console.log('No buttons yet, checking again in 100ms...');
                setTimeout(checkButtons, 100);
            }
        };
        checkButtons();
    });
}

// Funkcja do inicjalizacji przycisków
async function initializeButtons() {
    try {
        console.log('Waiting for buttons to be available...');
        const buttons = await waitForButtons();
        console.log('Initializing buttons:', buttons.length);

        // Mapowanie kategorii do kolorów i cieni
        const categoryStyles = {
            orange: {
                bg: 'rgba(249, 115, 22, 0.1)',
                shadow: '0 4px 6px rgba(0, 0, 0, 0.3), 0 10px 25px rgba(0, 0, 0, 0.2), 0 10px 25px rgba(0, 0, 0, 0.25)',
                hoverShadow: '0 0 10px rgba(249, 115, 22, 0.5), 0 0 10px rgba(249, 115, 22, 0.3), 0 0 25px rgba(249, 115, 22, 0.2)',
                hoverBorder: 'rgb(249, 115, 22)',
                hoverBg: 'rgba(249, 115, 22, 0.3)'
            },
            blue: {
                bg: 'rgba(59, 130, 246, 0.1)',
                shadow: '0 4px 6px rgba(0, 0, 0, 0.3), 0 10px 25px rgba(0, 0, 0, 0.2), 0 10px 25px rgba(0, 0, 0, 0.25)',
                hoverShadow: '0 0 10px rgba(59, 130, 246, 0.5), 0 0 10px rgba(59, 130, 246, 0.3), 0 0 25px rgba(59, 130, 246, 0.2)',
                hoverBorder: 'rgb(59, 130, 246)',
                hoverBg: 'rgba(59, 130, 246, 0.3)'
            },
            green: {
                bg: 'rgba(34, 197, 94, 0.1)',
                shadow: '0 4px 6px rgba(0, 0, 0, 0.3), 0 10px 25px rgba(0, 0, 0, 0.2), 0 10px 25px rgba(0, 0, 0, 0.25)',
                hoverShadow: '0 0 10px rgba(34, 197, 94, 0.5), 0 0 10px rgba(34, 197, 94, 0.3), 0 0 25px rgba(34, 197, 94, 0.2)',
                hoverBorder: 'rgb(34, 197, 94)',
                hoverBg: 'rgba(34, 197, 94, 0.3)'
            },
            yellow: {
                bg: 'rgba(234, 179, 8, 0.1)',
                shadow: '0 4px 6px rgba(0, 0, 0, 0.3), 0 10px 25px rgba(0, 0, 0, 0.2), 0 10px 25px rgba(0, 0, 0, 0.25)',
                hoverShadow: '0 0 10px rgba(234, 179, 8, 0.5), 0 0 10px rgba(234, 179, 8, 0.3), 0 0 25px rgba(234, 179, 8, 0.2)',
                hoverBorder: 'rgb(234, 179, 8)',
                hoverBg: 'rgba(234, 179, 8, 0.3)'
            },
            red: {
                bg: 'rgba(239, 68, 68, 0.1)',
                shadow: '0 4px 6px rgba(0, 0, 0, 0.3), 0 10px 25px rgba(0, 0, 0, 0.2), 0 10px 25px rgba(0, 0, 0, 0.25)',
                hoverShadow: '0 0 10px rgba(239, 68, 68, 0.5), 0 0 10px rgba(239, 68, 68, 0.3), 0 0 25px rgba(239, 68, 68, 0.2)',
                hoverBorder: 'rgb(239, 68, 68)',
                hoverBg: 'rgba(239, 68, 68, 0.3)'
            },
            purple: {
                bg: 'rgba(168, 85, 247, 0.1)',
                shadow: '0 4px 6px rgba(0, 0, 0, 0.3), 0 10px 25px rgba(0, 0, 0, 0.2), 0 10px 25px rgba(0, 0, 0, 0.25)',
                hoverShadow: '0 0 10px rgba(168, 85, 247, 0.5), 0 0 10px rgba(168, 85, 247, 0.3), 0 0 25px rgba(168, 85, 247, 0.2)',
                hoverBorder: 'rgb(168, 85, 247)',
                hoverBg: 'rgba(168, 85, 247, 0.3)'
            },
            pink: {
                bg: 'rgba(236, 72, 153, 0.1)',
                shadow: '0 4px 6px rgba(0, 0, 0, 0.3), 0 10px 25px rgba(0, 0, 0, 0.2), 0 10px 25px rgba(0, 0, 0, 0.25)',
                hoverShadow: '0 0 10px rgba(236, 72, 153, 0.5), 0 0 10px rgba(236, 72, 153, 0.3), 0 0 25px rgba(236, 72, 153, 0.2)',
                hoverBorder: 'rgb(236, 72, 153)',
                hoverBg: 'rgba(236, 72, 153, 0.3)'
            },
            teal: {
                bg: 'rgba(20, 184, 166, 0.1)',
                shadow: '0 4px 6px rgba(0, 0, 0, 0.3), 0 10px 25px rgba(0, 0, 0, 0.2), 0 10px 25px rgba(0, 0, 0, 0.25)',
                hoverShadow: '0 0 10px rgba(20, 184, 166, 0.5), 0 0 10px rgba(20, 184, 166, 0.3), 0 0 25px rgba(20, 184, 166, 0.2)',
                hoverBorder: 'rgb(20, 184, 166)',
                hoverBg: 'rgba(20, 184, 166, 0.3)'
            },
            lime: {
                bg: 'rgba(132, 204, 22, 0.1)',
                shadow: '0 4px 6px rgba(0, 0, 0, 0.3), 0 10px 25px rgba(0, 0, 0, 0.2), 0 10px 25px rgba(0, 0, 0, 0.25)',
                hoverShadow: '0 0 10px rgba(132, 204, 22, 0.5), 0 0 10px rgba(132, 204, 22, 0.3), 0 0 25px rgba(132, 204, 22, 0.2)',
                hoverBorder: 'rgb(132, 204, 22)',
                hoverBg: 'rgba(132, 204, 22, 0.3)'
            },
            cyan: {
                bg: 'rgba(6, 182, 212, 0.1)',
                shadow: '0 4px 6px rgba(0, 0, 0, 0.3), 0 10px 25px rgba(0, 0, 0, 0.2), 0 10px 25px rgba(0, 0, 0, 0.25)',
                hoverShadow: '0 0 10px rgba(6, 182, 212, 0.5), 0 0 10px rgba(6, 182, 212, 0.3), 0 0 25px rgba(6, 182, 212, 0.2)',
                hoverBorder: 'rgb(6, 182, 212)',
                hoverBg: 'rgba(6, 182, 212, 0.3)'
            },
            fuchsia: {
                bg: 'rgba(217, 70, 239, 0.1)',
                shadow: '0 4px 6px rgba(0, 0, 0, 0.3), 0 10px 25px rgba(0, 0, 0, 0.2), 0 10px 25px rgba(0, 0, 0, 0.25)',
                hoverShadow: '0 0 10px rgba(217, 70, 239, 0.5), 0 0 10px rgba(217, 70, 239, 0.3), 0 0 25px rgba(217, 70, 239, 0.2)',
                hoverBorder: 'rgb(217, 70, 239)',
                hoverBg: 'rgba(217, 70, 239, 0.3)'
            },
            indigo: {
                bg: 'rgba(99, 102, 241, 0.1)',
                shadow: '0 4px 6px rgba(0, 0, 0, 0.3), 0 10px 25px rgba(0, 0, 0, 0.2), 0 10px 25px rgba(0, 0, 0, 0.25)',
                hoverShadow: '0 0 10px rgba(99, 102, 241, 0.5), 0 0 10px rgba(99, 102, 241, 0.3), 0 0 25px rgba(99, 102, 241, 0.2)',
                hoverBorder: 'rgb(99, 102, 241)',
                hoverBg: 'rgba(99, 102, 241, 0.3)'
            },
            amber: {
                bg: 'rgba(245, 158, 11, 0.1)',
                shadow: '0 4px 6px rgba(0, 0, 0, 0.3), 0 10px 25px rgba(0, 0, 0, 0.2), 0 10px 25px rgba(0, 0, 0, 0.25)',
                hoverShadow: '0 0 10px rgba(245, 158, 11, 0.5), 0 0 10px rgba(245, 158, 11, 0.3), 0 0 25px rgba(245, 158, 11, 0.2)',
                hoverBorder: 'rgb(245, 158, 11)',
                hoverBg: 'rgba(245, 158, 11, 0.3)'
            }
        };

        // Funkcja do ustawiania stylów przycisku
        function setButtonStyles(button) {
            try {
                const category = button.getAttribute('data-category');
                console.log('Setting styles for button:', {
                    text: button.textContent.trim(),
                    category,
                });

                if (!category || !categoryStyles[category]) {
                    console.warn('Invalid category for button:', {
                        category,
                        buttonClasses: button.className
                    });
                    return;
                }

                const style = categoryStyles[category];

                // Ustawienie stylów
                button.style.backgroundColor = style.bg;
                button.style.boxShadow = style.shadow;
                button.style.borderColor = 'rgba(255, 255, 255, 0.1)';

                // Dodaj event listenery dla hover
                button.addEventListener('mouseenter', () => {
                    button.style.backgroundColor = style.hoverBg;
                    button.style.boxShadow = style.hoverShadow;
                    button.style.borderColor = style.hoverBorder;
                    button.style.borderWidth = '2px';
                    button.style.borderStyle = 'solid';
                    button.style.transform = 'translateX(10px)';
                });

                button.addEventListener('mouseleave', () => {
                    button.style.backgroundColor = style.bg;
                    button.style.boxShadow = style.shadow;
                    button.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                    button.style.borderWidth = '2px';
                    button.style.borderStyle = 'solid';
                    button.style.transform = 'translateX(0)';
                });

                // Obsługa kliknięcia
                button.addEventListener('click', (e) => {
                    console.log('Button clicked:', button.textContent.trim());
                    e.preventDefault();

                    button.style.transform = 'scale(0.98)';
                    setTimeout(() => {
                        setButtonStyles(button);
                    }, 100);

                    setTimeout(() => {
                        const href = button.getAttribute('href');
                        console.log('Navigating to:', href);
                        window.location.href = href;
                    }, 300);
                });

            } catch (error) {
                console.error('Error setting button styles:', error, {
                    button: button.outerHTML,
                    category: button.getAttribute('data-category')
                });
            }
        }

        // Inicjalizacja przycisków
        buttons.forEach((button, index) => {
            try {
                console.log(`Initializing button ${index + 1}:`, {
                    text: button.textContent.trim(),
                    category: button.getAttribute('data-category')
                });

                // Ustawienie początkowych stylów
                setButtonStyles(button);

            } catch (error) {
                console.error('Error initializing button:', error, {
                    button: button.outerHTML,
                    index
                });
            }
        });

        console.log('All buttons initialized successfully');
    } catch (error) {
        console.error('Error in initializeButtons:', error);
    }
}

// Poczekaj na załadowanie DOM i index.js
if (document.readyState === 'loading') {
    console.log('DOM still loading, waiting...');
    document.addEventListener('DOMContentLoaded', () => {
        console.log('DOM loaded, waiting for index.js...');
        // Poczekaj na załadowanie index.js
        setTimeout(() => {
            console.log('Starting button initialization...');
            initializeButtons();
        }, 1000); // Daj czas na załadowanie i wykonanie index.js
    });
} else {
    console.log('DOM already loaded, waiting for index.js...');
    // Poczekaj na załadowanie index.js
    setTimeout(() => {
        console.log('Starting button initialization...');
        initializeButtons();
    }, 1000);
}

// Obsługa dynamicznie dodawanych przycisków
console.log('Setting up mutation observer');
const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
        if (mutation.addedNodes.length) {
            mutation.addedNodes.forEach((node) => {
                if (node.classList && node.classList.contains('link-button')) {
                    console.log('New button added, reinitializing');
                    initializeButtons();
                }
            });
        }
    });
});

// Obserwowanie zmian w DOM
observer.observe(document.body, {
    childList: true,
    subtree: true
});

console.log('Script.js finished loading'); 