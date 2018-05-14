/**
 * 给一个不多于5位的正整数， 要求： 一、 求它是几位数， 二、 逆序打印出各位数字。
 *  
 */

function numberOperate(num) {
    num = Number(num);
    if (isNaN(num) || num <= 0 || num > 99999) {
        return '参数错误'
    }
    let n = 1; //记录位数
    let z = 0;
    let y;
    do {
        y = num / Math.pow(10, n);
        z = Math.floor(num % Math.pow(10, n) / Math.pow(10, n - 1));
        console.log(z);
        n++;
    } while (y >= 1);

    return n - 1;
}