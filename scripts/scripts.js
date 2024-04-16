/* Fetch modular parts */
fetchComponents('navbar.html', 'navbar');
fetchComponents('../components/capstone/software-design-engineering.html', 'software-design-engineering-content-component');
fetchComponents('../components/capstone/algorithms-data-structures.html', 'algorithms-data-structures-content-component');
fetchComponents('../components/capstone/databases.html', 'databases-content-component');

/* FETCH "COMPONENTS" organize Index.html into a "component" based structure */
function fetchComponents(url, elementId) {
    fetch(url)
        .then(response => response.text())
        .then(data => {
            document.getElementById(elementId).innerHTML = data;
        });
}

/* Capstone Key Categories Display on/off */
function showCategory(category) {
    // Hide all categories
    document.getElementById('category1').style.display = 'none';
    document.getElementById('category2').style.display = 'none';
    document.getElementById('category3').style.display = 'none';
    // Show selected category
    document.getElementById(category).style.display = 'block';
}
