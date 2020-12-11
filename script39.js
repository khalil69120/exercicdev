let parent = document.getElementById("exercice")
let enfant1 = document.createElement("h1")
enfant1.innerHTML = "<h1>contenu</h1>"
parent.appendChild(enfant1)

let enfant2 = document.createElement("p")
enfant2.innerHTML = "<p>contenu2</p>"
parent.appendChild(enfant2)


function supprimerparagraphe(){
    let parent2 = document.getElementById("div1")
    let enfant4 = document.getElementById("supprimer")
    parent2.removeChild(enfant4)
}

function supprimerparagraphe2(){
    let parent2 = document.getElementById("div1")
    let enfant4 = document.getElementById("supprimer2")
    parent2.removeChild(enfant4)
}

function supprimerparagraphe3(){
    let parent2 = document.getElementById("div1")
    let enfant4 = document.getElementById("supprimer3")
    parent2.removeChild(enfant4)
}

function supprimerparagraphe4(){
    let parent2 = document.getElementById("div1")
    let enfant4 = document.getElementById("supprimer4")
    parent2.removeChild(enfant4)
}


let enfant3 = document.createElement("<h2></h2>")
parent.replaceChild(enfant3,parent.firstChild)