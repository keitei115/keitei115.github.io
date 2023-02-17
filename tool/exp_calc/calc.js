//0以上の整数か判定
const isNumOverZero = function (val) {
    var regexp = new RegExp(/^([1-9][0-9]*|0)$/);
    return regexp.test(val);
}