/* Initialize tooltips */
document.addEventListener('DOMContentLoaded', function () {
    // Initialize all tooltips
    [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
        .forEach(function (tooltipTriggerEl) {
            new bootstrap.Tooltip(tooltipTriggerEl);
        });
});


/* Initialize popovers */
const popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'));
const popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
    return new bootstrap.Popover(popoverTriggerEl, {
        html: true, // Allow HTML content inside the popover
        sanitize: false
    })
});

/* Hide pop-overs when clicked outside area */
document.addEventListener('click', function (event) {
    popoverList.forEach(function (popover) {
        if (!popover._element.contains(event.target)) { // Check if the click is outside the popover
            popover.hide();
        }
    });
});


/* BOOTSTRAP TOOL TIP (AWS CERT PDF) */
document.addEventListener('DOMContentLoaded', function () {
    document.body.addEventListener('click', function (event) {
        const toggleButton = document.getElementById('.popover');
        const sideContainer = document.querySelector('.achievements');

        if (toggleButton && sideContainer) {
            if (sideContainer.style.right === '0px' || sideContainer.style.right === '') {
                sideContainer.style.right = '-250px'; // Hide container
            } else {
                sideContainer.style.right = '0px'; // Show container
            }
        }
    });
});