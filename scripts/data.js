// Function to fetch content from a text file
async function fetchContent(filePath) {
    const response = await fetch(filePath);
    if (!response.ok) {
        throw new Error(`Failed to fetch ${filePath}: ${response.status} ${response.statusText}`);
    }
    return await response.text();
}

// Function to insert content into the HTML
async function insertContent(elementId, filePath) {
    try {
        document.getElementById(elementId).innerText = await fetchContent(filePath);
    } catch (error) {
        console.error(error);
    }
}

document.addEventListener('DOMContentLoaded', async function() {
    try {
        /* Index page. */

        // Intro
        await insertContent('intro', '/assets/data/index/intro.txt');
        console.log("Loaded capstone intro content successfully");

        // Building a better me
        await insertContent('building-a-better-me', '/assets/data/index/building-better-me.txt');
        console.log("Loaded building a better me data successfully");

        /* Capstone page : Category One (Software Design and Engineering Data import). */

        // Capstone intro
        await insertContent('capstone-intro-content', '/assets/data/capstone/capstone-intro.txt');
        console.log("Loaded capstone intro content successfully");
        // Software design and engineering original intro content
        await insertContent('software-design-engineering-original-intro-content', '/assets/data/capstone/category-one/original/software-design-engineering-original-intro.txt');
        console.log("Loaded original intro content successfully");
        // Software design and engineering original content
        await insertContent('software-design-engineering-original-details', '/assets/data/capstone/category-one/original/software-design-engineering-original-details.txt');
        console.log("Loaded original details content successfully");
        // Software design and engineering enhancement intro content
        await insertContent('software-design-engineering-enhanced-intro-content', '/assets/data/capstone/category-one/enhancement/software-design-engineering-enhanced-intro.txt');
        console.log("Loaded enhanced intro content successfully");
    } catch (error) {
        console.error(error);
    }
});