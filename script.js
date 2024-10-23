var map = L.map('map').setView([42.3112655, -83.0278024], 15);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© OpenStreetMap'
}).addTo(map);

L.marker([42.3112655, -83.0278024]).addTo(map)
    .bindPopup('DOSAMOSA Food Truck')
    .openPopup();