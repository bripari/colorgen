document.querySelector("button").addEventListener('click', click)

var url = "http://colormind.io/api/";
var data = {
	model : "default",
}

var http = new XMLHttpRequest();

http.onreadystatechange = function() {
	if(http.readyState == 4 && http.status == 200) {
		var palette = JSON.parse(http.responseText).result;
    document.getElementById('lightShades').innerHTML= palette[0].toString()
    document.getElementById('lightShades').style.background = `rgb(${palette[0]})`
    document.getElementById('lightAccents').innerHTML= palette[1].toString()
    document.getElementById('lightAccents').style.background = `rgb(${palette[1]})`
    document.getElementById('mainBrandColor').innerHTML= palette[2].toString()
    document.getElementById('mainBrandColor').style.background = `rgb(${palette[2]})`
    document.getElementById('darkAccents').innerHTML= palette[3].toString()
    document.getElementById('darkAccents').style.background = `rgb(${palette[3]})`
    document.getElementById('darkShades').innerHTML= palette[4].toString()
    document.getElementById('darkShades').style.background = `rgb(${palette[4]})`
	}
 

}
function click(){
http.open("POST", url, true);
http.send(JSON.stringify(data));
}
// http.onreadystatechange = function() {
// 	if(http.readyState == 4 && http.status == 200) {
// 		var palette = JSON.parse(http.responseText).result;
//     document.getElementById('lightShades').innerHTML= palette[0].toString()
//     document.getElementById('lightShades').style.background = `rgb(${palette[0]})`
//     document.getElementById('lightAccents').innerHTML= palette[1].toString()
//     document.getElementById('lightAccents').style.background = `rgb(${palette[1]})`
//     document.getElementById('mainBrandColor').innerHTML= palette[2].toString()
//     document.getElementById('mainBrandColor').style.background = `rgb(${palette[2]})`
//     document.getElementById('darkAccents').innerHTML= palette[3].toString()
//     document.getElementById('darkAccents').style.background = `rgb(${palette[3]})`
//     document.getElementById('darkShades').innerHTML= palette[4].toString()
//     document.getElementById('darkShades').style.background = `rgb(${palette[4]})`
// 	}
 

// }

// http.open("POST", url, true);
// http.send(JSON.stringify(data));

