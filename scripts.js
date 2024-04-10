// Initialize all popovers
var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
    return new bootstrap.Popover(popoverTriggerEl, {
        html: true, // Allow HTML content inside the popover
        sanitize: false
    })
})

// Hide popover when clicking outside
document.addEventListener('click', function (event) {
    popoverList.forEach(function (popover) {
        if (!popover._element.contains(event.target)) { // Check if the click is outside the popover
            popover.hide();
        }
    });
});