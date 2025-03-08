//

import { url } from './config.js';

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