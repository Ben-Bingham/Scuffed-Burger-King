function hired() {
    if (Math.random() >= 0.5) {
        alert("Your hired!, start on monday.");
    }
    else {
        alert("No job for you");
    }
    document.getElementById("getJob").innerHTML = "";
}

function clearElement() {
    document.getElementById("loading").innerHTML = "";
    document.getElementById("video").style.visibility = "visible";

}

function loading() {
    document.getElementById("loading").innerHTML = "<img src=\"assets/Whopper.png\" class=\"spin\" width=\"100\">";
    document.getElementById("video").style.visibility = "hidden";
    setTimeout(clearElement, 1000);
}