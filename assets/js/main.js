
document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll(".content");
    cards.forEach((card, i) => {
        card.style.zIndex = cards.length - i;
    })
})

