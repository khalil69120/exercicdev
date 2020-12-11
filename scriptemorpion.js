let color_case = "rose"


function jouer(id) {
    console.log(id)
    let cell = document.getElementById(id)
    if (color_case == "blue") {
        cell.classList.add("rose")
        color_case = "rose"
    } else {
        cell.classList.add("blue")
        color_case = "blue"
    }
}
