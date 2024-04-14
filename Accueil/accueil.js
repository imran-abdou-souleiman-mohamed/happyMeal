document.body.onload = function(){
    var nbr = 5;
    var p = 0;
    var container = document.getElementById("container");
    var g = document.getElementById("g");
    var d = document.getElementById("d");
    var containerWidth = 800 * nbr; // Largeur du conteneur
    container.style.width = containerWidth + "px";
    for(var i = 1; i <= nbr; i++){
        var div = document.createElement("div");
        div.className = "photo";
        div.style.backgroundImage = "url('images/im" + i + ".jpg')";
        container.appendChild(div);
    }
    afficherMasquer();
};

g.onclick = function(){
    var p = parseInt(container.getAttribute('data-index')) || 0;
    if(p > -4)
        p--;
    container.style.transform = "translateX(" + p * 800 + "px)";
    container.setAttribute('data-index', p);
    container.style.transition = "all 0.5s ease";
    afficherMasquer();
};

d.onclick = function(){
    var p = parseInt(container.getAttribute('data-index')) || 0;
    if(p < 0) {
        p++;
        container.style.transform = "translateX(" + p * 800 + "px)";
        container.setAttribute('data-index', p);
        container.style.transition = "all 0.5s ease";
        afficherMasquer();
    } else {
        // Empêche le défilement supplémentaire
    }
};

function afficherMasquer(){
    var p = parseInt(container.getAttribute('data-index')) || 0;
    if(p == -2)
        g.style.visibility = "hidden";
    else 
        g.style.visibility = "visible";
    if(p == 0)
        d.style.visibility = "hidden";
    else 
        d.style.visibility = "visible";
}
