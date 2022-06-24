const Dia = () => {
    let getDia = new Date();
    let dia = getDia.getDate();
    let AZ = (dia < 10) ?  "0" + dia : dia;
    return getById("dailyMemoDateNumber").innerText = AZ;
}
Dia();

const DSemana = () => {
    let getDS = new Date().toLocaleString(
        'pt-BR', {month: 'short', 
        weekday: 'short'},
      );
    return getById("dailyMemoDay").innerText = getDS;
}
DSemana()

const InspQuote = () => {
    fetch("https://type.fit/api/quotes").then(resp => 
    resp.json()).then(data => {
        getById("dailyInspirationalQuote").innerText = Randomize(data).text;})
    .catch(err => console.log(err));
}
InspQuote()

// https://type.fit/api/quotes


//  const setQuoteDate = () => {
//     const dailyMemoDay = getById("dailyMemoDay");
//     const dailyMemoDateNumber = getById("dailyMemoDateNumber");
//     const date = new Date();
//     const dateString = date.toDateString();
//     const dateArray = dateString.split(" ");
//     dailyMemoDay.innerText = `${dateArray[0]} ${dateArray[1]}`
//     dailyMemoDateNumber.innerText = dateArray[2]
// }

// ===================================================================================****************************

// https://crudcrud.com/api/c539e6e7a78d40d7b1dd477486dbe015

// fetch(url, data);

// const chaveAPI = "5bc11a92005540d08aae0b3403ef5316";
// const resource = "valorant";
// const id = "62a433d96f047803e8ae88ad"
// const reqURL = `https://crudcrud.com/api/${chaveAPI}/${resource}`

// const body = {
//     name: "Valorant",
//     type: "FPS",
//     region: "BR"
// }

// const datatest = {
//     method: "GET",
//     headers: {
//         "Accept": "application/json",
//         "Content-Type": "application/json"
//     },
//     // body: JSON.stringify(body)
// }

// fetch(reqURL, datatest).then(d => {
//     d.json().then(datatest => { 
//         console.log(datatest);
//     })
// }).catch(err => console.log(err));

