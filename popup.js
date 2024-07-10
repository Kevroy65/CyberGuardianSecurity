document.addEventListener("DOMContentLoaded", function() {
    const searchForm = document.querySelector('.Searchbar');
    const searchInput = document.querySelector('.Inputbar');
    const carousel = document.querySelector('.carousel');
    const cards = Array.from(carousel.children);
    const logoContainer = document.querySelector('.Logo_container');
    const heading = document.querySelector('.Container h3');

    searchForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const searchTerm = searchInput.value.toLowerCase();

        // Clear the carousel
        carousel.innerHTML = '';

        // Filter and append matching cards
        cards.forEach(card => {
            const cardTitle = card.querySelector('h1 b').innerText.toLowerCase();
            if (cardTitle.includes(searchTerm)) {
                carousel.appendChild(card);
            }
        });
    });

    function restoreAllCards() {
        // Clear the carousel
        carousel.innerHTML = '';
        // Append all cards back to the carousel
        cards.forEach(card => {
            carousel.appendChild(card);
        });
    }

    logoContainer.addEventListener('click', restoreAllCards);
    heading.addEventListener('click', restoreAllCards);
});
