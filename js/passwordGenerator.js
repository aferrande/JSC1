const UCL = "upperCaseLetters"
const LCL = "lowerCaseLetters"
const PN = "passwordNumbers"
const SC = "specialCharacters"
const UIT = "ABCDEFGHIJKLMNOPQRSTUVXWYZ"
const PWIT = "0123456789"
const SCIT = "*()@!%#$&";

const OpDePW = () => {
    let up = getById(UCL);
    let low = getById(LCL);
    let pwNum = getById(PN);
    let speChar = getById(SC);

    up.innerText = UIT;
    low.innerText = UIT.toLowerCase();
    pwNum.innerText = PWIT;
    speChar.innerText = SCIT;
}
OpDePW()

const Tickado = () => {
    let upC = getById("upperCaseLettersCheckbox");
    let lowC = getById("lowerCaseLettersCheckbox");
    let pwNumC = getById("passwordNumbersCheckbox");
    let speCharC = getById("specialCharactersCheckbox");

    let upCtick = upC.checked;
    let lowCtick = lowC.checked
    let pwNumCtick = pwNumC.checked;
    let speCharCtick = speCharC.checked;   

    let Caracteres = [];
    if (upCtick){
        Caracteres.push(UCL);
    }
    if (lowCtick){
        Caracteres.push(LCL);
    }
    if (pwNumCtick){
        Caracteres.push(PN);
    }
    if (speCharCtick){
        Caracteres.push(SC);
    }
    return Caracteres;   
}

const SelChar = (array, inicio="") => {
    let senha = inicio;
    array.forEach(char => {  
        if(char === UCL){
            const LNS = Randomize(UIT);
            senha += LNS;
        }
        else if(char === LCL){
            const LNS = Randomize(UIT.toLowerCase());
            senha += LNS;
        }
        else if(char === PN){
            const LNS = Randomize(PWIT);
            senha += LNS;
        }
        else{
            const LNS = Randomize(SCIT);
            senha += LNS;
        }
    });
    // if(senha.length < 12) return SelChar(array, senha);
    // else return ShuffleString(senha);
    // 
    // 
    let PW = senha.length < 12 ? SelChar(array, senha) : ShuffleString(senha);
    return PW;
}

const copyPassword = () => {
    const senha = getById("passwordBtn").innerText;
    navigator.clipboard.writeText(senha).then(() => {
        getById("passwordBtn").innerText = "Copiado!";
        setTimeout(() => {
        getById("passwordBtn").innerText = senha;
        }, 2000);
        // setTimeout(getById("passwordBtn").innerText = senha, 2000)
    }).catch(err => {
        console.log(err);
    })
}

const generatePassword = () => {
    let Ticks = Tickado();
    let Senha = getById("passwordBtn");
    Senha.innerText = SelChar(Ticks);
}