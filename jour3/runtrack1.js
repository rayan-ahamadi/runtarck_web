let num1 = prompt("Entrez un nombre");
let num2 = prompt("Entrez un autre nombre");

if (!isNaN(parseInt(num1)) && !isNaN(parseInt(num2))) {
    alert("Addition : " + (parseInt(num1) + parseInt(num2)) + "\n" + "Soustraction : " + (parseInt(num1) - parseInt(num2)) + "\n" + "Multiplication : " + (parseInt(num1) * parseInt(num2)) + "\n" + "Division : " + (parseInt(num1) / parseInt(num2)) + "\n");
} else {
    alert("Erreur");
}

let str1 = prompt("Entrez une chaîne de caractères");
let str2 = prompt("Entrez une autre chaîne de caractères");

if (str1.length > 0 && str2.length > 0) { 
    alert("concaténation des deux : " + str1 + str2 );
}else {
    alert("Erreur: chaîne vide");
}


