function App() {
    const [podata, setPodata] = React.useState({
        frontLv: 1,
        rearLv: 50,
        enterFrontLv: 1,
        enterRearLv: 50,

        enteredXL: 10,
        enteredL: 10,
        enteredM: 10,
        enteredS: 10,
        enteredXS: 10,

        requierdXL: 0,
        requierdL: 8,
        requierdM: 10,
        requierdS: 8,
        requierdXS: 10,

        poName: "ニャオハ",
        enteredPoName: "ニャオハ",

        excessEXP: 40,

        result: "true"
    });

    const xlCanChange = function (e) {
        console.log(e.target.value);
        var target = e.target.value;
        target = target > 999 ? 999 : target;
        if (isNaN(target) || isNaN(podata.enteredL) || isNaN(podata.enteredM) || isNaN(podata.enteredS) || isNaN(podata.enteredXS) || isNaN(podata.enterFrontLv) || isNaN(podata.enterRearLv) || target < 0) {
            setPodata(state => ({ ...state, enteredXL: target }));
            console.log(podata);
            return;
        }
        var requiredEXP = POKEMON_EXPTYPE[podata.poName][podata.rearLv] - POKEMON_EXPTYPE[podata.poName][podata.frontLv];
        console.log(requiredEXP);
        if (requiredEXP < 0) {
            setPodata(state => ({ ...state, enteredXL: target, result: "error", requierdXL: 0, requierdL: 0, requierdM: 0, requierdS: 0, requierdXS: 0, excessEXP: 0 }));
            console.log(podata);
            return;
        }
        var tmp = calcRequirdCandy(requiredEXP, target, podata.enteredL, podata.enteredM, podata.enteredS, podata.enteredXS);
        tmp[0] = tmp[0] ? "true" : "false";
        setPodata(state => ({ ...state, enteredXL: target, result: tmp[0], requierdXL: tmp[1], requierdL: tmp[2], requierdM: tmp[3], requierdS: tmp[4], requierdXS: tmp[5], excessEXP: tmp[6] }));
        console.log(podata);
    }

    const lCanChange = function (e) {
        console.log(e.target.value);
        var target = e.target.value;
        target = target > 999 ? 999 : target;
        if (isNaN(target) || isNaN(podata.enteredXL) || isNaN(podata.enteredM) || isNaN(podata.enteredS) || isNaN(podata.enteredXS) || isNaN(podata.enterFrontLv) || isNaN(podata.enterRearLv) || target < 0) {
            setPodata(state => ({ ...state, enteredL: target }));
            console.log(podata);
            return;
        }
        var requiredEXP = POKEMON_EXPTYPE[podata.poName][podata.rearLv] - POKEMON_EXPTYPE[podata.poName][podata.frontLv];
        console.log(requiredEXP);
        if (requiredEXP < 0) {
            setPodata(state => ({ ...state, enteredL: target, result: "error", requierdXL: 0, requierdL: 0, requierdM: 0, requierdS: 0, requierdXS: 0, excessEXP: 0 }));
            console.log(podata);
            return;
        }
        var tmp = calcRequirdCandy(requiredEXP, podata.enteredXL, target, podata.enteredM, podata.enteredS, podata.enteredXS);
        tmp[0] = tmp[0] ? "true" : "false";
        setPodata(state => ({ ...state, enteredL: target, result: tmp[0], requierdXL: tmp[1], requierdL: tmp[2], requierdM: tmp[3], requierdS: tmp[4], requierdXS: tmp[5], excessEXP: tmp[6] }));
        console.log(podata);
    }

    const mCanChange = function (e) {
        console.log(e.target.value);
        var target = e.target.value;
        target = target > 999 ? 999 : target;
        if (isNaN(target) || isNaN(podata.enteredXL) || isNaN(podata.enteredL) || isNaN(podata.enteredS) || isNaN(podata.enteredXS) || isNaN(podata.enterFrontLv) || isNaN(podata.enterRearLv) || target < 0) {
            setPodata(state => ({ ...state, enteredM: target }));
            console.log(podata);
            return;
        }
        var requiredEXP = POKEMON_EXPTYPE[podata.poName][podata.rearLv] - POKEMON_EXPTYPE[podata.poName][podata.frontLv];
        console.log(requiredEXP);
        if (requiredEXP < 0) {
            setPodata(state => ({ ...state, enteredM: target, result: "error", requierdXL: 0, requierdL: 0, requierdM: 0, requierdS: 0, requierdXS: 0, excessEXP: 0 }));
            console.log(podata);
            return;
        }
        var tmp = calcRequirdCandy(requiredEXP, podata.enteredXL, podata.enteredL, target, podata.enteredS, podata.enteredXS);
        tmp[0] = tmp[0] ? "true" : "false";
        setPodata(state => ({ ...state, enteredM: target, result: tmp[0], requierdXL: tmp[1], requierdL: tmp[2], requierdM: tmp[3], requierdS: tmp[4], requierdXS: tmp[5], excessEXP: tmp[6] }));
        console.log(podata);
    }

    const sCanChange = function (e) {
        console.log(e.target.value);
        var target = e.target.value;
        target = target > 999 ? 999 : target;
        if (isNaN(target) || isNaN(podata.enteredXL) || isNaN(podata.enteredL) || isNaN(podata.enteredM) || isNaN(podata.enteredXS) || isNaN(podata.enterFrontLv) || isNaN(podata.enterRearLv) || target < 0) {
            setPodata(state => ({ ...state, enteredS: target }));
            console.log(podata);
            return;
        }
        var requiredEXP = POKEMON_EXPTYPE[podata.poName][podata.rearLv] - POKEMON_EXPTYPE[podata.poName][podata.frontLv];
        console.log(requiredEXP);
        if (requiredEXP < 0) {
            setPodata(state => ({ ...state, enteredS: target, result: "error", requierdXL: 0, requierdL: 0, requierdM: 0, requierdS: 0, requierdXS: 0, excessEXP: 0 }));
            console.log(podata);
            return;
        }
        var tmp = calcRequirdCandy(requiredEXP, podata.enteredXL, podata.enteredL, podata.enteredM, target, podata.enteredXS);
        tmp[0] = tmp[0] ? "true" : "false";
        setPodata(state => ({ ...state, enteredS: target, result: tmp[0], requierdXL: tmp[1], requierdL: tmp[2], requierdM: tmp[3], requierdS: tmp[4], requierdXS: tmp[5], excessEXP: tmp[6] }));
        console.log(podata);
    }

    const xsCanChange = function (e) {
        console.log(e.target.value);
        var target = e.target.value;
        target = target > 999 ? 999 : target;
        if (isNaN(target) || isNaN(podata.enteredXL) || isNaN(podata.enteredL) || isNaN(podata.enteredM) || isNaN(podata.enteredS) || isNaN(podata.enterFrontLv) || isNaN(podata.enterRearLv) || target < 0) {
            setPodata(state => ({ ...state, enteredXS: target }));
            console.log(podata);
            return;
        }
        var requiredEXP = POKEMON_EXPTYPE[podata.poName][podata.rearLv] - POKEMON_EXPTYPE[podata.poName][podata.frontLv];
        console.log(requiredEXP);
        if (requiredEXP < 0) {
            setPodata(state => ({ ...state, enteredXS: target, result: "error", requierdXL: 0, requierdL: 0, requierdM: 0, requierdS: 0, requierdXS: 0, excessEXP: 0 }));
            console.log(podata);
            return;
        }
        var tmp = calcRequirdCandy(requiredEXP, podata.enteredXL, podata.enteredL, podata.enteredM, podata.enteredS, podata.enteredXS);
        tmp[0] = tmp[0] ? "true" : "false";
        setPodata(state => ({ ...state, enteredXS: target, result: tmp[0], requierdXL: tmp[1], requierdL: tmp[2], requierdM: tmp[3], requierdS: tmp[4], requierdXS: tmp[5], excessEXP: tmp[6] }));
        console.log(podata);
    }

    const frontLvChange = function (e) {
        console.log(e.target.value);
        var target = e.target.value;
        target = target > 100 ? 100 : target;
        if (isNaN(target) || isNaN(podata.enteredXL) || isNaN(podata.enteredL) || isNaN(podata.enteredM) || isNaN(podata.enteredS) || isNaN(podata.enteredXS) || isNaN(podata.enterRearLv) || target < 0) {
            setPodata(state => ({ ...state, enterFrontLv: target }));
            console.log(podata);
            return;
        }
        var requiredEXP = POKEMON_EXPTYPE[podata.poName][podata.rearLv] - POKEMON_EXPTYPE[podata.poName][target];
        console.log(requiredEXP);
        if (requiredEXP < 0) {
            console.log(target);
            setPodata(state => ({ ...state, frontLv: target, enterFrontLv: target, result: "error", requierdXL: 0, requierdL: 0, requierdM: 0, requierdS: 0, requierdXS: 0, excessEXP: 0 }));
            console.log(podata);
            return;
        }
        var tmp = calcRequirdCandy(requiredEXP, podata.enteredXL, podata.enteredL, podata.enteredM, podata.enteredS, podata.enteredXS);
        tmp[0] = tmp[0] ? "true" : "false";
        setPodata(state => ({ ...state, frontLv: target, enterFrontLv: target, result: tmp[0], requierdXL: tmp[1], requierdL: tmp[2], requierdM: tmp[3], requierdS: tmp[4], requierdXS: tmp[5], excessEXP: tmp[6] }));
        console.log(podata);
    }

    const rearLvChange = function (e) {
        console.log(e.target.value);
        var target = e.target.value;
        target = target > 100 ? 100 : target;
        if (isNaN(target) || isNaN(podata.enteredXL) || isNaN(podata.enteredL) || isNaN(podata.enteredM) || isNaN(podata.enteredS) || isNaN(podata.enteredXS) || isNaN(podata.enterFrontLv) || target < 0) {
            setPodata(state => ({ ...state, enterRearLv: target }));
            console.log(podata);
            return;
        }
        var requiredEXP = POKEMON_EXPTYPE[podata.poName][target] - POKEMON_EXPTYPE[podata.poName][podata.frontLv];
        console.log(requiredEXP);
        if (requiredEXP < 0) {
            setPodata(state => ({ ...state, rearLv: target, enterRearLv: target, result: "error", requierdXL: 0, requierdL: 0, requierdM: 0, requierdS: 0, requierdXS: 0, excessEXP: 0 }));
            console.log(podata);
            return;
        }
        var tmp = calcRequirdCandy(requiredEXP, podata.enteredXL, podata.enteredL, podata.enteredM, podata.enteredS, podata.enteredXS);
        tmp[0] = tmp[0] ? "true" : "false";
        console.log(tmp[6]);
        setPodata(state => ({ ...state, rearLv: target, enterRearLv: target, result: tmp[0], requierdXL: tmp[1], requierdL: tmp[2], requierdM: tmp[3], requierdS: tmp[4], requierdXS: tmp[5], excessEXP: tmp[6] }));
        console.log(podata);
    }

    const poNameChange = function (e) {
        console.log(e.target.value);
        var target = e.target.value;
        if (POKEMON_NAME.includes(target)) {
            setPodata(state => ({ ...state, poName: target, enteredPoName: target }));
            console.log("true");
            console.log(podata);
        } else {
            setPodata(state => ({ ...state, enteredPoName: target }));
            console.log("false");
            console.log(podata);
            return;
        }
        if (isNaN(podata.enteredXL) || isNaN(podata.enteredL) || isNaN(podata.enteredM) || isNaN(podata.enteredS) || isNaN(podata.enteredXS) || isNaN(podata.enterFrontLv) || isNaN(podata.enterRearLv)) {
            setPodata(state => ({ ...state, enterRearLv: target }));
            console.log(podata);
            return;
        }
        var requiredEXP = POKEMON_EXPTYPE[target][podata.rearLv] - POKEMON_EXPTYPE[target][podata.frontLv];
        console.log(requiredEXP);
        if (requiredEXP < 0) {
            setPodata(state => ({ ...state, result: "error", requierdXL: 0, requierdL: 0, requierdM: 0, requierdS: 0, requierdXS: 0, excessEXP: 0 }));
            console.log(podata);
            return;
        }
        var tmp = calcRequirdCandy(requiredEXP, podata.enteredXL, podata.enteredL, podata.enteredM, podata.enteredS, podata.enteredXS);
        tmp[0] = tmp[0] ? "true" : "false";
        setPodata(state => ({ ...state, result: tmp[0], requierdXL: tmp[1], requierdL: tmp[2], requierdM: tmp[3], requierdS: tmp[4], requierdXS: tmp[5], excessEXP: tmp[6] }));
        console.log(podata);
    }

    function Result() {
        console.log(podata.result);
        if (podata.result == "true") {
            return (
                <div className="col-6 result rounded bg-light">
                    <div>必要なアメ</div>
                    <table>
                        <tr><th>XL</th><th>✕</th><th>{podata.requierdXL}</th></tr>
                        <tr><th>L</th><th>✕</th><th>{podata.requierdL}</th></tr>
                        <tr><th>M</th><th>✕</th><th>{podata.requierdM}</th></tr>
                        <tr><th>S</th><th>✕</th><th>{podata.requierdS}</th></tr>
                        <tr><th>XS</th><th>✕</th><th>{podata.requierdXS}</th></tr>
                        <tr><th>あまり</th><th>：</th><th>{podata.excessEXP}</th></tr>
                    </table>
                </div>
            )
        } else if (podata.result == "error") {
            return (
                <div className="col-6 result rounded bg-light">
                    <div>エラーです！</div>
                    <div>レベルを</div>
                    <div>見直してください</div>
                </div>
            )
        }
        return (
            <div className="col-6 result rounded bg-light">
                <div>アメが足りません</div>
                <div>必要な残り経験値</div>
                <div>{podata.excessEXP}</div>
            </div>
        )
    }

    function AutoComplete() {
        const list = [];
        for (const name of POKEMON_NAME) {
            list.push(<option value={name}></option>);
        }
        return (
            <datalist id="poNameLlist">
                {list}
            </datalist>
        )
    }

    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-6 enter rounded bg-light">
                    <table>
                    <input value={podata.enteredPoName} onChange={poNameChange} autocomplete="on" list="poNameLlist" className="inputName" /><br></br>
                    {AutoComplete()}
                    <tr><th>現在のレベル</th><input value={podata.enterFrontLv} onChange={frontLvChange} className="inputNumber" /></tr>
                    <tr><th>目標のレベル</th><input value={podata.enterRearLv} onChange={rearLvChange} className="inputNumber" /></tr>
                    <tr><th>XL(30000✕)</th><input value={podata.enteredXL} onChange={xlCanChange} className="inputNumber" /></tr>
                    <tr><th>L(10000✕)</th><input value={podata.enteredL} onChange={lCanChange} className="inputNumber" /></tr>
                    <tr><th>M(3000✕)</th><input value={podata.enteredM} onChange={mCanChange} className="inputNumber" /></tr>
                    <tr><th>S(800✕)</th><input value={podata.enteredS} onChange={sCanChange} className="inputNumber" /></tr>
                    <tr><th>XS(100✕)</th><input value={podata.enteredXS} onChange={xsCanChange} className="inputNumber" /></tr>
                    </table>
                </div>
                {Result()}
            </div>
        </div>
    );
}
const target = document.querySelector('#app');
ReactDOM.render(<App />, target);