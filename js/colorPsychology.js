let colors = () => {
    let color = getById("colorPsychology");
    for(let text in colorMap){
    let div = document.createElement("div");
    div.classList.add("btn");
    div.classList.add(colorMap[text]);
    div.innerText = text;
    color.appendChild(div);
    }
}
colors()







// const colorPsychology = () => {
//     for (let text in colorMap) {
//         let color = getById("colorPsychology");
//         const div = document.createElement("div");
//         div.classList.add("btn");
//         div.classList.add(colorMap[text]);
//         div.innerText = text;
//         color.appendChild(div);
//     }
// }
// colorPsychology()