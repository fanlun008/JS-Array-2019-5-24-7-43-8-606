// 阅读推荐的链接，复习JavaScript中数组的相关方法

// 写程序判断下列变量是不是数组类型。
var a = '[a, b, c, d]';
var b = [1, 2, 3, 4];

//TODO
function isArray(param) {
    return (param instanceof Array);
}

document.write("a: " + isArray(a) + "; " + "b: " + isArray(b) + "<br/>")


// 编写程序，将下面数组中的每一项都乘以2。
var a = [1, 2, 3, 4, 5];

// TODO should output [2,4,6,8,10]
function multip_2(param) {
    return param.map((cur) => {
        return cur * 2;
    })
}

document.write("now a value is: " + multip_2(a) + "<br/>");


// 编写程序，按下面的要求输出结果。
var colors = ["Red", "Green", "White", "Black"];

//TODO case 1 output: 'Red Green White Black'
function print1R(arr) {
    return arr.reduce(function (total, cur) {
        return total += (cur + " ");
    }, "")
}

document.write("case 1 output: " + print1R(colors) + "<br/>")

// case 2 output: 'Red+Green+White+Black'
function print2R(arr) {
    return arr.reduce(function (total, cur, curIndex, arr) {
        if (curIndex !== arr.length - 1) {
            total += (cur + "+");
        } else {
            total += cur;
        }
        return total;
    }, "")
}

document.write("case 2 output: " + print2R(colors) + "<br/>")

// case 3 output: 'Red,Green,White,Black'
function print3R(arr) {
    return arr.reduce(function (total, cur, curIndex, arr) {
        if (curIndex !== arr.length - 1) {
            total += (cur + ",");
        } else {
            total += cur;
        }
        return total;
    }, "")
}

document.write("case 3 output: " + print3R(colors) + "<br/>")

// 编写程序，将下面数组中的数字按从大到小的顺序排序。
var a = [5, 1, 8, 10, 4];

//TODO should output: [10,8,5,4,1]
function quickSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }
    var num = Math.floor(arr.length / 2);
    var newValue = arr.splice(num, 1);
    var left = [], right = [];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] < newValue) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }
    return quickSort(left).concat(newValue, quickSort(right));
}

document.write("array a sort after: " + quickSort(a) + "<br/>");


// 编程程序，找出下列数组中出现频率最高的元素。
var a = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];

//TODO should output: 'a'
function findMost(arr) {
    if (arr.length === 0) {
        return "arr is empty"
    }
    var res = {};
    for (let i = 0; i < arr.length; i++) {
        if (!res[arr[i]]) {
            res[arr[i]] = 1;
        } else {
            res[arr[i]]++;
        }
    }
    var maxItem = 0, maxVal = 0;
    var keys = Object.keys(res);
    for (let j = 0; j < keys.length; j++) {
        if (res[keys[j]] > maxVal) {
            maxItem = keys[j];
            maxVal = res[keys[j]];
        }
    }
    console.log("maxItem: " + maxItem + ", maxVal: " + maxVal);
}
findMost(a);