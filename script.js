const categories = [];
const select = document.getElementById("categories");

fetch("https://api.chucknorris.io/jokes/categories")
    .then(response => response.json())
    .then(result => {
        categories.push(result);
        categories.forEach(category => {
            category.forEach(result => {
                let option = document.createElement("option");
                option.value = result;
                option.textContent = result;
                select.appendChild(option);
            })
        })
    })

const joke = document.getElementById("joke");
const source = document.getElementById("source")

document.getElementById("myForm").onsubmit = e => {
    e.preventDefault();
    fetch(`https://api.chucknorris.io/jokes/random?category=${select.value}`)
        .then(response => response.json())
        .then(result => {
            joke.textContent = `"${result.value}"`;
            source.href = result["url"];
            source.textContent = "source";
        })
}