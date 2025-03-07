// JawaScript

// URL links
const url = {
    itch: "https://bbeetlesam.itch.io/",
    instagram: "https://www.instagram.com/jstsams",
};

document.addEventListener('DOMContentLoaded', () => {
    // function reload() {
    //     window.location.reload();
    // }
    //
    // function ig() {
    //     window.location.href = url.instagram;
    // }
    
    // document.getElementById('itch').addEventListener('click', func);
    // document.getElementById('instagram').addEventListener('click', ig);
});

// Navbar dropdown
const menu = document.querySelector(".nav-center ul");
const hamburger = document.querySelector(".nav-left");

// idk how to explain this (this should be on top)
document.querySelector(".nav-left").addEventListener("click", function () {
    document.querySelector(".nav-center ul").classList.toggle("show");
});

// Dropdown when hamburger is clicked
hamburger.addEventListener("click", function () {
    if (menu.style.maxHeight && menu.style.maxHeight !== "0px") {
        menu.style.maxHeight = "0px";
    } else {
        menu.style.maxHeight = menu.scrollHeight + "px";
    }
});

// Dropdown closed when a section is clicked
document.querySelectorAll(".nav-center a").forEach(item => {
    item.addEventListener("click", () => {
        menu.style.maxHeight = "0px"; // Close dropdown
    });
});