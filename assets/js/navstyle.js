// Get the current URL
const currentURL = window.location.href;

// Find all navigation links
const navLinks = document.querySelectorAll("nav a");

console.log(currentURL, navLinks);

// Loop through the links and add the "active" class to the current one
for (const link of navLinks) {
  if (currentURL.includes(link.href)) {
    link.classList.add("active");
  }
}

export default { currentURL, navLinks };
