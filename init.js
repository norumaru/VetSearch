//JS for anything before the loading of the models
//Create namespace
var app = {};

console.log("INIT");

//Used to access the database
app.hideElement = function hideElement(id) {
    var x = document.getElementById(id);
    x.style.display = "none";
}

app.showElement = function showElement(id) {
    var x = document.getElementById(id);
    x.style.display = "block";
}