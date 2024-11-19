document.addEventListener("DOMContentLoaded", function () {
    const paragraphs = [
        "animated-text",
        "animated-text-2",
        "animated-text-3",
        "animated-text-4"
    ];

    paragraphs.forEach((id, index) => {
        const delay = 1500 * index; // 1.5s delay between each paragraph
        setTimeout(() => {
            const element = document.getElementById(id);
            element.style.opacity = "1"; // Fade in
            element.style.transform = "translateY(0)"; // Reset position
        }, delay);
    });
});

// Theme Toggle Functionality
const themeToggleBtn = document.getElementById('theme-toggle');
const body = document.body;
const nav = document.querySelector('nav');
const searchInput = document.getElementById('search-input');
const searchBtn = document.getElementById('search-btn');

// Toggle Dark and Light Theme
themeToggleBtn.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
  nav.classList.toggle('dark-mode');
  searchInput.classList.toggle('dark-mode');
  searchBtn.classList.toggle('dark-mode');
  themeToggleBtn.classList.toggle('dark-mode');
});

// Show and hide the search input box when the search icon is clicked
searchBtn.addEventListener('click', () => {
  if (searchInput.style.display === "none" || searchInput.style.display === "") {
    searchInput.style.display = "block";  // Show the input box
    searchInput.focus();  // Focus on the input
  } else {
    searchInput.style.display = "none";  // Hide the input box
  }
});

// Search Functionality (Filtering content based on the search query)
searchInput.addEventListener('input', function () {
  const query = searchInput.value.toLowerCase();
  const sections = document.querySelectorAll('div');
  
  sections.forEach((section) => {
    const textContent = section.textContent || section.innerText;
    if (textContent.toLowerCase().includes(query)) {
      section.style.display = 'block';
    } else {
      section.style.display = 'none';
    }
  });
});
