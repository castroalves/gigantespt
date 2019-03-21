Parse.serverURL = 'https://gigantespt.back4app.io';
Parse.initialize(
    'XcJbUtPYC1QZNWPMSFWIsFgOHU0Lzx8RMvaRqfkA',
    'X2eB9GDDa4Aar6NPwWnDWcXF1p6X7e0Q5YQM43RA',
);

let members = [];

const Supporter = Parse.Object.extend('Supporter');
const query = new Parse.Query(Supporter);

query
    .find()
    .then(
        (results) => {

            results.forEach(function(item) {
                
                let photo = item.get('photo');
                let location = item.get('location');
                
                members.push({
                    'name': item.get('firstName') + ' ' + item.get('lastName'),
                    'avatar': photo.url(),
                    'lat': location.latitude,
                    'lng': location.longitude,
                });

            });

            renderMap(members);

        }, 
        (error) => {
            if (typeof document !== 'undefined') document.write(`Error while fetching Supporter: ${JSON.stringify(error)}`);
            console.error('Error while fetching Supporter', error);
        }
    );

function renderMap(members) {

    var lat = 40.6455693;
    var lng = -8.6444055;
    var zoom = 8;
    
    var map = L.map('members-map').setView([lat, lng], zoom);
    
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    const membersList = document.querySelector('.members-list');
    let memberContent = '';
    
    // Renders people on map
    for(var i = 0; i < members.length; i++) {
    
        var info = `<h5 class="member-name">${members[i].name}</h5>`;
    
        var memberIcon = L.divIcon({
            html: `<div class="icon-marker"><img src="${members[i].avatar}" /></div>`,
            className: 'image-icon',
            iconSize:     [46, 46], // size of the icon
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
            <img class="member-avatar" src="${members[i].avatar}" alt="${members[i].name}" title="${members[i].name}" />
            <h3 class="member-name"><span class="cruz-de-malta">✠</span> ${members[i].name}</h3>
        </div>`;
    }
    
    membersList.innerHTML = memberContent;

}