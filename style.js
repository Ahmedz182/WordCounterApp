$(document).ready(function () {

    $(".changetext").hide();

    $("#btn2").click(function () {

        $(".changetext").show();
    });
    $("#btn3").click(function () {

        $(".changetext").show();
    });

});


var btn1 = document.getElementById('btn').addEventListener("click", counters);
var btn2 = document.getElementById('btn2').addEventListener("click", lowercase);
var btn3 = document.getElementById('btn3').addEventListener("click", uppercase);

function counters() {

    let txt = document.getElementById('texts')
    let newtxt = txt.value
    document.getElementById('chr').innerText = "Total charcters : " + newtxt.length
    const myArray = newtxt.split(" ");
    let counter = myArray.length;
    document.getElementById('word').innerText = "Total words : " + counter

}


function lowercase() {

    let txt = document.getElementById('texts').value
    let a = document.getElementById('newtext').innerText = txt.toLowerCase();


}

function uppercase() {
    let txt = document.getElementById('texts').value
    let a = document.getElementById('newtext').innerText = txt.toUpperCase();

}

var myVar;

function myFunction() {
    myVar = setTimeout(showPage, 3000);
}

function showPage() {
    document.getElementById("loader").style.display = "none";
    //   document.getElementById("myDiv").style.display = "block";
}