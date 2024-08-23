function updateDateTime() {
    const now = new Date();
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const date = now.toLocaleDateString('de-DE', options); // Deutsches Datumsformat
    const time = now.toLocaleTimeString('de-DE', { hour: '2-digit', minute: '2-digit', second: '2-digit' });

    document.getElementById('date').textContent = date;
    document.getElementById('time').textContent = time;
}

function applyColors() {
    const bgColor = localStorage.getItem('bgColor') || '#282c34';
    const textColor = localStorage.getItem('textColor') || '#ffffff';

    document.body.style.backgroundColor = bgColor;
    document.body.style.color = textColor;

    document.getElementById('bg-color-picker').value = bgColor;
    document.getElementById('text-color-picker').value = textColor;
}

document.getElementById('color-icon').addEventListener('click', function() {
    const colorMenu = document.getElementById('color-menu');
    colorMenu.style.display = colorMenu.style.display === 'block' ? 'none' : 'block';
});

document.getElementById('bg-color-picker').addEventListener('input', function(event) {
    const color = event.target.value;
    document.body.style.backgroundColor = color;
    localStorage.setItem('bgColor', color);
});

document.getElementById('text-color-picker').addEventListener('input', function(event) {
    const color = event.target.value;
    document.body.style.color = color;
    localStorage.setItem('textColor', color);
});

// Initialisiere das Datum, die Zeit und wende die gespeicherten Farben an
setInterval(updateDateTime, 1000);
updateDateTime();
applyColors();
