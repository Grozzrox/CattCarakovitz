const body = document.body;
const h2 = document.body.querySelector("h2");
const btn = document.body.querySelector("button");
const div = document.body.querySelector('div');
const textDiv = document.querySelector(".text-div");
const h3 = document.querySelector("h3");
const h4 = document.querySelector("h4");
const p = document.querySelector("p");

const header = document.querySelector(".hero-message");
const letterSpanArray = document.querySelectorAll(".letter-span");

const message1 = "That's it. That's the meme.";
const message2 = "also Matts.";

function changeMessage() {
    h3.innerHTML === message1 ? h3.innerHTML = message2 : h3.innerHTML = message1;
    h3.style.opacity = 1;
}

setInterval(changeMessage, 3000);

async function mattMessage() {

    let index = Math.floor(Math.random() * 50);
    console.log(index);
    let msg;

    await fetch('./trivia/trivia.json')
        .then((response) => response.json())
        .then((json) => {msg = json.questions[index]});

    console.log(msg);

    p.innerHTML = msg;
    
}

// document.addEventListener("click", function(e) {
//     console.log(e.pageX);
//     console.log(e.pageY);
// })

document.addEventListener("mousemove", function(e) {
    let x = (e.pageX * 0.001);
    let y = (e.pageY * 0.001);

    let r = Math.floor((x * 255));
    let g = Math.floor((y * 255));
    let b = Math.floor(Math.random() * 255);

    let opacityValue = r / 255;

    letterSpanArray.forEach(element => {

        let x = (e.pageX * 0.001);
        let y = (e.pageY * 0.001);
    
        let r = Math.floor((x * 255));
        let g = Math.floor((y * 255));
        let b = Math.floor(Math.random() * 255);
        //console.log(`r = ${r}, g = ${g}, b = ${b}`);
        element.style.color = `rgb(${r}, ${g}, 255)`;
    });

    body.style.backgroundImage = `linear-gradient(60deg, rgb(${r}, ${g}, 255), rgb(255, ${r}, ${g}))`;
    //btn.style.color = `rgb(${r}, ${g}, 255)`;
    h2.style.opacity = `${opacityValue}`;
    h3.style.opacity = `${opacityValue}`;

    //console.log(r, g, b);
    
});


btn.addEventListener("click", () => {

    mattMessage();

    header.classList.add("hide");

    fetch("https://catfact.ninja/fact")
        .then(response => {
            if (!response.ok) {
                throw new Error(`Request failed with status ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            console.log(data);
            console.log(data.fact);

            div.classList.add('active');
            textDiv.innerHTML = data.fact;

        })
        .catch(error => console.log(error));
});

btn.addEventListener("click", () => {
    fetch("https://randomuser.me/api/")
        .then(response => {
            if (!response.ok) {
                throw new Error(`Request failed with status ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            console.log(data);
            console.log(data.results[0].name.first);

            h4.innerHTML = `Your cat's name: ${data.results[0].name.first}`;
        })
        .catch(error => console.log(error));
});

body.addEventListener("click", () => {
    fetch("http://ip-api.com/json/216.251.53.20")
        .then(response => {
            if (!response.ok) {
                throw new Error(console.log(response.status));
            }
            return response.json();
        })
        .then(data => {
            console.log(data);
        })
        .catch(error => console.log(error));
})