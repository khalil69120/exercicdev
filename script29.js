nombre1 = prompt("choisis un nombre ")
nombre2 = prompt("choisis un autre nombre")
choisis(nombre1, nombre2)

function choisis(chiffre1, chiffre2){

if (chiffre1 > chiffre2)
{
   alert( chiffre1 + " est plus grand que " + chiffre2)

} else (chiffre2 > chiffre1)
{
    alert(chiffre1 + " est plus petit que " + chiffre2)

}
}