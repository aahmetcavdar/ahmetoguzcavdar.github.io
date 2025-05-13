
function countdownTimer() {
    const countdownDate = new Date("May 25, 2025 18:00:00").getTime();
    const interval = setInterval(function() {
        const now = new Date().getTime();
        const timeLeft = countdownDate - now;

        const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

        document.getElementById("timer").innerHTML = `${days} gün ${hours} saat ${minutes} dakika ${seconds} saniye kaldı!`;

        if (timeLeft < 0) {
            clearInterval(interval);
            document.getElementById("timer").innerHTML = "Turnuva Başladı!";
        }
    }, 1000);
}
countdownTimer();

// Rastgele oyun önerme
document.getElementById("gameSuggest").addEventListener("click", function() {
    const games = ["Valorant", "League of Legends", "CS:GO", "Apex Legends", "Fortnite", "Dota 2"];
    const randomGame = games[Math.floor(Math.random() * games.length)];
    document.getElementById("gameResult").innerHTML = `Bugün ${randomGame} oynamalısın! 🎮`;
});
