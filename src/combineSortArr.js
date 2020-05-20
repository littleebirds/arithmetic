var arr1 = [1,3,5,7,9];
var arr2 = [-1,2,4,6,8,10,15];

function sortTwoArr(arr1,arr2){
    var newArr = arr1.concat(arr2);
    var temp,inner;
    var len1 = arr1.length;
    for(var outer = len1;outer<newArr.length;outer++){
        temp = newArr[outer];
        inner = outer;
        while(inner>0&&newArr[inner-1]>temp){
            newArr[inner] = newArr[inner-1];
            inner--;
        }
        newArr[inner] = temp;
    }
    return newArr;
}

console.log(sortTwoArr(arr1,arr2))