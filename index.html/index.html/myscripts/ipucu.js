const tips = [
    "Haritada görüş sağlamak için totemleri doğru yerlere koy!",
    "Koridor aşamasında minyon dalgasını kontrol ederek rakibin hareketlerini kısıtla!",
    "Ejder ve Baron objektifleri takım savaşlarında büyük avantaj sağlar!",
    "Jungler olarak baskın atmadan önce rakibin totem kullandığını kontrol et!",
    "ADC olarak pozisyonunu koru ve takım savaşı sırasında ön saflarda kalmamaya dikkat et!"
];

function showRandomTip() {
    const randomIndex = Math.floor(Math.random() * tips.length);
    document.getElementById("tip-text").innerText = tips[randomIndex];
}