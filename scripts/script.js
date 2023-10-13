function insertSort(data){
    let sortedData = []
    for (let elmt of data){
        let i = 0
        while(elmt > sortedData[i] && i < sortedData.length){
            i++
        }
        sortedData.splice(i, 0, elmt)
    }
    return sortedData
}








function selectionSort(data){
    let min = Math.min.apply(Math, data)
    console.log(min)
    for (let i = 0; i < data.length; i++){
    }
    return data
}


console.log("sortedData par insertion :", insertSort(data))
console.log("sortedData par selection :", selectionSort(data))