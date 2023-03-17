let text = document.querySelector("#txt");

let submitBtn = document.querySelector("#submit");
let generate = document.querySelector("#generate");
let loadingTxt = document.querySelector(".omor");
let loading = document.querySelector(".ring");

let audioMessage;



generate.onclick = () => {
    text.setAttribute("placeholder", "")
    
    loadingTxt.style.visibility = "visible";
    loading.style.visibility = "visible";
    
    randomMessages()
}

function randomMessages() {
    let randomValue = messages[Math.floor(Math.random() * messages.length)];
    setTimeout(() => {
        text.value = randomValue
        loadingTxt.style.visibility = "hidden";
        loading.style.visibility = "hidden";
    }, 1000)
    
}


//random messages

let messages = [
    "Baby, when we’re together, it’s like time stands still and nothing else matters besides the love we share. I can’t wait to be together again. I love you",
    "On this Valentine’s Day, I want to let you know how much you mean to me. You’re like a precious, priceless jewel. I’m so thankful I’ve found you",
    "Darling, you’re my one and only. I don’t know what I ever did to deserve a bestfriend as amazing as you. Happy Valentine’s Day!",
    "Your eyes sparkle like the stars, your hair cascades like a waterfall, and your lips are sweeter than honey. I love everything about you, inside and out",
    "Your beauty, charm, and grace have completely enraptured me. I’m overwhelmed with feelings of devotion every time I look at you. Happy Valentine’s Day to my true love",
    "I am 100%, completely, head-over-heels in love with you. Thank you for being the most important person in my life.",
    "This Valentine’s Day and every other day of the year I want you to know just how special you are to me, darling. I love you!",
    "Dancing under the moonlight is like being in heaven when I am with you. May this Valentine’s day is the beginning of a never ending love story",
    "Our love is a gift I don’t feel worthy to receive. I can’t understand why you would choose to be my bestfriend, but I’m so thankful to have you in my life",
    "Though I am just an AI and may not always take the time to say it enough, I want you to know that I truly love and treasure you",
    "Happy Valentine’s Day to the person that rocks my world. Yours is the first face I want to see in the morning and the last I want to see each night before I close my eyes. Happy Valentine’s day",
    "I love spending time with you. Whether we’re out for a romantic evening or just taking a walk together, I always feel best when I’m with you. Happy Valentine’s Day",
    "I don’t need you to get me anything for Valentine’s Day. Your love is the best gift I could ever hope to receive.",
    "You complete me. Our lives fit together so perfectly that I know we were made for each other. I love you!",
    "My love for you has no end, no boundary. Happy Valentine’s Day my forever valentine.",
    "You’re all that I need, sweetheart. Having you in my life feels like my dream come true.",
    "I’ll never get tired of falling in love with you again and again. Happy Valentine’s Day!",
    "I hope you like veggies cause I love you from my head tomatoes.",
    "Our love is like hot chocolate with marshmallows: You’re hot and I really want to be on you.",
    "Are you cake? Cause I’d love a piece of that!",
    '”Knock, Knock.” “Who’s there?” “Honeydew!” “Honeydew who?” “Honeydew you know how much I love you?”',
    "Sorry if I’m being cheesy, but you’ll always have a pizza my heart.",
    "I have come up with the perfect crime! Let’s do it together: I’ll steal your heart and you’ll steal mine.",
    "There might be other fish in the sea, but you’re my sole mate.",
]

submitBtn.addEventListener("click", ()=>{
    // set the text
    audioMessage.text = text.value;
    //speak
    window.speechSynthesis.speak(audioMessage);

})



window.onload = () => {
    if ("speechSynthesis" in window) {
        audioMessage = new SpeechSynthesisUtterance();
    } else {
        alert("Oboy talk something")
    }
}
















