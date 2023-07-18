
// CRIE UM BANCO:

const bank = [0];

// PASSOS:
// Conferir valor do banco;
// Adicionar valores ao banco;
// Comprar algum item;
// Ajustar o novo valor do meu banco;
// Mostrar novo saldo;

const valueBank = () => (bank.reduce( (valor, indice) => valor + indice));

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

const balance = () => {
    console.log(valueBank());
};


// Conferir valor do banco;
balance();

// Adicionar valores ao banco;
addInBank(2000);
balance();


// Comprar algum item;
const item = {
    name: 'plantinha',
    price: 500,
    id: '1234',
};

buyItem(item);

// Ajustar o novo valor do meu banco;
// Mostrar novo saldo;
balance();

// AGORA ATUALIZE PARA COMPRAR UM ITEM DESEJADO EM UMA LISTA DE ITENS:

const listItems = [
    {
        name: 'plantinha',
        price: 700,
        id: '132'
    },
    {
        name: 'teclado',
        price: 300,
        id: '133'
    },
    {
        name: 'janela',
        price: 80,
        id: '134'
    },
    {
        name: 'copo',
        price: 10,
        id: '135'
    },
    {
        name: 'abacaxi',
        price: 800,
        id: '136'
    }
];

// PASSOS:
// Ver lista de itens;
// Comprar teclado na lista de items;
// Ver lista de itens novamente sem o item comprado;
// Ver o saldo depois da compra;

const store = (list) => {
    console.log(list);
};

// #Principal função:
// * Ela que faz tudo.
// * Compra o item desejado da lista e gera um outro item no lugar. **AINDA NAO FAZ ISSO KK

// const buyItemInlist = (item, list) => {
//     const lowerName = item.toLowerCase();

//     const listItem = list.filter( (object, indice) => {
//         if(lowerName == object.name) {
//             list.splice(indice, 1, itemGenerated());
//             return object;
//         };
//     });


//     listItem.forEach( item => buyItem(item)); 
// };

// ============================================

// Ver lista de itens;
store(listItems);

// Comprar teclado na lista de items;
buyItemInlist('teClado', listItems);

// Ver lista de itens novamente sem o item comprado;
store(listItems);

// Ver o saldo depois da compra;
balance();


// AGORA ATUALIZE A LISTA PARA TER SEMPRE N ITEMS DENTRO DA LISTA, MESMO APÓS A COMPRA:

const listItems20 = [
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

// PASSOS:
// Criar novo item; 
// Pegar a nova lista;
// Conferir o tamanho da lista com o número de items necessários;
// Adicionar novo item;
// Mostrar lista novamente;

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


// Criar novo item;
const randomItem = itemGenerated();

// Pegar a nova lista;
// Conferir o tamanho da lista com o número de items necessários;
// Adicionar novo item;
listItems.length < 5 && addRandomItem(listItems20);  // * Acabou que nem precisei desse if;


// Mostrar lista novamente;
store(listItems20);

// ATUALIZE A LISTA A SEGUIR COM OUTROS ITEMS:

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
}

// Mostrar lista;
store(principalList);

// Atualizar lista;
refresh(principalList);

// Mostrar a nova lista;
store(principalList);



// PEGANDO VALORES E USANDO FUNÇOES:

const addValue = () => {
    const value = Number(prompt('Adicionar quantia:'));

    addInBank(value);
    
    const display = document.querySelector('#value');
    
    display.value = valueBank();
}


// Função que adiciona os valores da lista do script, noS cardS(PLURAL) html;
const addValuesInCards = (list) => {
    list.forEach((object, indice) => {
        const title = document.querySelector('#title' + indice);
        const price = document.querySelector('#price' + indice);
        const image = document.querySelector('#img' + indice);

        title.innerText = object.name;
        price.innerText = object.price;
        image.src = `https://picsum.photos/150?${numGenerated(100)}`;
    })
}

addValuesInCards(principalList);


// Funcao que valores vem direto do HTML para usar a função buyItemInList();
const buyCard = (value, list = principalList) => {
    const title = document.querySelector('#title' + value).textContent;
    const price = document.querySelector('#price' + value).textContent;

    if(price <= valueBank()) {
        buyItemInlist(title, list);
    } else {
        alert('Você não tem saldo suficiente.');
    }
}

// Funçao que coloca os novos valores gerados no card(SINGULAR);
const newValuesCard = (item, index) => {
    const title = document.querySelector('#title' + index);
    const price = document.querySelector('#price' + index);
    const image = document.querySelector('#img' + index);
    
    title.innerText = item.name;
    price.innerText = item.price;
    image.src = `https://picsum.photos/150?${numGenerated(100)}`;
}


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
}