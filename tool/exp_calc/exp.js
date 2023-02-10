//requiredEXPに達するまで必要なxlCount, lCount, mCount, sCount, xsCountの数を調べる
//xl=30000, l=10000, m=3000, s=800, xs=100となっており、それらを組み合わせることでrequiredEXPに近づけていく
//xlLimit, lLimit, mLimit, sLimit, xsLimitはそれぞれxlCount, lCount, mCount, sCount, xsCountの上限となる
let calcRequirdCandy = function (requiredEXP, xlLimit, lLimit, mLimit, sLimit, xsLimit) {
    let [xlCount, lCount, mCount, sCount, xsCount] = [0, 0, 0, 0, 0];
    console.log(xlLimit, lLimit, mLimit, sLimit, xsLimit);

    //目標経験値に到達するまで、XSアメから順に使っていく
    for (; (xsCount < xsLimit) && (requiredEXP > calcNowEXP(xlCount, lCount, mCount, sCount, xsCount)); xsCount = (xsCount + 1) | 0) { //高速化のための "i = (i + 1) "
        console.log(xlCount, lCount, mCount, sCount, xsCount);
        console.log(calcNowEXP(xlCount, lCount, mCount, sCount, xsCount));
    }

    for (; (sCount < sLimit) && (requiredEXP > calcNowEXP(xlCount, lCount, mCount, sCount, xsCount)); sCount = (sCount + 1) | 0) {
        console.log(xlCount, lCount, mCount, sCount, xsCount);
        console.log(calcNowEXP(xlCount, lCount, mCount, sCount, xsCount));
    }

    for (; (mCount < mLimit) && (requiredEXP > calcNowEXP(xlCount, lCount, mCount, sCount, xsCount)); mCount = (mCount + 1) | 0) {
        console.log(xlCount, lCount, mCount, sCount, xsCount);
        console.log(calcNowEXP(xlCount, lCount, mCount, sCount, xsCount));
    }

    for (; (lCount < lLimit) && (requiredEXP > calcNowEXP(xlCount, lCount, mCount, sCount, xsCount)); lCount = (lCount + 1) | 0) {
        console.log(xlCount, lCount, mCount, sCount, xsCount);
        console.log(calcNowEXP(xlCount, lCount, mCount, sCount, xsCount));
    }

    for (; (xlCount < xlLimit) && (requiredEXP > calcNowEXP(xlCount, lCount, mCount, sCount, xsCount)); xlCount = (xlCount + 1) | 0) {
        console.log(xlCount, lCount, mCount, sCount, xsCount);
        console.log(calcNowEXP(xlCount, lCount, mCount, sCount, xsCount));
    }

    if (requiredEXP > calcNowEXP(xlCount, lCount, mCount, sCount, xsCount)) {
        console.log("faild...");
        console.log(xlCount, lCount, mCount,sCount, xsCount);
        console.log(requiredEXP - calcNowEXP(xlCount, lCount, mCount, sCount, xsCount));
        let remainingEXP = requiredEXP - calcNowEXP(xlCount, lCount, mCount, sCount, xsCount);
        return [false, 0, 0, 0, 0, 0, remainingEXP];
    } else {
        console.log("success!");
        console.log(xlCount, lCount, mCount,sCount, xsCount);
        console.log(calcNowEXP(xlCount, lCount, mCount, sCount, xsCount) - requiredEXP);

        //大きい方のアメから必要なアメを削っていく
        for (; xlCount > 0 && (requiredEXP <= calcNowEXP(xlCount-1, lCount, mCount, sCount, xsCount)); xlCount = (xlCount - 1) | 0) {
            console.log(xlCount, lCount, mCount, sCount, xsCount);
            console.log(calcNowEXP(xlCount, lCount, mCount, sCount, xsCount));
        }

        for (; lCount > 0 && (requiredEXP <= calcNowEXP(xlCount, lCount-1, mCount, sCount, xsCount)); lCount = (lCount - 1) | 0) {
            console.log(xlCount, lCount, mCount, sCount, xsCount);
            console.log(calcNowEXP(xlCount, lCount, mCount, sCount, xsCount));
        }

        for (; mCount > 0 && (requiredEXP <= calcNowEXP(xlCount, lCount, mCount-1, sCount, xsCount)); mCount = (mCount - 1) | 0) {
            console.log(xlCount, lCount, mCount, sCount, xsCount);
            console.log(calcNowEXP(xlCount, lCount, mCount, sCount, xsCount));
        }

        for (; sCount > 0 && (requiredEXP <= calcNowEXP(xlCount, lCount, mCount, sCount-1, xsCount)); sCount = (sCount - 1) | 0) {
            console.log(xlCount, lCount, mCount, sCount, xsCount);
            console.log(calcNowEXP(xlCount, lCount, mCount, sCount, xsCount));
        }

        for (; xsCount > 0 && (requiredEXP <= calcNowEXP(xlCount, lCount, mCount, sCount, xsCount-1)); xsCount = (xsCount - 1) | 0) {
            console.log(xlCount, lCount, mCount, sCount, xsCount);
            console.log(calcNowEXP(xlCount, lCount, mCount, sCount, xsCount));
        }

        var excessEXP = xlCount * 30000 + lCount * 10000 + mCount * 3000 + sCount * 800 + xsCount * 100 - requiredEXP;
        console.log(xlCount, lCount, mCount, sCount, xsCount);
        console.log(excessEXP);
        return [true, xlCount, lCount, mCount, sCount, xsCount, excessEXP];
    }
}

//アメを組み合わせたときの経験値を計算する
let calcNowEXP = function (xl = 0, l = 0, m = 0, s = 0, xs = 0) {
    let exp = xl * 30000 + l * 10000 + m * 3000 + s * 800 + xs * 100;
    return exp;
}