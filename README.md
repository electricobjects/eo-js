# Connected Art - Client library

Electric Objects' Javascript library for building Connected Art


## Usage

Add the script tag in the `<head>` or `<body>` of your HTML.

```
<script src="https://electricobjects.github.io/eo-js/electricobjects.js"></script>
```


To fetch device data using the Connected Art interface:

```
ElectricObjects
    .fetchDeviceInfo()
    .then(function(data) {
        // Do something with the data
        console.log(data);
    })
    .catch(function(error) {
        // Handle exceptions
    });
```

## The device data object

The data object returned by `fetchDeviceInfo()` gives you an object formatted like this:

```
{
    "id": "sample",
    "latitude": 48.8582,
    "longitude": 2.2945,
    "name": "Sample EO",
    "release_name": "EO2",
    "timezone": "America/New_York"
}
```


## How it works

When your web-based Connected Art is displayed on the EO device, the EO backend appends a JSON Web Token as a parameter of the URL. For example:

**Original Connected Art URL:**
`https://example.com/my-connected-art-piece`

**Connected Art URL when displayed on the EO device:** 
`https://example.com/my-connected-art-piece?eo_device_token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWV9.TJVA95OrM7E2cBab30RMHrHDcEfxjoYZgeFONFh7HgQ`

The JSON Web Token is then used by the Javascript client library to fetch data about the current device.


## Testing on non-EO devices

We recommend using the latest version of [Google Chrome](https://www.google.com/chrome/) or [Chromium](https://www.chromium.org/Home) (what the EO devices run) to test Connected Art pieces in your development environment.

When testing on your own computer, a JWT is not provided. For convenience, we automatically return sample data when the JWT is not present.





