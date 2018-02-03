// shuffles and array
// gets an array (arr) as input parameter
// modifies arr, it will contain the same values,
// but in a different, random order

function shuffle(arr:any[]) {
    var j, x, i;
    for (i = arr.length; i; i--) {
        j = Math.floor(Math.random() * i);
        x = arr[i - 1];
        arr[i - 1] = arr[j];
        arr[j] = x;
    }
}

// copies an array within 1 level deep
// gets an array (old)
// returns a new array with the same values

function shallowArrayCopy(oldArr:any[]):any[] {
    var newArr = [];
    for(var i=0;i<oldArr.length;i++){
        newArr.push(oldArr[i]);
    }
    return newArr;
}
