// Intersection Observer

export function setupEvents() {
    document.addEventListener("DOMContentLoaded", function () {
        const sections = document.querySelectorAll(".fade-section");
        
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("visible");
                    } else {
                        entry.target.classList.remove("visible");
                    }
                });
            },
            { threshold: 0.5 } // Minimum 50% of the element is visible
        );
        
        sections.forEach((section) => {
            observer.observe(section);
        });
    });
}