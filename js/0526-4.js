// var myDiv =document.getElementById("target");
// function getGeoLocation(){
//     if (navigator.geolocation){
//         navigator.geolocation.getCurrentPosition(showLocation);

//     }
// }
// function showLocation(location){
//     console.log(location)
//     myDiv.innerHTML ="(위도 :" + location.coords.latitude+
//     ", 경도:" +location.coords.longitude+")"
// }

// function getGeoLocation2(){
//     if(navigator.geolocation){
//         navigator.geolocation.getCurrentPosition(showLocation);
//     }
// }
// function showGeolocation(position){
//     var pos = position.coords.latitude+","+position.coords.longitude;
//     var url = "http://map.googleapls.com/map/api/staticmap?center="+ pos +
// }

function readFile() {
    var files = document.getElementById('input').files;
    console.log(files);
    console.log(files[0].name);
    console.log(files.length);
   
var file = files[0]
var reader = new FileReader()
reader.readAsText(file, "utf-8")
console.log(reader);
reader.onload = function () {
    document.getElementById('result').value = reader.result;
}
}


function readFile2() {
    var files = document.getElementById('input').files;

    output = "";
    for (var i = 0, f; f = files[i]; i++) {
        output += files[0].name + "\n";
        output += f.type + "\n";
        output += f.size + "bytes\n";
        output += f.lastModifiedDate + "\n";
    }
    document.getElementById('result').value = output;
}