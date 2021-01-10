;(function($){

})(jQuery);
const beetroot = { lat: 50.4639658, lng: 30.499825 };
const image = "https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png";
const maps = document.getElementById('iw2').outerHTML;
function initMap() {
    const map = new google.maps.Map(
        document.getElementById("map"),
        {
            center: beetroot,
            zoom: 15
        }
    );
    const m1 = new google.maps.Marker({
        position: beetroot,
        map,
        title: "Beetroot",
        icon: image
    });
    const m2 = new google.maps.Marker({
        position: { lat: 50.4639658, lng: 30.499825},
        map,
        title: "Beetroot office",
        animation: google.maps.Animation.BOUNCE // DROP
    });
    const infoWindow = new google.maps.InfoWindow({
        content: maps,
    });
    m2.addListener("click", () => {
        infoWindow.open(map, m2);
    });
}