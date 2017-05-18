(function() {

var ElectricObjects = {};

ElectricObjects.fetchDeviceInfo = function(sample) {
    sample = Boolean(sample);

    var urlParams = new URLSearchParams(window.location.search);
    var eoDeviceToken = urlParams.get('eo_device_token');

    if (!sample && !eoDeviceToken) {
        console.warn('URL parameter "eo_device_token" not found. Falling back to sample mode.');
        sample = true;
    }

    var endpointUrl = sample ? 
        'https://art-api.electricobjects.com/devices/sample' : 
        'https://art-api.electricobjects.com/devices';

    return fetch(endpointUrl, {
        method: 'POST',
        mode: 'cors',
        headers: {
            'Accept': 'application/json',
            'Content-type': 'application/json'
        },
        body: JSON.stringify({
            token: eoDeviceToken
        })
    })
        .then(function(response) {
            if (response.status !== 200) {
                throw new Error('Error fetching device info. Server resonded with a ' + response.status);
            }

            return response.json();
        })
        .then(function(data) {
            return data.data;
        });
};

window.ElectricObjects = ElectricObjects;

})();

