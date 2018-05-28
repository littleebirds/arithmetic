//样例输入
var ids = ['00001', '00002', '00003', '00004']
var pers = [{
        id: 'a1',
        ids: []
    },
    {
        id: 'a2',
        ids: []
    }
]

/*
    5/28  ，今天面试问的一个问题，
    fp函数，平均分配（按序列）
    randomFP,随机平均分配（按随机）
*/
function fp(ids, pers) {
    if (!Array.isArray(ids) || !Array.isArray(pers)) {
        return '参数错误'
    }
    let len1 = ids.length;
    let len2 = pers.length;
    if (len1 === 0) return '无订单可分配';
    if (len2 === 0) return '无人员可分配';

    for (let i = 0; i < len1; i++) {
        if (i <= len2 - 1) {
            if (ids[i]) {
                pers[i].ids.push(ids[i])
            }
        } else {
            let temp = i % len2;
            pers[temp].ids.push(ids[i])
        }
    }
    return pers
}

// console.log(fp(ids, pers))

function randomFP(ids, pers) {
    if (!Array.isArray(ids) || !Array.isArray(pers)) {
        return '参数错误'
    }
    let len1 = ids.length;
    let len2 = pers.length;
    if (len1 === 0) return '无订单可分配';
    if (len2 === 0) return '无人员可分配';

    for (let i = 0; i < len1; i++) {
        let rdNum = Math.floor(Math.random() * ids.length); //取订单数量范围内的随机数
        let nowId = ids[rdNum]
        if (i <= len2 - 1) {
            pers[i].ids.push(nowId)
        } else {
            let temp = i % len2;
            pers[temp].ids.push(nowId)
        }
        let idIndex = ids.indexOf(nowId)
        if (idIndex === -1) {
            //表示无此元素，计算错误
            return '无此id'
            break;
        } else {
            ids.splice(idIndex, 1)
        }
    }
    return pers
}

// console.log(randomFP(ids, pers))