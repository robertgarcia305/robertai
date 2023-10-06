document.addEventListener("DOMContentLoaded", ready);

function ready() {
    let keywords = ["tall", "age", "live", "name", "music", "movie"];

    let input = document.getElementById("input");
    let response = document.getElementById("response");
    let btn = document.getElementById("button");

    const generateResponse = (keyword) => {
    switch (keyword) {
        case "tall":
        return "Last time i checked, i was 1.78 cm, please don't ask me about weight cause i don't know";
        case "age":
        return "I'm 26, almost 27";
        case "live":
        return "This is top secret, i don't let everyone know this, but i've lived in Cd. Juarez, Phoenix Arizona and Monterrey Mexico";
        case "name":
        return "My name is Robert, but i prefer to go by the name of Joe, hopefully i will change my name legally very soon";
        case "music":
        return "I enjoy all kinds of music. i'm currently listening to The Weeknd and Black Sabbath";
        case "movie":
        return "I do like all kinds of movies, but my favorites are 2001: Space Odissey, Nocturnal Animals and Dune";
        default:
        return "";
    }
    }

    const getResponse = () => {
    
    let userInput = input.value.toLowerCase();
    let text = "";
    
    if (userInput === "") {
        text = "you can't leave it blank, otherwise i don't know what to say";
    } else {
        for (let keyword of keywords) {
        if (userInput.includes(keyword)) {
            text = generateResponse(keyword);
            break;
        }
        }
    }
    response.innerHTML = text;
    console.log("if you are reading this, it's too late");
    }

    btn.addEventListener("click", getResponse);
}
