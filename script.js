function toggleDarkMode() {
    var element = document.body;
    element.classList.toggle("dark-mode");
}

//this is fucking stupid but im going to leave it
function randomEmoji(){
    let emojis = ["😉", "😎", "🤓", "😲", "🧑"];
    
    document.getElementById("emoji").innerHTML = emojis[Math.floor(Math.random() * emojis.length)];
}
