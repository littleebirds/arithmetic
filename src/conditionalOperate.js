/**
 * 利用条件运算完成此题： 学习成绩 >= 90 分的同学用A表示， 60 - 89 分之间的用B表示， 60 分以下的用C表示。
 *
 var stus = {
     qqq: {
         score: 95
     },
     www: {
         score: 92
     },
     eee: {
         score: 70
     },
     rrr: {
         score: 65
     },
     ttt: {
         score: 45
     },
     yyy: {
         score: 30
     }
 };
 */
let stus = {
    qqq: {
        score: 95
    },
    www: {
        score: 92
    },
    eee: {
        score: 70
    },
    rrr: {
        score: 65
    },
    ttt: {
        score: 45
    },
    yyy: {
        score: 30
    }
};

function setLevel(obj) {
    if (Object.prototype.toString.call(obj).slice(8, -1) !== 'Object') {
        return '参数类型错误'
    }
    for (var i in obj) {
        for (var j in obj[i]) {
            if (obj[i][j] >= 90) {
                obj[i].mark = "A";
            } else if (obj[i][j] >= 60 && obj[i][j] <= 89) {
                obj[i].mark = "B";
            } else {
                obj[i].mark = "C";
            }
        }
    }
    return obj;
}