function afficherTitre(){
    let titre = document.getElementById("mon_titre")
    console.log(titre.innerText);
}

function modifierTitre(){
    let titre = document.getElementById("mon_titre")
    titre.innerText = "titre2"
}