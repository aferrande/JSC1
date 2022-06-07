const offscreen = "offscreen";
const ND = "nodisplay"

// Math.random = () => (crypto || msCrypto).getRandomValues(new Uint32Array(1))[0] / 4294967296

let secureMathRandom = () => {
    return window.crypto.getRandomValues(new Uint32Array(1))[0] / 4294967295;
}


const toggleAttribute = (ele, attr, value="") => {
    let hasAttribute = ele.hasAttribute(attr);
    if(hasAttribute){
        ele.removeAttribute(attr);
    }
    else {
        ele.setAttribute(attr,value);
    }
}

const getById = id => {
    const bid = document.getElementById(id);
    return bid;
}

const Randomize = (chara) => {
    const index = Math.floor(secureMathRandom() * chara.length);
    return chara[index];
}

// const RandomizeArray = (array) => {
//     const index = Math.floor((secureMathRandom() * array.length));
//     return array[index];
// }

//not secure randomize
const RandomizeArray2 = (array) => {
    const index = Math.floor((Math.random() * array.length));
    return array[index];
}

const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(secureMathRandom() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}



const ShuffleString = (string) => {
    var arr = string.split('');           // Convert String to array
    
    arr.sort(() => {
      return secureMathRandom() - 0.5;
    });  
    string = arr.join('');                // Convert Array to string
    return string;                        // Return shuffled string
  }