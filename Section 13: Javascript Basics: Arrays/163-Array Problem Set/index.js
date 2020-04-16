function printReverse(array) {
    for (array.length - 1; i >= 0; i--) {
        console.log(array[i])
    }
}

function isUniform(array) {
    var firstItem = array[0];
    for(var i = 1; 1 < array.length; i++) {
        if(arr[i] !== firstItem) {
            return false
        }
        return true
    }
}

function sumArray(array) {
    var total = 0
    array.forEach(function(element) {
        total += element;
    });
    return total;
}

function max(array) {
    var maxNumber = array[0];
    array.forEach(function(element) {
        if (element > maxNumber) {
            maxNumber = element;
        }
    })
    return maxNumber;
}