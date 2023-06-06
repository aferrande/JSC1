// const gettime = () => {
//     let hr = Date()
//     console.log(hr)
// }
// setInterval(gettime, 1000);


let Hora = () => {
    let horas = new Date();
    let tempo = horas.getHours();
    return tempo;
}

let Minuto = () => {
    let minutos = new Date();
    let tempo = minutos.getMinutes();
    return tempo;
}

let Segundos = () => {
    let segundos = new Date();
    let tempo = segundos.getSeconds();
    return tempo;
}

let AddZero = (num) => {
    // if(num < 10) return "0" + num
    // else return num;

    let AZ = (num < 10) ?  "0" + num :  num
    return AZ
}



let SetHtml = (hora, min, seg) => {
    let hr = getById("hr");
    let mn = getById("min");
    let sg = getById("sec");
    hr.innerText = AddZero(hora);
    mn.innerText = AddZero(min);
    sg.innerText = AddZero(seg);
}

let SetDate = () => {
   let h = Hora();
   let m =  Minuto();
   let s = Segundos();
     SetHtml(h, m, s)
}

setInterval(SetDate, 1000);


// const Hora = () => {
//     let tempo = new Date();
//     let hr = tempo.getHours();
//     return hr
// }

// const Minuto = () => {
//     let tempo = new Date();
//     let mn = tempo.getMinutes();
//     return mn
// }

// const Segundo = () => {
//     let tempo = new Date();
//     let sg = tempo.getSeconds();
//     return sg
// }

// const AddZero = (num) => {
//     if (num < 10){
//         return "0" + num}
//     return num
// }

// const setHTML = (hora, minuto, segundo) => {
//     let hr = getById("hr");
//     let mn = getById("min");
//     let sg = getById("sec");
//     hr.innerText = AddZero(hora);
//     mn.innerText = AddZero(minuto);
//     sg.innerText = AddZero(segundo);
// }

// const setDate = () => {
//     const hr = Hora();
//     const mn = Minuto();
//     const sg = Segundo();
//     setHTML(hr, mn, sg)
// }

// setInterval(() => {
//     setDate();
// }, 1000);

// // setInterval(setDate, 1000);