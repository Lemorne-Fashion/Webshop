const itemlist = document.getElementById('itemlist');
const searchBar = document.getElementById('searchBar');
searchBar.value = localStorage.getItem("search");

let allitems = [];
searchBar.addEventListener('keyup', (e) => {
    sort();
});
function sort() {
  const searchString = searchBar.value.toLowerCase();
  console.log(searchString);
  const filteredItems = allitems.filter((Item) => {
      return (
          Item.name.toLowerCase().includes(searchString)
      );
  });
  console.log(filteredItems);
  displayItems(filteredItems);
}

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
                <p>Price: € ${Item.price}</p>
                <img src="${Item.image}"></img>
            </li>
        `;
        })
        .join('');
    itemlist.innerHTML = htmlString;
};

document.getElementById('searchBar').focus();

loadItems();
console.log("hoi");
sort();