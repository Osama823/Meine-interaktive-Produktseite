let img = document.querySelector('.img'); 
let container = document.querySelector('.container'); 

function Handys(Handy){
    if(img) {
        img.src = Handy;
    } else {
        console.warn("Die Bild-Element wurde nicht gefunden!");
    }
}

function Farben(Farbe){
    if(container) {
        container.style.background = Farbe;
    } else {
        console.warn("Der Container wurde nicht gefunden!");
    }
}