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

    //XLアメの最大数を変えたとき
    const xlCanChange = function (e) {
        console.log(e.target.value);
        var target = e.target.value;
        target = target > 999 ? 999 : target;
        numChange(target, podata.enteredL, podata.enteredM, podata.enteredS, podata.enteredXS, podata.frontLv, podata.rearLv, podata.poName);
        setPodata(state => ({ ...state, enteredXL: target }));
    }

    //Lアメの最大数を変えたとき
    const lCanChange = function (e) {
        console.log(e.target.value);
        var target = e.target.value;
        target = target > 999 ? 999 : target;
        numChange(podata.enteredXL, target, podata.enteredM, podata.enteredS, podata.enteredXS, podata.frontLv, podata.rearLv, podata.poName);
        setPodata(state => ({ ...state, enteredL: target }));
    }

    //Mアメの最大数を変えたとき
    const mCanChange = function (e) {
        console.log(e.target.value);
        var target = e.target.value;
        target = target > 999 ? 999 : target;
        numChange(podata.enteredXL, podata.enteredL, target, podata.enteredS, podata.enteredXS, podata.frontLv, podata.rearLv, podata.poName);
        setPodata(state => ({ ...state, enteredM: target }));
    }

    //Sアメの最大数を変えたとき
    const sCanChange = function (e) {
        console.log(e.target.value);
        var target = e.target.value;
        target = target > 999 ? 999 : target;
        numChange(podata.enteredXL, podata.enteredL, podata.enteredM, target, podata.enteredXS, podata.frontLv, podata.rearLv, podata.poName);
        setPodata(state => ({ ...state, enteredS: target }));
    }

    //XSアメの最大数を変えたとき
    const xsCanChange = function (e) {
        console.log(e.target.value);
        var target = e.target.value;
        target = target > 999 ? 999 : target;
        numChange(podata.enteredXL, podata.enteredL, podata.enteredM, podata.enteredS, target, podata.frontLv, podata.rearLv, podata.poName);
        setPodata(state => ({ ...state, enteredXS: target }));
    }

    //現在のレベルを変えたとき
    const frontLvChange = function (e) {
        console.log(e.target.value);
        var target = e.target.value;
        target = target > 100 ? 100 : target;
        numChange(podata.enteredXL, podata.enteredL, podata.enteredM, podata.enteredS, podata.enteredXS, target, podata.rearLv, podata.poName);
        setPodata(state => ({ ...state, frontLv: target, enterFrontLv: target }));
    }

    //目標レベルを変えたとき
    const rearLvChange = function (e) {
        console.log(e.target.value);
        var target = e.target.value;
        target = target > 100 ? 100 : target;
        numChange(podata.enteredXL, podata.enteredL, podata.enteredM, podata.enteredS, podata.enteredXS, podata.frontLv, target, podata.poName);
        setPodata(state => ({ ...state, rearLv: target, enterRearLv: target }));
    }

    //ポケモンを変えたとき
    const poNameChange = function (e) {
        console.log(e.target.value);
        var target = e.target.value;
        //入力した名前がポケモンリストにあるかチェック
        if (POKEMON_NAME.includes(target)) {
            setPodata(state => ({ ...state, poName: target, enteredPoName: target }));
        } else {
            setPodata(state => ({ ...state, enteredPoName: target }));
            return;
        }
        numChange(podata.enteredXL, podata.enteredL, podata.enteredM, podata.enteredS, podata.enteredXS, podata.frontLv, podata.rearLv, target);
    }

    //共通部分 必要なアメの数を調べセットする
    const numChange = function (tmpXL, tmpL, tmpM, tmpS, tmpXS, tmpFront, tmpRear, tmpName) {
        //入力したものが0以上の整数か判定し、そうでない場合は終了
        if (![tmpXL, tmpL, tmpM, tmpS, tmpXS, tmpFront, tmpRear].every(isNumOverZero)) {
            console.log(podata);
            return;
        }
        var requiredEXP = POKEMON_EXPTYPE[tmpName][tmpRear] - POKEMON_EXPTYPE[tmpName][tmpFront];
        console.log(requiredEXP); //算出した必要な経験値
        //必要な経験値が0未満の場合はエラー
        if (requiredEXP < 0) {
            setPodata(state => ({ ...state, result: "error", requierdXL: 0, requierdL: 0, requierdM: 0, requierdS: 0, requierdXS: 0, excessEXP: 0 }));
            console.log(podata);
            return;
        }
        var tmp = calcRequirdCandy(requiredEXP, tmpXL, tmpL, tmpM, tmpS, tmpXS);
        tmp[0] = tmp[0] ? "true" : "false"; //trueとfalseを文字にして扱いやすくする
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