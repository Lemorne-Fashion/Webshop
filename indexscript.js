const loadItems = async () => {
        const res = await fetch('https://raw.githubusercontent.com/Lemorne-Fashion/Webshop/master/api.txt');
        allitems = await res.json();
        displayItems(allitems);
};

const displayItems = (Items) => {
    const htmlString = Items
        .map((Item) => {
            return `
            <li class="Item">
                <h2>${Item.name}</h2>
                <p>Price: ${Item.price}</p>
                <img src="${Item.image}"></img>
            </li>
        `;
        })
        .join('');
    itemlist.innerHTML = htmlString;
};

loadItems();
