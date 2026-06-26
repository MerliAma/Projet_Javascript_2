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
function filtrer(Tableau){
    var TableauFiltre=[]
    if(Array.isArray(Tableau) && Tableau.length>0){
        TableauFiltre = Tableau.filter(nombre => nombre >= 10)
    }
    return TableauFiltre
}

//Fonction qui retourne la factorielle d'un nombre donné Exemple: 3!=3*2*1
function factorielle(nombre){
    if(typeof nombre==="number"){
        var resultat=1
        for(var cpt=nombre; cpt>1; cpt--){
            resultat=resultat*cpt
        }
        return resultat
    }
    else{
        return "Il ne s'agit pas d'un nombre"
    }
}

//fonction qui vérifie si un nombre est premier ou non
function NbPremier(nombre){
    if(typeof nombre==="number"){
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
    else{
        return "Il ne s'agit pas d'un nombre"
    }
}

//fonction suite de Fibonacci
function SuiteFibonacci(nbTerme){
    if(typeof nbTerme==="number"){
        var Suite=[0,1]
        var cpt=2
        while(cpt<nbTerme){
            Suite.push(Suite[cpt-1]+Suite[cpt-2])
            cpt++
        }
        return Suite
    }
    else{
        return "Il ne s'agit pas d'un nombre"
    }    
}


