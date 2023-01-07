

var btn = document.getElementById('btn').addEventListener("click", counters);


function counters() {

    let txt = document.getElementById('texts')
    let newtxt = txt.value
    document.getElementById('chr').innerText = "Total charcters : " + newtxt.length
    const myArray = newtxt.split(" ");
    let counter = myArray.length;
    document.getElementById('word').innerText = "Total words : " + counter

}

