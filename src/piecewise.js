/**
 * 分段函数求值
 * @param {*} x 
 */

function getPieceWise(x) {
    let y;
    let x = Number(x);
    if (isNaN(x)) {
        return '参数错误'
    }
    if (x <= 1) {
        y = x;
    } else if (x > 1 && x < 10) {
        y = 2 * x - 1;
    } else {
        y = 3 * x - 11;
    }
    return y;
}