// Referencing UI elements
const output = document.getElementById("output");
const give = document.getElementById("button");
const author = document.getElementById("author");

// Listen for click on quote button then execute function
give.addEventListener("click", () => {
    try {
        fetch('https://api.quotable.io/random') 
    .then(res => res.json())
    .then(data => {
        let show = data.content;
        let authorText = data.author;
        output.innerText = show;
        author.innerText = authorText;
    })
    } catch {
        console.log(error);
    }
});

    


