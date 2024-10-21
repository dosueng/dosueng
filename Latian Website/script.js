// Simple alert when a user clicks a service (example)
document.querySelectorAll('#services li').forEach(item => {
    item.addEventListener('click', () => {
        alert('Thank you for your interest in our ' + item.innerText + ' service!');
    });
});
