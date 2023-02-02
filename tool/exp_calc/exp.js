let calcRequirdCandy = function (requiredEXP, xlLimit, lLimit, mLimit, sLimit, xsLimit) {
    var xls = 0;
    var ls = 0;
    var ms = 0;
    var ss = 0;
    var xss = 0;

    for (let i = 0; i <= xsLimit; i = (i + 1) | 0) {
        xss = i;
        //console.log(xls * 30000 + ls * 10000 + ms * 3000 + ss * 800 + xss * 100)
        if (requiredEXP <= i * 100) { break; }
    }

    for (let i = 0; i <= sLimit; i = (i + 1) | 0) {
        ss = i;
        //console.log(xls * 30000 + ls * 10000 + ms * 3000 + ss * 800 + xss * 100)
        if (requiredEXP <= i * 800 + xss * 100) { break; }
    }

    for (let i = 0; i <= mLimit; i = (i + 1) | 0) {
        ms = i;
        //console.log(xls * 30000 + ls * 10000 + ms * 3000 + ss * 800 + xss * 100)
        if (requiredEXP <= i * 3000 + ss * 800 + xss * 100) { break; }
    }

    for (let i = 0; i <= lLimit; i = (i + 1) | 0) {
        ls = i;
        //console.log(xls * 30000 + ls * 10000 + ms * 3000 + ss * 800 + xss * 100)
        if (requiredEXP <= i * 10000 + ms * 3000 + ss * 800 + xss * 100) { break; }
    }

    for (let i = 0; i <= xlLimit; i = (i + 1) | 0) {
        xls = i;
        //console.log(xls * 30000 + ls * 10000 + ms * 3000 + ss * 800 + xss * 100)
        if (requiredEXP <= i * 30000 + ls * 10000 + ms * 3000 + ss * 800 + xss * 100) { break; }
    }

    if (requiredEXP > xls * 30000 + ls * 10000 + ms * 3000 + ss * 800 + xss * 100) {
        console.log("faild...");
        console.log(xls + " " + ls + " " + ms + " " + ss + " " + xss);
        console.log(requiredEXP - xls * 30000 - ls * 10000 - ms * 3000 - ss * 800 - xss * 100);
        var remainingEXP = requiredEXP - xls * 30000 - ls * 10000 - ms * 3000 - ss * 800 - xss * 100 ;
        return [false, 0, 0, 0, 0, 0, remainingEXP];
    } else {
        console.log("success!");
        console.log(xls + " " + ls + " " + ms + " " + ss + " " + xss);
        console.log(xls * 30000 + ls * 10000 + ms * 3000 + ss * 800 + xss * 100 - requiredEXP);

        for (let i = xls; i > 0; i = (i - 1) | 0) {
            //console.log(i * 30000 + ls * 10000 + ms * 3000 + ss * 800 + xss * 100)
            if (requiredEXP > i * 30000 + ls * 10000 + ms * 3000 + ss * 800 + xss * 100) { break; }
            xls = i;
        }

        for (let i = ls; i > 0; i = (i - 1) | 0) {
            //console.log(xls * 30000 + i * 10000 + ms * 3000 + ss * 800 + xss * 100)
            if (requiredEXP > xls * 30000 + i * 10000 + ms * 3000 + ss * 800 + xss * 100) { break; }
            ls = i;
        }

        for (let i = ms; i > 0; i = (i - 1) | 0) {
            //console.log(xls * 30000 + ls * 10000 + i * 3000 + ss * 800 + xss * 100)
            if (requiredEXP > xls * 30000 + ls * 10000 + i * 3000 + ss * 800 + xss * 100) { break; }
            ms = i;
        }

        for (let i = ss; i > 0; i = (i - 1) | 0) {
            //console.log(xls * 30000 + ls * 10000 + ms * 3000 + i * 800 + xss * 100)
            if (requiredEXP > xls * 30000 + ls * 10000 + ms * 3000 + i * 800 + xss * 100) { break; }
            ss = i;
        }

        for (let i = xss; i > 0; i = (i - 1) | 0) {
            //console.log(xls * 30000 + ls * 10000 + ms * 3000 + ss * 800 + i * 100)
            if (requiredEXP > xls * 30000 + ls * 10000 + ms * 3000 + ss * 800 + i * 100) { break; }
            xss = i;
        }

        var excessEXP = xls * 30000 + ls * 10000 + ms * 3000 + ss * 800 + xss * 100 - requiredEXP;
        console.log(xls + " " + ls + " " + ms + " " + ss + " " + xss);
        console.log(excessEXP);
        return [true, xls, ls, ms, ss, xss, excessEXP];
    }
}