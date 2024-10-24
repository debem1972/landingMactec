//Localização da empresa
var map = L.map('map').setView([-29.9732, -50.1264], 9);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Área de atuação delimitada por um polígono
var litoralNorte = L.polygon([
    [-29.7303378678114, -49.99069458614653],
    [-29.71834756258076, -50.025212136277844],
    [-30.075094499698565, -50.18939324691655],
    [-30.082726027743938, -50.16454002857435]
]).addTo(map);

litoralNorte.setStyle({
    color: '#007bff',
    fillColor: '#007bff',
    fillOpacity: 0.2
});

// Coordenadas atualizadas para Rua Cruz Alta, 841 - Centro, Imbé - RS
var empresaLatLng = [-29.968379, -50.130893];

var marker = L.marker(empresaLatLng).addTo(map);
marker.bindPopup("<b>Estamos aqui!</b><br><strong>MACTEC Refrigeração</strong><br>Rua Cruz Alta, 841<br>Centro, Imbé - RS").openPopup();

marker.on('click', function () {
    map.setView(empresaLatLng, 18);
});

// Função para centralizar o mapa na empresa
function centralizarMapa() {
    map.setView(empresaLatLng, 18);
}

// Adicionar botão para centralizar o mapa
L.Control.CentralizarControl = L.Control.extend({
    onAdd: function (map) {
        var btn = L.DomUtil.create('button', 'centralizar-btn');
        btn.innerHTML = 'Localizar Empresa';
        btn.onclick = centralizarMapa;
        return btn;
    }
});

L.control.centralizarControl = function (opts) {
    return new L.Control.CentralizarControl(opts);
}

L.control.centralizarControl({ position: 'topright' }).addTo(map);