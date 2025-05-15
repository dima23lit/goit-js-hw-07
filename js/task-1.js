const items = document.querySelector('#categories');
console.log(`Number of categories: ${items.children.length}`);

for (let i of items.children) {
    console.log(`Category: ${i.children[0].textContent}`);
    console.log(`Elements ${i.children[1].children.length}`);
}

