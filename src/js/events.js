// Handling events for the website

export function setupEvents() {
    document.addEventListener('DOMContentLoaded', () => {
        console.log("Server hostname: ", location.hostname); // for debugging
    });
    
    // Remove hash anchor in-page in the URL and smooth scroll to sections
    document.querySelectorAll('.navbar-link').forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('data-target');
            const target = document.getElementById(targetId);
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
                history.replaceState(null, '', window.location.pathname); // clear hash in URL
                console.log("href to:", this.getAttribute('href'));  // for debugging
            }
        });
    });
    
    // Remove hash anchor cross-page in the URL
    window.addEventListener('DOMContentLoaded', () => {
        if (window.location.hash) {
            history.replaceState(null, '', window.location.pathname + window.location.search);
        }
    });
}