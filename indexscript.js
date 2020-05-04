const loadItems = async () => {
        const res = await fetch('https://raw.githubusercontent.com/Lemorne-Fashion/Webshop/master/api.txt');
        allitems = await res.json();
        displayItems(allitems);
};

const displayItems = (Items) => {
    const htmlString = Items
        .map((Item) => {
            return `
            <li class="Item" href= "${Item.name}.html">
                <h2>${Item.name}</h2>
                <p>Price: € ${Item.price}</p>
                <img src="${Item.image}"></img>
            </li>
        `;
        })
        .join('');
    itemlist.innerHTML = htmlString;
};
document.body.addEventListener("keydown", function (event) {
    if (event.keyCode === 13) {
      string = document.getElementById('search').value;
      localStorage.setItem("search", string);
      window.location.replace("search.html");
    }
});
function Searchini() {
  string = document.getElementById('search').value;
  localStorage.setItem("search", string);
  window.location.replace("search.html");
}
string = document.getElementById('search').value;
loadItems();
console.log("hoi")
