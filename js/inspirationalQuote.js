const Dia = () => {
    let getDia = new Date();
    let dia = getDia.getDate();
    let AZ = (dia < 10) ?  "0" + dia : dia
    return getById("dailyMemoDateNumber").innerText = AZ}
Dia()

const DSemana = () => {
    let getDS = new Date().toLocaleString(
        'pt-BR', {month: 'short', 
        weekday: 'short'},
      );
    console.log(getDS)
    return getById("dailyMemoDay").innerText = getDS;
}
DSemana()

const InspQuote = () => {
    fetch("https://type.fit/api/quotes").then(data => {
    data.json().then(data => {
        getById("dailyInspirationalQuote").innerText = Randomize(data).text;})
    }).catch(err => console.log(err));
}
InspQuote()

// https://type.fit/api/quotes


/* const setQuoteDate = () => {
    const dailyMemoDay = getById("dailyMemoDay");
    const dailyMemoDateNumber = getById("dailyMemoDateNumber");
    const date = new Date();
    const dateString = date.toDateString();
    const dateArray = dateString.split(" ");
    dailyMemoDay.innerText = `${dateArray[0]} ${dateArray[1]}`
    dailyMemoDateNumber.innerText = dateArray[2]
}

===================================================================================****************************

/*https://crudcrud.com/api/98cf7a11bf7a4a319ea0d20dc27adce1/valorant

fetch(url, data);*/

// const chaveAPI = "98cf7a11bf7a4a319ea0d20dc27adce1";
// const resource = "pessoas";
// const id = "62a26ab06f047803e8ae858b"
// const reqURL = `https://crudcrud.com/api/${chaveAPI}/${resource}`

// const body = {
//     name: "Klebinho",
//     type: "klebederico"
// }

// const data = {
//     method: "GET",
//     headers: {
//         "Accept": "application/json",
//         "Content-Type": "application/json"
//     },
//     //body: JSON.stringify(body)
// }

// fetch(reqURL, data).then(d => {
//     d.json().then(data => {
//         debugger; 
//         console.log(data);
//     })
// }).catch(err => console.log(err));

