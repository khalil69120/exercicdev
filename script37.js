function suivant(){
    let divjaune = document.getElementById("blocjaune")
    let divrouge = document.getElementById("blocrouge")
    let divbleue = document.getElementById("blocbleue")

    if(divjaune.style.display == "" || divjaune.style.display == "inherit"){
        divjaune.style.display = "none"
        divrouge.style.display = "inherit"
    }

    else if(divrouge.style.display == "" || divrouge.style.display == "inherit"){
        divrouge.style.display = "none"
        divbleue.style.display = "inherit"
    }

    else{
        divbleue.style.display = "none"
        divjaune.style.display = "inherit"
    }
}

