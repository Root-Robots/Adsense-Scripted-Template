// script.js
function showArticles(sectionId) {
    const sections = document.querySelectorAll('.article-section');
    sections.forEach(section => {
        section.style.display = 'none';
    });

    const activeSection = document.getElementById(sectionId);
    activeSection.style.display = 'block';
}
