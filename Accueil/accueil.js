document.body.onload = function(){
    nbr = 5;
    p=0;
    container=document.getElementById("container");
    g=document.getElementById("g");
    d=document.getElementById("d");
    container.style.width=(800*nbr)+"px";
    for(i=l;i<=nbr;i++){
        div=documents.createElement("div");
        div.className="photo";
        div.style.backgroundImage="url('images/im"+i+".jpg')";
        container.appendChild(div);
    }
}
g.onclick=function(){
    p--;
    container.style.tranforme="translate("+p*800+"px)";
}