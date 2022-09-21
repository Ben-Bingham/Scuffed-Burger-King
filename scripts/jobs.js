function hired() {
    if (Math.random() >= 0.5) {
        alert("Your hired!, start on monday.");
    }
    else {
        alert("No job for you");
    }
    document.getElementById("getJob").innerHTML = "";
}