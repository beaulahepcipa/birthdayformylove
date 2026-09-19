const startBtn = document.getElementById("startBtn");
const surprise = document.getElementById("surprise");
const gift = document.querySelector(".gift");
const giftMessage = document.getElementById("giftMessage");

startBtn.addEventListener("click", () => {
    surprise.style.display = "block";
    surprise.scrollIntoView({
        behavior: "smooth"
    });
});

const messages = [
    "❤️ Happy Birthday My Love! ❤️",
    "🌹 You are the best gift in my life.",
    "🥰 I Love You Forever.",
    "🎂 May all your dreams come true.",
    "💍 You will always have my heart.",
    "🎉 Wishing you endless happiness!",
    "💕 Thank you for being in my life."
];

gift.addEventListener("click", () => {

    gift.style.transform = "scale(1.3) rotate(20deg)";

    setTimeout(() => {
        gift.style.transform = "scale(1)";
    },500);

    let random =
    Math.floor(Math.random()*messages.length);

    giftMessage.innerHTML = messages[random];

    createHearts();

});

function createHearts(){

    for(let i=0;i<25;i++){

        let heart=document.createElement("div");

        heart.innerHTML="❤️";

        heart.style.position="fixed";

        heart.style.left=Math.random()*100+"vw";

        heart.style.top="100vh";

        heart.style.fontSize=(20+Math.random()*30)+"px";

        heart.style.animation="fly 4s linear forwards";

        document.body.appendChild(heart);

        setTimeout(()=>{
            heart.remove();
        },4000);

    }

}

const style=document.createElement("style");

style.innerHTML=`
@keyframes fly{
0%{
transform:translateY(0) scale(1);
opacity:1;
}
100%{
transform:translateY(-120vh) scale(2);
opacity:0;
}
}
`;

document.head.appendChild(style);

// Countdown Timer
const startDate = new Date("2026-09-26");

function updateTimer(){

let now = new Date();

let diff = now - startDate;

let days = Math.floor(diff/(1000*60*60*24));

let hours = Math.floor((diff/(1000*60*60))%24);

let minutes = Math.floor((diff/(1000*60))%60);

document.getElementById("timer").innerHTML =
days+" Days ❤️ "+
hours+" Hours ❤️ "+
minutes+" Minutes";

}

setInterval(updateTimer,1000);

updateTimer();
const letter = `
HAPPY BIRTHDAY MY DEAR LOVE❤️

Even though we are not always able to be together, you have always found a special place in my heart🤍. Your words, your care, and the little things you do make me feel loved and special.💗

உன்னை காதலிக்க
ஒரு காரணம் தேடினேன்…💗
தேடித் தேடி பார்த்தபோது,
நீதான் என் எல்லா காரணங்களுமாய் இருந்தாய்.❤️

உன் பெயர் கேட்டாலே
மனசுக்குள் ஒரு சின்ன சந்தோஷம்…😍
உன் குரல் கேட்டாலே
என் உலகமே கொஞ்சம் அழகாகும்… 🥹❤️

என் கோபத்திலும் நீ,
என் சிரிப்பிலும் நீ,
என் நினைவிலும் நீ,
என் கனவிலும் நீ…🙈🫂

காதல் என்ற வார்த்தைக்கு
அர்த்தம் தேடினால்,
என் மனசு எழுதும் ஒரே பெயர் நீ.❤️

எத்தனை நாட்கள் கடந்தாலும்,
எத்தனை வருடங்கள் மாறினாலும்,
என் மனசில் உனக்காக இருக்கும்
இந்த காதல் மட்டும்
ஒவ்வொரு நாளும் புதிதாகவே இருக்கும்.🫶🏻❤️

Thank you for being my happiness, my comfort, and my forever favourite person🫂. I wish you endless happiness, success, good health, and everything beautiful in life.😘

No matter how far we are, you will always have a special place in my heart💞. I will always care for you, love you, and choose you.❤️

Happy Birthday once again,Mama😘
Love You Forever❤️

`;

let i = 0;

function typeWriter(){

if(i < letter.length){

document.getElementById("typing").innerHTML += letter.charAt(i);

i++;

setTimeout(typeWriter,45);

}

}

typeWriter();

const music=document.getElementById("bgMusic");

function toggleMusic(){

if(music.paused){

music.play();

}else{

music.pause();

}

}