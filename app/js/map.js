    google.maps.event.addDomListener(window, 'load', function() {
        var map = new google.maps.Map(document.getElementById('map'), {
            zoom: 17,
            center: new google.maps.LatLng(50.0874032, 14.4049715),
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            /* mapTypeControl: false,
             navigationControl: false,
             scrollwheel: false,  //scroll zoom
             scaleControl: false,      // scroll move
             draggable: false,*/
            zoomControl: false,
            // The latitude and longitude to center the map (always required)
            center: new google.maps.LatLng(50.0874032, 14.4049715),

            /*navigationControlOptions: {
             style: google.maps.NavigationControlStyle.SMALL
             },*/
            mapTypeControlOptions: {
                position: google.maps.ControlPosition.LEFT_BOTTOM
            },

            // How you would like to style the map.
            // This is where you would paste any style found on Snazzy Maps.
            styles:[
                {
                    "featureType": "all",
                    "elementType": "all",
                    "stylers": [
                        {
                            "saturation": -100
                        },
                        {
                            "gamma": 0.5
                        }
                    ]
                }
            ]

        });

        var infoWindow = new google.maps.InfoWindow;

        var onMarkerClick = function() {
            var marker = this;
            var latLng = marker.getPosition();
            infoWindow.setContent(marker.title);

            infoWindow.open(map, marker);
        };
        google.maps.event.addListener(map, 'click', function() {
            infoWindow.close();
        });

        var marker1 = new google.maps.Marker({
            map: map,
            title: '<div class="title-map">Mostecká 273/21 Malá Strana - Praha 1, 118 00</div>',
            position: new google.maps.LatLng(50.0874032, 14.4049715)
            //icon: "img/marker.png"
        });

        google.maps.event.addListener(marker1, 'click', onMarkerClick);


    });