function addPost() {
    const postContent = document.getElementById("post-content").value;

    if (postContent.trim() !== "") {
        const postDiv = document.createElement("div");
        postDiv.classList.add("post");
        postDiv.innerHTML = `<p>${postContent}</p>`; // Paragraf olarak ekleyelim

        document.getElementById("posts").appendChild(postDiv);
        document.getElementById("post-content").value = ""; // Alanı temizle

        console.log("Mesaj eklendi:", postContent); // Konsolda kontrol et
    } else {
        console.log("Boş mesaj gönderilemez!"); // Hata mesajı yazdır
    }
}
function addPost() {
    const postContent = document.getElementById("post-content").value;

    if (postContent.trim() !== "") {
        const postDiv = document.createElement("div");
        postDiv.classList.add("post");
        postDiv.innerHTML = `<p>${postContent}</p> <button onclick="addReply(this)">Yanıtla</button>`;
        
        document.getElementById("posts").appendChild(postDiv);
        document.getElementById("post-content").value = ""; // Alanı temizle
    }
}

function addReply(button) {
    const replyBox = document.createElement("div");
    replyBox.classList.add("reply-box");

    replyBox.innerHTML = `
        <textarea class="reply-input" placeholder="Yanıtını yaz..."></textarea>
        <button onclick="submitReply(this)">Gönder</button>
    `;

    button.parentNode.appendChild(replyBox); // Yanıt kutusunu ilgili mesajın altına ekle
}

function submitReply(button) {
    const replyContent = button.previousElementSibling.value;

    if (replyContent.trim() !== "") {
        const replyDiv = document.createElement("div");
        replyDiv.classList.add("reply-box");
        replyDiv.innerHTML = `<p>${replyContent}</p>`;

        button.parentNode.parentNode.appendChild(replyDiv); // Yanıtı ilgili mesajın altına ekle
        button.parentNode.remove(); // Yanıt kutusunu kaldır
    }
}