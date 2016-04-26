onload = function () {
    document.getElementsByTagName("P")[0].innerHTML = "Hello World!";
}

function randomBackGround() {
    var rColor = Math.round(Math.random() * 16 * 16 * 16 * 16 * 16 * 16);
    document.getElementsByTagName('p')[0].innerText = "#" + rColor.toString(16);
    document.getElementsByTagName('body')[0].style.backgroundColor = "#"+rColor.toString(16);
}