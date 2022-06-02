const hasValue = (cost, tip, np) => {
    let c = cost.value.length > 0;
    let t = tip.value.length > 0;
    let n = np.value.length > 0;
    return c && t && n;
}


const SplitBill = (cost, tip, np) => {
    let c = parseFloat(cost.value);
    let t = parseFloat(tip.value);
    let n = parseInt(np.value);
    let total = (c + (c*t/100)) / n;
    let pay = getById("pay");
    pay.innerText = "R$" + total.toFixed(2);

}

const calculateTip = () => {
    const cost = getById("cost");
    const tip = getById("tip");
    const np = getById("numberOfPeople");

    let hasVal = hasValue(cost, tip, np);
    let X = hasVal ? SplitBill(cost, tip, np) : "";

    // if(hasVal){
    //     SplitBill(cost, tip, np)
    // }
}


// const hasValue = (c, t, n) => {
//     const hascv = c.value.length > 0;
//     const hastv = t.value.length > 0;
//     const hasnv = n.value.length > 0;
//     return hascv && hastv && hasnv;
// }

// const SplitPpl = (c, t, n) => {
//     const cc = parseFloat(c.value);
//     const tt = parseFloat(t.value)/100;
//     const np = parseInt(n.value);
//     const total = (cc + (cc * tt))/np;
//     const split = getById("pay");
//     split.innerText = "R$" + total.toFixed(2);
// }

// const calculateTip = () => {
//     const c = getById("cost");
//     const t = getById("tip");
//     const n = getById("numberOfPeople");

//     const hasvalue = hasValue(c, t, n);
//     if(hasvalue){
//         SplitPpl(c, t, n);
//     }
// }

// numberOfPeople