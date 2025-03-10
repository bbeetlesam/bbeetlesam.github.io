// Navbar configuration and behavior

export function setupNavbar() {
    const menu = document.querySelector(".nav-center ul");
    const hamburger = document.querySelector("#hamburger");
    const navbar = document.querySelector("header nav");
    const menuItems = document.querySelectorAll(".nav-center ul li a");
    
    // Function to close the dropdown menu
    function closeDropdown() {
        menu.classList.remove("show"); // Remove the 'show' class
        menu.style.maxHeight = "0px"; // Collapse the menu
        hamburger.innerHTML = "&#9776;"; // Change back to ☰ (hamburger icon)
        setTimeout(() => navbar.classList.remove("open"), 200); // Add delay for smooth transition
    }
    
    // Toggle dropdown when hamburger is clicked
    hamburger.addEventListener("click", function (event) {
        event.stopPropagation(); // Prevent immediate closing when clicking the hamburger
        menu.classList.toggle("show"); // Toggle the 'show' class
        
        if (menu.classList.contains("show")) {
            hamburger.innerHTML = "✖"; // Change to 'X' icon when open
            menu.style.maxHeight = menu.scrollHeight + "px"; // Expand the menu
            navbar.classList.add("open"); // Add 'open' class for styling effects
        } else {
            closeDropdown(); // Close if already open
        }
    });
    
    // Close dropdown if clicking outside the navbar
    document.addEventListener("click", function (event) {
        if (!menu.contains(event.target) && !hamburger.contains(event.target)) {
            closeDropdown();
        }
    });
    
    // Close dropdown when resizing to desktop mode
    window.addEventListener("resize", () => {
        if (window.innerWidth > 768) {
            closeDropdown();
        }
    });
    
    // Close dropdown when a menu item is clicked
    menuItems.forEach(item => {
        item.addEventListener("click", () => {
            closeDropdown();
        });
    });
}