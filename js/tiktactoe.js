const gDir = `gameDirections`;

let CPUTurno = false;

let tttPont;

const hasX = id => {
    return getById(id).classList.contains("x");
}

const hasO = id => {
    return getById(id).classList.contains("o");
}

const hasXorO = id => {
    return (
        getById(id).classList.contains("x") || getById(id).classList.contains("o")
    );
}

const pontuar = array => {
    for(let i = 0; i < array.length; i++){
        const data = array[i];
        if(data[0] && data[1] && data[2]){
        return data[3];
        }
    }
}

const XnaBoard = () => {
    const combina = [
        [!hasXorO(1), hasX(2), hasX(3), 1], // horizontal [ox!=1, x=2, x=3]
        [hasX(1), !hasXorO(2), hasX(3), 2], // horizontal [x=1, ox!=2, x=3]
        [hasX(1), hasX(2), !hasXorO(3), 3], // horizontal [x=1, x=2, ox!=3]
        
        [!hasXorO(4), hasX(5), hasX(6), 4], // horizontal [ox!=4, x=5, x=6]
        [hasX(4), !hasXorO(5), hasX(6), 5], // horizontal [x=4, ox!=5, x=6]
        [hasX(4), hasX(5), !hasXorO(6), 6], // horizontal [x=4, x=5, ox!=6]
    
        [!hasXorO(7), hasX(8), hasX(9), 7], // horizontal [ox!=7, x=8, x=9]
        [hasX(7), !hasXorO(8), hasX(9), 8], // horizontal [x=7, ox!=8, x=9]
        [hasX(7), hasX(8), !hasXorO(9), 9], // horizontal [x=7, x=8, ox!=9]
    
        [!hasXorO(1), hasX(4), hasX(7), 1], // vertical [ox!=1, x=4, x=7]
        [hasX(1), !hasXorO(4), hasX(7), 4], // vertical [x=1, ox!=4, x=7]
        [hasX(1), hasX(4), !hasXorO(7), 7], // vertical [x=1, x=4, ox!=7]
    
        [!hasXorO(2), hasX(5), hasX(8), 2], // vertical [ox!=2, x=5, x=8]
        [hasX(2), !hasXorO(5), hasX(8), 5], // vertical [x=2, ox!=5, x=8]
        [hasX(2), hasX(5), !hasXorO(8), 8], // vertical [x=2, x=5, ox!=8]
    
        [!hasXorO(3), hasX(6), hasX(9), 3], // vertical [ox!=3, x=6, x=9]
        [hasX(3), !hasXorO(6), hasX(9), 6], // vertical [x=3, ox!=6, x=9]
        [hasX(3), hasX(6), !hasXorO(9), 9], // vertical [x=3, x=6, ox!=9]
    
        [!hasXorO(1), hasX(5), hasX(9), 1], // diagnal [ox!=1, x=5, x=9]
        [hasX(1), !hasXorO(5), hasX(9), 5], // diagnal [x=1, ox!=5, x=9]
        [hasX(1), hasX(5), !hasXorO(9), 9], // diagnal [x=1, x=5, ox!=9]
    
        [!hasXorO(3), hasX(5), hasX(7), 3], // diagnal [ox!=3, x=5, x=7]
        [hasX(3), !hasXorO(5), hasX(7), 5], // diagnal [x=3, ox!=5, x=7]
        [hasX(3), hasX(5), !hasXorO(7), 7], // diagnal [x=3, x=5, ox!=7]
    ];
    return combina;
}

const Xlinha = () =>{
    const combina = [
        [hasX(1), hasX(2), hasX(3)],
        [hasX(4), hasX(5), hasX(6)],
        [hasX(7), hasX(8), hasX(9)],
        [hasX(1), hasX(4), hasX(7)],
        [hasX(2), hasX(5), hasX(8)],
        [hasX(3), hasX(6), hasX(9)],
        [hasX(1), hasX(5), hasX(9)],
        [hasX(3), hasX(5), hasX(7)],
    ];
    for(let x = 0; x < combina.length; x++){
        const data = combina[x];
            if(data[0] && data[1] && data[2]){ 
                return true;
        }
    }
    return false;
}

const OnaBoard = () => {
    const combina = [
        [!hasXorO(1), hasO(2), hasO(3), 1], // horizontal [ox!=1, x=2, x=3]
        [hasO(1), !hasXorO(2), hasO(3), 2], // horizontal [x=1, ox!=2, x=3]
        [hasO(1), hasO(2), !hasXorO(3), 3], // horizontal [x=1, x=2, ox!=3]
        
        [!hasXorO(4), hasO(5), hasO(6), 4], // horizontal [ox!=4, x=5, x=6]
        [hasO(4), !hasXorO(5), hasO(6), 5], // horizontal [x=4, ox!=5, x=6]
        [hasO(4), hasO(5), !hasXorO(6), 6], // horizontal [x=4, x=5, ox!=6]
    
        [!hasXorO(7), hasO(8), hasO(9), 7], // horizontal [ox!=7, x=8, x=9]
        [hasO(7), !hasXorO(8), hasO(9), 8], // horizontal [x=7, ox!=8, x=9]
        [hasO(7), hasO(8), !hasXorO(9), 9], // horizontal [x=7, x=8, ox!=9]
    
        [!hasXorO(1), hasO(4), hasO(7), 1], // vertical [ox!=1, x=4, x=7]
        [hasO(1), !hasXorO(4), hasO(7), 4], // vertical [x=1, ox!=4, x=7]
        [hasO(1), hasO(4), !hasXorO(7), 7], // vertical [x=1, x=4, ox!=7]
    
        [!hasXorO(2), hasO(5), hasO(8), 2], // vertical [ox!=2, x=5, x=8]
        [hasO(2), !hasXorO(5), hasO(8), 5], // vertical [x=2, ox!=5, x=8]
        [hasO(2), hasO(5), !hasXorO(8), 8], // vertical [x=2, x=5, ox!=8]
    
        [!hasXorO(3), hasO(6), hasO(9), 3], // vertical [ox!=3, x=6, x=9]
        [hasO(3), !hasXorO(6), hasO(9), 6], // vertical [x=3, ox!=6, x=9]
        [hasO(3), hasO(6), !hasXorO(9), 9], // vertical [x=3, x=6, ox!=9]
    
        [!hasXorO(1), hasO(5), hasO(9), 1], // diagnal [ox!=1, x=5, x=9]
        [hasO(1), !hasXorO(5), hasO(9), 5], // diagnal [x=1, ox!=5, x=9]
        [hasO(1), hasO(5), !hasXorO(9), 9], // diagnal [x=1, x=5, ox!=9]
    
        [!hasXorO(3), hasO(5), hasO(7), 3], // diagnal [ox!=3, x=5, x=7]
        [hasO(3), !hasXorO(5), hasO(7), 5], // diagnal [x=3, ox!=5, x=7]
        [hasO(3), hasO(5), !hasXorO(7), 7], // diagnal [x=3, x=5, ox!=7]
    ];
    return combina;
}

const BoardCheia = () => {
    const combina = [
        hasXorO(1), hasXorO(2), hasXorO(3),
        hasXorO(4), hasXorO(5), hasXorO(6),
        hasXorO(7), hasXorO(8), hasXorO(9),
    ];
    return !combina.includes(false);
}

const SelJogada = () => {
    const QL = [];
    for(let i = 1; i < 10; i++){
        if(!hasXorO(i)){
             QL.push(i);
        }
    }
    return Randomize(QL)
}

const resetar = () => {
    CPUTurno = false;
    getById("tikTacToeHome").removeAttribute(ND);
    getById("tikTacToeBoard").setAttribute(ND, "");
    const Clear = document.getElementsByClassName("tictactoe");
    for(let i = 0; i < Clear.length; i++){
        Clear[i].classList.remove("x");
        Clear[i].classList.remove("o");
    }
}

const makeCpuSelection = square => {
    CPUTurno = false;
    getById(square).classList.add("o");
}

const PScore = ply => {
    CPUTurno = false;
    if(ply === "ply"){
        tttPont.vitórias++
    } else {
        tttPont.derrotas++
    }
    SetarPont(tttPont);
    setTimeout(() => {
        resetar()
    }, 2000);
}

const JogadaCPU = () => {
    const VCPU = pontuar(OnaBoard());
    const VJog = pontuar(XnaBoard());
    if(VCPU){
        makeCpuSelection(`${VCPU}`);
        PScore("cpu");
    } else if(VJog){
        makeCpuSelection(`${VJog}`);
    } else {
        makeCpuSelection(SelJogada())
    }
}

//`${VJog}`

const selectSquare = id => {
    if(!CPUTurno && !hasXorO(id)){
        getById(id).classList.add("x");
            if(Xlinha()){
                PScore("ply")
            } else if(BoardCheia()){
                setTimeout(() => {
                    resetar()
                }, 2000);;
            }   else {
                CPUTurno = true;
                setTimeout(() => {
                    JogadaCPU();
                }, 1000);}
    }
}

const showDirections = () => {
    getById(`tikTacToeHome`).setAttribute(ND, ``)
    getById(gDir).removeAttribute(ND)
}

const startGame = () => {
    getById(gDir).setAttribute(ND, ``)
    getById(`tikTacToeBoard`).removeAttribute(ND)
}


const SetarPont = ponto => {
    const Pontuação = localStorage.getItem("ticTacToeScore");
    if(!Pontuação){
        localStorage.setItem("ticTacToeScore", JSON.stringify({vitórias: 0, derrotas: 0}));
    }
    if(ponto){
        localStorage.setItem("ticTacToeScore", JSON.stringify(ponto));
    }
    tttPont = JSON.parse(localStorage.getItem("ticTacToeScore"));
    getById("tictactoeScore").innerText = `${tttPont.vitórias}/${tttPont.derrotas}`;
}

SetarPont();