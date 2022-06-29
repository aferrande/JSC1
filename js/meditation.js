
MD = "meditationDirections"

const breatheIn = () =>{
    getById("breatheIn").classList.remove(DN);
    getById("breatheOut").classList.add(DN);
}


const breatheOut = () =>{
    getById("breatheOut").classList.remove(DN);
    getById("breatheIn").classList.add(DN);
}

const RespLoop = () =>{
    breatheIn();
    setTimeout(() => {
        breatheOut();
    }, 7000);
}

const reset = () => {
    getById("meditationStart").classList.remove(DN);
    getById("breatheIn").classList.add(DN);
    getById("breatheOut").classList.add(DN);
}

const Medit = () =>{
    let delay = 0;
    for (let i = 0; i < 20; i++){
        setTimeout(() => {
            RespLoop();
        }, delay); 
        delay += 14000
    }
    setTimeout(() => {
        reset();
    }, delay);
}


const meditationStartBtn = () =>{
    getById(MD).classList.remove(DN);
    getById("meditationStart").classList.add(DN);
}

const meditationStart = () => {
    getById(MD).classList.add(DN);
    Medit()
}




