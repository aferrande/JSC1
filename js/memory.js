const mgD = "mgDirections"
const mgHS = "mgHighScore"

let mgBoxes = [
"mgTopLeft",
"mgTopRight",
"mgBottomLeft",
"mgBottomRight",
]

let click = 0;

let Blinks = [];

let TurnoCPU = true;

let showMGDirections = () => {
    getById(mgD).removeAttribute(ND);
    getById("mgHomeScreen").setAttribute(ND, "");

}

let Rodada = mov => {
    getById(mov).classList.add("cpuClick");
    setTimeout(() => {
        getById(mov).classList.remove("cpuClick");   
    }, 500);
}

let mgBoxSel = () => {
    TurnoCPU = true;

    const Sel = RandomizeArray2(mgBoxes);
    Blinks.push(Sel);
    let delay = 0;

    Blinks.forEach(quadrado => {  
        setTimeout(() => {  
            Rodada(quadrado);
        }, delay);
        delay += 1000;
})

    setTimeout(() => {
        TurnoCPU = false;
    }, delay - 1000); 

}

let memoryGameStart = () => {
    getById(mgD).setAttribute(ND, "");
    getById("mgBoard").removeAttribute(ND);
    setTimeout(() => {
        mgBoxSel();
    }, 1000);
}

let addHighlight = (id) => {
    getById(id).classList.add("memoryHighlight");
}

let removeHighlight = (id) => {
    getById(id).classList.remove("memoryHighlight");
}

let HS = (pontos) => {
    let hs = localStorage.getItem(mgHS)
    if (pontos) localStorage.setItem(mgHS, pontos);
     else if (!hs) localStorage.setItem(mgHS, 0);
    getById(mgHS).innerText = localStorage.getItem(mgHS);
}
HS();

let TelaGameOver = () => {
    getById("mgBoard").setAttribute(ND, "");
    // getById(mgD).setAttribute(ND, "");
    getById("mgHomeScreen").removeAttribute(ND);
    click = 0;
    Blinks = [];
    TurnoCPU = true;
    getById("mgCount").innerText = 0;
}

let mgCount = () => {
    let Valor = parseInt(getById("mgCount").innerText);
    getById("mgCount").innerText = Valor + 1;
    const hs = localStorage.getItem(mgHS);
    if(hs < (Valor + 1)) HS(Valor + 1);
}

let makeMemoryGuess = id => {
    if(TurnoCPU) return;
    if (id === Blinks[click]){ 
        click++;
        if (click === Blinks.length){ 
            click = 0; 
            setTimeout(() => {
                mgBoxSel();
            }, 1000);
            mgCount();
        } 
    } else { 
        TelaGameOver();
}
}