// Make cards in Projects section
import games from './gamelist.js'; // this file is hid with .gitignore

function getStatusClass(status) {
    switch (status) {
        case "Completed": return "status-completed";
        case "Completed, Updated": return "status-completed";
        case "WIP": return "status-wip";
        case "Delayed": return "status-abandoned";
        case "Abandoned": return "status-abandoned";
        case "Forgot This One Exist": return "status-abandoned";
        default: return "";
    }
}

function createGameCard(game) {
    return `
    <div class="card">
        <div class="card-top">
            <img src="${game.icon}" alt="${game.name} Icon" class="game-icon">
            <h3 class="game-title">${game.name}</h3>
        </div>
        
        <div class="card-down">
            <div class="game-meta"><span>${game.engine}</span></div>
            <div class="game-desc">${game.desc}</div>
            <div class="game-status">
                Status: <span class="${getStatusClass(game.status)}">${game.status}</span>
            </div>
            <div class="game-links">
                ${game.github ? `<a href="${game.github}" title="GitHub" target="_blank"><i class="fa-brands fa-github"></i></a>` : ""}
                ${game.itch ? `<a href="${game.itch}" title="itch.io" target="_blank"><i class="fa-brands fa-itch-io"></i></a>` : ""}
            </div>
        </div>
    </div>
  `;
}

export default function createProjectsCards() {
    const projectsContainer = document.querySelector('.card-projects');
    projectsContainer.innerHTML = games.map(createGameCard).join('');
}