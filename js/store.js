let APIkey;
const select = "Select a Product";
const setprice = "Set Price of Product";
const selProd = "selectedProduct";
const SPC = "setPriceContainer";
const iSel = "itemSelection";
let update = false;
let updateId;
let updating;

const Prod2Shelf = products => {
    getById("pricedItems").innerHTML = "";
    products.forEach(data => {
        const div = getParentElement();
        const productDiv = getProductElement(data);
        const update = getUpdateBtn(data);
        const deleteBtn = getDeleteBtn(data);
    
        div.appendChild(productDiv);
        div.appendChild(update);
        div.appendChild(deleteBtn);
    
        getById("pricedItems").appendChild(div);
    });
}

const getParentElement = () => {
    const div = document.createElement("div");
    div.classList.add("quarterWidth", "flexCol");
    return div;
}

const getProductElement = data => {
    const productDiv = document.createElement("div");
    productDiv.classList.add("flex", "fullSize");
    const price = document.createElement("span");
    price.classList.add("redText", "priceText");
    price.innerText = `$${parseFloat(data.custo).toFixed(2)}`;
    const product = document.createElement("div");
    product.classList.add("shelfedProduct");
    product.style.backgroundImage = `url(${data.imagem})`;
    productDiv.appendChild(price);
    productDiv.appendChild(product);
    return productDiv;
} 

const updateProduct = id => {
    hide(iSel);
    productHelpText(setprice);
    show(SPC);
    getById(selProd).style.backgroundImage = `url(${id.imagem})`;
    update = true;
    updateId = id._id;
    updating = id;
}

const getUpdateBtn = product => {
    const update = document.createElement("div");
    update.classList.add("btn");
    update.setAttribute("data-price", product.custo);
    update.innerText = "Update";
    update.onclick = () => updateProduct(product);
    return update;
}

const deleteItem = (id) => {
    show(iSel)
    productHelpText(select)
    hide(SPC)
    fetch(getURL(id),  {
        method: 'DELETE'
}).then(data => loadStore())
.catch(err => console.log(err));
}

const getDeleteBtn = product => {
    const deleteBtn = document.createElement("div");
    deleteBtn.classList.add("btn");
    deleteBtn.innerText = "Delete";
    deleteBtn.onclick = () => deleteItem(product._id);
    return deleteBtn;
}

const getURL = (id="") => {
    return `https://crudcrud.com/api/${APIkey}/store/${id}`
}

const hide = id => {
    getById(id).classList.add(DN);
}

const show = id => {
    getById(id).classList.remove(DN);
}

const productHelpText = text => {
    getById("productHelpText").innerText = text;
}

const fetchItems = () => {
    fetch(getURL())
    .then(resp => resp.json()
    .then(data => {
        numProdShelf = data.length;
        Prod2Shelf(data);
        hide("loadStore");
        show(iSel);
        productHelpText(select)

    }))
    .catch(err => console.log(err))
}

const loadStore = () => {
    APIkey = getById("crudKey").value;
        if(APIkey.length){
            fetchItems();
        }
}

const choiceProduct = id => {
    if(numProdShelf === 4){
        productHelpText("Shelf is Full")

    } else{
        hide(iSel)
        productHelpText(setprice)
        show(SPC)
        getById(selProd).style.backgroundImage = `url(./assets/${id}.png)`
}
}

const ResetShop = () => {
    show(iSel)
    productHelpText(select)
    hide(SPC)
}

const onAdd = () => {
    let price = getById("selectedPrice").value;
    const img = getById(selProd).style.backgroundImage;
    const imgArr = img.split('"');
    ResetShop()
    if(!update){
        fetch(getURL(), {
        method: 'POST',
        headers: {  "Accept": "application/json",
                    "Content-Type": "application/json"
        },
        body: JSON.stringify({custo: price, imagem: imgArr[1]})
    }).then(resp => resp.json()
        .then(data => loadStore())
        .catch(err => console.log(err)))
      .catch(err => console.log(err));
    }
    else{
        update = false;
        const body = {
            ...updating,
            custo: price
        }
        delete body._id
        fetch(getURL(updateId), {
        method: 'PUT',
        headers: {  "Accept": "application/json",
                    "Content-Type": "application/json"
        },
        body: JSON.stringify(body)
    }).then(data => loadStore())
    .catch(err => console.log(err))
    }
}