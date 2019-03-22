Parse.Cloud.define("getSupporters", function(request, response) {

    const Supporter = Parse.Object.extend('Supporter');
    const query = new Parse.Query(Supporter);

    query
        .find({ useMasterKey: true })
        .then(
            (results) => {

                let members = [];

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

                response.success(members);

            }, 
            (error) => {
                response.error("Nenhum gigante encontrado!");
            }
        );

});