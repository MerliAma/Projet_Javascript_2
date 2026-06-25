//Fonction qui inverse un chaine de caractère
function InverseChaine(chaine){
    var chaineInverse =""
    if(chaine!==""){
        for(var cpt=chaine.length-1;cpt>=0;cpt--){
        chaineInverse+=chaine[cpt]
        }
    }
    return chaineInverse
}

//Fonction qui compte le nombre de caractères dans une chaine
function NombreCaractere(chaine){
    var NbrCaract=0
    if(chaine!==""){
        for(var caractere of chaine){
        NbrCaract++
        }
    }
    
    //return chaine.length
    return NbrCaract
}

//fonction qui met en majuscules la première lettre de chaque mot dans une phrase
function Majuscule(phrase){
    phrase=phrase.trim() //supprimer les espaces inutiles en début et fin de phrase
    if(phrase!==""){
        var phraseMaj=phrase[0].toUpperCase()
        var cpt=1
        while(cpt<phrase.length){
            phraseMaj+=phrase[cpt]
            if(phrase[cpt]===" "){
                phraseMaj+=phrase[cpt+1].toUpperCase()
                cpt++
            }
            cpt++
        }
    }
    return phraseMaj
}

//Fonction qui retrouve les valeurs maximales et minimales d'un tableau de nombre
function MaxMinTableau(tableau){
    var message=""
    if(Array.isArray(tableau) && tableau.length>0){
        var maxi=tableau[0]
        var mini=tableau[0]
        for(var nbr of tableau){
            if(nbr>maxi){
                maxi=nbr
            }
            if(nbr<mini){
                mini=nbr
            }
        }
        message=`Le Maximum du Tableau est ${maxi} et le Minimum du Tableau est ${mini}`
    }
    return message
}

//Fonction qui calcule la somme des éléments d'un tableau
function SommeNb(tableau){
    var somme=0
    if(Array.isArray(tableau) && tableau.length>0){
        for(var nbr of tableau){
            somme+=nbr
        }
    }
    return somme
}

//Fonction qui filtre les éléments d'un tableau en fonction d'une condition donnée
/*Bien sûr. L'idée de "filtrer les éléments d'un tableau en fonction d'une condition
donnée" est simplement de parcourir un tableau et ne conserver que les éléments qui
respectent une règle.
 exemple: let nombres = [3, 8, 12, 5, 20];

let resultat = nombres.filter(nombre => nombre > 10);

console.log(resultat); // [12, 20]*/

function filtrer(Tableau, condition){
   //la condition doit elle être passée en paramètre? 
}

//Fonction qui retourne la factorielle d'un nombre donné 3!=3*2*1
function factorielle(nombre){
    var resultat=1
    for(var cpt=nombre; cpt>1; cpt--){
        resultat=resultat*cpt
    }
    return resultat
}

//fonction qui vérifie si un nombre est premier ou non
//Un nombre premier est un nombre entier supérieur à 1 qui possède exactement deux diviseurs : 1 et lui même
function NbPremier(nombre){
    var nbPrem=""
    var verif=false
    if(nombre.toFixed(0)>1){
        for(var cpt=2; cpt<10; cpt++){
            if((nombre.toFixed(0))%cpt===0 && (nombre.toFixed(0))!=cpt){
                return `${nombre} n'est pas un nombre premier`
            }
        }
    }
    return `${nombre} est un nombre premier`
}

//fonction suite de Fibonacci
// on commence avec 0,1. 
// Puis chaque nouveau nombre est obtenu en additionnant les deux nombres précédents.
function SuiteFibonacci(nbTerme){
    var Suite=[0,1]
    var cpt=2
    while(cpt<nbTerme){
        Suite.push(Suite[cpt-1]+Suite[cpt-2])
        cpt++
    }
    return Suite
}

console.log(InverseChaine("Josiane"))
console.log(NombreCaractere("Josiane"))
console.log(Majuscule("   merli dort maintenent au travail "))
console.log(MaxMinTableau([10,52,6,3,30]))
console.log(SommeNb([10,52,6,3,30]))
console.log(factorielle(7))
console.log(NbPremier(21))
console.log(SuiteFibonacci(7))

