const gDir = `gameDirections`;

let CPUTurno = false;

let tttPont;

const TemX = id => {
    return getById(id).classList.contains("x");
}

const TemO = id => {
    return getById(id).classList.contains("o");
}

const TemXouO = id => {
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
        [!TemXouO(1), TemX(2), TemX(3), 1], 
        [TemX(1), !TemXouO(2), TemX(3), 2], 
        [TemX(1), TemX(2), !TemXouO(3), 3],
        
        [!TemXouO(4), TemX(5), TemX(6), 4], 
        [TemX(4), !TemXouO(5), TemX(6), 5], 
        [TemX(4), TemX(5), !TemXouO(6), 6], 
    
        [!TemXouO(7), TemX(8), TemX(9), 7], 
        [TemX(7), !TemXouO(8), TemX(9), 8], 
        [TemX(7), TemX(8), !TemXouO(9), 9], 
    
        [!TemXouO(1), TemX(4), TemX(7), 1], 
        [TemX(1), !TemXouO(4), TemX(7), 4], 
        [TemX(1), TemX(4), !TemXouO(7), 7], 
    
        [!TemXouO(2), TemX(5), TemX(8), 2], 
        [TemX(2), !TemXouO(5), TemX(8), 5], 
        [TemX(2), TemX(5), !TemXouO(8), 8], 
    
        [!TemXouO(3), TemX(6), TemX(9), 3], 
        [TemX(3), !TemXouO(6), TemX(9), 6], 
        [TemX(3), TemX(6), !TemXouO(9), 9], 
    
        [!TemXouO(1), TemX(5), TemX(9), 1], 
        [TemX(1), !TemXouO(5), TemX(9), 5], 
        [TemX(1), TemX(5), !TemXouO(9), 9], 
    
        [!TemXouO(3), TemX(5), TemX(7), 3], 
        [TemX(3), !TemXouO(5), TemX(7), 5],
        [TemX(3), TemX(5), !TemXouO(7), 7],
    ];
    return combina;
}

const Xlinha = () =>{
    const combina = [
        [TemX(1), TemX(2), TemX(3)],
        [TemX(4), TemX(5), TemX(6)],
        [TemX(7), TemX(8), TemX(9)],
        [TemX(1), TemX(4), TemX(7)],
        [TemX(2), TemX(5), TemX(8)],
        [TemX(3), TemX(6), TemX(9)],
        [TemX(1), TemX(5), TemX(9)],
        [TemX(3), TemX(5), TemX(7)],
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
        [!TemXouO(1), TemO(2), TemO(3), 1], 
        [TemO(1), !TemXouO(2), TemO(3), 2], 
        [TemO(1), TemO(2), !TemXouO(3), 3], 
        
        [!TemXouO(4), TemO(5), TemO(6), 4], 
        [TemO(4), !TemXouO(5), TemO(6), 5], 
        [TemO(4), TemO(5), !TemXouO(6), 6], 
    
        [!TemXouO(7), TemO(8), TemO(9), 7], 
        [TemO(7), !TemXouO(8), TemO(9), 8], 
        [TemO(7), TemO(8), !TemXouO(9), 9], 
    
        [!TemXouO(1), TemO(4), TemO(7), 1], 
        [TemO(1), !TemXouO(4), TemO(7), 4], 
        [TemO(1), TemO(4), !TemXouO(7), 7], 
    
        [!TemXouO(2), TemO(5), TemO(8), 2], 
        [TemO(2), !TemXouO(5), TemO(8), 5],
        [TemO(2), TemO(5), !TemXouO(8), 8], 
    
        [!TemXouO(3), TemO(6), TemO(9), 3], 
        [TemO(3), !TemXouO(6), TemO(9), 6], 
        [TemO(3), TemO(6), !TemXouO(9), 9], 
    
        [!TemXouO(1), TemO(5), TemO(9), 1], 
        [TemO(1), !TemXouO(5), TemO(9), 5], 
        [TemO(1), TemO(5), !TemXouO(9), 9], 
    
        [!TemXouO(3), TemO(5), TemO(7), 3], 
        [TemO(3), !TemXouO(5), TemO(7), 5], 
        [TemO(3), TemO(5), !TemXouO(7), 7], 
    ];
    return combina;
}

const BoardCheia = () => {
    const combina = [
        TemXouO(1), TemXouO(2), TemXouO(3),
        TemXouO(4), TemXouO(5), TemXouO(6),
        TemXouO(7), TemXouO(8), TemXouO(9),
    ];
    return !combina.includes(false);
}

const SelJogada = () => {
    const QL = [];
    for(let i = 1; i < 10; i++){
        if(!TemXouO(i)){
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


const selectSquare = id => {
    if(!CPUTurno && !TemXouO(id)){
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