// Toggle menu visibility
const menuIcon = document.getElementById('menu-icon');
const menu = document.getElementById('menu');

menuIcon.addEventListener('click', () => {
  menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
});

// Dynamic name and intro (you can customize these)
const dynamicName = document.getElementById('dynamic-name');
const intro = document.getElementById('intro');

dynamicName.textContent = "John Doe"; // Replace with your name
intro.textContent = "Hi, I'm John! I specialize in web development and love building user-friendly applications."; // Replace with your intro