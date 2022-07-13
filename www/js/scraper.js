var xhttp = new XMLHttpRequest();
var link = 'https://en.wikipedia.org/wiki/Chlorophytum_comosum';
xhttp.open("GET", link);
xhttp.send(null);
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        data = this.response;
        console.log(data)
    };
};