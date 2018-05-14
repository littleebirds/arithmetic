/**
 * 排序算法
 */
// var a1 = [9, 8, 7, 6, 5, 4, 3, 2, 1];
// var a2 = [9, 8, 7, 6, 5, 4, 3, 2, 1];
// var a3 = [9, 8, 7, 6, 5, 4, 3, 2, 1];
// console.log(bubleSort(a1));
// console.log(selectionSort(a2));
// console.log(insertSort(a3));

let sort = (function () {
    //冒泡排序
    function bubleSort(arr) {
        var temp;
        for (var outer = 0; outer < arr.length; outer++) {
            for (var inner = 0; inner < arr.length; inner++) {
                if (arr[inner] > arr[inner + 1]) {
                    temp = arr[inner];
                    arr[inner] = arr[inner + 1];
                    arr[inner + 1] = temp;
                }
            }
        }
        return arr;
    }
    //选择排序
    function selectionSort(arr) {
        var min, temp;
        for (var outer = 0; outer < arr.length - 1; outer++) {
            min = outer;
            for (var inner = outer + 1; inner < arr.length; inner++) {
                if (arr[min] > arr[inner]) {
                    min = inner;
                }
            }
            temp = arr[outer];
            arr[outer] = arr[min];
            arr[min] = temp;
        }
        return arr;
    }
    //插入排序
    function insertSort(arr) {
        var inner, temp;
        for (var outer = 0; outer < arr.length; outer++) {
            temp = arr[outer];
            inner = outer;
            while (inner > 0 && arr[inner - 1] > temp) {
                arr[inner] = arr[inner - 1];
                inner--;
            }
            arr[inner] = temp;
        }
        return arr;
    }

    return {
        bubleSort: bubleSort,
        selectionSort: selectionSort,
        insertSort: insertSort
    }
})()