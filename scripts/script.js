function insertSort(data) {
    // création tableau vide pour recevoir les données triées
    let sortedData = []
    // boucle qui, pour chaque élément elmt de data, va comparer la valeur d'elmt avec les données de sortedData
    // et les insérer dans celui-ci dès que la valeur comparée sera inférieure à l'une des valeurs présentes
    for (let elmt of data) {
        let i = 0
        while (elmt > sortedData[i] && i < sortedData.length) {
            i++
        }
        sortedData.splice(i, 0, elmt) // "insère dans sortedData à la place i elmt, en supprimant 0 élément"
    }
    return sortedData
}

function quickSort(data) {
    // condition d'arrêt
    if (data.length === 0) {
        return data
    }
    // définition de la valeur pivot
    let pivot = data[0]
    // définition des deux sous-tableaux (gauche et droite du pivot) à trier 
    let leftArray = []
    let rightArray = []
    // boucle permettant de répartir les données du tableau initial à gauche ou droite de la valeur pivot
    for (let i = 1; i < data.length; i++) {
        data[i] < pivot ? leftArray.push(data[i]) : rightArray.push(data[i])
    }
    // retourne un tableau qui sera trié de nouveau grâce à la récursivité
    return [...quickSort(leftArray), pivot, ...quickSort(rightArray)]
    // le "..." est le "spread operator", il permet d'étendre un itérable (par exemple une expression de tableau ou une chaîne de caractères)
    // en lieu et place de plusieurs arguments (pour les appels de fonctions)
    // ou de plusieurs éléments (pour les littéraux de tableaux) ou de paires clés-valeurs (pour les littéraux d'objets)
}

function selectionSort(data) {
    for (let i = 0; i < data.length; i++) {
        // défintion de la "variable à comparer"
        let min = i
        // boucle permettant la lecture du tableau (le but ici est de trouver la valeur la plus petite)
        // Après chaque passage on commence à lire à "variable à comparer" + 1
        for (let j = i + 1; j < data.length; j++) {
            if (data[j] < data[min]) {
                min = j
            }
        }
        // une fois la variable la plus petite trouvée, on échange sa place avec la "variable à comparer"
        if (min != i) {
            let temp = data[i]
            data[i] = data[min]
            data[min] = temp
        }
    }
    return data
}

console.log("sortedData par insertion :", insertSort(data))
console.log("sortedData par tri rapide :", quickSort(data))
console.log("sortedData par selection :", selectionSort(data))