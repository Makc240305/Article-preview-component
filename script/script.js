document.addEventListener("DOMContentLoaded", function () {
    const shareButton = document.querySelector(".card__share-button");
    const socialPanel = document.querySelector(".card__social");
    const svgShare = document.querySelector('.svg-share');

    shareButton.addEventListener("click", function () {

        this.classList.toggle("active");
        socialPanel.classList.toggle("hidden");
        
        svgShare.getAttribute('fill') !== 'white' ? svgShare.setAttribute("fill", "white") : svgShare.setAttribute("fill", "#6E8098");
    });
});
