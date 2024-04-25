

const toggleButton = document.getElementById('toggleButton');
const content = document.getElementById('content');

toggleButton.addEventListener('click', () => {
    content.style.display = content.style.display === 'none' ? 'inline' : 'none';
});

const toggleButton2 = document.getElementById('toggleButton2');
const content2 = document.getElementById('content2');

toggleButton2.addEventListener('click', () => {
    content2.style.display = content2.style.display === 'none' ? 'inline' : 'none';
});



