
const bank = [0];

const valueBank = () => (bank.reduce( (total, valor) => total + valor));

const addInBank = (value, banco = bank) => {
    const total = valueBank();
    banco.splice(0, 1);
    banco.push(total + value);
};

const removeInBank = (value, banco = bank) => {
    const total = valueBank();
    banco.splice(0, 1);
    banco.push(total - value);
};

const buyItem = item => {
    removeInBank(item.price);
};

const numGenerated = (value = 1000) => Math.floor(Math.random() * value);

const nameGenerated = () => {
    const consoantes = ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'v', 'x', 'z'];
    const vogais = ['a', 'e', 'i', 'o', 'u'];

    const consoante = () => consoantes[~~(Math.random() * consoantes.length)];
    const vogal = () => vogais[~~(Math.random() * vogais.length)];

    const palavra = `${consoante()}${vogal()}${consoante()}${vogal()}`;

    return palavra;
};

const itemGenerated = () => ({
    name: nameGenerated(),
    price: numGenerated(),
    id: numGenerated().toString()
});

const addRandomItem = (list) => list.push(itemGenerated());


const principalList = [
    {
        name: 'Title',
        price: 700,
        id: '132'
    },
    {
        name: 'caflop',
        price: 300,
        id: '133'
    },
    {
        name: 'polaR',
        price: 80,
        id: '134'
    },
    {
        name: 'ma',
        price: 10,
        id: '135'
    },
    {
        name: 'pvice',
        price: 800,
        id: '136'
    }
];

const refresh = list => {
    const sizeList = list.length;

    list.splice(0, list.length);

    for(let cont = 0; cont < sizeList; cont++) {
        addRandomItem(list);
    }

    return list;
};


// PEGANDO VALORES E USANDO FUNÇOES:

const addValue = () => {
    const value = Number(prompt('Adicionar quantia:'));

    addInBank(value);
    
    const display = document.querySelector('#value');
    
    display.value = valueBank();
};

// Função que adiciona os valores da lista do script, noS cardS(PLURAL) html;
const addValuesInCards = (list) => {
    list.forEach((object, indice) => {
        const title = document.querySelector('#title' + indice);
        const price = document.querySelector('#price' + indice);
        const image = document.querySelector('#img' + indice);

        title.innerText = object.name;
        price.innerText = object.price;
        image.src = `https://picsum.photos/150?${numGenerated()}`;
    });
};

addValuesInCards(principalList);

// Funcao que valores vem direto do HTML para usar a função buyItemInList();
const buyCard = (value, list = principalList) => {
    const title = document.querySelector('#title' + value).textContent;
    const price = document.querySelector('#price' + value).textContent;

    if(price <= valueBank()) {
        buyItemInlist(title, list);

        const alert = document.querySelector('#item-buyed');
        alert.style.display = 'block';

        setTimeout(() => {
            alert.style.opacity = .8;
        }, 100);
        setTimeout(() => {
            alert.style.opacity = 0;
        }, 400);
        setTimeout(() => {
            alert.style.display = 'none';
        }, 700);
    } else {
        const coin = document.querySelector('#coin-card' + value);
        const price = document.querySelector('#price' + value);

        coin.style.color = 'red';
        price.style.color = 'red';
        setTimeout(() => {
            coin.style.color = 'rgb(73, 73, 73)';
            price.style.color = 'rgb(73, 73, 73)';

        }, 100);
        setTimeout(() => {
            coin.style.color = 'red';
            price.style.color = 'red';

        }, 260);
        setTimeout(() => {
            coin.style.color = 'rgb(73, 73, 73)';
            price.style.color = 'rgb(73, 73, 73)';

        }, 380);
    };
};

// Funçao que coloca os novos valores gerados no card(SINGULAR);
const newValuesCard = (item, index) => {
    const title = document.querySelector('#title' + index);
    const price = document.querySelector('#price' + index);
    const image = document.querySelector('#img' + index);
    
    title.innerText = item.name;
    price.innerText = item.price;
    image.src = `https://picsum.photos/150?${numGenerated()}`;
};

// ====================== Principal Função de Compra ======================
const buyItemInlist = (title, list) => {

    const listItem = list.filter( (object, indice) => {
        if(title == object.name) {
            const randomItem = itemGenerated();
            list.splice(indice, 1, randomItem);

            newValuesCard(randomItem, indice);

            return object;
        };
    });

    listItem.forEach( item => {
        buyItem(item);

        const display = document.querySelector('#value');
        display.value = valueBank();
    }); 
};

// Função que vai no corpo HTML que atualiza a lista do script, e coloca os novos valores nos cards(PLURAL);
const newRefresh = () => {
    refresh(principalList);

    addValuesInCards(principalList);
};