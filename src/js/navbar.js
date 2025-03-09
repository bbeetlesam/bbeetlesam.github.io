// Navbar configuration and behavior

export function setupNavbar() {
    // Select the navbar menu and the hamburger button
    const menu = document.querySelector(".nav-center ul");
    const hamburger = document.querySelector(".nav-right");

    // Toggle dropdown when the hamburger button is clicked
    hamburger.addEventListener("click", function () {
        menu.classList.toggle("show"); // Toggle the "show" class to control visibility
        
        if (menu.classList.contains("show")) {
            menu.style.maxHeight = menu.scrollHeight + "px"; // Expand the dropdown smoothly
        } else {
            menu.style.maxHeight = "0px"; // Collapse the dropdown
        }
    });
    
    // Close the dropdown when a menu item is clicked
    document.querySelectorAll(".nav-center a").forEach(item => {
        item.addEventListener("click", () => {
            if (menu.classList.contains("show")) {
                menu.classList.remove("show"); // Remove "show" class for consistency
                menu.style.maxHeight = "0px"; // Ensure the dropdown is closed
            }
        });
    });
    
    // Ensure proper navbar behavior when resizing the window
    window.addEventListener("resize", () => {
        if (window.innerWidth > 768) { // When switching back to desktop mode
            menu.classList.remove("show"); // Remove the dropdown class
            menu.style.maxHeight = ""; // Reset maxHeight to prevent layout issues
        }
    });
}