function insertSort(data) {
    let sortedData = []
    for (let elmt of data) {
        let i = 0
        while (elmt > sortedData[i] && i < sortedData.length) {
            i++
        }
        sortedData.splice(i, 0, elmt)
    }
    return sortedData
}

function quickSort(data) {
    // condition d'arrêt
    if (data.length === 0) {
        return data;
    }
    // définition de la valeur pivot
    let pivot = data[0];
    // définition des deux sous-tableaux (gauche et droite du pivot) à trier 
    let leftArray = [];
    let rightArray = [];
    // boucle permettant de répartir les données du tableau initial à gauche ou droite de la valeur pivot
    for (let i = 1; i < data.length; i++) {
        data[i] < pivot ? leftArray.push(data[i]) : rightArray.push(data[i])
    }
    // retourne un tableau qui sera trié de nouveau grâce à la récursivité
    return [...quickSort(leftArray), pivot, ...quickSort(rightArray)]; 
    // le "..." est le "spread operator", il permet d'étendre un itérable (par exemple une expression de tableau ou une chaîne de caractères)
    // en lieu et place de plusieurs arguments (pour les appels de fonctions)
    // ou de plusieurs éléments (pour les littéraux de tableaux) ou de paires clés-valeurs (pour les littéraux d'objets)
};

function selectionSort(data) {
    let min = Math.min.apply(Math, data)
    console.log(min)
    for (let i = 0; i < data.length; i++) {
    }
    return data
}

console.log("sortedData par insertion :", insertSort(data))
console.log("sortedData par tri rapide :", quickSort(data))
console.log("sortedData par selection :", selectionSort(data))