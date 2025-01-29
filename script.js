// Sample card contents - just an array of texts
const defaultCardContents = [
    "Chess ♟️",
    "Wiki 📰",
    "Polls 📊",
    "Forms 📝",
    "Marketplace 🛒",
    "Git stuff 🐱",
    "Torrent 🌊",
    "Job boards 💼",
    "Sheets 📊",
    "Kanban 🗃️"
];

// Get card contents from local storage or use default
let cardContents = defaultCardContents;

// Create cards
function createCards() {
    const container = document.getElementById('cardsContainer');
    container.innerHTML = '';

    cardContents.forEach((text, index) => {
        const cardElement = document.createElement('div');
        cardElement.className = 'card';
        cardElement.innerHTML = `
            <div class="card-inner">
                <div class="card-front">
                    ${index + 1}
                </div>
                <div class="card-back">
                    ${text}
                </div>
            </div>
        `;

        cardElement.addEventListener('click', () => {
            cardElement.classList.toggle('flipped');
        });

        container.appendChild(cardElement);
    });
}

// Initialize the app
createCards();
