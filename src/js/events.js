//

// URL links
export const url = {
    itch: "https://bbeetlesam.itch.io/",
    instagram: "https://www.instagram.com/jstsams",
};

export function setupEvents() {
    document.addEventListener('DOMContentLoaded', () => {
        function reload() {
            window.location.reload();
        }

        function ig() {
            window.location.href = url.instagram;
        }
        
        document.getElementById('itch').addEventListener('click', reload);
        document.getElementById('instagram').addEventListener('click', ig);
    });
}