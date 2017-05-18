(function() {

var ElectricObjects = {};

ElectricObjects.fetchDeviceInfo = function() {
    var urlParams = new URLSearchParams(window.location.search);
    var eoDeviceToken = urlParams.get('eo_device_token');

    if (!eoDeviceToken) {
        console.info('URL parameter "eo_device_token" not found. Falling back to sample mode.');
    }

    var endpointUrl = eoDeviceToken ? 
        'https://art-api.electricobjects.com/devices' : 
        'https://art-api.electricobjects.com/devices/sample';

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

