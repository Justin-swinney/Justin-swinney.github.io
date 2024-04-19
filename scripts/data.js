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
    const isIndexPage = window.location.pathname.includes('index');
    const isCapstonePage = window.location.pathname.includes('capstone');
    try {
        if (isIndexPage) {
            /* Index page. */
            // Intro
            await insertContent('intro', '/assets/data/index/intro.txt');
            console.log("Loaded capstone intro content successfully");

            // Building a better me
            await insertContent('building-a-better-me', '/assets/data/index/building-better-me.txt');
            console.log("Loaded building a better me data successfully");
        }
        if (isCapstonePage) {

            /* Capstone page : Category One (Software Design and Engineering Data Import). */
            await insertContent('capstone-intro-content', '/assets/data/capstone/capstone-intro.txt');
            console.log("Loaded capstone intro content successfully");
            // Original intro content
            await insertContent('software-design-engineering-original-intro-content', '/assets/data/capstone/category-one/original/software-design-engineering-original-intro.txt');
            console.log("Loaded original intro content successfully");
            // Original details content
            await insertContent('software-design-engineering-original-details', '/assets/data/capstone/category-one/original/software-design-engineering-original-details.txt');
            console.log("Loaded original details content successfully");
            // Enhancement intro content
            await insertContent('software-design-engineering-enhanced-intro-content', '/assets/data/capstone/category-one/enhancement/software-design-engineering-enhanced-intro.txt');
            console.log("Loaded enhanced intro content successfully");
            // Enhancement details content
            await insertContent('software-design-engineering-enhanced-justification', '/assets/data/capstone/category-one/enhancement/software-design-engineering-enhanced-justification.txt');
            console.log("Loaded enhanced intro content successfully");
            // Enhancement reflection content
            await insertContent('software-design-engineering-enhanced-reflection', '/assets/data/capstone/category-one/enhancement/software-design-engineering-enhanced-reflection.txt');
            console.log("Loaded enhanced intro content successfully");

            /* Capstone page : Category Two (Algorithms & Data Structures Data Import). */
            // Original intro content
            await insertContent('algorithms-data-structures-original-intro', '/assets/data/capstone/category-two/original/algorithms-data-structures-original-intro.txt');
            console.log("Loaded original intro content successfully");
            // Original details content
            await insertContent('algorithms-data-structures-original-details', '/assets/data/capstone/category-two/original/algorithms-data-structures-original-details.txt');
            console.log("Loaded enhanced alg & data structures content successfully");
            // Enhancement intro content
            await insertContent('algorithms-data-structures-enhanced-intro', '/assets/data/capstone/category-two/enhancement/algorithms-data-structures-enhanced-intro.txt');
            console.log("Loaded enhanced alg & data structures content successfully");

            await insertContent('algorithms-data-structures-enhanced-justification', '/assets/data/capstone/category-two/enhancement/algorithms-data-structures-enhanced-justification.txt');
            console.log("Loaded enhanced alg & data structures content successfully");

            await insertContent('algorithms-data-structures-enhanced-reflection', '/assets/data/capstone/category-two/enhancement/algorithms-data-structures-enhanced-reflection.txt');
            console.log("Loaded enhanced alg & data structures content successfully");


            /* Capstone page : Category Three (Databases Data Import). */
            // Original intro content
            await insertContent('databases-original-intro', '/assets/data/capstone/category-three/original/databases-original-intro.txt');
            console.log("Loaded original database intro content successfully");
            // Original details content
            await insertContent('databases-original-details', '/assets/data/capstone/category-three/original/databases-original-details.txt');
            console.log("Loaded original database details content successfully");
            // Enhancement intro content
            await insertContent('databases-enhanced-intro', '/assets/data/capstone/category-three/enhancement/databases-enhanced-intro.txt');
            console.log("Loaded enhanced database intro successfully");
            // Enhancement justification content
            await insertContent('databases-enhanced-justification', '/assets/data/capstone/category-three/enhancement/databases-enhanced-justification.txt');
            console.log("Loaded enhanced database justification successfully");
            // Enhancement reflection content
            await insertContent('databases-enhanced-reflection', '/assets/data/capstone/category-three/enhancement/databases-enhanced-reflection.txt');
            console.log("Loaded enhanced database reflection successfully");
        }
    } catch (error) {
        console.error("Error: ", error);
    }
});