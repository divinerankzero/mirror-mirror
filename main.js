const messageInput = document.getElementById("message")
const article1 = document.getElementById("article1")
const article2 = document.getElementById("article2")

const eventHandler = (event) => {
    article1.textContent = messageInput.value;
    article2.textContent = messageInput.value;
}

messageInput.addEventListener("keyup", eventHandler)