'use strict';

const googleMapsApiKey = process.env['GOOGLE_MAPS_API_KEY'];

if (!googleMapsApiKey) {
  throw new Error('Missing google maps API key, please set the GOOGLE_MAPS_API_KEY environment variable');
}

module.exports = `
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable: no">
    <title>Pouch Clerk example</title>
    <link rel="stylesheet" href="/css/bootstrap.min.css">
    <link rel="stylesheet" href="/css/bootstrap-theme.min.css">
    <link rel="stylesheet" href="/css/font-awesome.min.css">
    <style>
      #map {
        top:0;
        bottom:0;
        width:100%;
      }
      .container {
        padding: 0;
        margin: 0;
        width: 100%;
      }
    </style>
  </head>
  <body>
    <div id="root"></div>
    <script type="text/javascript" src="https://maps.googleapis.com/maps/api/js?v=3.exp&key=${googleMapsApiKey}&libraries=geometry,drawing,places"></script>
    <script src="/js/bundle.js"></script>
  </body>
</html>
`;
