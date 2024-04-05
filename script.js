const URl = "https://v2.jokeapi.dev/joke/Any?type=single";

const jocks = document.querySelector("#jock");
const btn = document.querySelector("#btn");

let getjock = async () => {
    let respones = await fetch(URl);
    let data = await respones.json();
    jocks.innerText = data.joke;


}

btn.addEventListener("click", () => {
    getjock();
});

