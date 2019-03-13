var lat = 40.6455693;
var lng = -8.6444055;
var zoom = 7;

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
];

const membersList = document.querySelector('.members-list');
let memberContent = '';

// Renders people on map
for(var i = 0; i < members.length; i++) {

    var info = `<h5 class="member-name">${members[i].name}</h5>
    <div class="member-avatar" style="background-image: url(images/members/${members[i].avatar})"></div>`;

    L.marker(
        [
            members[i].lat, 
            members[i].lng
        ]
    ).addTo(map)
    .bindPopup(info);

    memberContent += `<div class="member-item">
        <img class="member-avatar" src="images/members/${members[i].avatar}" />
        <h3 class="member-name">${members[i].name}</h3>
    </div>`;
}

membersList.innerHTML = memberContent;