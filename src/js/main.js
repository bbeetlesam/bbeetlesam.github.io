// JawaScript

// URL links
const url = {
    itch: "https://bbeetlesam.itch.io/",
    instagram: "https://www.instagram.com/jstsams",
};

document.addEventListener('DOMContentLoaded', () => {
    function reload() {
        window.location.reload();
    }
    
    function func() {
        window.location.href = url.itch;
        document.getElementById(`itch`).innerHTML = 'Itch.io!'
    }
    
    function ig() {
        window.location.href = url.instagram;
    }
    
    // document.getElementById('itch').addEventListener('click', func);
    // document.getElementById('instagram').addEventListener('click', ig);
});

document.addEventListener('click', (event) => {
    console.log("hello", event.x, event.y);
});

document.querySelector(".menu-toggle").addEventListener("click", function () {
    document.querySelector("nav ul").classList.toggle("show");
});