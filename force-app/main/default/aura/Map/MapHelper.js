({
    addMarker: function(component) {

        var map = component.get('v.map');
        var markers = component.get('v.markers');
        var property = component.get('v.property');

        // Remove existing markers
        if (markers) {
        	markers.clearLayers();
        }

        // Add Markers
		if (map && property && property.Location__Latitude__s && property.Location__Longitude__s) {
            var latLng = [property.Location__Latitude__s, property.Location__Longitude__s];
            var marker = window.L.marker(latLng);
            markers.addLayer(marker);
            map.addLayer(markers);
            map.panTo(latLng);
        }
    }
})