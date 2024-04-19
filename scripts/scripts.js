
/* FETCH "COMPONENTS" organize Index.html into a "component" based structure */
async function fetchComponents(filePath, elementId) {
    const response = await fetch(filePath);
    if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.text();

    const element = document.getElementById(elementId);
    if (!element) {
        throw new Error(`Element with ID ${elementId} not found.`);
    }
    element.innerHTML = data;
    [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
        .forEach(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl));
}

/* Fetch modular parts */
document.addEventListener('DOMContentLoaded', function() {
    const isCapstonePage = window.location.pathname.includes('capstone');

    fetchComponents('navbar.html', 'navbar').catch(error => console.error('Failed to load navbar:', error));

    if (isCapstonePage) {
        const capstoneComponents = [
            {path: '../components/capstone/software-design-engineering.html', elementId: 'software-design-engineering-content-component'},
            {path: '../components/capstone/algorithms-data-structures.html', elementId: 'algorithms-data-structures-content-component'},
            {path: '../components/capstone/databases.html', elementId: 'databases-content-component'}
        ];
        capstoneComponents.forEach(({path, elementId}) => {
            fetchComponents(path, elementId)
                .catch(error => console.error(`Failed to load ${elementId}:`, error));
        });
    }
});

/* Capstone Key Categories Display on/off */
function showCategory(category) {
    // Hide all categories
    document.getElementById('category1').style.display = 'none';
    document.getElementById('category2').style.display = 'none';
    document.getElementById('category3').style.display = 'none';
    // Show selected category
    document.getElementById(category).style.display = 'block';
}
