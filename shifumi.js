let pierre = document.getElementById('pierre')
let feuille = document.getElementById('feuille')
let ciseaux = document.getElementById('ciseaux')
let choixJoueur
let choixBot = Math.floor(Math.random() * 3)
console.log(choixBot)
pierre.addEventListener('click', () => {
    choixJoueur = 0
    compare(choixJoueur, choixBot)
})
feuille.addEventListener('click', () => {
    choixJoueur = 1
    compare(choixJoueur, choixBot)
})
ciseaux.addEventListener('click', () => {
    choixJoueur = 2
    compare(choixJoueur, choixBot)
})

function compare(val1, val2){
    if (val1 == 0){
        switch(val2){
            case 1 : document.getElementById("resultat").textContent = "Perdu"; break;
            case 2 : document.getElementById("resultat").textContent = "Gagne"; break;
            default : document.getElementById("resultat").textContent = "Egalité";
        }
    } else if (val1 = 1){
        switch(val2){
            case 2 : document.getElementById("resultat").textContent = "Perdu"; break;
            case 0 : document.getElementById("resultat").textContent = "Gagne"; break;
            default : document.getElementById("resultat").textContent = "Egalité";
        }
    } else{
        switch(val2){
            case 0 : document.getElementById("resultat").textContent = "Perdu"; break;
            case 1 : document.getElementById("resultat").textContent = "Gagne"; break;
            default : document.getElementById("resultat").textContent = "Egalité";
        }
    }
}

