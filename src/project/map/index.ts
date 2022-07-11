
declare var ol: any;

export  function mapBody() {
    const form = document.querySelector('.mapForm')! as HTMLFormElement

    const addressInput = document.getElementById('address')! as HTMLInputElement
    function searchAddressHandler(event:Event){
        event.preventDefault();
        const enteredAddress = addressInput.value

        // send this to google api




        function searchAddressHandler(event: Event) {
            event.preventDefault();

            const coordinates = {lat: 40.41, lng: -73.99}; // Can't fetch coordinates from Google API, use dummy ones

            document.getElementById('map')!.innerHTML = ''; // clear <p> from <div id="map">
            new ol.Map({
                target: 'map',
                layers: [
                    new ol.layer.Tile({
                        source: new ol.source.OSM()
                    })
                ],
                view: new ol.View({
                    center: ol.proj.fromLonLat([coordinates.lng, coordinates.lat]),
                    zoom: 16
                })
            });
        }

    }





    form.addEventListener('submit',searchAddressHandler)
    console.log(33213213)

}



