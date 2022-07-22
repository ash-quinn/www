function toggleDarkMode() {
    var element = document.body;
    element.classList.toggle("dark-mode");
}

function randomEmoji(){
    let emojis = ["😉", "😎", "🤓", "😲", "🧑"];
    
    document.getElementById("emoji").innerHTML = emojis[Math.floor(Math.random() * emojis.length)];
}