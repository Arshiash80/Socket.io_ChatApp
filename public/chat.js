// 👇 Make connection
const socket =  io.connect('http://localhost:3000') // 👈 Coming from front-end
// 📍 Query DOM
const message = document.getElementById('message')
const handle = document.getElementById('handle')
const btn = document.getElementById('send')
const output = document.getElementById('output')

// 📍 Emit events
btn.addEventListener("click", () => { // 👈 Listening for the click
    socket.emit("chat", { // 👈 Send chat message to server
        message: message.value,
        handle: handle.value
    })
})

// 📍 Listen for events
socket.on("chat", (data) => {
    output.innerHTML += `<p><strong> ${data.handle} :</strong> ${data.message}</p>`
})