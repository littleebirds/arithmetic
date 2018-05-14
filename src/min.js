/**
 * 求数组中最小值
 */

function getArrayMax(arr) {
    if (!Array.isArray(arr)) {
        return '参数类型错误'
    }
    if (arr.length === 0) {
        return '参数为空数组，无最小值'
    } else {
        for (let item of arr) {
            if (isNaN(Number(item))) {
                return '参数类型错误'
                break;
            }
        }
    }


    let min;
    if (arr.length === 1) {
        min = arr[0];
        return min
    } else {
        min = arr[0]
        for (let i = 1; i < arr.length; i++) {
            if (arr[i] <= min) {
                min = arr[i]
            }
        }
    }

    return min;
}

// console.log(getArrayMax([2, 3, 99, 5, 9, 77, 8, 6]))
// console.log(getArrayMax([1, 2, 3]))