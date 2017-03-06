
var myMap = L.map('mapid').setView([35.861660, 104.195397], 2);

L.tileLayer('https://api.mapbox.com/styles/v1/dliang05/cizwdesnf001i2sobvd7kht8z/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoiZGxpYW5nMDUiLCJhIjoiY2l6dzg0bTM5MDFvZDJxazdncHd6cWY5YSJ9.3Lhqk95qXmBvJQw0DdIl1g', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
    maxZoom: 10,
    id: 'cizwdesnf001i2sobvd7kht8z',
    accessToken: 'pk.eyJ1IjoiZGxpYW5nMDUiLCJhIjoiY2l6dzg0bTM5MDFvZDJxazdncHd6cWY5YSJ9.3Lhqk95qXmBvJQw0DdIl1g'
}).addTo(myMap);

var china = L.marker([35.861660, 104.195397]).addTo(myMap);
china.bindPopup("China");

var philippines = L.marker([12.879721, 121.774017]).addTo(myMap);
philippines.bindPopup("Philippines");

var india = L.marker([20.593684, 78.962880]).addTo(myMap);
india.bindPopup("India");

var vietnam = L.marker([14.058324, 108.277199]).addTo(myMap);
vietnam.bindPopup("Vietnam");

var korea = L.marker([37.663998, 127.978458]).addTo(myMap);
korea.bindPopup("Korea");

var japan =  L.marker([36.204824, 138.252924]).addTo(myMap);
japan.bindPopup("Japan");

var pakistan = L.marker([30.375321, 69.345116]).addTo(myMap);
pakistan.bindPopup("Pakistan");

var cambodia = L.marker([12.565679, 104.990963]).addTo(myMap);
cambodia.bindPopup("Cambodia");

var laos = L.marker([19.856270, 102.495496]).addTo(myMap);
laos.bindPopup("Laos");

var myanmar = L.marker([21.916221, 95.955974]).addTo(myMap);
myanmar.bindPopup("Myanmar");

var thailand = L.marker([15.870032, 100.992541]).addTo(myMap);
thailand.bindPopup("Thailand");

var taiwan = L.marker([23.697810, 120.960515]).addTo(myMap);
taiwan.bindPopup("Taiwan");

var burma = L.marker([21.916221, 95.955974]).addTo(myMap);
burma.bindPopup("Burma");

var bangladesh = L.marker([23.684994, 90.356331]).addTo(myMap);
bangladesh.bindPopup("Bangladesh");

var indonesia = L.marker([-0.789275, 113.921327]).addTo(myMap);
indonesia.bindPopup("Indonesia");

var malaysia = L.marker([4.210484, 101.975766]).addTo(myMap);
malaysia.bindPopup("Malaysia");

var sri_lanka = L.marker([7.873054, 80.771797]).addTo(myMap);
sri_lanka.bindPopup("Sri Lanka");

var mongolia = L.marker([46.862496, 103.846656]).addTo(myMap);
mongolia.bindPopup("Mongolia");

var nepal = L.marker([28.394857, 84.124008]).addTo(myMap);
nepal.bindPopup("Nepal");

var singapore = L.marker([1.352083, 103.819836]).addTo(myMap);
singapore.bindPopup("Singapore");

var bhutan = L.marker([27.514162, 90.433601]).addTo(myMap);
bhutan.bindPopup("Bhutan");

var maldives = L.marker([1.977228, 73.536101]).addTo(myMap);
maldives.bindPopup("Maldives");

var okinawa = L.marker([26.501301, 127.945404]).addTo(myMap);
okinawa.bindPopup("Okinawa Islands");



