
function getJWT() {
    // curl -i -X POST "https://trefle.io/api/auth/claim?token=YOUR-TOKEN&origin=YOUR-WEBSITE-URL"
    var xhttp = new XMLHttpRequest();
    xhttp.open("POST", "https://trefle.io/api/auth/claim?token=bWVXWThmZlpBUWlTV3NaaCtQWVM5QT09&origin=192.168.1.254:5500/www/search.html")
    xhttp.send();
}
getJWT();