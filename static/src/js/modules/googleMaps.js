import Cookies from "js-cookie"

const loadGoogleMapsApi = require('load-google-maps-api');
const apiKey = "AIzaSyB1cJxqmQ32Kc9co-mewOIpRXemFoNuwWQ"
const mapElement = document.getElementById("map")
const btnOptIn = document.getElementById("btnOptInMap")
const mapNote = document.getElementById("map-note")
const center = { lat: 60.9109826, lng: 6.928513 }
const locations = [
    ['Köln', 50.915177, 6.928513]
]
let marker;
let map;


class Map {

    static loadGoogleMapsApi() {
        return loadGoogleMapsApi({ key: apiKey });
    }

    static createMap(googleMaps, mapElement) {
        map = new googleMaps.Map(mapElement, {
            center: center,
            zoom: 3,
            streetViewControl: false,
            styles: [{
                    "elementType": "geometry",
                    "stylers": [{
                        "color": "#f5f5f5"
                    }]
                },
                {
                    "elementType": "labels.icon",
                    "stylers": [{
                        "visibility": "off"
                    }]
                },
                {
                    "elementType": "labels.text.fill",
                    "stylers": [{
                        "color": "#616161"
                    }]
                },
                {
                    "elementType": "labels.text.stroke",
                    "stylers": [{
                        "color": "#f5f5f5"
                    }]
                },
                {
                    "featureType": "administrative.country",
                    "elementType": "geometry.stroke",
                    "stylers": [{
                        "color": "#bebebe"
                    }]
                },
                {
                    "featureType": "administrative.land_parcel",
                    "stylers": [{
                        "visibility": "off"
                    }]
                },
                {
                    "featureType": "administrative.land_parcel",
                    "elementType": "labels.text.fill",
                    "stylers": [{
                        "color": "#bdbdbd"
                    }]
                },
                {
                    "featureType": "administrative.neighborhood",
                    "stylers": [{
                        "visibility": "off"
                    }]
                },
                {
                    "featureType": "poi",
                    "elementType": "geometry",
                    "stylers": [{
                        "color": "#eeeeee"
                    }]
                },
                {
                    "featureType": "poi",
                    "elementType": "labels.text",
                    "stylers": [{
                        "visibility": "off"
                    }]
                },
                {
                    "featureType": "poi",
                    "elementType": "labels.text.fill",
                    "stylers": [{
                        "color": "#757575"
                    }]
                },
                {
                    "featureType": "poi.business",
                    "stylers": [{
                        "visibility": "off"
                    }]
                },
                {
                    "featureType": "poi.park",
                    "elementType": "geometry",
                    "stylers": [{
                        "color": "#e5e5e5"
                    }]
                },
                {
                    "featureType": "poi.park",
                    "elementType": "labels.text.fill",
                    "stylers": [{
                        "color": "#9e9e9e"
                    }]
                },
                {
                    "featureType": "road",
                    "stylers": [{
                        "visibility": "off"
                    }]
                },
                {
                    "featureType": "road",
                    "elementType": "geometry",
                    "stylers": [{
                        "color": "#ffffff"
                    }]
                },
                {
                    "featureType": "road",
                    "elementType": "labels",
                    "stylers": [{
                        "visibility": "off"
                    }]
                },
                {
                    "featureType": "road",
                    "elementType": "labels.icon",
                    "stylers": [{
                        "visibility": "off"
                    }]
                },
                {
                    "featureType": "road.arterial",
                    "elementType": "labels.text.fill",
                    "stylers": [{
                        "color": "#757575"
                    }]
                },
                {
                    "featureType": "road.highway",
                    "elementType": "geometry",
                    "stylers": [{
                        "color": "#dadada"
                    }]
                },
                {
                    "featureType": "road.highway",
                    "elementType": "labels.text.fill",
                    "stylers": [{
                        "color": "#616161"
                    }]
                },
                {
                    "featureType": "road.local",
                    "elementType": "labels.text.fill",
                    "stylers": [{
                        "color": "#9e9e9e"
                    }]
                },
                {
                    "featureType": "transit",
                    "stylers": [{
                        "visibility": "off"
                    }]
                },
                {
                    "featureType": "transit.line",
                    "elementType": "geometry",
                    "stylers": [{
                        "color": "#e5e5e5"
                    }]
                },
                {
                    "featureType": "transit.station",
                    "elementType": "geometry",
                    "stylers": [{
                        "color": "#eeeeee"
                    }]
                },
                {
                    "featureType": "water",
                    "elementType": "geometry",
                    "stylers": [{
                        "color": "#c9c9c9"
                    }]
                },
                {
                    "featureType": "water",
                    "elementType": "labels.text",
                    "stylers": [{
                        "visibility": "off"
                    }]
                },
                {
                    "featureType": "water",
                    "elementType": "labels.text.fill",
                    "stylers": [{
                        "color": "#9e9e9e"
                    }]
                }
            ]
        })
    }

    static createStuff(googleMaps, mapElement) {
        // infowindow = new googleMaps.InfoWindow();
        const icon = {
            url: "dist/img/_layout/dot.svg", // url
            scaledSize: new googleMaps.Size(10, 10), // scaled size
            origin: new googleMaps.Point(0, 0), // origin
            anchor: new googleMaps.Point(0, 0) // anchor
        };

        for (let i = 0; i < locations.length; i++) {
            console.log(i)
            marker = new googleMaps.Marker({
                position: new googleMaps.LatLng(locations[i][1], locations[i][2]),
                map: map,
                icon: icon
            });

        }

    }
}


export default function() {

    let cookies = Cookies.get()

    if (cookies.googleMaps) {
        mapNote.style.display = "none"
        Map.loadGoogleMapsApi().then(function(googleMaps) {
            Map.createMap(googleMaps, mapElement);
            Map.createStuff(googleMaps, mapElement);
        });
    }


    btnOptIn.addEventListener("click", () => {
        console.log("MAP")
        mapNote.style.display = "none"
        Map.loadGoogleMapsApi().then(function(googleMaps) {
            Map.createMap(googleMaps, mapElement);
            Map.createStuff(googleMaps, mapElement);
        });
    })



}