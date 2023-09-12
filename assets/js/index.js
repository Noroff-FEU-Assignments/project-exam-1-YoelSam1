const toggleCollapse = ducument.querySelector ("toggle-collapse")
const navMenu = ducument.querySelector ("nav-items")

toggleCollapse.addEventListener("click", () => {
    toggleCollapse.classList.toggle("active");
    navItems.classList.toggle("active");
})