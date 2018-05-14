/*
    交换数组中两个元素的位置
    params{
        arr  目标数组，
        a    要交换的元素，
        b    要交换的元素
    }
*/
function swap(arr, a, b) {
    //检查输入数据
    if (!Array.isArray(arr)) {
        return '该元素不是数组'
    }
    let indexA = a.indexOf(arr)
    let indexB = b.indexOf(arr)
    if (indexA === -1 || indexB === -1) {
        return '未查询到该元素'
    }

    let temp;
    temp = arr[indexA];
    arr[indexA] = arr[indexB]
    arr[indexB] = temp;

    return arr;
}