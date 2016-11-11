({
    rerender: function (component, helper) {

        var nodes = this.superRerender();

        // If the Leaflet library is not yet loaded, we can't draw the map: return
        if (!window.L) {
            return nodes;
        }

        var map = component.get("v.map");

        // Draw the map if it hasn't been drawn yet
        if (!map) {
        	var mapElement = component.find("map").getElement();
        	map = window.L.map(mapElement, {zoomControl: true}).setView([37.784173, -122.401557], 14);
        	window.L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}',
                           {attribution: 'Tiles © Esri'}).addTo(map);
        	component.set("v.map", map);
            var markers = new window.L.FeatureGroup();
            component.set("v.markers", markers);
            // If we had received a location before Leaflet was loaded, add a marker for this location
            helper.addMarker(component);
        }

        return nodes;

    }
})