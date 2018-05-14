/**
 * 求任意整数之间的和
 */

function sum(start, end) {
    start = Number(start);
    end = Number(end);
    if (isNaN(start) || isNaN(end)) {
        return '参数类型错误';
    }
    if (start >= end) {
        return '参数输入有误';
    }
    let sum = 0;
    let now = start;
    do {
        sum += now;
        now = now + 1
    } while (now <= end)
    return sum;
}