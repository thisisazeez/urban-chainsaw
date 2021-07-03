var map = new GMaps({
    el: '#map',
    lat:  40.730610,
    lng: -73.935242
});

map.addMarker({
    lat: 40.700610,
    lng: -73.997242,
    title: 'New York',
    infoWindow: {
      content: 'New York'
    }
});

map.setZoom(8);
