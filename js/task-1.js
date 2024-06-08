const categories = document.querySelector("#categories");
const childrenCategories = categories.children.length
console.log(`Number of categories: ${childrenCategories}`)

const item = document.querySelectorAll(".item")
const arrayItem = Array.from(item)
for (let i = 0; i < arrayItem.length; i++) {
    console.log(`Category: ${arrayItem[i].children[0].textContent}`)
    console.log(`Elements: ${arrayItem[i].children[1].children.length}`)
}