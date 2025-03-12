//

export function setupHero() {
    const images = [
        "../../assets/img/fancade-boxform.png",
        "../../assets/img/fancade-gemines.png",
        "../../assets/img/fancade-netra.png",
        "../../assets/img/fancade-pathris.png",
        "../../assets/img/fancade-stacknt.png",
        "../../assets/img/numdle.png",
    ];
    
    let currentIndex = 0;
    const heroBg = document.querySelector(".hero-bg");
    
    function changeBackground() {
        heroBg.style.opacity = 0;  // Fade out
        setTimeout(() => {
            heroBg.style.backgroundImage = `url(${images[currentIndex]})`;
            heroBg.style.opacity = 0.5;  // Fade in, set image's opacity
            currentIndex = (currentIndex + 1) % images.length; // Loop
        }, 500); // Wait before changing
    }

    // Start fade transition
    changeBackground();
    setInterval(changeBackground, 4000); // Change every 5 seconds
}