var lat = 40.6455693;
var lng = -8.6444055;
var zoom = 8;

var map = L.map('members-map').setView([lat, lng], zoom);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

var members = [
    {
        'name': 'Fernanda Cravo',
        'avatar': 'fernanda-cravo.png',
        'lat': 41.0696381,
        'lng': -8.4763703
    },
    {
        'name': 'Carlos Junior',
        'avatar': 'carlos-junior.png',
        'lat': 41.148449,
        'lng': -8.6676568
    },
    {
        'name': 'Cadu de Castro Alves',
        'avatar': 'cadu-alves.png',
        'lat': 39.895777,
        'lng': -8.831978
    },
    {
        'name': 'Audir Filho',
        'avatar': 'audir-filho.png',
        'lat': 40.6455693,
        'lng': -8.6444055
    },
    {
        'name': 'Hugo Pires',
        'avatar': 'hugo-pires.png',
        'lat': 41.0330526,
        'lng': -8.6463157
    },
    {
        'name': 'Elias Velloso',
        'avatar': 'elias-velloso.png',
        'lat': 38.7078235,
        'lng': -9.3554862
    },
    {
        'name': 'Leandro Leão',
        'avatar': 'leandro-leao.png',
        'lat': 41.2359748,
        'lng': -8.6590761
    },
    {
        'name': 'Gabriel Lisboa',
        'avatar': 'gabriel-lisboa.png',
        'lat': 41.1735822,
        'lng': -8.5626299
    },
    {
        'name': 'Lucas Novás',
        'avatar': 'lucas-novas.png',
        'lat': 41.1735822,
        'lng': -8.5626299
    },
    {
        'name': 'Gabriel Lourenço',
        'avatar': 'gabriel-lourenco.png',
        'lat': 40.6566749,
        'lng': -7.9203585
    },
    {
        'name': 'Gabriel Dutra',
        'avatar': 'gabriel-dutra.png',
        'lat': 41.1700134,
        'lng': -8.5691259
    },
    {
        'name': 'Marcelo Crisio',
        'avatar': 'marcelo-crisio.png',
        'lat': 41.1267875,
        'lng': -8.6078282
    },
    {
        'name': 'Gabriel Reis',
        'avatar': 'gabriel-reis.png',
        'lat': 41.1813508,
        'lng': -8.6954337
    }
];

const membersList = document.querySelector('.members-list');
let memberContent = '';

// Renders people on map
for(var i = 0; i < members.length; i++) {

    var info = `<h5 class="member-name">${members[i].name}</h5>
    <div class="member-avatar" style="background-image: url(images/members/${members[i].avatar})"></div>`;

    var memberIcon = L.divIcon({
        html: `<div class="icon-marker"><img src="images/members/${members[i].avatar}" /></div>`,
        className: 'image-icon',
        iconSize:     [58, 58], // size of the icon
        iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
        popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
    });

    L.marker(
        [
            members[i].lat, 
            members[i].lng
        ],
        {
            icon: memberIcon
        }
    ).addTo(map)
    .bindPopup(info);

    memberContent += `<div class="member-item">
        <img class="member-avatar" src="images/members/${members[i].avatar}" alt="${members[i].name}" title="${members[i].name}" />
        <h3 class="member-name"><span class="cruz-de-malta">✠</span> ${members[i].name}</h3>
    </div>`;
}

membersList.innerHTML = memberContent;