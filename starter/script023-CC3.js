/*****************************
* 023 - TABLEAUX - CODING CHALLENGE 3
*/
// 1. Créez un tableau appelé 'factures' contenant les trois montants des factures.
// 2. Créez une fonction appelée 'calculateurPourboire' prenant une facture comme argument.
// 3. À l'intérieur de la fonction 'calculateurPourboire', utilisez des instructions conditionnelles pour calculer le pourboire en fonction du montant de la facture.
//    - Si la facture est inférieure à $50, calculez 20% de la facture.
//    - Si la facture est entre $50 et $200, calculez 15% de la facture.
//    - Si la facture est supérieure à $200, calculez 10% de la facture.
// 4. La fonction 'calculateurPourboire' devrait renvoyer le montant du pourboire.
// 5. Créez un tableau vide appelé 'pourboires'.
// 6. Créez un autre tableau vide appelé 'montantsFinaux'.
// 7. Utilisez la fonction 'calculateurPourboire' pour calculer les pourboires pour chaque facture du tableau 'factures' et ajoutez-les au tableau 'pourboires'.
// 8. Pour chaque facture, calculez le montant final payé en ajoutant le montant de la facture au montant du pourboire, puis ajoutez-le au tableau 'montantsFinaux'.
// 9. Affichez les tableaux 'pourboires' et 'montantsFinaux' dans la console pour voir les résultats.

const facture1 = parseInt(prompt("Quel est le montant de la première facture ?"));
const facture2 = parseInt(prompt("Quel est le montant de la deuxième facture ?"));
const facture3 = parseInt(prompt("Quel est le montant de la troisième facture ?"));

const factures = [facture1, facture2, facture3];

function calculateurPourboire(facture) {
    let remise;
    if (facture < 50) {
        remise = (facture * 20) / 100;
        return remise;
    } else if (facture >= 50 && facture <=200) {
        remise = (facture * 15) / 100;
        return remise;
    } else {
        remise = (facture * 10) / 100;
        return remise;
    }
}
let pourboires = [];
let montantFinaux = [];

for (i = 0; i < factures.length; i++) {
    pourboires.push(calculateurPourboire(factures[i]));
}
for (i = 0; i < 3; i++) {
    montantFinaux.push(pourboires[i] + factures[i]);
}

for (i = 0; i < pourboires.length; i ++) {
    console.log("La case " + i + " du tableau des pourboires vaut : " + pourboires[i]);
}

for (i = 0; i < montantFinaux.length; i ++) {
    console.log("La case " + i + " du tableau des montant finaux vaut : " + montantFinaux[i]);
}



/*
pourboires.forEach(lesPourboires => {
    console.log("La case " + i + " du tableau des pourboires vaut : " + lesPourboires);
})
*/

